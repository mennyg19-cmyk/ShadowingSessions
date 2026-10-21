const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header,
  AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType, PageNumber,
  HeadingLevel,
} = require("docx");

const OUT = process.argv[2] || "Shadowing_Report_2026-10-15.docx";
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

const p = (text, opts = {}) =>
  new Paragraph({ spacing: { after: 120 }, ...opts, children: rich(text, opts.run) });
const h1 = (text) =>
  new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, spacing: { before: 360, after: 160 }, children: [new TextRun({ text, font: FONT })] });
const h2 = (text) =>
  new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, spacing: { before: 240, after: 100 }, children: [new TextRun({ text, font: FONT })] });
const h3 = (text) =>
  new Paragraph({ heading: HeadingLevel.HEADING_3, keepNext: true, spacing: { before: 180, after: 80 }, children: [new TextRun({ text, font: FONT })] });
const bullets = (items) =>
  items.map((t) => new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 60 }, children: rich(t) }));
const steps = (ref, items) =>
  items.map((t) => new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 60 }, children: rich(t) }));

function table(widths, header, rows) {
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

const W3 = [1700, 5860, 1800];
const W2 = [1700, 7660];

const body = [];
const add = (...xs) => xs.flat().forEach((x) => body.push(x));

add(
  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Shadowing Report", bold: true, size: 44, font: FONT })] }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Wednesday, October 14 and Thursday, October 15, 2026", size: 26, font: FONT, color: "404040" })] }),
  p("Prepared for Baruch Grossman (COO) and Peleg."),
  p("The goal of the shadowing is to find groups of pain points that one reusable function could remove together. Part 9 lists first-pass candidate modules built from the episodes below."),
  p("Times marked ~ are estimates from the order of events. The original notes only have a few exact timestamps. Text in italics inside parentheses are the observer's own comments, kept from the notes. The observer did not interrupt or ask staff why they work the way they do; questions were limited to what they were doing when it wasn't clear. Differences in method between people are recorded as observed, not explained."),
  p("\"Avi\" with no surname means Avi Grossman (Avi G). Avi Altman is always written in full."),

  h1("The Two Days at a Glance"),
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
  ]),
  gap(),

  h2("Who's who"),
  table([2300, 7060], ["Name", "Role as understood from the notes"], [
    ["Charmaine", "Customer Service"],
    ["Suzanne", "Accounts Receivable (AR). Works closely with Chani"],
    ["Chani", "AP and office manager. Deposits checks, scans them and sends them to Suzanne"],
    ["Evelyn", "Forwards order emails to Justin, sometimes ships replacements, handles the front door"],
    ["Tina", "Ecommerce, inventory feeds and PO follow-up (working label)"],
    ["Daniel", "Works for Tina and Avi G. Builds submission and spec files. No access to open PO lines or goods in transit"],
    ["Avi Grossman (Avi G)", "Head of sales, and so head of CS questions. Also assists the CEO"],
    ["Avi Altman", "Buying team; works for Moshe Aryeh Grossman"],
    ["Moshe Aryeh Grossman", "Head of buying. Works for both Bais Trucking and Achim's buying team"],
    ["Baruch Grossman", "COO, warehouse"],
    ["Baruch Salamander", "Different person from Baruch Grossman. Emails numbers out all day; appears to handle Amazon disputes"],
    ["Isaac Grossman", "CEO"],
    ["Keith / Brandon / Jhony", "Warehouse. Keith is floor manager; Brandon is the easiest to reach; Jhony handles parts and replacements"],
    ["Justin", "Enters orders and sample orders"],
    ["David Dweck / Jamie", "Sales (David, ext. 123); Jamie also designs the curtain side"],
    ["Peleg", "Developer / IT"],
  ]),
  gap(),
  p("**Companies:** Bais Trucking (sister company of Achim, runs on PortPro); Vendo (middleman between us and Amazon; exact role not yet clear); Lincoln Supply (customer)."),
  p("**Systems:** F&O (main ERP), CHUB (order and invoice system for Lowes and others), InOrder (old system, still used for phone numbers), PortPro, DSCO Rithum (Kohls inventory feed), Lowes portal (WebEDI), Wayfair portal, Mason portal, Teams, Excel, email, FedEx and UPS tracking, a desk calculator, printed manuals and templates."),
);

/* ---------------- Part 1: Charmaine Day 1 ---------------- */
add(
  h1("Part 1: Charmaine, Customer Service, Day 1 (9:45 to 12:15)"),
  p("**Systems and tools:** F&O, CHUB, Lowes portal (WebEDI), Wayfair portal, Mason portal, email, Teams, FedEx and UPS tracking, a printed Lowes procedure manual, printed email templates."),
  table(W3, ["Time", "Episode", "Type"], [
    ["9:48", "Amazon customer asks for a replacement", "Phone"],
    ["9:54", "Wayfair cancellation and Mason open orders", "Portal admin"],
    ["~10:00 to 10:20", "Lowes missed cancellation → manual 810 invoice", "Portal admin"],
    ["10:20", "Lowes CS: wrong tile pattern shipped", "Phone"],
    ["~10:30", "Email triage, round 1 (Nexus/retro tile, Morningstar, etc.)", "Email"],
    ["~10:40", "Lowes invoice follow-up and Kohls shade call", "Portal / Phone"],
    ["~10:45", "Email triage, round 2 (voicemails, Morningstar reply)", "Email"],
    ["~10:50", "Filing the printed Lowes pending list", "Paper"],
    ["11:00 to 11:04", "Sample order request to Justin", "Email"],
    ["~11:05", "Voicemail: customer wants to buy direct", "Voicemail"],
    ["Recurring", "Mason portal checks", "Portal admin"],
    ["~11:15", "Email triage, round 3 (Kart It, Wayfair overdue, gift valance)", "Email"],
    ["~11:30 to 12:15", "Home Depot ship-to-store call and UPS claim", "Phone"],
    ["During UPS hold", "Retro tile customer replies → escalated to Avi G", "Email"],
    ["End", "Teams down → calls Brandon for packaging info", "Phone"],
  ]),
  h2("What happened"),
  h3("Amazon and Kohls customers (calls and emails)"),
  p("Three separate contacts came from customers who bought through other retailers: an Amazon replacement request, an Amazon misaligned-print complaint, and a Kohls noisy shade. Each time Charmaine directed them back to the retailer. The Amazon caller said Amazon had given her wrong information and told her to call Achim. Our items don't fall under the 30-day return policy, and the call was repetitive because the customer did not accept that. The Kohls caller asked many questions about Kohls' return policy."),
  h3("Wayfair and Mason (portal admin)"),
  ...bullets([
    "A Wayfair cancellation email came in. She verified it in the Wayfair portal and in F&O.",
    "Mason emailed about open orders. She entered the invoice numbers into F&O one by one (e.g. IN001041663, 41684, 41667).",
    "For large batches she downloads a file from Mason, fills it in and re-uploads it. This time there were only a few, so she did them manually.",
    "Manual path: Sales order → My view → filter by PO → Invoice → open the invoice (extra step) → copy and paste.",
    "Nine new Wayfair orders arrived today, to be checked at lunch for shipping.",
    "She checks Mason periodically against F&O. Mason doesn't close orders automatically, so she closes them by hand.",
  ]),
  h3("Lowes missed cancellation → manual invoice (~10:00 to 10:20)"),
  p("Lowes asked for a cancellation. Charmaine emailed Keith and got no response. When she checked, the order was already invoiced, so the cancellation had been missed. CHUB can't invoice it, so she invoices manually on the Lowes portal. Lowes sometimes pays these and sometimes doesn't. *(It is unclear where the cancellation request was lost.)*"),
  p("The manual process:"),
  ...steps("steps1", [
    "Sign in to the portal and wait for the OTP code, then enter it manually. She signs in and out every time, so every visit has an OTP wait.",
    "WebEDI → transaction 810 → create new.",
    "Select a remit-to account. Copy the PO date, invoice type, currency code, PO received date and PO actual ship date from the order.",
    "Add tracking, check FedEx to confirm it's out for delivery, then add the PO number, invoice date and invoice number.",
    "Add the Lowes buying store number from CHUB. *(It may exist elsewhere too, but she uses CHUB.)*",
    "Add items one by one. The item number and description come from CHUB, and the unit code and price from F&O.",
    "Check the manual for allowances (none) and discounts (not applicable). Net due days: 60.",
    "Shipment and payment method: from F&O (order → shipment). Method = collect, BOL = tracking number, carrier = FedEx.",
    "**Error 1:** the first save lost the item line because \"Add item\" had not been clicked. She re-entered it.",
    "**Error 2:** the first submit failed because the discount description was blank. She checked the manual and entered \"not applicable.\"",
    "Finished at 10:20.",
  ]),
  p("Afterwards she remembered she had not printed the list of pending manual invoices. She printed the web page itself, so the printout is hard to read. She keeps the printed lists on her desk with previous ones and follows up with Suzanne to see whether they have been paid."),
  p("*Side note:* before returning to this claim, she emailed Jhony. A customer on the phone was missing a part, so she asked whether we have replacements for the Buono II Bradford Rod white plastic plug. She checked the email twice before sending."),
  h3("Lowes CS call: wrong tile pattern (10:20)"),
  p("Lowes customer service reported that a customer received two items incorrectly. Charmaine opened the order, pulled warehouse tracking and checked FedEx. Everything shipped in one box. She verified the catalog item number against CHUB, asked for the pattern numbers from the boxes, and checked the batch number on the back. She also offered to talk to the customer directly."),
  p("The customer ordered 5 boxes of FTV462 and received 44820 instead of 46220 on 2 of them (3 were correct). **Resolution:** Lowes credits the customer, who keeps the tiles, and then places a new order. Charmaine no longer enters orders in the new system, and since Lowes has an allowance she tells them to credit and reorder. *(It is odd for 3 of 5 identical items to ship right and 2 wrong. It happens from time to time, and the patterns look nothing alike.)*"),
  h3("Email triage (three rounds)"),
  ...bullets([
    "**2023 customer:** the item broke, the replacement arrived damaged, and there is no order info at all. Saved for later.",
    "**Morningstar blind:** arrived without a wand or hardware. She forwarded it to Evelyn, then replied that it will ship by end of week with tracking to follow, and apologized.",
    "**Gift recipient:** wants to order hardware after receiving the blind as a gift without it.",
    "**Previous house owner:** wants a replacement valance for a mahogany MF blind (similar to the gift email).",
    "**Nexus tile lifting off the floor:** in CHUB it was a retro floor tile from Home Depot, ordered in August. She copied the images into the reply, apologized, and asked whether the tiles were acclimated, what the subfloor is, and whether the temperature is regulated. She reread it twice and sent it. The customer later replied that she acclimated for a week, the temperature is 70, and the subfloor is concrete. Charmaine escalated it to Avi G. *(Acclimated means letting the tiles sit in the room before installation.)*",
    "**Kart It return:** she checked tracking to confirm it reached the warehouse.",
    "**Wayfair overdue alert:** she checked the portal and found nothing overdue.",
    "**Voicemail emails:** one had nothing on it, and for the other she searched her emails for the match.",
    "**Sample order to Justin (11:00 to 11:04):** she wrote to Justin (cc Baruch Grossman, Peleg and Chani) asking him to enter a no-charge sample order, send back the sales order number, and package carefully to avoid damage. She copied from a printed email sheet and F&O and reviewed the email many times. **It took 4 minutes for one email.**",
  ]),
  h3("Other calls"),
  ...bullets([
    "A voicemail from a customer who ordered from Lowes and wants more at a lower price, so he wants to order straight from Achim. She did not respond. She takes her headset off each time she listens to a voicemail.",
    "A Kohls customer called about a shade that makes noise going up and down. She told them to contact Kohls for a replacement.",
  ]),
  h3("Home Depot ship-to-store call and UPS claim (~11:30 to 12:15)"),
  p("Home Depot CS reported a ship-to-store order with 2 items missing. CHUB showed multiple boxes. On UPS, all showed delivered except two, which show delayed in Stafford, TX and appear lost. **Resolution:** the customer places a replacement order and we file a UPS claim. *(The order was somehow closed without being received short. The observer thinks she was talking to a Home Depot rep.)*"),
  p("Charmaine wrote everything down, called UPS and waited on hold. Teams wasn't working (she had emailed Peleg the day before with no reply), so she called Brandon to get the packaging details UPS needed: cushioning, single or double wall, and tape type. She picked Brandon because he is the easiest to reach, rather than Jhony or anyone else in the warehouse."),
);

/* ---------------- Part 2: Suzanne ---------------- */
add(
  h1("Part 2: Suzanne, AR, Day 1 (3:00 to 4:30)"),
  p("**Systems and tools:** F&O (customer payments, journals), InOrder (still used for phone numbers), a desk calculator, paper checks and remittances, email, highlighters."),
  p("**Working relationship:** Chani (AP and office manager) deposits checks, scans them and sends them to Suzanne. She also gives Suzanne a paperclipped pile for each batch."),
  table(W2, ["Time", "Episode"], [
    ["3:00 to ~3:05", "Deductions list sent to Avi G (Lowes, Home Depot)"],
    ["~3:05 to 3:08", "Account breakdown call to David Dweck (sales)"],
    ["3:08 to 3:13", "Calling Herman's about a postdated check"],
    ["3:13 to 3:22", "Payment entry, customer 5121"],
    ["3:22 to ~3:28", "Customer 472: wrong tariff deduction"],
    ["~3:28", "Customer 462: $200 short-pay email"],
    ["3:30", "Customer 11598"],
    ["~3:30 to 3:45", "New journal: deposit structure and errors"],
    ["~3:45 to 3:50", "Matching a batch to Chani's email"],
    ["3:50 to ~4:10", "Batches that won't post"],
    ["~4:10 to 4:30", "Return → credit memo"],
  ]),
  h2("What happened"),
  h3("Deductions list (3:00)"),
  p("She sent a list of Lowes and Home Depot deductions to Avi G, cc Chani, Tina and Isaac Grossman. It had taken her a couple of days to put together."),
  h3("Call with David Dweck (salesman, ext. 123)"),
  p("She gave him a breakdown on customer 6903: they order about every 2 months, do about $12k a year, and are good business but used to order more often. Mid-call, Chani brought in a check from HD Supply and took it to her office to add to a deposit batch. It will come back after deposit."),
  h3("Herman's (1098), 3:08 to 3:13"),
  p("Path: Customer payments → Menu → Customers → Herman's. The phone number wasn't in F&O, so she got it from InOrder, the old system *(two years after the switch to F&O)*, then added the number and the email to F&O. No pickup on the first call, so she used her cell phone. A woman named Pam answered, and Suzanne asked for Ricky, who was at the other store. She asked Pam to remind him to email the postdated check."),
  h3("Payment entry (3:13 to 3:30)"),
  p("*(The observer's presence may have affected pace and care here; she said she was nervous being watched.)*"),
  ...bullets([
    "**Customer 5121 (3:13 to 3:22).** Add payment → date, reference, amount → tick off orders at the bottom, matching the remittance. She ticked the wrong orders at one point, noticed, and rechecked. The invoice list is scrolled rather than sorted or filtered, and the invoices were out of order, so each had to be checked by hand. She saved the journal, then entered a \"destroy in field\" deduction for the remainder. That is a deduction reason on the credit: the customer throws the goods out and we write them off.",
    "**Customer 472.** Same steps. They claimed deductions, so she used a desk calculator to check the math. They also took a tariff deduction, which is wrong. She left it open and told Avi G, Mendy and others to go back to the customer to fix it. She highlighted her notes at the bottom of the check and set it aside.",
    "**Customer 462.** They shorted the payment by $200. She emailed them to ask why and spent time wording the email. *(A template could help.)* She highlighted her notes and set the check aside.",
    "**Customer 11598 (3:30).** She matched the remittance to open invoices as before and left the journal open because of issues.",
  ]),
  p("The observer assumed payments are applied to the top orders and worked down. What was observed was invoice-by-invoice matching against the remittance."),
  h3("How deposits are structured"),
  p("For every journal she deletes the default description and enters the deposit amount as the name. Every deposit is one journal entry, and every check on the deposit is a customer payment."),
  ...bullets([
    "Customer 5194 sent postdated checks, so she entered it as a partial payment.",
    "Customer 6102 matched an invoice exactly.",
    "The last 4 payments ended up in the previous journal, so she deleted it, created a new one and re-added them. *(She was talking with the observer at the time.)*",
  ]),
  h3("Matching a batch to Chani's email (~3:45 to 3:50)"),
  p("Chani gives Suzanne a paperclipped pile of checks, with a calculator total slip printed at deposit time. Chani also emails the scanned checks and deposit batch. Suzanne takes the total from the slip and searches her email for that amount to find the right message. She then checks the math on deductions and credits while entering payments from the remittance."),
  h3("Batches that won't post (3:50 to ~4:10)"),
  ...bullets([
    "**Batch 1.** After rechecking all the checks, it errored. She set it aside with the other open batches. There was an extra payment, and once she found and deleted it, the batch posted.",
    "**Batch 2.** It also failed, and the error didn't show the cause. She deleted a payment and re-entered it, then found it: the method of payment had defaulted to credit card, but they paid by check. She changed it and it posted.",
  ]),
  h3("Return → credit memo (~4:10 to 4:30)"),
  p("The reason behind the earlier deduction came back: it was a return we had picked up. She printed the customer's attachment to attach to the batch. Because the batch had already posted, she created a credit memo. To verify the amount she went Customer → Balance → Sales order → View details → Show invoice → Lines, added up the pricing, and confirmed it matched the deduction taken off the check."),
);

/* ---------------- Part 3: Evelyn, Avi Altman ---------------- */
add(
  h1("Part 3: Day 2 Morning: Evelyn and Avi Altman"),
  h2("Evelyn (9:52)"),
  p("Per Chani, Evelyn forwards order emails to Justin, sometimes ships out replacements, and handles the front door. The observer also asked Chani about other roles: Baruch Salamander (she doesn't know exactly what he does; he emails numbers out all day and looks like a report runner), Tina and Daniel (Daniel works for Tina and Avi G), the sales team, and the buying team (Moshe Aryeh Grossman and Avi Altman)."),
  h2("Moshe Aryeh Grossman (~10:00)"),
  p("Not in yet. He usually gets in between 9 and 10 and starts the day cleaning up Bais Trucking in PortPro. He was shadowed later in the day (see Part 6)."),
  h2("Avi Altman (10:00 to ~10:40)"),
  p("*Lower confidence: the observer found this block hard to follow in real time.*"),
  ...bullets([
    "Emailed a supplier: wrong color on some items.",
    "Worked from an Excel sheet and an email, flagging emails for later.",
    "Replied to an email about allocations: we don't need weekly allocations, only every couple of months.",
    "Opened F&O and PortPro, then deleted a row off the main Excel sheet. It appears he checks PortPro for status changes and deletes those rows from the sheet.",
    "Opened the purchase order Excel file but did nothing with it, and went back to email. Opened Goods in Transit, then back to email.",
    "**Pattern:** rapid switching between PortPro, F&O, email and Excel.",
  ]),
);

/* ---------------- Part 4: Tina ---------------- */
add(
  h1("Part 4: Tina, Ecommerce and Inventory Feeds, Day 2 (10:43 to 12:00)"),
  p("The only exact times are 10:43 and 12:00. The episodes below are in the order they happened."),
  table([1200, 8160], ["#", "Episode"], [
    ["1 (10:43)", "Kohls inventory upload (DSCO Rithum)"],
    ["2", "Suzanne's call; Teams problem"],
    ["3", "Amazon return label → email to Vendo"],
    ["4", "Deduction disputes: Avi G → Baruch Salamander"],
    ["5", "Low-stock vs open-PO matching workflow"],
    ["6", "Chani: problems with Lincoln Supply"],
    ["7", "Sending the Amazon inventory file"],
    ["8", "Reviewing Daniel's submission sheet"],
    ["9", "Jamie's call: new customer product list"],
    ["10", "Call from David Dweck (content not heard)"],
    ["11", "Home Depot mats PowerPoint"],
  ]),
  h2("What happened"),
  h3("1. Kohls inventory upload (10:43)"),
  ...bullets([
    "She uploaded an inventory file manually in DSCO Rithum. She messaged Daniel that Kohls has quantities on items that shouldn't have any, which she needs to fix.",
    "Kohls inventory is updated manually every day. **Rule:** if inventory is under 5, send 0. Always send the line with 0 and never leave it off, otherwise Kohls may shut the item down entirely. Discontinued items go to 0 but stay on the file so they stay live, since we may still sell one now and then.",
  ]),
  h3("2. Suzanne's call; Teams"),
  p("Suzanne called her (topic not heard). Tina's Teams app isn't working, so she uses web Teams, which doesn't download files the usual way."),
  h3("3. Amazon return label"),
  p("Keith sent a message with an image of an Amazon shipping label: we received a return from Amazon today and aren't supposed to. She emailed Matt at Vendo and Reggie, cc Avi G."),
  h3("4. Deduction disputes"),
  p("Avi G emailed a list of invoices needing disputes. Tina forwarded it to Baruch Salamander (who appears to handle Amazon disputes) and asked whether he is up to date on disputing. The list wasn't fully clear, so she went back to Avi G."),
  h3("5. Low-stock vs open-PO matching (the largest example so far)"),
  ...steps("steps2", [
    "Download the master spec sheet from Daniel.",
    "In F&O, pull all POs / open PO lines.",
    "Check the spec sheet for low-stock items and paste them into one field on the open POs so they filter.",
    "Download the filtered results.",
    "Look up the spec sheet against the open PO download to see which low-stock items are on open POs.",
    "Also download Goods in Transit, because some open PO lines don't have updated dates.",
  ]),
  p("**Whole workflow:** Daniel downloads a file from Vendo's SharePoint and adds low-stock and out-of-stock items. He sends it to Tina, who adds the next available date (Daniel has no access to open PO lines or Goods in Transit). She reviews it and sends it back to Vendo. *(Observer's view: this matching would be better done in the system itself, rather than a low-stock list matched against an F&O export.)*"),
  h3("6. Lincoln Supply"),
  p("Chani came in about problems with customer Lincoln Supply. Tina called Brandon about the shipping to them. The issue was not resolved while the observer was there."),
  h3("7. Sending the Amazon inventory file"),
  p("To send the inventory file she opens an email, opens Explorer, goes to the folder with Amazon's inventory files, drags the file into the email and sends."),
  h3("8. Reviewing Daniel's submission sheet"),
  p("She reviewed every column of a submission sheet from Daniel. They review it **at least 3 times** before it goes to any ecommerce customer. The file carries all the ecommerce info and goes to every customer who needs it."),
  h3("9. Jamie's call: new customer"),
  p("Jamie called about what looks like a new customer and sends a list of products needed. Tina forwarded the email to Daniel to build the file."),
  h3("10. Call from David Dweck"),
  p("The observer was still typing earlier notes and did not listen in."),
  h3("11. Home Depot mats PowerPoint"),
  p("She had saved a file into Documents instead of the customers folder, and moved it with cut and paste and renamed it. It is a PowerPoint of mats for Home Depot, with images made in ChatGPT and room settings requested from them. She edited a long prompt in Word, using Word's find and replace, and appears to keep a templated prompt that she copies and pastes. She handles many files, and the folders are spread across locations, which means a lot of clicking to find things."),
);

/* ---------------- Part 5: Daniel ---------------- */
add(
  h1("Part 5: Daniel, Wayfair Spec Sheet, Day 2 (~1:45 to 2:00)"),
  p("Observed from about 1:45, close to the beginning of the sheet. Mostly repetitive work, so there was not much to see."),
  p("**Example observed:** 4 products from one product line, all toilet seats in different sizes. That was the easy case, because the shared info could be pasted into 4 cells at once. **Estimate: about 15 to 20 minutes per product line.**"),
  ...bullets([
    "He is building a **Wayfair spec sheet** in Excel, typing one product at a time. It has a different layout from our own internal product spec sheet, which holds all our products and their ecommerce info (the same one Tina used this morning). Wayfair expects its own template.",
    "He copies and pastes from our product spec sheet into the Wayfair sheet, matching columns to columns.",
    "He works quickly and uses keyboard shortcuts well, though that may be because he was being observed.",
    "For some columns on the Wayfair sheet he has to look at the actual product image (a toilet seat) to get the information. The same information is not on our main spec sheet. The observer didn't see which attribute it was.",
    "The Wayfair sheet works like a form with dropdowns and validation. Certain columns can't be typed into freely; the value must come from a list.",
    "By 2:00 he was nearly done. He then read the entire file through to check it, saved it, and emailed it to Tina to check over.",
  ]),
  p("*(Observer's view: a bot or AI tool given the Wayfair template and our main spec sheet could build this on its own.)*"),
  p("**Chain for ecommerce files so far (Tina and Daniel):** the main product spec sheet → Daniel builds the channel file (Wayfair, Amazon, etc.) → Tina reviews → sent out. Each customer expects a different template, and the work is column mapping plus filling gaps by hand."),
);

/* ---------------- Part 6: Moshe ---------------- */
add(
  h1("Part 6: Moshe Aryeh Grossman, PortPro and ChatGPT, Day 2 (~2:15 to 2:30)"),
  ...bullets([
    "Moshe Aryeh Grossman works for Bais Trucking and, as the buying team, for Achim. Bais Trucking is Achim's sister company but runs on a different system, PortPro.",
    "He now uses ChatGPT to analyze information about his loads and trucks. The process is manual: he takes screenshots of PortPro information, pastes them into ChatGPT, and talks to it. ChatGPT has trouble reading some details from the screenshots.",
    "He asks it different kinds of questions, such as driver assignments. One question, as best the observer recalls, was whether drivers assigned to routes could pick up from where they finish dropping off at a nearby location.",
    "He doesn't use ChatGPT all the time, only for complicated questions.",
    "He talks to it conversationally, which suggests he is comfortable with it.",
  ]),
  p("*(Observer's side note: an automatic connector between PortPro and ChatGPT would work better than screenshots.)*"),
);

/* ---------------- Part 7: Charmaine PM ---------------- */
add(
  h1("Part 7: Charmaine, Customer Service, Day 2 Afternoon (from 2:50)"),
  p("**Systems and tools:** email, voicemail, Wayfair portal, Mason portal, F&O."),
  table(W2, ["Time", "Episode"], [
    ["2:50", "Wayfair customer complaint: listing shows the wrong curtain width"],
    ["Then", "Voicemail and email review; customer service"],
    ["Then", "Wayfair deductions: accept or dispute"],
    ["Then", "Closing Mason orders by hand"],
    ["Then", "Wayfair deductions: CSV download"],
  ]),
  p("Only 2:50 is an exact time; the other episodes are in the order they happened."),
  h2("What happened"),
  h3("Wayfair customer complaint: wrong width on the listing (2:50)"),
  p("A customer who bought through Wayfair complained about the width of the item. It arrived by email. On Wayfair's site the dimensions are wrong: the curtain is two connected panels, and Wayfair lists 55\" per panel, but 55\" is the size of the whole curtain. *(This is a product-data error on the channel listing; see module 8.)*"),
  h3("Voicemail and email review"),
  p("She listened to a voicemail, ran through emails and handled customer service issues, reviewing her emails a few times. At one point she forwarded an email asking for a replacement part to Jhony."),
  h3("Wayfair deductions: accept or dispute"),
  ...bullets([
    "In the Wayfair portal she clicks the PO number, which shows the reason for the deduction. Late receipt: she accepts. Customer received the wrong item: she accepts.",
    "She works on this while answering customer service emails at the same time.",
    "She also accepts returns to Wayfair. *(It is probably part of our trade agreement with Wayfair that they take deductions for returns.)*",
    "**Method difference, Charmaine and Suzanne:** when Suzanne receives a deduction, she checks the original invoice to see whether the numbers match. Charmaine accepts Wayfair's deduction without that check. *(She may have checked in the past and now trusts the retailer's figures. Not asked.)*",
  ]),
  h3("Closing Mason orders by hand"),
  ...bullets([
    "This is the second part of what she did on Day 1 morning. She checks Mason a few times, and when orders close in our system she closes them in Mason manually. She says Mason orders don't close automatically like other customers' do.",
    "It is only a few orders, so she does them one by one instead of downloading and uploading a file.",
    "**Access path:** she starts from the sales order. She finds the sales order using the customer PO from the customer portal, clicks Invoice at the top (which lists the invoices for that order, usually one), then opens the invoice and copies and pastes from it. Opening the invoice is an extra step compared with copying from the invoice list.",
    "**Method difference, Charmaine and Suzanne:** the two work in opposite directions. Charmaine starts from the sales order, and when she needs invoice information she clicks Invoice at the top of the sales order. Suzanne starts from the invoice, and when she needs information from the sales order she gets there from the invoice. For copying invoice details into Mason, starting from the sales order adds steps.",
  ]),
  h3("Wayfair deductions: CSV download"),
  p("After going through another deduction, she went back in to download the deductions. Wayfair offers a CSV download, so she gets a normal-looking list, unlike the Lowes list from Day 1. She then reviewed it."),
);

/* ---------------- Part 8: observer's own work ---------------- */
add(
  h1("Part 8: Observer's Own Work (not part of the process study)"),
  p("Around 4:30 on Day 1, Tina asked about the sales reporting app. After clearing it with Avi G and Baruch Grossman (COO), the observer turned off the daily jobs (so reports stop going to everyone every day) and turned off test mode, so users' own schedules now send. Tina and Isaac Grossman (CEO) can now get their reports."),
);

/* ---------------- Open items ---------------- */
add(
  h1("Open Items"),
  ...bullets([
    "Charmaine's Day 1 times for the middle episodes are estimates. Suzanne's times from 3:22 to 4:30 are also estimates, since the notes only had times through 3:50.",
    "Tina's episodes and Charmaine's Day 2 afternoon episodes are in order only. Only the exact times listed in each Part are known.",
    "The Day 1 lunch and appointment window (12:15 to ~2:45) and the Day 2 break (12:00 to ~1:45) are blank by design.",
    "What exactly is Vendo's role?",
    "Topics of Suzanne's call and David Dweck's call to Tina were not heard.",
    "Daniel: how many product lines a week does he build, and for which customers? Does each customer (Wayfair, Amazon, Home Depot, Kohls) need its own template? Which attributes are missing from the main spec sheet and have to be read off product images? Does the 15 to 20 minute estimate grow a lot for product lines with many different items?",
    "Moshe Aryeh Grossman: which PortPro screens and which details does ChatGPT misread? What other complicated questions does he ask besides driver assignments? Does PortPro offer an export or API?",
    "Wayfair listing with the wrong curtain width: who maintains Wayfair product data, and has it been corrected?",
    "Still to shadow: Moshe Aryeh Grossman's PortPro cleanup, possibly Baruch Salamander, Suzanne's morning (to compare with her afternoon), and the sales and buying teams.",
  ]),
);

/* ---------------- Modules ---------------- */
add(
  h1("Part 9: Candidate Pain-Point Modules (for discussion)"),
  p("These are first-pass candidates. Each needs to be confirmed, rejected or reshaped. Time and frequency are only given where the notes support them."),
  table([400, 1700, 3300, 3960], ["#", "Module", "What it would do", "Episodes touched"], [
    ["1", "Cross-system lookup / match", "One search that takes an order, PO, tracking number, customer, amount or batch and returns the order, invoice, shipment, customer contact and related email.", "Day 1: Charmaine's CHUB / F&O / FedEx / UPS hopping; Suzanne's InOrder phone numbers; her \"search the email for the total\" step. Day 2: Tina's low-stock vs open-PO matching (the clearest example); Avi Altman's PortPro to Excel row deletion; Moshe Aryeh Grossman's PortPro screenshots pasted into ChatGPT, where some details are misread."],
    ["2", "Retailer and portal handler", "A single place for each retailer's rules, so cancellations, invoices, open orders, deductions and feed rules don't live in paper manuals or memory.", "Day 1: Lowes 810 invoice (OTP wait on every login), Wayfair, Mason (doesn't auto-close), Home Depot, Lowes pending list. Day 2: Kohls inventory rule (under 5, send 0, never omit the line); Amazon returns and disputes via Vendo; Charmaine's Wayfair deductions and hand-closing of Mason orders."],
    ["3", "Intake triage and routing", "Recognize the source (Amazon, Kohls, Home Depot, new customer) and send the standard reply or route it, instead of forwarding by email.", "Day 1: Amazon and Kohls customers sent back to the retailer; emails forwarded to Evelyn. Day 2: Evelyn forwards orders to Justin; Jamie to Tina to Daniel by email; Keith to Tina for the Amazon return; Charmaine forwards a replacement-part request to Jhony."],
    ["4", "Templates and checklists", "Standard text and field rules for repeated messages and files: short-pay emails, sample order requests, missing-hardware replies, tile complaints (acclimation questions), Lowes invoice fields.", "The 4-minute sample order email; the short-pay wording; the Nexus tile reply; Tina's templated image prompt; Daniel's submission sheet reviewed at least 3 times."],
    ["5", "Payment-to-remittance matching", "Suggested matching of payments to invoices, with sort and filter, amount defaults, and post errors that say what is wrong.", "Most of Suzanne's afternoon."],
    ["6", "Exception and open-item tracker", "One list for items that are \"left open\", instead of highlighted notes on checks and printed lists.", "Day 1: Mason orders, tariff deduction, $200 short-pay, lost UPS package, pending Lowes invoices. Day 2: returns we shouldn't receive; an unclear dispute list; unresolved Lincoln Supply shipping; Mason orders awaiting manual close."],
    ["7", "Defaults and validation", "Fix defaults that cause errors and validate before submit: payment method defaulting to credit card, required fields on the 810, an item line lost if \"Add item\" isn't clicked.", "Day 1: Suzanne's batches that wouldn't post; Charmaine's two 810 errors. Day 2: repeated manual review (Tina's 3 reviews, Daniel reading the whole Wayfair file at the end, Charmaine rechecking emails); deduction checking differs by person (Suzanne checks the original invoice, Charmaine accepts Wayfair's figure)."],
    ["8", "Product data to channel file builder", "Keep one complete product spec sheet and generate each customer's template (Wayfair, Amazon, Kohls, Home Depot) from it, including dropdown-valid values. Fill gaps in the main sheet once instead of by hand each time, and catch listing errors such as wrong dimensions.", "Daniel's Wayfair sheet (column-to-column copy and paste, dropdown-restricted columns, info read off product images, 15 to 20 minutes per product line); Tina's Kohls inventory feed and Amazon inventory file; Daniel's submission sheet reviewed 3 times; the Wayfair listing that shows curtain width per panel when 55\" is the whole curtain."],
  ]),
  gap(),
  h2("Other observations"),
  ...bullets([
    "Teams was down for Charmaine (Day 1) and Tina (Day 2).",
    "File handling is manual and scattered: files saved in the wrong folder, files dragged from Explorer into emails, folders in many places.",
    "The warehouse floor manager (Keith) and Brandon are frequent sources of information for the office.",
    "Same task, different routes: Charmaine starts from the sales order and reaches the invoice from there, while Suzanne starts from the invoice and reaches the sales order from there; Suzanne verifies deductions against the original invoice while Charmaine accepts Wayfair's.",
    "Retailers differ in what they let us export: Wayfair gives a CSV of deductions, while the Lowes list doesn't download cleanly.",
  ]),
  p("**Next step:** decide which modules are real, which are off, and which groupings are missing, then dig into each one.", { spacing: { before: 200, after: 120 } }),
);

const doc = new Document({
  creator: "Shadowing notes",
  title: "Shadowing Report, Oct 14 to 15, 2026",
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
      ...["steps1", "steps2"].map((reference) => ({
        reference,
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 360 } } } }],
      })),
    ],
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({ text: "Shadowing Report, Oct 14 to 15, 2026 | Page ", size: 18, color: "7F7F7F", font: FONT }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "7F7F7F", font: FONT }),
          ],
        })],
      }),
    },
    children: body,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(OUT, buf);
  console.log("wrote", OUT);
});
