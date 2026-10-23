# Shadowing Report

*Wednesday, October 14 to Friday, October 23, 2026 (seven shadowing days). Version 2: ranked summary up front, detail in the appendix*

Prepared for Baruch Grossman (COO) and Peleg.

## Why this shadowing, and what it is for

This grew out of the Grok bot effort. Avi G started automating his own tasks with Claude, and after talking with Baruch Grossman and Peleg we decided to build on the Grok bots the company already pays for, which go straight to the data. I was asked to find out what else can be automated. My reporting site stays as a manual report runner and is not changing.

I came in with a clean view, so this report records what I saw people actually doing, which is not always what their title says. The first pages are the decisions: what to act on now, the top five opportunities, the F&O settings fixes, and a spec for each bot. The appendix has the detailed notes from every session.

# Summary

Seven days, eight people shadowed. Most of the work I saw is people reading one screen and typing into another, forwarding emails by hand, and keeping track of things on paper, in notebooks and in shared Excels. The clearest bot, and the most measured time, is **Daniel's channel files built from the spec sheet**. The **payment to container release chain** is the biggest money risk, but only when cash flow is tight. About eight problems are **F&O settings, not bots**, and are the fastest wins. A few card and check practices should be fixed now, whatever we automate.

# Act on Now

> **Do these regardless of the bot work**
>
> - **CVC codes on paper and by email (Suzanne, Day 3).** Card security codes are written in a notebook because F&O doesn't store them, and customers email card details. PCI rules forbid keeping the CVC after a payment is authorized. Decide how card payments are taken without keeping it (for example a payment link or a processor that stores the card).
> - **Printed check photo deposited (Chani, Day 4).** A customer photographs the check and emails it; Chani prints it, cuts it out and runs the printout through the deposit scanner. Ask OceanFirst whether this is allowed under the deposit agreement. If not, ask the customer for the original or for ACH.
> - **Contact Electric (5702), Day 4.** Robert forwarded several unpaid invoices; my read is nothing has been paid since April. Confirm and settle.
> - **About $300k owed by non-paying customers (Baruch Salamander, Day 5).** He reviews each one over 120 days for chase vs write-off, and Suzanne also chases late customers. Agree who owns collections and set a date for the write-off decisions.
> - **$38k EZPass claim (Moshe Aryeh Grossman, Day 6)** with a police report filed. Someone should own the follow-up.
> - **Two Amazon credit holds open over a year** that Peleg and Troy could not release (Day 4).
> - **Tell Tina whether to continue her ChatGPT listing-check tool.** She paused it when she saw the Grok rollout (Day 4).

# Top 5 Opportunities

My ranking, by time and money at stake and how clearly the notes describe the work. Figures are only what the notes and follow-up answers support (see What to Measure Next).

| # | Opportunity | What's at stake (from the notes) | Fix type | Suggested owner |
| --- | --- | --- | --- | --- |
| 1 | Spec sheet to channel file builder | About 8 spec sheets a week at about 15 to 20 minutes each, roughly 2 to 2.5 hours of Daniel's week, then at least 3 reviews per file. A wrong curtain width on Wayfair reached a customer. | Bot | Peleg with Daniel and Tina |
| 2 | Payment to container release tracker | Release depends on a chain through a supplier Excel, Allways, two shared Excels, F&O and an OceanFirst wire draft, with status by cc'd email and WhatsApp. Containers rarely go past free time; it happens at random, when cash flow is tight. Rule: once 4 working days of free time run out, demurrage is about $300 to $350 per container per day. | Bot now; Allways API later | Peleg with Moshe Aryeh Grossman |
| 3 | Weekly Amazon inventory file for OnePlatform (Vendo) | Every Friday Daniel rebuilds the file and marks each item in, low or out of stock, then Tina adds next available dates from open PO lines and Goods in Transit with VLOOKUPs. Her part is under 10 minutes; Daniel's isn't measured, and Tina says he may be leaving. Everything we send is already in F&O, so the whole file can be built from it. Out-of-stock items are not marked temporarily unavailable on Amazon. | F&O report first, then bot | Peleg with Tina |
| 4 | Payment entry and posting | Most of Suzanne's Day 1 afternoon (3:00 to 4:30). Two batches wouldn't post, one because the method defaulted to credit card, and the error didn't say why. She finds Chani's deposit email by searching for the total. | Settings first, then bot | Peleg with Suzanne |
| 5 | Money reports and notices on a schedule | Recovery totals emailed by hand daily to six people (Avi G doesn't use them; Mordy ran reports on only two days). US Customs pulls forwarded to five people. Credit card due dates go Avi G to Chani to a desk calendar to Isaac Grossman. | Scheduled reports + routing bot | Peleg with Baruch Salamander and Chani |

# F&O Settings Fixes (for Peleg)

These are configuration or data fixes, not bots. Some may sit on the EDI side (Dan Holland) rather than F&O; Peleg to confirm.

| Fix | What happens now | Seen |
| --- | --- | --- |
| Payment method defaulting to credit card on check payments | Suzanne's batch wouldn't post; she deleted and re-entered payments until she found it | Day 1 |
| Posting errors that don't name the cause | Suzanne hunts for the bad line by deleting payments | Day 1 |
| Payment proposal selects every line and sets the method | Chani unticks everything except what she wants to pay | Day 4 |
| Mason orders don't close automatically | Charmaine checks Mason against F&O and closes orders by hand | Days 1, 2 |
| Phone numbers only in InOrder | Suzanne looks up phone numbers in the old system | Day 1 |
| No check on prices with more than 2 decimals | One reached Kohls through DSCO and nothing caught it | Day 4 |
| Several ETA fields in F&O | Nobody is sure which is right; Avi G's ETAs come from an Excel instead | Day 6 |
| Amazon credit holds that can't be released | Two open over a year | Day 4 |

*Not a setting, but just as quick:* replace the check printer drum ($300 to $400) so checks stop going through the office inkjet (Day 4).

# Bot Specs

Each is written so it can be built or rejected. "Confirm first" is what I still need to find out before it's sized.

### A. Container release tracker (opportunity 2)

|  | Detail |
| --- | --- |
| Trigger | A supplier invoice or BOL arrives, a wire is drafted or cleared, or a container nears the end of free time |
| What it does | Keeps one status per BOL and container: invoice received, BOL received, in Allways, wire drafted, wire cleared, factory told, freight released. Warns Moshe, Chani and Isaac Grossman when a container is close to 4 working days at the port without a release. |
| Data | Supplier invoice Excel, the shared ETA and payments Excels, F&O POs and voyages, OceanFirst wire drafts, Allways portal (API or EDI later) |
| Evidence | Day 6: the seven-step invoice and BOL chain; the 7 containers waiting on the factory payment; status passed by cc'd email and WhatsApp. Follow-up: containers usually don't go past free time, except at random when cash flow is tight. Zundel takes the payments Excel and applies the payments to our POs in F&O. About 5 wires a week, each released by Isaac Grossman. |
| Confirm first | What splits the wires |

### B. Channel file builder (opportunity 1)

|  | Detail |
| --- | --- |
| Trigger | "Build the Wayfair (or Home Depot, Amazon, Kohls) file for product line X", or a new customer product list from Jamie |
| What it does | Fills the customer's template from the main product spec sheet, using only dropdown-valid values, flags missing attributes, checks dimensions against the spec sheet, and drafts the email to go with it |
| Data | Main product spec sheet, each customer's template |
| Evidence | Day 2: Daniel's Wayfair sheet, column-to-column copy and paste, info read off product images, 15 to 20 minutes per line; Tina's 3 reviews; the 55" curtain width error. Day 4: Home Depot spec sheet. Follow-up: about 8 spec sheets a week, covering all our dropship customers. |
| Confirm first | Which attributes are missing from the main sheet |

### C. Weekly Amazon inventory file for OnePlatform (opportunity 3)

|  | Detail |
| --- | --- |
| Trigger | Weekly, on Friday (OnePlatform, formerly Vendo, updates its file usually Thursday, sometimes Friday) |
| What it does | Builds the whole file from F&O: ASIN, SKU, UPC, product name and status for every item. Status comes from on-hand in warehouse 1600: 11 pieces or fewer is out of stock, under 50 is low, 50 or more is in stock. For low and out-of-stock items it adds the next available date: the Goods in Transit date where there is one, otherwise the earliest open PO date, blank if neither. Discontinued items are marked disco while we have stock and obsolete once we don't. Then it drafts the email to Matt and Reggie, cc Avi G and Tara. First step (my idea): an F&O report with the dates already coalesced, even before anything else changes. |
| Data | F&O items (ASIN, SKU, UPC, name, status), on-hand for 1600, open PO lines, Goods in Transit; OnePlatform's file only as a cross-check |
| Evidence | Day 2: Tina's six-step download, filter and match. Day 7: the full weekly cycle. Daniel restarts the file every week and emails it to Tina as an attachment. Tina's part is under 10 minutes; when she used to do Daniel's part, a lookup formula wrote the status automatically. The only OnePlatform fields we don't have (Amazon product line, subcategory) aren't needed in what we send. The whole list goes out every week. Out-of-stock items aren't marked temporarily unavailable with an in-stock date, by us or OnePlatform. |
| Confirm first | Items on the file and how many need dates; on-hand or available quantity; whether the 30-day Goods in Transit cutoff should stay (it follows how Avi Altman updates dates); who should mark items temporarily unavailable |

### D. Remittance matching assistant (opportunity 4)

|  | Detail |
| --- | --- |
| Trigger | A check arriving by mail or email, with the remittance attached; for mailed checks, Chani's deposit email with the scans and batch total |
| What it does | Finds the email for the batch, proposes a match of each check to open invoices, shows deductions and short pays with the difference, and checks the payment method before posting |
| Data | The check and its attached remittance, deposit email and scans, F&O open customer transactions |
| Evidence | Day 1: searching email for the total, postdated checks, payments landing in the wrong journal, the credit memo worked out by hand |
| Confirm first | Checks per week |

### E. Scheduled money reports (opportunity 5)

|  | Detail |
| --- | --- |
| Trigger | A schedule, instead of a manual daily email |
| What it does | Sends recovery totals, the Amazon payments and deductions breakdown, and aging by salesman from the data, only to people who use them |
| Data | SPS Commerce, Vendor Central, OceanFirst, F&O aging |
| Evidence | Day 5: daily recovery emails to six people with MTD and YTD totals; SUMIF aging by salesman built by hand; about $146k recovered this year |
| Confirm first | Which recipients use which report; how long each takes him |

### F. Notice router (opportunity 5)

|  | Detail |
| --- | --- |
| Trigger | A US Customs pull email or a credit card due-date email from Avi G |
| What it does | Sends Customs pulls to Mordy Berman, Zundel, AP, Avi Altman and Baruch Salamander; puts card due dates on a calendar for Chani and Isaac Grossman so the account is funded. Some of this may only need a mail rule. |
| Evidence | Day 6: Customs forwards; Day 4: card due dates copied into the desk calendar |
| Confirm first | Whether Customs pulls are part of the bank funding checks |

### G. Collections worklist

|  | Detail |
| --- | --- |
| Trigger | Weekly, before Suzanne's Thursday to Friday follow-up |
| What it does | One list of overdue customers with phone number, open invoices, balance and past notes on the same screen, shared by Suzanne and Baruch Salamander |
| Evidence | Day 3: printed aging, about 5 minutes per call, clicks for transactions, balance and phone; Day 5: Baruch Salamander's 120-day sheet |
| Confirm first | How Suzanne and Baruch Salamander split collections |

### H. Customer service email router

|  | Detail |
| --- | --- |
| Trigger | Every new email in the customer service inbox (Charmaine's first; Evelyn's could follow) |
| What it does | Sorts each email and routes or answers it: customers who bought through Amazon, Kohls or Wayfair get the standard "contact the retailer" reply; order and sample requests go to Justin; replacement-part requests go to Jhony; packaging and shipping questions go to the warehouse (Brandon, Keith); deductions go to Baruch Salamander; retailer cancellations are checked in F&O for whether the order is already invoiced and sent to the warehouse in time. Everything else stays with Charmaine, with the order, invoice and tracking pulled up next to it. |
| Data | Customer service inbox, F&O sales orders and invoices, CHUB, FedEx and UPS tracking |
| Evidence | Day 1: three Amazon and Kohls customers sent back to the retailer; emails forwarded to Evelyn; the 4-minute sample order email to Justin; a replacement plug question to Jhony; a Lowes cancellation emailed to Keith with no response, which was missed and became a manual 810 invoice that Lowes may not pay; Teams down, so she called Brandon for packaging info. Day 2: a replacement-part request forwarded to Jhony; Evelyn forwards order emails to Justin; Charmaine reviews her emails several times. Days 3 and 4: order emails forwarded to Justin by hand. |
| Confirm first | Customer service emails a day, and how many are forwarded |

# Bigger Projects (outside this scope)

- **One central chat channel** for internal communication and report questions, instead of phone, email, Teams and WhatsApp (my idea).
- **PortPro to F&O link** for container and trucking status. Bais Trucking is a separate company but overlaps heavily with Achim.
- **Allways API or EDI into F&O** so vessel ETAs are exact dates rather than an Excel updated when someone remembers.

# What to Measure Next

- For each top-5 item: how often it happens and how many each time. Still open: items on the weekly OnePlatform file and how long Daniel's part takes; Suzanne's checks a week; how long Baruch Salamander's reports take.
- Still to shadow: Justin, the warehouse and sales. Repeat sessions with Daniel, Moshe Aryeh Grossman and Avi Altman.

**Next step:** pick which of bots A to H to build first, and have Peleg take the settings list.

---

# Appendix: Detailed Observations

Below are my detailed notes from each session, as in version 1. The old Key Findings, Open Items and candidate modules are left out, because the pages above replace them.

Times marked \~ are estimates from the order of events. The original notes only have a few exact timestamps. Text in italics inside parentheses are the observer's own comments, kept from the notes. The observer did not interrupt or ask staff why they work the way they do; questions were limited to what they were doing when it wasn't clear. Differences in method between people are recorded as observed, not explained. Mistakes are recorded as things the systems and processes allowed, not as anyone's failing.

"Avi" with no surname means Avi Grossman (Avi G). Avi Altman is always written in full, as is Moshe Aryeh Grossman. Baruch Salamander is a different person from Baruch Grossman.

# The Seven Days at a Glance

| Day | Time | Activity |
| --- | --- | --- |
| Wed Oct 14 | 9:45 to 12:15 | Shadowing Charmaine (Customer Service) |
|  | 12:15 to \~2:45 | Lunch and an online appointment (not shadowing) |
|  | 2:45 | Mincha |
|  | 3:00 to 4:30 | Shadowing Suzanne (AR) |
|  | \~4:30 | Interruption about the reporting app (observer's own work) |
| Thu Oct 15 | 9:52 | Evelyn: her role, as described by Chani |
|  | \~10:00 | Moshe Aryeh Grossman not in yet |
|  | 10:00 to \~10:40 | Avi Altman (buying team) |
|  | 10:43 to 12:00 | Tina (ecommerce feeds and PO follow-up) |
|  | 12:00 to \~1:45 | Break (not shadowing) |
|  | \~1:45 to 2:00 | Daniel (building a Wayfair spec sheet) |
|  | \~2:15 to 2:30 | Moshe Aryeh Grossman (PortPro data and ChatGPT) |
|  | From 2:50 | Charmaine, afternoon (Wayfair deductions, Mason orders) |
| Fri Oct 16 | From 9:00 | Suzanne (AR), morning: credit card payment, aging follow-up calls |
| Mon Oct 19 | 9:00 to \~10:00 | Chani (AP and office manager) |
|  | \~10:00 to 11:00 | Not shadowing |
|  | 11:00 to 11:50 | Tina |
|  | 11:50 | Daniel |
|  | After 11:50 | Suzanne (start time not given) |
| Tue Oct 20 | From 11:00 | Baruch Salamander (deductions, reports, collections) |
| Wed Oct 21 | \~11:30 to 12:00 | Moshe Aryeh Grossman (first note says 11:15; a later note says about 11:30) |
|  | 12:22 | Moshe Aryeh Grossman, Achim side: wire, bill of lading, containers |
| Fri Oct 23 | Not given | Tina (Daniel's part described): weekly Amazon inventory file for OnePlatform (Vendo) |

## Who's who

| Name | Role as understood from the notes |
| --- | --- |
| Charmaine | Customer Service |
| Suzanne | Accounts Receivable (AR). Works closely with Chani |
| Chani Kraus | Officially the office manager. Also assists Isaac Grossman and handles AP and AR: deposits checks, pays vendors by check and ACH, pays freight to the shipping lines |
| Evelyn | Forwards order emails to Justin, sometimes ships replacements, handles the front door |
| Tina | Ecommerce, inventory feeds and PO follow-up (working label) |
| Daniel | Works for Tina and Avi G. Builds submission and spec files and manages content, so every new item's content reaches every customer that sells it. No access to open PO lines or goods in transit |
| Avi Grossman (Avi G) | Head of sales, and so head of CS questions. Also assists the CEO. First tester of the Grok bots, working with Baruch Grossman and Peleg; handles credit card payments and tells Chani when they are due |
| Avi Altman | Buying team; works for Moshe Aryeh Grossman. Does most of the data entry into F&O and is supposed to enter vessel ETAs |
| Moshe Aryeh Grossman | Head of buying. Works for both Bais Trucking and Achim's buying team |
| Baruch Grossman | COO, warehouse. One of the two people behind the operation, with Peleg |
| Baruch Salamander | Deductions and disputes (Walmart, Home Depot, Amazon, Lowes) in SPS Commerce; recovery and Amazon reports; aging reports by salesman; bank funding check; collections on late customers |
| Isaac Grossman | CEO. Signs checks and releases wires |
| Peleg Ovadia | Developer / IT. Main in-house technical person; knows F&O settings and the data best; DBA for the Grok bots |
| Mordy Berman | Officially the CFO; most money decisions are made directly by Isaac Grossman. Offsite, not shadowed. Receives Baruch Salamander's recovery reports |
| Ken Kaplan | Long-tenured employee. Cc'd on the recovery reports; sent Chani a list marked "OFB" |
| Zundel | On the payments team, which applies payments to POs and voyages in F&O. Not seen or shadowed. Cc'd on the recovery reports |
| Dan Holland | In charge of IT and EDI. Works with Peleg |
| Troy | Consultant who helped migrate to F&O; wrote the item creation manual Moshe uses. Mostly gone now |
| Keith Hamby / Brandon / Jhony / Robert | Warehouse. Keith is floor manager; Brandon is the easiest to reach; Jhony handles parts and replacements; Robert also helps Isaac Grossman and forwards bills sent to his email |
| Sal D'Rienzo | Long-tenured; manages the warehouse and is president of Bais Trucking. Has access to the vessel tracking Excel |
| Justin | Enters orders and sample orders |
| David Dweck / Jamie / Heshy | Sales. Jamie also designs the curtain side of the company |
| Matt / Tara | At OnePlatform (formerly Vendo). Matt gets the weekly inventory file; Tara is cc'd |
| Reggie | Our Amazon rep. Gets the weekly inventory file with Matt |

**Companies:** Bais Trucking (sister company of Achim, runs on PortPro); Allways Shipping (customs, vessel bookings, container assignments; portal with exact locations; has API and EDI integrations available); All Blinds Co. (supplier in China); OnePlatform, called Vendo when we started with them (middleman between us and Amazon; uses our weekly inventory file for advertising decisions on Amazon); Lincoln Supply, Family Dollar and Herman's (customers). **Locations:** 5702 is the Brooklyn office and 1600 is the Jersey warehouse.

**Systems:** F&O (main ERP), CHUB (order and invoice system for Lowes and others), InOrder (old system, still used for phone numbers), PortPro, DSCO Rithum (Kohls inventory feed), SPS Commerce (deductions and disputes), Retail Link (Walmart), Amazon Vendor Central, OceanFirst (bank portal), Allways portal, Lowes portal (WebEDI), Wayfair portal, Mason portal, Teams, WhatsApp, Excel, email, EZPass, Verizon dashcams, FedEx and UPS tracking, a desk calculator, printed manuals and templates.

# Part 1: Charmaine, Customer Service, Day 1 (9:45 to 12:15)

**Systems and tools:** F&O, CHUB, Lowes portal (WebEDI), Wayfair portal, Mason portal, email, Teams, FedEx and UPS tracking, a printed Lowes procedure manual, printed email templates.

| Time | Episode | Type |
| --- | --- | --- |
| 9:48 | Amazon customer asks for a replacement | Phone |
| 9:54 | Wayfair cancellation and Mason open orders | Portal admin |
| \~10:00 to 10:20 | Lowes missed cancellation → manual 810 invoice | Portal admin |
| 10:20 | Lowes CS: wrong tile pattern shipped | Phone |
| \~10:30 | Email triage, round 1 (Nexus/retro tile, Morningstar, etc.) | Email |
| \~10:40 | Lowes invoice follow-up and Kohls shade call | Portal / Phone |
| \~10:45 | Email triage, round 2 (voicemails, Morningstar reply) | Email |
| \~10:50 | Filing the printed Lowes pending list | Paper |
| 11:00 to 11:04 | Sample order request to Justin | Email |
| \~11:05 | Voicemail: customer wants to buy direct | Voicemail |
| Recurring | Mason portal checks | Portal admin |
| \~11:15 | Email triage, round 3 (Kart It, Wayfair overdue, gift valance) | Email |
| \~11:30 to 12:15 | Home Depot ship-to-store call and UPS claim | Phone |
| During UPS hold | Retro tile customer replies → escalated to Avi G | Email |
| End | Teams down → calls Brandon for packaging info | Phone |

## What happened

### Amazon and Kohls customers (calls and emails)

Three separate contacts came from customers who bought through other retailers: an Amazon replacement request, an Amazon misaligned-print complaint, and a Kohls noisy shade. Each time Charmaine directed them back to the retailer. The Amazon caller said Amazon had given her wrong information and told her to call Achim. Our items don't fall under the 30-day return policy, and the call was repetitive because the customer did not accept that. The Kohls caller asked many questions about Kohls' return policy.

### Wayfair and Mason (portal admin)

- A Wayfair cancellation email came in. She verified it in the Wayfair portal and in F&O.
- Mason emailed about open orders. She entered the invoice numbers into F&O one by one (e.g. IN001041663, 41684, 41667).
- For large batches she downloads a file from Mason, fills it in and re-uploads it. This time there were only a few, so she did them manually.
- Manual path: Sales order → My view → filter by PO → Invoice → open the invoice (extra step) → copy and paste.
- Nine new Wayfair orders arrived today, to be checked at lunch for shipping.
- She checks Mason periodically against F&O. Mason doesn't close orders automatically, so she closes them by hand.

### Lowes missed cancellation → manual invoice (\~10:00 to 10:20)

Lowes asked for a cancellation. Charmaine emailed Keith and got no response. When she checked, the order was already invoiced, so the cancellation had been missed. CHUB can't invoice it, so she invoices manually on the Lowes portal. Lowes sometimes pays these and sometimes doesn't. *(It is unclear where the cancellation request was lost.)*

The manual process:

1. Sign in to the portal and wait for the OTP code, then enter it manually. She signs in and out every time, so every visit has an OTP wait.
2. WebEDI → transaction 810 → create new.
3. Select a remit-to account. Copy the PO date, invoice type, currency code, PO received date and PO actual ship date from the order.
4. Add tracking, check FedEx to confirm it's out for delivery, then add the PO number, invoice date and invoice number.
5. Add the Lowes buying store number from CHUB. *(It may exist elsewhere too, but she uses CHUB.)*
6. Add items one by one. The item number and description come from CHUB, and the unit code and price from F&O.
7. Check the manual for allowances (none) and discounts (not applicable). Net due days: 60.
8. Shipment and payment method: from F&O (order → shipment). Method = collect, BOL = tracking number, carrier = FedEx.
9. **Error 1:** the first save lost the item line because "Add item" had not been clicked. She re-entered it.
10. **Error 2:** the first submit failed because the discount description was blank. She checked the manual and entered "not applicable."
11. Finished at 10:20.

Afterwards she remembered she had not printed the list of pending manual invoices. She printed the web page itself, so the printout is hard to read. She keeps the printed lists on her desk with previous ones and follows up with Suzanne to see whether they have been paid.

*Side note:* before returning to this claim, she emailed Jhony. A customer on the phone was missing a part, so she asked whether we have replacements for the Buono II Bradford Rod white plastic plug. She checked the email twice before sending.

### Lowes CS call: wrong tile pattern (10:20)

Lowes customer service reported that a customer received two items incorrectly. Charmaine opened the order, pulled warehouse tracking and checked FedEx. Everything shipped in one box. She verified the catalog item number against CHUB, asked for the pattern numbers from the boxes, and checked the batch number on the back. She also offered to talk to the customer directly.

The customer ordered 5 boxes of FTV462 and received 44820 instead of 46220 on 2 of them (3 were correct). **Resolution:** Lowes credits the customer, who keeps the tiles, and then places a new order. Charmaine no longer enters orders in the new system, and since Lowes has an allowance she tells them to credit and reorder. *(It is odd for 3 of 5 identical items to ship right and 2 wrong. It happens from time to time, and the patterns look nothing alike.)*

### Email triage (three rounds)

- **2023 customer:** the item broke, the replacement arrived damaged, and there is no order info at all. Saved for later.
- **Morningstar blind:** arrived without a wand or hardware. She forwarded it to Evelyn, then replied that it will ship by end of week with tracking to follow, and apologized.
- **Gift recipient:** wants to order hardware after receiving the blind as a gift without it.
- **Previous house owner:** wants a replacement valance for a mahogany MF blind (similar to the gift email).
- **Nexus tile lifting off the floor:** in CHUB it was a retro floor tile from Home Depot, ordered in August. She copied the images into the reply, apologized, and asked whether the tiles were acclimated, what the subfloor is, and whether the temperature is regulated. She reread it twice and sent it. The customer later replied that she acclimated for a week, the temperature is 70, and the subfloor is concrete. Charmaine escalated it to Avi G. *(Acclimated means letting the tiles sit in the room before installation.)*
- **Kart It return:** she checked tracking to confirm it reached the warehouse.
- **Wayfair overdue alert:** she checked the portal and found nothing overdue.
- **Voicemail emails:** one had nothing on it, and for the other she searched her emails for the match.
- **Sample order to Justin (11:00 to 11:04):** she wrote to Justin (cc Baruch Grossman, Peleg and Chani) asking him to enter a no-charge sample order, send back the sales order number, and package carefully to avoid damage. She copied from a printed email sheet and F&O and reviewed the email many times. **It took 4 minutes for one email.**

### Other calls

- A voicemail from a customer who ordered from Lowes and wants more at a lower price, so he wants to order straight from Achim. She did not respond. She takes her headset off each time she listens to a voicemail.
- A Kohls customer called about a shade that makes noise going up and down. She told them to contact Kohls for a replacement.

### Home Depot ship-to-store call and UPS claim (\~11:30 to 12:15)

Home Depot CS reported a ship-to-store order with 2 items missing. CHUB showed multiple boxes. On UPS, all showed delivered except two, which show delayed in Stafford, TX and appear lost. **Resolution:** the customer places a replacement order and we file a UPS claim. *(The order was somehow closed without being received short. The observer thinks she was talking to a Home Depot rep.)*

Charmaine wrote everything down, called UPS and waited on hold. Teams wasn't working (she had emailed Peleg the day before with no reply), so she called Brandon to get the packaging details UPS needed: cushioning, single or double wall, and tape type. She picked Brandon because he is the easiest to reach, rather than Jhony or anyone else in the warehouse.

# Part 2: Suzanne, AR, Day 1 (3:00 to 4:30)

**Systems and tools:** F&O (customer payments, journals), InOrder (still used for phone numbers), a desk calculator, paper checks and remittances, email, highlighters.

**Working relationship:** Chani (AP and office manager) deposits checks, scans them and sends them to Suzanne. She also gives Suzanne a paperclipped pile for each batch.

| Time | Episode |
| --- | --- |
| 3:00 to \~3:05 | Deductions list sent to Avi G (Lowes, Home Depot) |
| \~3:05 to 3:08 | Account breakdown call to David Dweck (sales) |
| 3:08 to 3:13 | Calling Herman's about a postdated check |
| 3:13 to 3:22 | Payment entry, customer 5121 |
| 3:22 to \~3:28 | Customer 472: wrong tariff deduction |
| \~3:28 | Customer 462: $200 short-pay email |
| 3:30 | Customer 11598 |
| \~3:30 to 3:45 | New journal: deposit structure and errors |
| \~3:45 to 3:50 | Matching a batch to Chani's email |
| 3:50 to \~4:10 | Batches that won't post |
| \~4:10 to 4:30 | Return → credit memo |

## What happened

### Deductions list (3:00)

She sent a list of Lowes and Home Depot deductions to Avi G, cc Chani, Tina and Isaac Grossman. It had taken her a couple of days to put together.

### Call with David Dweck (salesman, ext. 123)

She gave him a breakdown on customer 6903: they order about every 2 months, do about $12k a year, and are good business but used to order more often. Mid-call, Chani brought in a check from HD Supply and took it to her office to add to a deposit batch. It will come back after deposit.

### Herman's (1098), 3:08 to 3:13

Path: Customer payments → Menu → Customers → Herman's. The phone number wasn't in F&O, so she got it from InOrder, the old system *(two years after the switch to F&O)*, then added the number and the email to F&O. No pickup on the first call, so she used her cell phone. A woman named Pam answered, and Suzanne asked for Ricky, who was at the other store. She asked Pam to remind him to email the postdated check.

### Payment entry (3:13 to 3:30)

*(The observer's presence may have affected pace and care here; she said she was nervous being watched.)*

- **Customer 5121 (3:13 to 3:22).** Add payment → date, reference, amount → tick off orders at the bottom, matching the remittance. She ticked the wrong orders at one point, noticed, and rechecked. The invoice list is scrolled rather than sorted or filtered, and the invoices were out of order, so each had to be checked by hand. She saved the journal, then entered a "destroy in field" deduction for the remainder. That is a deduction reason on the credit: the customer throws the goods out and we write them off.
- **Customer 472.** Same steps. They claimed deductions, so she used a desk calculator to check the math. They also took a tariff deduction, which is wrong. She left it open and told Avi G, Mendy and others to go back to the customer to fix it. She highlighted her notes at the bottom of the check and set it aside.
- **Customer 462.** They shorted the payment by $200. She emailed them to ask why and spent time wording the email. *(A template could help.)* She highlighted her notes and set the check aside.
- **Customer 11598 (3:30).** She matched the remittance to open invoices as before and left the journal open because of issues.

The observer assumed payments are applied to the top orders and worked down. What was observed was invoice-by-invoice matching against the remittance.

### How deposits are structured

For every journal she deletes the default description and enters the deposit amount as the name. Every deposit is one journal entry, and every check on the deposit is a customer payment.

- Customer 5194 sent postdated checks, so she entered it as a partial payment.
- Customer 6102 matched an invoice exactly.
- The last 4 payments ended up in the previous journal, so she deleted it, created a new one and re-added them. *(She was talking with the observer at the time.)*

### Matching a batch to Chani's email (\~3:45 to 3:50)

Chani gives Suzanne a paperclipped pile of checks, with a calculator total slip printed at deposit time. Chani also emails the scanned checks and deposit batch. Suzanne takes the total from the slip and searches her email for that amount to find the right message. She then checks the math on deductions and credits while entering payments from the remittance.

### Batches that won't post (3:50 to \~4:10)

- **Batch 1.** After rechecking all the checks, it errored. She set it aside with the other open batches. There was an extra payment, and once she found and deleted it, the batch posted.
- **Batch 2.** It also failed, and the error didn't show the cause. She deleted a payment and re-entered it, then found it: the method of payment had defaulted to credit card, but they paid by check. She changed it and it posted.

### Return → credit memo (\~4:10 to 4:30)

The reason behind the earlier deduction came back: it was a return we had picked up. She printed the customer's attachment to attach to the batch. Because the batch had already posted, she created a credit memo. To verify the amount she went Customer → Balance → Sales order → View details → Show invoice → Lines, added up the pricing, and confirmed it matched the deduction taken off the check.

# Part 3: Day 2 Morning: Evelyn and Avi Altman

## Evelyn (9:52)

Per Chani, Evelyn forwards order emails to Justin, sometimes ships out replacements, and handles the front door. The observer also asked Chani about other roles: Baruch Salamander (she doesn't know exactly what he does; he emails numbers out all day and looks like a report runner), Tina and Daniel (Daniel works for Tina and Avi G), the sales team, and the buying team (Moshe Aryeh Grossman and Avi Altman).

## Moshe Aryeh Grossman (\~10:00)

Not in yet. He usually gets in between 9 and 10 and starts the day cleaning up Bais Trucking in PortPro. He was shadowed later in the day (see Part 6).

## Avi Altman (10:00 to \~10:40)

*Lower confidence: the observer found this block hard to follow in real time.*

- Emailed a supplier: wrong color on some items.
- Worked from an Excel sheet and an email, flagging emails for later.
- Replied to an email about allocations: we don't need weekly allocations, only every couple of months.
- Opened F&O and PortPro, then deleted a row off the main Excel sheet. It appears he checks PortPro for status changes and deletes those rows from the sheet.
- Opened the purchase order Excel file but did nothing with it, and went back to email. Opened Goods in Transit, then back to email.
- **Pattern:** rapid switching between PortPro, F&O, email and Excel.

# Part 4: Tina, Ecommerce and Inventory Feeds, Day 2 (10:43 to 12:00)

The only exact times are 10:43 and 12:00. The episodes below are in the order they happened.

| # | Episode |
| --- | --- |
| 1 (10:43) | Kohls inventory upload (DSCO Rithum) |
| 2 | Suzanne's call; Teams problem |
| 3 | Amazon return label → email to Vendo |
| 4 | Deduction disputes: Avi G → Baruch Salamander |
| 5 | Low-stock vs open-PO matching workflow |
| 6 | Chani: problems with Lincoln Supply |
| 7 | Sending the Amazon inventory file |
| 8 | Reviewing Daniel's submission sheet |
| 9 | Jamie's call: new customer product list |
| 10 | Call from David Dweck (content not heard) |
| 11 | Home Depot mats PowerPoint |

## What happened

### 1. Kohls inventory upload (10:43)

- She uploaded an inventory file manually in DSCO Rithum. She messaged Daniel that Kohls has quantities on items that shouldn't have any, which she needs to fix.
- Kohls inventory is updated manually every day. **Rule:** if inventory is under 5, send 0. Always send the line with 0 and never leave it off, otherwise Kohls may shut the item down entirely. Discontinued items go to 0 but stay on the file so they stay live, since we may still sell one now and then.

### 2. Suzanne's call; Teams

Suzanne called her (topic not heard). Tina's Teams app isn't working, so she uses web Teams, which doesn't download files the usual way.

### 3. Amazon return label

Keith sent a message with an image of an Amazon shipping label: we received a return from Amazon today and aren't supposed to. She emailed Matt at Vendo and Reggie, cc Avi G.

### 4. Deduction disputes

Avi G emailed a list of invoices needing disputes. Tina forwarded it to Baruch Salamander (who appears to handle Amazon disputes) and asked whether he is up to date on disputing. The list wasn't fully clear, so she went back to Avi G.

### 5. Low-stock vs open-PO matching (the largest example so far)

1. Download the master spec sheet from Daniel.
2. In F&O, pull all POs / open PO lines.
3. Check the spec sheet for low-stock items and paste them into one field on the open POs so they filter.
4. Download the filtered results.
5. Look up the spec sheet against the open PO download to see which low-stock items are on open POs.
6. Also download Goods in Transit, because some open PO lines don't have updated dates.

**Whole workflow:** Daniel downloads a file from Vendo's SharePoint and adds low-stock and out-of-stock items. He sends it to Tina, who adds the next available date (Daniel has no access to open PO lines or Goods in Transit). She reviews it and sends it back to Vendo. Day 7 (Part 13) has the full weekly process. *(Observer's view: this matching would be better done in the system itself, rather than a low-stock list matched against an F&O export.)*

### 6. Lincoln Supply

Chani came in about problems with customer Lincoln Supply. Tina called Brandon about the shipping to them. The issue was not resolved while the observer was there.

### 7. Sending the Amazon inventory file

To send the inventory file she opens an email, opens Explorer, goes to the folder with Amazon's inventory files, drags the file into the email and sends.

### 8. Reviewing Daniel's submission sheet

She reviewed every column of a submission sheet from Daniel. They review it **at least 3 times** before it goes to any ecommerce customer. The file carries all the ecommerce info and goes to every customer who needs it.

### 9. Jamie's call: new customer

Jamie called about what looks like a new customer and sends a list of products needed. Tina forwarded the email to Daniel to build the file.

### 10. Call from David Dweck

The observer was still typing earlier notes and did not listen in.

### 11. Home Depot mats PowerPoint

She had saved a file into Documents instead of the customers folder, and moved it with cut and paste and renamed it. It is a PowerPoint of mats for Home Depot, with images made in ChatGPT and room settings requested from them. She edited a long prompt in Word, using Word's find and replace, and appears to keep a templated prompt that she copies and pastes. She handles many files, and the folders are spread across locations, which means a lot of clicking to find things.

# Part 5: Daniel, Wayfair Spec Sheet, Day 2 (\~1:45 to 2:00)

Observed from about 1:45, close to the beginning of the sheet. Mostly repetitive work, so there was not much to see.

**Example observed:** 4 products from one product line, all toilet seats in different sizes. That was the easy case, because the shared info could be pasted into 4 cells at once. **Estimate: about 15 to 20 minutes per product line.**

- He is building a **Wayfair spec sheet** in Excel, typing one product at a time. It has a different layout from our own internal product spec sheet, which holds all our products and their ecommerce info (the same one Tina used this morning). Wayfair expects its own template.
- He copies and pastes from our product spec sheet into the Wayfair sheet, matching columns to columns.
- He works quickly and uses keyboard shortcuts well, though that may be because he was being observed.
- For some columns on the Wayfair sheet he has to look at the actual product image (a toilet seat) to get the information. The same information is not on our main spec sheet. The observer didn't see which attribute it was.
- The Wayfair sheet works like a form with dropdowns and validation. Certain columns can't be typed into freely; the value must come from a list.
- By 2:00 he was nearly done. He then read the entire file through to check it, saved it, and emailed it to Tina to check over.

*(Observer's view: a bot or AI tool given the Wayfair template and our main spec sheet could build this on its own.)*

**Chain for ecommerce files so far (Tina and Daniel):** the main product spec sheet → Daniel builds the channel file (Wayfair, Amazon, etc.) → Tina reviews → sent out. Each customer expects a different template, and the work is column mapping plus filling gaps by hand.

# Part 6: Moshe Aryeh Grossman, PortPro and ChatGPT, Day 2 (\~2:15 to 2:30)

- Moshe Aryeh Grossman works for Bais Trucking and, as the buying team, for Achim. Bais Trucking is Achim's sister company but runs on a different system, PortPro.
- He now uses ChatGPT to analyze information about his loads and trucks. The process is manual: he takes screenshots of PortPro information, pastes them into ChatGPT, and talks to it. ChatGPT has trouble reading some details from the screenshots.
- He asks it different kinds of questions, such as driver assignments. One question, as best the observer recalls, was whether drivers assigned to routes could pick up from where they finish dropping off at a nearby location.
- He doesn't use ChatGPT all the time, only for complicated questions.
- He talks to it conversationally, which suggests he is comfortable with it.

*(Observer's side note: an automatic connector between PortPro and ChatGPT would work better than screenshots.)*

# Part 7: Charmaine, Customer Service, Day 2 Afternoon (from 2:50)

**Systems and tools:** email, voicemail, Wayfair portal, Mason portal, F&O.

| Time | Episode |
| --- | --- |
| 2:50 | Wayfair customer complaint: listing shows the wrong curtain width |
| Then | Voicemail and email review; customer service |
| Then | Wayfair deductions: accept or dispute |
| Then | Closing Mason orders by hand |
| Then | Wayfair deductions: CSV download |

Only 2:50 is an exact time; the other episodes are in the order they happened.

## What happened

### Wayfair customer complaint: wrong width on the listing (2:50)

A customer who bought through Wayfair complained about the width of the item. It arrived by email. On Wayfair's site the dimensions are wrong: the curtain is two connected panels, and Wayfair lists 55" per panel, but 55" is the size of the whole curtain. *(This is a product-data error on the channel listing; see module 8.)*

### Voicemail and email review

She listened to a voicemail, ran through emails and handled customer service issues, reviewing her emails a few times. At one point she forwarded an email asking for a replacement part to Jhony.

### Wayfair deductions: accept or dispute

- In the Wayfair portal she clicks the PO number, which shows the reason for the deduction. Late receipt: she accepts. Customer received the wrong item: she accepts.
- She works on this while answering customer service emails at the same time.
- She also accepts returns to Wayfair. *(It is probably part of our trade agreement with Wayfair that they take deductions for returns.)*
- **Method difference, Charmaine and Suzanne:** when Suzanne receives a deduction, she checks the original invoice to see whether the numbers match. Charmaine accepts Wayfair's deduction without that check. *(She may have checked in the past and now trusts the retailer's figures. Not asked.)*

### Closing Mason orders by hand

- This is the second part of what she did on Day 1 morning. She checks Mason a few times, and when orders close in our system she closes them in Mason manually. She says Mason orders don't close automatically like other customers' do.
- It is only a few orders, so she does them one by one instead of downloading and uploading a file.
- **Access path:** she starts from the sales order. She finds the sales order using the customer PO from the customer portal, clicks Invoice at the top (which lists the invoices for that order, usually one), then opens the invoice and copies and pastes from it. Opening the invoice is an extra step compared with copying from the invoice list.
- **Method difference, Charmaine and Suzanne:** the two work in opposite directions. Charmaine starts from the sales order, and when she needs invoice information she clicks Invoice at the top of the sales order. Suzanne starts from the invoice, and when she needs information from the sales order she gets there from the invoice. For copying invoice details into Mason, starting from the sales order adds steps.

### Wayfair deductions: CSV download

After going through another deduction, she went back in to download the deductions. Wayfair offers a CSV download, so she gets a normal-looking list, unlike the Lowes list from Day 1. She then reviewed it.

# Part 8: Suzanne, AR, Day 3 Morning (from 9:00)

**Purpose of the visit:** to see whether her morning flow differs from the afternoon on Day 1. What was seen was a different kind of work: customer follow-up on overdue invoices (collections), not the payment entry seen on Day 1.

**Systems and tools:** F&O (sales orders, dashboard, aging report, customer info, open transactions, balance), a printed aging report, email, phone, a paper credit card notebook.

| Time | Episode |
| --- | --- |
| 9:00 | Sales order: processing fee and credit card payment |
| Then | Dashboard; credit card notebook |
| Then | Email and aging report review |
| Then | Charmaine asks about an account number |
| Then | Email to a customer about unpaid, skipped invoices |
| Then, to 9:32 | Aging follow-up: call about a June invoice |
| After 9:32 | Aging follow-up: next customer |

Only 9:00 and 9:32 are exact times; the other episodes are in order. The observer's estimate is about 5 minutes per call or email. Suzanne said she does this follow-up every week, starting sometime on Thursday and going through Friday.

## What happened

### Sales order: processing fee and credit card payment (9:00)

- In a sales order she manually added a processing fee to the invoice first, then charged the credit card. Credit card payments get a processing fee.
- She backed out of the order and went back in *(probably a misstep)*, then added the credit card payment: click Header to show the header buttons → Open prices and discounts → select a credit card from the list.
- This customer changes credit cards often, so sometimes she has to add the new card first.

### Dashboard and credit card notebook

Her F&O dashboard looks well set up for her. She still keeps a paper notebook of credit card information, and customers sometimes email the card details to her anyway. F&O doesn't save the CVC code, so she has to record it somewhere. *(Observer's flag: card details on paper and in email are a security concern.)*

### Email and aging report review

She went through emails and checked the aging report, mostly confirming and reading rather than doing, like inbox cleanup.

### Charmaine asks about an account number

Charmaine interrupted to clarify an account number. Suzanne answered immediately while continuing her own work.

### Email to a customer about skipped invoices

She drafted an email to a customer about skipped invoices they have not paid. She cc'd Avi G, Baruch Salamander, Chani, AP, and one more person the observer couldn't recall.

### Aging follow-up (to 9:32 and after)

- She has a printed aging report in front of her and goes down the list, following up with customers who are behind.
- She called a customer and asked for the owner. There is a June invoice they haven't paid. They couldn't pay because the person in charge of checks wasn't in. She wrote a note and told the salesman, Heshy, what happened. The call ended at 9:32.
- For the next customer she checked the open transactions and the balance (each an extra click at the top of the screen), then went to customer info to get the phone number and made the call.
- She writes notes on every customer she follows up with.

### Observer's ideas from this visit (not modules yet)

- *A dashboard for this work: the aging list with customer phone numbers already on it, and notes added from the same screen, without clicking between screens.*
- *Automatic emails with the aging attached, like the ones the observer set up on another site.*
- *Order emails now forwarded by hand to Justin could be forwarded automatically by a bot.*

# Part 9: Chani, AP and Office Manager, Day 4 Morning (9:00 to \~10:00)

**Systems and tools:** F&O (vendor invoice journal, payment proposal, customers, credit and collection), the regular office inkjet printer and check stock, a check deposit scanner, a paper notebook, a large desk calendar, printed emails, Excel, email.

| Time | Episode |
| --- | --- |
| 9:00 | Vendor invoice journal; payment proposal |
| Then | Printing checks on the regular printer |
| Then | Isaac Grossman signs; payment slip; posting the payment batch |
| Then | Lincoln orders waiting on payment; releasing credit holds |
| Then | Suzanne's check image: print, scissors, deposit |
| Then | Credit card emails from Avi G → desk calendar |
| Then | "OFB" list from Ken |
| Then | Isaac Grossman's order email → Justin |
| 9:36 | Explanation: who handles credit card vs check payments |
| Then | Contact Electric bill from Robert; nothing paid since April |
| Then | ACH payments notebook (from Avi Altman's printed email) |
| Then | Back to ACH: open transactions vs notebook |
| \~10:00 | Calls Isaac Grossman about putting in ACH |

Exact times: 9:00, 9:36 and \~10:00. The first eight episodes happened between 9:00 and 9:36, and the next three between 9:36 and \~10:00. Between \~10:00 and 11:00 the observer was elsewhere (not shadowing).

## What happened

### Vendor invoice journal and payment proposal (9:00)

- In the vendor invoice journal she validates and posts the journal, then clicks Create payment proposal.
- She selects all payments and looks down the list, which mixes all vendors. F&O sets the payment method (check, ACH or card) automatically and adds every line to the payment.
- She then goes through the list unchecking everything except what she wants to pay. *(This works backwards; the default would be better as nothing selected.)*
- For Chase Card Services she changes the method to check, then clicks Create payment → OK → OK.

### Printing checks

She loads the check paper into the regular printer by hand, a slow inkjet, and switches the paper back afterwards. There used to be a dedicated check printer, which died. It needs a new drum costing $300 to $400, and since she doesn't print checks often she uses the regular printer.

### Signature, payment slip, posting

She takes the checks to Isaac Grossman to be signed. *(Observer's idea: print the checks already signed. Controls would need to be checked.)* She fills out a payment slip, paper-clips it to the bill and posts the payment batch.

### Lincoln orders and credit holds

- She asked Suzanne about Lincoln orders they are waiting on payment for. Nothing yet.
- Releasing a credit hold: Customers → filter by name → open transactions, then Credit and collection → Open credit holds → select → Release → Release from credit hold.
- Two Amazon credit holds have been open for over a year. Chani told someone on the phone that Peleg and Troy had not been able to release them.

### Suzanne's check image

Suzanne emailed a picture of a customer's check with a list of the invoices it pays. The customer writes the check, photographs it and sends the picture, so the original is never handled. Chani tried to print the email, but the image was too large and spilled onto another page. She scaled the whole email down to 65% so it fit on one page and printed it, then cut the check out of the printout with scissors and set it aside. About half an hour later the observer asked what it was for: she uses the printed, cut-out check to deposit in the check deposit scanner, which accepted it on regular paper. *(The observer is unsure whether this is allowed under the bank's rules.)*

### Credit card emails from Avi G

For the credit card charge emails from Avi G, she writes the scheduled payment dates in the large desk calendar and then deletes the email. She did this several times while cleaning out emails.

### "OFB" list from Ken

She received a list from Ken with OFB and today's date on it and looked through an Excel sheet. The observer didn't know what OFB is.

### Isaac Grossman's order email to Justin

Isaac Grossman emailed about an order. He doesn't want the invoice to go to Alex Grossman, who the order is for. Chani forwarded it to Justin and told him to use Isaac Grossman as the customer and Alex as the ship-to.

### Who handles credit card vs check payments (9:36)

- Avi G takes care of credit card payments. Chani does check payments.
- Avi G tells Chani when a credit card payment is due. She writes it down so Isaac Grossman can make sure there is money in the account.
- Chani thought Mordy Berman tells Isaac Grossman, but Mordy thought someone else does, so Chani does it.
- *(Observer: the chain has many hand-offs and many ways to go wrong. An email or calendar entry reminding Isaac Grossman to fund the payment account could be automated.)*

### Contact Electric bill

Robert (a warehouse employee who also helps Isaac Grossman and forwards bills sent to his email) sent a Contact Electric bill for 5702 (the Brooklyn office). Chani took a stack of papers, found what looks like a printed email, and copied information to a list *(the notes are cut off here)*. Later she printed the bill, wrote something on it and set it aside. *(The observer's read: nothing has been paid to Contact Electric since April. Robert forwarded a number of unpaid invoices.)*

### ACH payments notebook, and calling Isaac Grossman (\~10:00)

From a printed email from Avi Altman she wrote the list of ACH payments in a notebook. She then checked a vendor's open transactions against the notebook and did some arithmetic; the purpose wasn't clear to the observer. Finishing, she called Isaac Grossman to ask whether she should put in the ACH. The answer wasn't heard.

*(Observation across the morning: much of the work runs through paper: printed emails, written lists and notebook entries, a desk calendar, hand-filled payment slips, and a printed copy of a check.)*

# Part 10: Tina, Daniel and Suzanne, Day 4 (from 11:00)

Tina is observed from 11:00 to 11:50, Daniel from 11:50, and Suzanne after that (start time not given). Only these times are known; the episodes are in order.

## Tina (11:00 to 11:50)

**Systems and tools:** email, Walmart Retail Link, DSCO Rithum (Kohls), Excel (historical upload files), OneDrive.

### Daniel's role, and an AI tool question (11:00)

- Daniel manages content: for every new piece of content we have, he makes sure it reaches every customer that sells that item. He also checks inventory for customers, to make sure everything we say we are selling them is actually online on the customer's site.
- Tina started building an AI tool to do this automatically, using ChatGPT on her own. She then saw that Avi G is working with the Grok bots that Peleg and Baruch Grossman are rolling out, so she is not sure whether to continue. She works under Avi G and realized the company as a whole was doing what she was doing on a different tool. She paused it. *(Overlapping efforts: worth telling her whether to continue.)*

### Walmart delayed orders: Retail Link

During email cleanup she got an email from Walmart about delayed orders. She logged into Retail Link, Walmart's portal. It took a long time to load, then didn't load at all. She logged out and back in, which needed a new OTP. She confirmed the order status and replied that the order has shipped and is in transit.

### Monday is cleanup day

More email cleanup. Tina said Monday is her cleanup day and her update-notes day.

### Kohls / DSCO pricing exception

- While updating Kohls inventory on DSCO, Daniel hit an exception on a pricing error for one item. Tina tried to find where it came from so it doesn't revert tomorrow.
- She checked many historical upload Excel files, including the file from an issue she worked on 3 weeks ago, and could not find the problem there. She then checked the line inventory update history on DSCO to see when the issue first appeared. This was a debugging session of about 10 to 15 minutes by the time the observer noted it.
- **Cause found:** the item's price was changing to more than 2 decimal places.
- **Still unexplained:** we don't send Kohls pricing daily, only inventory numbers and SKUs, so how did their pricing get updated? She also tried to correct the price by hand on the Kohls portal, and it would not save. She put it aside for now.

### OneDrive file-sharing problem

During this she also had a problem with OneDrive and sharing files with customers. An email about it went to Peleg, Baruch Grossman and Dan Holland.

## Daniel (11:50)

He was building a spec sheet for Home Depot, the same process as the Wayfair sheet on Day 2: copy, paste, validate, review.

## Suzanne (after 11:50)

She was going through emails, then went Customers → filter → Balance at the top for a customer. They have open invoices and a hold on an order. *(The notes end here.)*

# Part 11: Baruch Salamander, Deductions, Reports and Collections, Day 5 (from 11:00)

**Systems and tools:** SPS Commerce, Excel (several files, on two screens), Amazon Vendor Central, OceanFirst, F&O (statement balances, assumed), email. Only 11:00 is an exact time; the episodes are in order.

| Time | Episode |
| --- | --- |
| 11:00 | Home Depot deduction disputes on SPS Commerce |
| Then | Recovery report emails |
| Then | Bank funding check |
| Then | Amazon payments and deductions report |
| Then | Aging reports grouped by salesman |
| Then | Chasing customers for payment; non-paying customer sheet |

## What happened

### Home Depot deduction disputes (11:00)

- He was disputing Home Depot deductions on SPS Commerce, which collects the deductions and disputes from Walmart, Home Depot, Amazon and Lowes in one place.
- He has an Excel file open on one screen and SPS Commerce on the other and compares numbers methodically. He types values rather than copying and pasting.
- One file lists paid, approved and disputed deductions. *(The observer thinks it isn't set up for this purpose.)* On the left he has a file with the total recovery numbers, and compares the two.

### Recovery report emails

- The observer thinks he sends the file with the final recovery numbers to whoever needs it, with the totals in the body of the email and the summary files attached.
- He has recovered about $146k in disputes this year so far.
- The emails go out daily, although the content is month-to-date or year-to-date totals.
- Recipients: Mordy Berman, Avi G and Isaac Grossman, cc Ken Kaplan, Chani and Zundel. All deal with money at some level; their individual workflows are not known.
- **Checked on Oct 21:** Avi G does not use any of these reports for anything (per the observer). The reporting tool's history shows Mordy Berman used it twice, on 9/14 and 9/22, running 5 reports in total, while he receives similar numbers daily from Baruch Salamander. The reporting tool can schedule and email reports automatically.

### Bank funding check

He makes sure the bank has enough money for the day. *(This is an extension of what Chani does for Avi G's credit card payments on Day 4. Several people ensure funds through different channels.)*

### Amazon payments and deductions report

- Amazon gives a discount if it is paid early. It also takes daily deductions on orders, which is very complicated.
- He breaks this down for Isaac Grossman: how much money came in, how much Amazon deducted, and why.
- Vendor Central and OceanFirst almost always match. For some invoices Amazon holds payment instead of paying on time or early, so it can hold them against future deductions.
- He copies and pastes, and sends several reports that show the same information, each in great detail.
- **Finding (his analysis, not verified):** ignoring labor and other costs, Amazon takes on average about 30 cents off every dollar we sell to them. *(Useful business information if it is used.)*

### Aging reports grouped by salesman

He creates several aging reports grouped by salesman manually, with SUMIF formulas in Excel, breaking the information down in many different ways. *(Observer's view: much of this could be done with the observer's reporting tool, or a Grok bot.)*

### Chasing customers for payment

- He first emails the sales reps to make sure they haven't received a check that is sitting around. Once they confirm, he runs a statement balance and sends it to the customer. If the customer is missing invoices they didn't receive, they ask and he sends them.
- Some customers frequently don't pay on time. He keeps a separate sheet of all customers who are not paying, close to $300k right now. He looks into each one over 120 days to decide whether it can be chased or will be a write-off.
- *(Suzanne also follows up with late customers from an aging report, see Part 8. How the two split this work is not known.)*

# Part 12: Moshe Aryeh Grossman, Day 6 (\~11:30 on; Achim side from 12:22)

The first note puts the start at 11:15; a later note says observation started about 11:30 and ended at 12:00, yet the notes continue to 12:22. The observer found not much new to see at first: mostly the same switching between platforms. Episodes 6 to 9 were added after the session and have no times.

**Systems and tools:** PortPro, Teams, email, WhatsApp, Excel (several shared files), OceanFirst portal, Allways portal, F&O (Achim side), Verizon dashcam system, EZPass, US Customs notices.

| Time | Episode |
| --- | --- |
| \~11:30 | Communication through Teams |
| Then | EZPass claim for a missing tag |
| Then | US Customs emails forwarded to five people |
| Then | Switching between PortPro and Achim work |
| Then | Verizon dashcam reviews |
| Not given | Item creation in F&O from Troy's manual |
| Not given | Family Dollar order projections |
| Not given | Vessel ETAs: F&O fields and the tracking Excel sheet |
| Not given | Allways Shipping: customs, bookings, portal |
| 12:22 | Wire to All Blinds Co.: Excel to OceanFirst draft |
| Then | Supplier invoice and bill of lading chain |
| Then | Wire cleared: releasing the containers |
| Then | Customs release and freight release; 7 containers at the port |

## What happened

### Communication through Teams

- Moshe Aryeh Grossman is the first person the observer has seen who uses Teams extensively. Everyone else uses the phone, talks face to face, or uses email.
- *(Observer's view: this creates different communication channels, and nobody is on the same page about anything. Internal communication, including reports and the questions raised about them, would be better in one central place, like Slack.)*
- *(Observer's example, not being dealt with now: when there is an issue on a scheduled report that goes out by email from the observer's reporting app, sometimes it is raised in the Teams chat between the observer, Baruch Grossman and Avi G, and sometimes Avi G replies to the email. That allows confusion, lost messages and skipped issues.)*

### EZPass claim

He filed a claim with EZPass. A tag was either left in a truck that was returned and is now being used by someone else, or it was stolen. A police report was filed for the possible theft. The total is $38k. *(Observer: if a tag is reported lost, EZPass simply switches to charging the license plate, but never reports someone else using the tag.)*

### US Customs emails forwarded by hand

US Customs automatically pulls money from us. Moshe gets the emails and forwards them to whoever needs to know: Mordy Berman, Zundel, AP, Avi Altman and Baruch Salamander. He went down a list of emails, clicked forward, copied the addresses into the field and sent. It doesn't take him much time. *(Observer: it could go straight to them. Money pulled automatically is the kind of payment the bank-funding checks on Days 4 and 5 are about; whether Customs pulls are part of those checks is not known.)*

### Switching between PortPro and Achim work

He constantly switches between PortPro and Achim work. Bais Trucking does pickups from the port for Achim, so he and Avi Altman (assumed, since this is the buying team) track containers from the port to Achim, and charge Achim for the trucking. PortPro tracks trucks and drivers by GPS, so he knows exactly where everyone is. *(Observer's idea: could PortPro data be copied into F&O, and does it make sense to? It is officially a different company, but there is a lot of overlap. Related: Avi Altman checking PortPro and deleting Excel rows on Day 2.)*

### Verizon dashcam reviews

He also reviews Verizon dashcam recordings of the drivers, with extensive tools that seem to be good.

### Item creation in F&O

Most data entry into F&O is done by Avi Altman, but Moshe Aryeh Grossman does item creation, following a step-by-step manual from Troy.

### Family Dollar order projections

He runs projections for Family Dollar of what he needs to order from F&O. Family Dollar became his personal project, and he runs everything for this customer. The rest of his connection to Achim is emails and PortPro.

### Vessel ETAs

- He doesn't update the ETA fields for water vessels. Avi Altman is supposed to enter them, but Moshe doesn't know whether it is done correctly. F&O has multiple ETA fields that connect to different places.
- He tracks vessels in an Excel sheet that he, Avi Altman and Sal D'Rienzo can access. When Avi G wants an item's exact ETA, the answer comes from that Excel file. The ETAs in it are updated by Avi Altman whenever he wants to, knows of an update, or gets one (no set schedule was described). Moshe thinks Avi Altman uses the Allways portal for this at this point.
- *(Possible link, not verified: on Day 2, Tina had to download Goods in Transit because some open PO lines didn't have updated dates.)*

### Allways Shipping

He uses Allways Shipping to clear customs. They also book the shipping vessels and assign containers to suppliers, and give us access to a portal with the exact location of every shipment. *(Observer's idea: a connection to F&O and PortPro would update ETAs to exact dates. Allways has API and EDI integrations available.)*

### Wire to All Blinds Co. (12:22)

- At 12:22 he was working on the Achim side, setting up a wire for Isaac Grossman to send to All Blinds Co., a long-tenured supplier in China.
- He copies from one Excel file to another that totals everything for him. He prepares wires and saves them as drafts in OceanFirst, and Isaac Grossman releases them. He copies the information from his spreadsheet into the OceanFirst portal.
- The wires get split somehow *(the observer isn't sure what splits them)*. He explained that every payment has to match a bill of lading (BOL), and one BOL can have multiple containers.

### Supplier invoice and bill of lading chain

1. The supplier sends an Excel file with the invoice and packing list to Avi Altman.
2. A few days later the supplier sends the BOL.
3. Avi Altman sends the BOL to Lina at Allways, who confirms it and adds it into their portal. If Allways books the shipping for us, it is in their portal earlier. If we only use Allways for customs, we only see it when Lina enters it.
4. Avi Altman also adds it to the shared Excel file (on Moshe's desk) with the ETAs and other details.
5. Moshe is cc'd, so he sees when this happens and knows it was confirmed and matched to F&O.
6. Moshe adds the total to a shared Excel file with the payments team (Zundel), who apply it to the PO and voyages in F&O. Moshe doesn't know what they do with it.
7. Moshe puts the invoice, ETA and PO into the Excel file, goes into OceanFirst and sets up a new payment for Isaac Grossman to clear.

### Wire cleared: releasing the containers

Once Isaac Grossman clears the payment, he tells Moshe by email or WhatsApp, and Moshe updates the factory so they release the containers at the port.

### Customs release and freight release

- Another step in this chain is customs, which Allways handles. There are two releases: the customs release and the freight release.
- The freight release has two parts: the shipping lines need to get paid, and the factory needs to surrender the BOL to the shipping line. For the past two years the surrender works electronically. The supplier does not do it until it gets paid, so the payment to the supplier and the freight release happen at the same time.
- **Live example:** Achim has 7 containers at the port right now. All were released by customs, because Allways took care of that. The freight release was not done yet because the factory had not been paid, although the shipping lines had been paid. Chani pays the freight.
- **Demurrage rule (general, not part of this example):** after the allotted free time of 4 working days, demurrage is about $300 to $350 per day per container. The 7 containers above are still within free time and waiting on payment, so no demurrage applies to them yet.

*(Observer's note on this chain: the same invoice, ETA, PO and BOL data is entered or copied into several places, and the status moves by cc'd emails and messages. Isaac Grossman is the approver for checks (Day 4) and wires (Day 6). The containers can't be released until the whole chain finishes.)*

# Part 13: Tina, Weekly Amazon Inventory File for OnePlatform, Day 7 (Fri Oct 23)

I sat with Tina. Daniel's part was described by Tina, not watched. No clock times. OnePlatform was called Vendo when we started with them; earlier parts use the old name.

**Systems and tools:** OnePlatform (Vendo) SharePoint, the network drive (Daniel's base sheet), F&O (on-hand, open PO lines, Goods in Transit), Excel VLOOKUPs, email, Teams.

## The process at a glance

|  | Detail |
| --- | --- |
| What | A weekly file telling OnePlatform whether each Amazon item is in stock, low or out, with the next available date for low and out-of-stock items |
| Why | OnePlatform uses it for advertising decisions on Amazon |
| When | Weekly, on Friday |
| Who | Daniel, then Tina |
| Where it goes | Emailed to Matt (OnePlatform) and Reggie (our Amazon rep), cc Avi G and Tara (OnePlatform) |
| How long | Tina: under 10 minutes, depending on interruptions. Daniel: not known |

## The file

- OnePlatform's SharePoint Excel is a running report of everything we do with Amazon, with the full product list. Daniel copies one sheet into a base sheet on the network and reuses it to start each week's file.
- Black rows are items we keep selling. Red rows are discontinued or obsolete; they stay on so Amazon can sell its own remaining stock and OnePlatform still gets info on them. Once a red item's Amazon inventory is 0, it's dead. We work mostly with the black rows.
- Reds are updated from F&O status: discontinued with stock left stays disco; discontinued with no stock becomes obsolete.
- We send the whole list every week, not just the items whose status changed.
- The only OnePlatform fields we don't have in F&O are Amazon's product line, subcategory and similar. What we send is ASIN, SKU, UPC, product name and inventory status, and we have all of those.

## Stock levels

We don't give Amazon exact inventory because the warehouse is too fluid. The status uses on-hand pieces in F&O for warehouse 1600, our only warehouse:

- **Out of stock:** 11 pieces or fewer. Amazon requires full packs, and 12 is the most common pack size.
- **Low stock:** under 50. The number is arbitrary. *(Observer's view: it should probably be a multiple of 12, like 48 or 60. I'm not changing it now.)*
- **In stock:** 50 or more.

## Steps

1. Daniel downloads OnePlatform's file from SharePoint and starts from his base sheet. He starts from scratch every week by design: a full download plus a lookup is easier than finding only the items that changed.
2. Daniel marks each item in, low or out of stock from on-hand. When Tina used to do this part, a formula with a lookup to an on-hand download wrote the status automatically and it took her very little time. Tina doesn't know how long Daniel takes, and says he may be leaving.
3. Daniel emails the file to Tina as an attachment, not a shared file.
4. Tina downloads open PO lines from F&O and VLOOKUPs the low and out-of-stock items to them, taking the earliest open PO date. Daniel can't do this step because he has no access to open PO lines or Goods in Transit.
5. If that date is within 30 days of today, or already past, she pulls Goods in Transit for those items and uses its date instead. The open PO date is set when the PO is created; the Goods in Transit date is set when the goods ship and is updated as things change. Goods in Transit alone isn't enough, because items not yet on the water have no date there, so the result is a coalesce of the two. The 30-day rule comes from Avi Altman's explanation of how he updates dates in the system.
6. With no open PO and no Goods in Transit, the date is left blank. A past date usually means the warehouse already received it.
7. Tina emails the file to Matt and Reggie, cc Avi G and Tara.

## Gaps and ideas

- Out-of-stock items should be marked temporarily unavailable on Amazon with an in-stock date. Tina is fairly sure OnePlatform doesn't do it for us, and we don't do it either.
- *(Observer's idea: an F&O report with the due dates already coalesced would be an easy first step, even if nothing else in the flow changes. Since everything we send is already in F&O, the whole file could be built for her every week.)*
- *(Observer's view: the file should be one shared file updated every week, not an attachment emailed back and forth.)*
- Tina uses Teams well, and also a lot of email (relevant to the central channel idea).

# Part 14: Observer's Own Work (not part of the process study)

Around 4:30 on Day 1, Tina asked about the sales reporting app. After clearing it with Avi G and Baruch Grossman (COO), the observer turned off the daily jobs (so reports stop going to everyone every day) and turned off test mode, so users' own schedules now send. Tina and Isaac Grossman (CEO) can now get their reports.
