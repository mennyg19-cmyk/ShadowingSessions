const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header,
  AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType, PageNumber,
  HeadingLevel,
} = require("docx");

const OUT = process.argv[2] || "Shadowing_Report_2026-10-22_v2.docx";
const FONT = "Calibri";
const BORDER = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };

function rich(text, base = {}) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).filter(Boolean).map((t) => {
    if (t.startsWith("**")) return new TextRun({ text: t.slice(2, -2), bold: true, font: FONT, ...base });
    if (t.startsWith("*")) return new TextRun({ text: t.slice(1, -1), italics: true, font: FONT, ...base });
    return new TextRun({ text: t, font: FONT, ...base });
  });
}

const md = [];
let mdQuote = "";
const mdEsc = (t) => t.replace(/~/g, "\\~");
const emit = (t) => md.push(mdEsc(t).split("\n").map((l) => mdQuote + l).join("\n"));

const p = (text, opts = {}) => {
  emit(text);
  return new Paragraph({ spacing: { after: 120 }, ...opts, children: rich(text, opts.run) });
};
const heading = (level, text) => {
  emit(`${"#".repeat(level)} ${text}`);
  return new Paragraph({
    heading: [HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3][level - 1],
    keepNext: true,
    spacing: [{ before: 360, after: 160 }, { before: 240, after: 100 }, { before: 180, after: 80 }][level - 1],
    children: [new TextRun({ text, font: FONT })],
  });
};
const h1 = (text) => heading(1, text);
const h2 = (text) => heading(2, text);
const h3 = (text) => heading(3, text);
const bullets = (items) => {
  emit(items.map((t) => `- ${t}`).join("\n"));
  return items.map((t) => new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 60 }, children: rich(t) }));
};
const rawP = (mdText, paragraph) => {
  emit(mdText);
  return paragraph;
};

function table(widths, header, rows) {
  const mdRow = (r) => `| ${r.map((t) => t.replace(/\|/g, "\\|")).join(" | ")} |`;
  emit([mdRow(header), `|${header.map(() => " --- |").join("")}`, ...rows.map(mdRow)].join("\n"));
  const cell = (text, w, isHeader) =>
    new TableCell({
      borders: BORDERS,
      width: { size: w, type: WidthType.DXA },
      shading: isHeader ? { fill: "D9E2F3", type: ShadingType.CLEAR, color: "auto" } : undefined,
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [new Paragraph({ children: rich(text, isHeader ? { bold: true, size: 20 } : { size: 20 }) })],
    });
  return new Table({
    width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    columnWidths: widths,
    rows: [
      new TableRow({ tableHeader: true, children: header.map((t, i) => cell(t, widths[i], true)) }),
      ...rows.map((r) => new TableRow({ cantSplit: true, children: r.map((t, i) => cell(t, widths[i], false)) })),
    ],
  });
}
const gap = () => new Paragraph({ spacing: { after: 120 }, children: [] });


const body = [];
const add = (...xs) => xs.flat().forEach((x) => body.push(x));

const box = (title, items) => {
  mdQuote = "> ";
  emit(`**${title}**`);
  const list = bullets(items);
  mdQuote = "";
  const listMd = md.pop();
  md.push(`${md.pop()}\n>\n${listMd}`);
  const side = { style: BorderStyle.SINGLE, size: 12, color: "C00000" };
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [new TableRow({ children: [new TableCell({
      borders: { top: side, bottom: side, left: side, right: side },
      width: { size: 9360, type: WidthType.DXA },
      shading: { fill: "FBE5E5", type: ShadingType.CLEAR, color: "auto" },
      margins: { top: 100, bottom: 100, left: 160, right: 160 },
      children: [
        new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: title, bold: true, size: 24, font: FONT, color: "C00000" })] }),
        ...list,
      ],
    })] })],
  });
};
const spec = (title, rows) => [h3(title), table([1900, 7460], ["", "Detail"], rows), gap()];

add(
  rawP("# Shadowing Report", new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Shadowing Report", bold: true, size: 44, font: FONT })] })),
  rawP("*Wednesday, October 14 to Wednesday, October 21, 2026 (six shadowing days). Version 2: ranked summary up front, detail in the appendix*", new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Wednesday, October 14 to Wednesday, October 21, 2026 (six shadowing days). Version 2: ranked summary up front, detail in the appendix", size: 26, font: FONT, color: "404040" })] })),
  p("Prepared for Baruch Grossman (COO) and Peleg."),

  h2("Why this shadowing, and what it is for"),
  p("This grew out of the Grok bot effort. Avi G started automating his own tasks with Claude, and after talking with Baruch Grossman and Peleg we decided to build on the Grok bots the company already pays for, which go straight to the data. I was asked to find out what else can be automated. My reporting site stays as a manual report runner and is not changing."),
  p("I came in with a clean view, so this report records what I saw people actually doing, which is not always what their title says. The first pages are the decisions: what to act on now, the top five opportunities, the F&O settings fixes, and a spec for each bot. The appendix has who's who, the timeline, systems, other observations and open questions. The full day-by-day notes are in the version 1 report."),

  h1("Summary"),
  p("Six days, eight people shadowed. Most of the work I saw is people reading one screen and typing into another, forwarding emails by hand, and keeping track of things on paper, in notebooks and in shared Excels. The clearest bot, and the most measured time, is **Daniel's channel files built from the spec sheet**. The **payment to container release chain** is the biggest money risk, but only when cash flow is tight. About eight problems are **F&O settings, not bots**, and are the fastest wins. A few card and check practices should be fixed now, whatever we automate."),

  h1("Act on Now"),
  box("Do these regardless of the bot work", [
    "**CVC codes on paper and by email (Suzanne, Day 3).** Card security codes are written in a notebook because F&O doesn't store them, and customers email card details. PCI rules forbid keeping the CVC after a payment is authorized. Decide how card payments are taken without keeping it (for example a payment link or a processor that stores the card).",
    "**Printed check photo deposited (Chani, Day 4).** A customer photographs the check and emails it; Chani prints it, cuts it out and runs the printout through the deposit scanner. Ask OceanFirst whether this is allowed under the deposit agreement. If not, ask the customer for the original or for ACH.",
    "**Contact Electric (5702), Day 4.** Robert forwarded several unpaid invoices; my read is nothing has been paid since April. Confirm and settle.",
    "**About $300k owed by non-paying customers (Baruch Salamander, Day 5).** He reviews each one over 120 days for chase vs write-off, and Suzanne also chases late customers. Agree who owns collections and set a date for the write-off decisions.",
    "**$38k EZPass claim (Moshe Aryeh Grossman, Day 6)** with a police report filed. Someone should own the follow-up.",
    "**Two Amazon credit holds open over a year** that Peleg and Troy could not release (Day 4).",
    "**Tell Tina whether to continue her ChatGPT listing-check tool.** She paused it when she saw the Grok rollout (Day 4).",
  ]),
  gap(),

  h1("Top 5 Opportunities"),
  p("My ranking, by time and money at stake and how clearly the notes describe the work. Figures are only what the notes and follow-up answers support (see What to Measure Next)."),
  table([400, 2000, 3760, 1500, 1700], ["#", "Opportunity", "What's at stake (from the notes)", "Fix type", "Suggested owner"], [
    ["1", "Spec sheet to channel file builder", "About 8 spec sheets a week at about 15 to 20 minutes each, roughly 2 to 2.5 hours of Daniel's week, then at least 3 reviews per file. A wrong curtain width on Wayfair reached a customer.", "Bot", "Peleg with Daniel and Tina"],
    ["2", "Payment to container release tracker", "Release depends on a chain through a supplier Excel, Allways, two shared Excels, F&O and an OceanFirst wire draft, with status by cc'd email and WhatsApp. Containers rarely go past free time; it happens at random, when cash flow is tight. Rule: once 4 working days of free time run out, demurrage is about $300 to $350 per container per day.", "Bot now; Allways API later", "Peleg with Moshe Aryeh Grossman"],
    ["3", "Low-stock vs open-PO match", "A six-step download and match in F&O, every week when the Vendo file is updated (usually Thursday, sometimes Friday). Only Tina can do it, because Daniel has no access to open PO lines or Goods in Transit.", "Bot", "Peleg with Tina"],
    ["4", "Payment entry and posting", "Most of Suzanne's Day 1 afternoon (3:00 to 4:30). Two batches wouldn't post, one because the method defaulted to credit card, and the error didn't say why. She finds Chani's deposit email by searching for the total.", "Settings first, then bot", "Peleg with Suzanne"],
    ["5", "Money reports and notices on a schedule", "Recovery totals emailed by hand daily to six people (Avi G doesn't use them; Mordy ran reports on only two days). US Customs pulls forwarded to five people. Credit card due dates go Avi G to Chani to a desk calendar to Isaac Grossman.", "Scheduled reports + routing bot", "Peleg with Baruch Salamander and Chani"],
  ]),
  gap(),

  h1("F&O Settings Fixes (for Peleg)"),
  p("These are configuration or data fixes, not bots. Some may sit on the EDI side (Dan Holland) rather than F&O; Peleg to confirm."),
  table([3000, 5160, 1200], ["Fix", "What happens now", "Seen"], [
    ["Payment method defaulting to credit card on check payments", "Suzanne's batch wouldn't post; she deleted and re-entered payments until she found it", "Day 1"],
    ["Posting errors that don't name the cause", "Suzanne hunts for the bad line by deleting payments", "Day 1"],
    ["Payment proposal selects every line and sets the method", "Chani unticks everything except what she wants to pay", "Day 4"],
    ["Mason orders don't close automatically", "Charmaine checks Mason against F&O and closes orders by hand", "Days 1, 2"],
    ["Phone numbers only in InOrder", "Suzanne looks up phone numbers in the old system", "Day 1"],
    ["No check on prices with more than 2 decimals", "One reached Kohls through DSCO and nothing caught it", "Day 4"],
    ["Several ETA fields in F&O", "Nobody is sure which is right; Avi G's ETAs come from an Excel instead", "Day 6"],
    ["Amazon credit holds that can't be released", "Two open over a year", "Day 4"],
  ]),
  p("*Not a setting, but just as quick:* replace the check printer drum ($300 to $400) so checks stop going through the office inkjet (Day 4).", { spacing: { before: 120, after: 120 } }),

  h1("Bot Specs"),
  p("Each is written so it can be built or rejected. \"Confirm first\" is what I still need to find out before it's sized."),
  ...spec("A. Container release tracker (opportunity 2)", [
    ["Trigger", "A supplier invoice or BOL arrives, a wire is drafted or cleared, or a container nears the end of free time"],
    ["What it does", "Keeps one status per BOL and container: invoice received, BOL received, in Allways, wire drafted, wire cleared, factory told, freight released. Warns Moshe, Chani and Isaac Grossman when a container is close to 4 working days at the port without a release."],
    ["Data", "Supplier invoice Excel, the shared ETA and payments Excels, F&O POs and voyages, OceanFirst wire drafts, Allways portal (API or EDI later)"],
    ["Evidence", "Day 6: the seven-step invoice and BOL chain; the 7 containers waiting on the factory payment; status passed by cc'd email and WhatsApp. Follow-up: containers usually don't go past free time, except at random when cash flow is tight. Zundel takes the payments Excel and applies the payments to our POs in F&O."],
    ["Confirm first", "How many wires a week; what splits the wires"],
  ]),
  ...spec("B. Channel file builder (opportunity 1)", [
    ["Trigger", "\"Build the Wayfair (or Home Depot, Amazon, Kohls) file for product line X\", or a new customer product list from Jamie"],
    ["What it does", "Fills the customer's template from the main product spec sheet, using only dropdown-valid values, flags missing attributes, checks dimensions against the spec sheet, and drafts the email to go with it"],
    ["Data", "Main product spec sheet, each customer's template"],
    ["Evidence", "Day 2: Daniel's Wayfair sheet, column-to-column copy and paste, info read off product images, 15 to 20 minutes per line; Tina's 3 reviews; the 55\" curtain width error. Day 4: Home Depot spec sheet. Follow-up: about 8 spec sheets a week."],
    ["Confirm first", "Which customers the 8 sheets are for; which attributes are missing from the main sheet"],
  ]),
  ...spec("C. Low-stock vs open-PO match (opportunity 3)", [
    ["Trigger", "The weekly Vendo low-stock file from Vendo's SharePoint (usually Thursday, sometimes pushed to Friday)"],
    ["What it does", "Matches each low-stock or out-of-stock item to open PO lines and Goods in Transit, fills the next available date, and flags lines with no updated date"],
    ["Data", "Vendo file, F&O open PO lines, Goods in Transit"],
    ["Evidence", "Day 2: Tina's six-step download, filter and match"],
    ["Confirm first", "How many items are on the file each week"],
  ]),
  ...spec("D. Remittance matching assistant (opportunity 4)", [
    ["Trigger", "A check arriving by mail or email, with the remittance attached; for mailed checks, Chani's deposit email with the scans and batch total"],
    ["What it does", "Finds the email for the batch, proposes a match of each check to open invoices, shows deductions and short pays with the difference, and checks the payment method before posting"],
    ["Data", "The check and its attached remittance, deposit email and scans, F&O open customer transactions"],
    ["Evidence", "Day 1: searching email for the total, postdated checks, payments landing in the wrong journal, the credit memo worked out by hand"],
    ["Confirm first", "Checks per week"],
  ]),
  ...spec("E. Scheduled money reports (opportunity 5)", [
    ["Trigger", "A schedule, instead of a manual daily email"],
    ["What it does", "Sends recovery totals, the Amazon payments and deductions breakdown, and aging by salesman from the data, only to people who use them"],
    ["Data", "SPS Commerce, Vendor Central, OceanFirst, F&O aging"],
    ["Evidence", "Day 5: daily recovery emails to six people with MTD and YTD totals; SUMIF aging by salesman built by hand; about $146k recovered this year"],
    ["Confirm first", "Which recipients use which report; how long each takes him"],
  ]),
  ...spec("F. Notice router (opportunity 5)", [
    ["Trigger", "A US Customs pull email or a credit card due-date email from Avi G"],
    ["What it does", "Sends Customs pulls to Mordy Berman, Zundel, AP, Avi Altman and Baruch Salamander; puts card due dates on a calendar for Chani and Isaac Grossman so the account is funded. Some of this may only need a mail rule."],
    ["Evidence", "Day 6: Customs forwards; Day 4: card due dates copied into the desk calendar"],
    ["Confirm first", "Whether Customs pulls are part of the bank funding checks"],
  ]),
  ...spec("G. Collections worklist", [
    ["Trigger", "Weekly, before Suzanne's Thursday to Friday follow-up"],
    ["What it does", "One list of overdue customers with phone number, open invoices, balance and past notes on the same screen, shared by Suzanne and Baruch Salamander"],
    ["Evidence", "Day 3: printed aging, about 5 minutes per call, clicks for transactions, balance and phone; Day 5: Baruch Salamander's 120-day sheet"],
    ["Confirm first", "How Suzanne and Baruch Salamander split collections"],
  ]),

  ...spec("H. Customer service email router", [
    ["Trigger", "Every new email in the customer service inbox (Charmaine's first; Evelyn's could follow)"],
    ["What it does", "Sorts each email and routes or answers it: customers who bought through Amazon, Kohls or Wayfair get the standard \"contact the retailer\" reply; order and sample requests go to Justin; replacement-part requests go to Jhony; packaging and shipping questions go to the warehouse (Brandon, Keith); deductions go to Baruch Salamander; retailer cancellations are checked in F&O for whether the order is already invoiced and sent to the warehouse in time. Everything else stays with Charmaine, with the order, invoice and tracking pulled up next to it."],
    ["Data", "Customer service inbox, F&O sales orders and invoices, CHUB, FedEx and UPS tracking"],
    ["Evidence", "Day 1: three Amazon and Kohls customers sent back to the retailer; emails forwarded to Evelyn; the 4-minute sample order email to Justin; a replacement plug question to Jhony; a Lowes cancellation emailed to Keith with no response, which was missed and became a manual 810 invoice that Lowes may not pay; Teams down, so she called Brandon for packaging info. Day 2: a replacement-part request forwarded to Jhony; Evelyn forwards order emails to Justin; Charmaine reviews her emails several times. Days 3 and 4: order emails forwarded to Justin by hand."],
    ["Confirm first", "Customer service emails a day, and how many are forwarded"],
  ]),

  h1("Bigger Projects (outside this scope)"),
  ...bullets([
    "**One central chat channel** for internal communication and report questions, instead of phone, email, Teams and WhatsApp (my idea).",
    "**PortPro to F&O link** for container and trucking status. Bais Trucking is a separate company but overlaps heavily with Achim.",
    "**Allways API or EDI into F&O** so vessel ETAs are exact dates rather than an Excel updated when someone remembers.",
  ]),

  h1("What to Measure Next"),
  p("How often each top-5 item happens and how many each time. The open questions for each bot, and who is left to shadow, are at the end of the appendix."),
  p("**Next step:** pick which of bots A to H to build first, and have Peleg take the settings list.", { spacing: { before: 200, after: 120 } }),

  rawP("---\n\n# Appendix: Reference", new Paragraph({ pageBreakBefore: true, spacing: { after: 80 }, children: [new TextRun({ text: "Appendix: Reference", bold: true, size: 40, font: FONT, color: "1F3864" })] })),
  p("Reference for the pages above. The full day-by-day notes are in the version 1 report (Shadowing_Report_2026-10-21.docx) and shadowing_notes.md. Times marked ~ are estimates."),
  p("\"Avi\" with no surname means Avi Grossman (Avi G). Avi Altman is always written in full, as is Moshe Aryeh Grossman. Baruch Salamander is a different person from Baruch Grossman."),

  h1("The Six Days at a Glance"),
  table([1500, 2100, 5760], ["Day", "Time", "Activity"], [
    ["Wed Oct 14", "9:45 to 12:15", "Shadowing Charmaine (Customer Service)"],
    ["", "12:15 to ~2:45", "Lunch and an online appointment (not shadowing)"],
    ["", "2:45", "Mincha"],
    ["", "3:00 to 4:30", "Shadowing Suzanne (AR)"],
    ["", "~4:30", "Interruption about the reporting app (observer's own work)"],
    ["Thu Oct 15", "9:52", "Evelyn: her role, as described by Chani"],
    ["", "~10:00", "Moshe Aryeh Grossman not in yet"],
    ["", "10:00 to ~10:40", "Avi Altman (buying team)"],
    ["", "10:43 to 12:00", "Tina (ecommerce feeds and PO follow-up)"],
    ["", "12:00 to ~1:45", "Break (not shadowing)"],
    ["", "~1:45 to 2:00", "Daniel (building a Wayfair spec sheet)"],
    ["", "~2:15 to 2:30", "Moshe Aryeh Grossman (PortPro data and ChatGPT)"],
    ["", "From 2:50", "Charmaine, afternoon (Wayfair deductions, Mason orders)"],
    ["Fri Oct 16", "From 9:00", "Suzanne (AR), morning: credit card payment, aging follow-up calls"],
    ["Mon Oct 19", "9:00 to ~10:00", "Chani (AP and office manager)"],
    ["", "~10:00 to 11:00", "Not shadowing"],
    ["", "11:00 to 11:50", "Tina"],
    ["", "11:50", "Daniel"],
    ["", "After 11:50", "Suzanne (start time not given)"],
    ["Tue Oct 20", "From 11:00", "Baruch Salamander (deductions, reports, collections)"],
    ["Wed Oct 21", "~11:30 to 12:00", "Moshe Aryeh Grossman (first note says 11:15; a later note says about 11:30)"],
    ["", "12:22", "Moshe Aryeh Grossman, Achim side: wire, bill of lading, containers"],
  ]),
  gap(),

  h1("Who's who"),
  table([2300, 7060], ["Name", "Role as understood from the notes"], [
    ["Charmaine", "Customer Service"],
    ["Suzanne", "Accounts Receivable (AR). Works closely with Chani"],
    ["Chani Kraus", "Officially the office manager. Also assists Isaac Grossman and handles AP and AR: deposits checks, pays vendors by check and ACH, pays freight to the shipping lines"],
    ["Evelyn", "Forwards order emails to Justin, sometimes ships replacements, handles the front door"],
    ["Tina", "Ecommerce, inventory feeds and PO follow-up (working label)"],
    ["Daniel", "Works for Tina and Avi G. Builds submission and spec files and manages content, so every new item's content reaches every customer that sells it. No access to open PO lines or goods in transit"],
    ["Avi Grossman (Avi G)", "Head of sales, and so head of CS questions. Also assists the CEO. First tester of the Grok bots, working with Baruch Grossman and Peleg; handles credit card payments and tells Chani when they are due"],
    ["Avi Altman", "Buying team; works for Moshe Aryeh Grossman. Does most of the data entry into F&O and is supposed to enter vessel ETAs"],
    ["Moshe Aryeh Grossman", "Head of buying. Works for both Bais Trucking and Achim's buying team"],
    ["Baruch Grossman", "COO, warehouse. One of the two people behind the operation, with Peleg"],
    ["Baruch Salamander", "Deductions and disputes (Walmart, Home Depot, Amazon, Lowes) in SPS Commerce; recovery and Amazon reports; aging reports by salesman; bank funding check; collections on late customers"],
    ["Isaac Grossman", "CEO. Signs checks and releases wires"],
    ["Peleg Ovadia", "Developer / IT. Main in-house technical person; knows F&O settings and the data best; DBA for the Grok bots"],
    ["Mordy Berman", "Officially the CFO; most money decisions are made directly by Isaac Grossman. Offsite, not shadowed. Receives Baruch Salamander's recovery reports"],
    ["Ken Kaplan", "Long-tenured employee. Cc'd on the recovery reports; sent Chani a list marked \"OFB\""],
    ["Zundel", "On the payments team, which applies payments to POs and voyages in F&O. Not seen or shadowed. Cc'd on the recovery reports"],
    ["Dan Holland", "In charge of IT and EDI. Works with Peleg"],
    ["Troy", "Consultant who helped migrate to F&O; wrote the item creation manual Moshe uses. Mostly gone now"],
    ["Keith Hamby / Brandon / Jhony / Robert", "Warehouse. Keith is floor manager; Brandon is the easiest to reach; Jhony handles parts and replacements; Robert also helps Isaac Grossman and forwards bills sent to his email"],
    ["Sal D'Rienzo", "Long-tenured; manages the warehouse and is president of Bais Trucking. Has access to the vessel tracking Excel"],
    ["Justin", "Enters orders and sample orders"],
    ["David Dweck / Jamie / Heshy", "Sales. Jamie also designs the curtain side of the company"],
  ]),
  gap(),
  p("**Companies:** Bais Trucking (sister company of Achim, runs on PortPro); Allways Shipping (customs, vessel bookings, container assignments; portal with exact locations; has API and EDI integrations available); All Blinds Co. (supplier in China); Vendo (middleman between us and Amazon; exact role not yet clear); Lincoln Supply, Family Dollar and Herman's (customers). **Locations:** 5702 is the Brooklyn office and 1600 is the Jersey warehouse."),
  p("**Systems:** F&O (main ERP), CHUB (order and invoice system for Lowes and others), InOrder (old system, still used for phone numbers), PortPro, DSCO Rithum (Kohls inventory feed), SPS Commerce (deductions and disputes), Retail Link (Walmart), Amazon Vendor Central, OceanFirst (bank portal), Allways portal, Lowes portal (WebEDI), Wayfair portal, Mason portal, Teams, WhatsApp, Excel, email, EZPass, Verizon dashcams, FedEx and UPS tracking, a desk calculator, printed manuals and templates."),

  h1("Other Observations"),
  ...bullets([
    "**Same task, different routes.** Charmaine starts from the sales order and reaches the invoice; Suzanne starts from the invoice and reaches the sales order. Suzanne checks deductions against the original invoice; Charmaine accepts Wayfair's.",
    "**Overlap.** Deductions are handled by four people: Suzanne, Charmaine, Tina (forwarding Avi G's list) and Baruch Salamander in SPS Commerce. Several people make sure the bank has enough money (Chani, Baruch Salamander).",
    "**AI already used informally.** Avi G started on Claude; Tina uses ChatGPT, including for the Home Depot mats images; Moshe Aryeh Grossman pastes PortPro screenshots into ChatGPT.",
    "**Amazon's cut.** Baruch Salamander's analysis (not verified): Amazon takes about 30 cents of every dollar we sell them, before labor and other costs.",
    "**Kohls feed rule.** Inventory under 5 is sent as 0, and the line is never left off, or Kohls may shut the item down.",
    "**Portals.** OTP on every login (Lowes, Walmart Retail Link). Wayfair exports deductions as a CSV; the Lowes list doesn't download cleanly.",
    "**Tools.** Teams was down for Charmaine (Day 1) and Tina (Day 2). Files are saved in scattered folders and dragged into emails.",
    "**Warehouse as the information desk.** Keith and Brandon are the office's main source of shipping and packaging answers.",
    "**Adoption.** Chani works largely on paper and is comfortable that way; automation aimed at her work should account for that.",
    "**Moshe Aryeh Grossman's Achim side.** Runs Family Dollar projections as his own project and creates items in F&O from Troy's manual.",
  ]),

  h1("Open Questions"),
  ...bullets([
    "**Bot A:** wires per week, and what splits them.",
    "**Bot B:** which customers the 8 weekly spec sheets are for; which attributes are missing from the main spec sheet.",
    "**Bot C:** how many items are on the weekly Vendo file.",
    "**Bot D:** checks per week.",
    "**Bot E:** which recipients use which report, and how long each takes Baruch Salamander.",
    "**Bot F:** whether US Customs pulls are part of the bank funding checks.",
    "**Bot G:** how Suzanne and Baruch Salamander split collections.",
    "**Bot H:** customer service emails a day, and how many are forwarded.",
    "**Other:** Vendo's exact role; what OFB is; whether \"Lincoln (comfy)\" is Lincoln Supply; how Kohls' price changed when only inventory is sent; what Isaac Grossman answered about the ACH.",
  ]),

  h1("Still to Shadow"),
  p("Justin, the warehouse (Sal D'Rienzo, Keith Hamby, Brandon, Jhony, Robert) and sales (David Dweck, Jamie, Heshy). Repeat sessions with Daniel, Moshe Aryeh Grossman and Avi Altman. Mordy Berman, Zundel and Dan Holland are probably better as conversations than shadowing."),
);

const doc = new Document({
  creator: "Shadowing notes",
  title: "Shadowing Report v2, Oct 14 to 21, 2026",
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: FONT, color: "1F3864" }, paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: FONT, color: "2F5496" }, paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 23, bold: true, font: FONT, color: "404040" }, paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] },
    ],
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({ text: "Shadowing Report v2, Oct 14 to 21, 2026 | Page ", size: 18, color: "7F7F7F", font: FONT }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "7F7F7F", font: FONT }),
          ],
        })],
      }),
    },
    children: body,
  }],
});

const MD_OUT = OUT.replace(/\.docx$/, "") + ".md";
fs.writeFileSync(MD_OUT, md.join("\n\n") + "\n");
console.log("wrote", MD_OUT);

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(OUT, buf);
  console.log("wrote", OUT);
});
