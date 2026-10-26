# Shadowing Notes: Running Log

Purpose: find groups of pain points ("modules") where one reusable function could remove pain from many episodes. The observer was asked to shadow staff and report back to Baruch Grossman and Peleg, who will automate or ease the rough edges. The final report is for them.

**Background (from the observer, Oct 21):** this shadowing grew out of the Grok bot effort.
- Avi G first used Claude to automate his own tasks and asked the observer for help getting his information faster from the observer's reporting tool.
- After talking to Baruch Grossman and Peleg, they decided it was smarter to build with the Grok bots the company already subscribes to, which go straight to the data without the reporting tool.
- The observer was repurposed to do a discovery of what can be automated with Grok bots. The reporting site stays as a manual report runner for people who don't want to use Grok; nothing about it is changing now.
- Avi G, with Peleg and Baruch Grossman, moved from Claude to Grok bots. Avi G validates everything as the bots are built. The aim is to automate as much as possible.
- **Example:** give a Grok bot the format of the product spec sheet Daniel builds, then ask "draft an email with a spec sheet for the floor tiles for Home Depot". The bot builds it in seconds, instead of Daniel copying and pasting for a long time.
- So each module below is best read as a candidate for a Grok bot task.

The observer's notes, with spelling and punctuation cleaned and the follow-up questions and answers added after each message, are in `raw_notes.md`. The uncorrected text is in that file's git history.
Conventions: times marked `~` are estimates from the order of events. *Italics in parentheses* are the observer's own asides. Personnel comments overheard in conversation are left out on purpose. **Observer's rules while shadowing:** don't interrupt, don't comment, and don't ask why someone does something one way and not another; only ask WHAT they are doing when it isn't clear. Moshe, Moshe Aryeh and Mosi are all the same person; always write **Moshe Aryeh Grossman**. "Avi" with no surname means Avi Grossman (Avi G) by default; it means Avi Altman (Avi A) only while shadowing Moshe Aryeh Grossman's buying team.

---

## Contents
- People, companies and systems (glossary)
- Day 1: Wed Oct 14: Charmaine (CS) AM, Suzanne (AR) PM
- Day 2: Thu Oct 15: Evelyn, Avi Altman, Tina (AM), Daniel, Moshe Aryeh Grossman, Charmaine (PM)
- Day 3: Fri Oct 16: Suzanne (AR) morning
- Day 4: Mon Oct 19: Chani (AP and office manager), Tina, Daniel, Suzanne
- Day 5: Tue Oct 20: Baruch Salamander (deductions, reporting, collections)
- Day 6: Wed Oct 21: Moshe Aryeh Grossman (~11:30 on, including the Achim side from 12:22)
- Day 7: Fri Oct 23: Tina (with Daniel's part described): weekly Amazon inventory file for OnePlatform (Vendo)
- Candidate pain-point modules (working list)
- Signals by module
- Open questions
- Shadowing plan

---

## People, companies and systems

| Name | Role / what they are | Notes |
|---|---|---|
| Charmaine | Customer Service | Day 1 AM |
| Suzanne | AR | Day 1 PM. Works closely with Chani |
| Chani Kraus | Officially the office manager. Also assists Isaac Grossman and handles AP and AR | Deposits checks, scans, sends to Suzanne. Day 4: pays vendors by check and ACH. Pays freight to the shipping lines (Day 6 description). Easy to talk to; works mostly by hand and on paper, so changes to her tasks need hands-on support |
| Tina | Ecommerce / inventory feeds and PO follow-up (working label) | Day 2 AM. Faster at computer skills than Charmaine and Suzanne |
| Daniel | Works for Tina and Avi G | Builds submission and spec files (e.g. the Wayfair spec sheet). No access to open PO lines or goods in transit. Day 2 PM. Day 4: manages content (every new item's content reaches every customer that sells it) and checks that what we say we sell each customer is live on their site |
| Evelyn | Forwards order emails to Justin, sometimes ships replacements, handles the front door | Day 2, observed 9:52 |
| Avi Altman | Buying team; works for Moshe Aryeh Grossman. Does most of the data entry into F&O, and is supposed to enter vessel ETAs | Day 2, 10:00. Hard to follow |
| Moshe Aryeh Grossman | Head of buying. Observer's brother | Works for both Bais Trucking and Achim (buying team); uses Teams more than anyone else seen, and PortPro with GPS tracking of trucks and drivers. Starts the day cleaning up Bais Trucking in PortPro. Day 2, shadowed from ~2:15 to 2:30 |
| Avi Grossman ("Avi G") | Head of sales, and so head of CS questions. Also sort of the CEO's assistant. Observer's brother | Different person from Avi Altman. Escalation target for CS (Nexus tile) and deductions. Day 4: handles credit card payments and tells Chani when they are due. First tester of the new Grok bots: eager to learn, patient, and reports errors clearly |
| Baruch Grossman | COO, warehouse. Observer's brother. One of the "brains" behind the operation; a recipient of this report | cc'd on Justin's sample order; cleared app changes |
| Baruch Salamander | Not the same Baruch. Deductions and disputes (Walmart, Home Depot, Amazon, Lowes) in SPS Commerce, recovery and Amazon reports, aging reports by salesman, bank funding check, collections on late customers | Day 5, shadowed from 11:00. Chani didn't know what he does (Day 2) |
| Isaac Grossman ("Tatty") | CEO. Observer's father | |
| Keith Hamby | Warehouse floor manager (a different person from Ken Kaplan) | Charmaine emailed him re Lowes cancellation (Day 1). Sent Tina an Amazon return label (Day 2) |
| Brandon | Warehouse. Easiest to reach | Packaging details for UPS claim; shipping to Lincoln Supply |
| Jhony | Warehouse, beside/under Keith. Parts and replacements | |
| Justin | Enters sample orders and orders | |
| Locations | 5702 = Brooklyn office; 1600 = warehouse in Jersey | Used in vendor bills (Day 4) |
| Peleg Ovadia | Developer / IT. Main in-house technical person now. The observer reports to him. Most proficient with F&O setup and settings changes; knows the data best; DBA for the Grok automation tool being set up; closely involved in many parts of the system. Works with Dan Holland (IT and EDI), Keith Hamby (warehouse), Brandon, Jhony, Baruch Grossman, and others. With Baruch Grossman, the other "brain" behind the operation; a recipient of this report | Charmaine emailed him about Teams (no reply) |
| Troy | Consultant who helped migrate to F&O. Mostly gone now; asked questions from time to time. Wrote the step-by-step manual Moshe uses for item creation | Day 4: with Peleg, had not been able to release two old Amazon credit holds |
| Mordy Berman | Officially the CFO, per the observer. Most money decisions are made directly by Isaac Grossman, so Mordy works more as an assistant to the CEO on money decisions. Baruch Grossman (COO) calls him a controller. Works offsite and has not been shadowed. Receives Baruch Salamander's recovery reports | Day 4: Chani thought he tells Isaac Grossman when credit card payments are due |
| Ken Kaplan | One of the longest-tenured employees. Easy to work with and open to new tools. Cc'd on Baruch Salamander's recovery reports | Day 4: sent Chani a list with "OFB" on it |
| Zundel | On the payments team: applies payments to POs and voyages in F&O, per Moshe's description (Day 6); Moshe doesn't know exactly what he does. Not seen or shadowed, and the observer has had no contact since he was brought in. Cc'd on Baruch Salamander's recovery reports | Day 4: recipient of an email from Avi G with credit card bills |
| Robert | Works in our warehouse. Also helps Isaac Grossman, so some bills go to his email and he forwards them | Day 4: forwarded a Contact Electric bill and a set of unpaid invoices |
| Contact Electric; Chase Card Services | Vendors | Day 4 payments |
| Dan Holland | In charge of IT and EDI. Works with Peleg | Day 4: copied on the OneDrive file-sharing email |
| Heshy | Salesman | Day 3: Suzanne leaves him a note when a customer can't pay |
| David Dweck | Salesman, ext. 123 | Calls Tina and Suzanne |
| Jamie | Does some sales and designs the soft window side of the company (curtains). Long-time employee | Calls Tina about a new customer and product list |
| Sal D'Rienzo | Very long-tenured employee. Manages the warehouse. Officially president of Bais Trucking, where he works with Moshe Aryeh Grossman. Works closely with Baruch Grossman to make the warehouse efficient | Day 6: has access to the vessel tracking Excel sheet |
| All Blinds Co. | Supplier in China, headed by Duke. Long-tenured supplier | Day 6: wire being set up for Isaac Grossman to send |
| Lina | Contact at Allways Shipping who confirms bills of lading and enters them in the Allways portal | Day 6 |
| Allways Shipping | Clears customs, books shipping vessels, assigns containers to suppliers; gives us portal access with exact locations. Has API/EDI integrations available | Day 6 |
| Family Dollar | Customer. Moshe Aryeh Grossman runs everything for this customer, including order projections | Day 6 |
| Bais Trucking | Sister company of Achim; runs on a different system (PortPro) | Moshe Aryeh Grossman works for it and for Achim's buying team |
| OnePlatform (formerly Vendo) | Middleman / consulting company between us and Amazon. Called Vendo when we started with them | Uses our weekly inventory status file for advertising decisions on Amazon (Day 7). Daniel downloads their file from SharePoint; Tina emails it back to Matt |
| Matt / Tara | At OnePlatform (Vendo). Matt gets the weekly inventory file; Tara is cc'd | Day 2 return label email; Day 7 |
| Reggie | Our Amazon rep | Gets the weekly inventory file with Matt (Day 7) |
| Lincoln Supply | Customer | Problems with shipping (Day 2) |

**Systems:** WhatsApp (Isaac Grossman tells Moshe by email or WhatsApp when a wire is cleared), OceanFirst portal (draft wires), Verizon dashcams (driver camera review, Bais Trucking), EZPass (tolls), Grok (AI bots being added by Peleg and Baruch Grossman to automate tasks; Peleg is the DBA; Avi G is the first tester), SPS Commerce (collects deductions and disputes from Walmart, Home Depot, Amazon and Lowes), Amazon Vendor Central, OceanFirst (bank), F&O (main ERP), CHUB (order/invoice system for Lowes etc.), InOrder (old system, still used for phone numbers), PortPro, DSCO Rithum (Kohls inventory feed), Retail Link (Walmart portal), Lowes portal (WebEDI), Wayfair portal, Mason portal, Teams, Excel, email, FedEx and UPS tracking, desk calculator, printed manuals and templates.

---

# Day 1: Wednesday, Oct 14

| Time | Activity |
|---|---|
| 9:45 to 12:15 | Shadowing Charmaine (Customer Service) |
| 12:15 to ~2:45 | Lunch and online appointment (not shadowing) |
| 2:45 | Mincha |
| 3:00 to 4:30 | Shadowing Suzanne (AR) |
| ~4:30 | Interruption: Tina asked about the sales reporting app (observer's own work) |

## Charmaine, Customer Service (9:45 to 12:15)

**Tools:** F&O, CHUB, Lowes portal (WebEDI), Wayfair portal, Mason portal, email, Teams, FedEx/UPS tracking, printed Lowes manual, printed email templates.

| Time | Episode | Type |
|---|---|---|
| 9:48 | Amazon customer asks for a replacement | Phone |
| 9:54 | Wayfair cancellation and Mason open orders | Portal admin |
| ~10:00 to 10:20 | Lowes missed cancellation → manual 810 invoice | Portal admin |
| 10:20 | Lowes CS: wrong tile pattern shipped | Phone |
| ~10:30 | Email triage, round 1 | Email |
| ~10:40 | Lowes invoice follow-up and Kohls shade call | Portal / Phone |
| ~10:45 | Email triage, round 2 | Email |
| ~10:50 | Filing the printed Lowes pending list | Paper |
| 11:00 to 11:04 | Sample order request to Justin | Email |
| ~11:05 | Voicemail: customer wants to buy direct | Voicemail |
| Recurring | Mason portal checks | Portal admin |
| ~11:15 | Email triage, round 3 | Email |
| ~11:30 to 12:15 | Home Depot ship-to-store call and UPS claim | Phone |
| During UPS hold | Retro tile customer replies → escalated to Avi G | Email |
| End | Teams down → calls Brandon | Phone |

### Amazon and Kohls customers
Three contacts came from customers who bought through other retailers: an Amazon replacement request, an Amazon misaligned-print complaint, and a Kohls noisy shade. Each time Charmaine sent them back to the retailer. Our items aren't covered by the 30-day return policy. The Amazon caller said Amazon gave her wrong info and told her to call Achim, and she wouldn't accept the answer, so the call was repetitive. The Kohls caller asked many questions about Kohls' return policy.

### Wayfair and Mason
- Wayfair cancellation email: verified in the Wayfair portal and F&O.
- Mason emailed about open orders. She entered invoice numbers in F&O one by one (e.g. IN001041663, 41684, 41667). For large batches she downloads a file from Mason, fills it in and re-uploads. Manual path: Sales order → My view → filter by PO → Invoice → open the invoice (extra step) → copy and paste.
- 9 new Wayfair orders today, to be checked at lunch for shipping.
- Mason checks recur: with F&O on the other screen she checks each PO; if still open in F&O she leaves it open on Mason. **Mason doesn't close orders automatically**, so she closes them by hand.

### Lowes missed cancellation → manual invoice (~10:00 to 10:20)
Lowes asked for a cancellation. Charmaine emailed Keith (floor manager) and got no response. She checked herself: already invoiced, so the cancellation was missed. CHUB can't invoice it, so she invoices manually on the Lowes portal. Lowes sometimes pays these and sometimes doesn't. *(Unclear who dropped the ball.)*

1. Sign in to the portal and wait for the OTP code (she sits and waits), enter it manually. She signs in and out every time, so every visit has an OTP wait.
2. WebEDI → transaction 810 → create new.
3. Select a remit-to account. Copy PO date, invoice type, currency code, PO received date, PO actual ship date from the order.
4. Add tracking; check FedEx that it's out for delivery; add PO number, invoice date, invoice number.
5. Add the Lowes buying store number from CHUB.
6. Add items one by one: item number and description from CHUB, unit code and price from F&O.
7. Allowances (none) and discounts (not applicable): checked in the manual. Net due days: 60.
8. Shipment/payment: from F&O (order → shipment). Method = collect, BOL = tracking number, carrier = FedEx.
9. **Error 1:** item line lost on save because she hadn't clicked "Add item". Re-entered.
10. **Error 2:** submit failed because discount description was blank. Checked manual, entered "not applicable".
11. Done at 10:20.

Afterwards she remembered she'd forgotten to print the list of pending manual invoices. She printed the web page itself, so it looks bad. She keeps the printed lists on her desk with previous ones and follows up with Suzanne to see whether they were paid.

*Side note (before the invoice):* she emailed Jhony asking whether we have replacements for the Buono II Bradford Rod white plastic plug (a customer on the phone was missing it). She checked the email twice before sending. *(Pleasantly surprised.)*

### Lowes CS call: wrong tile pattern (10:20)
Lowes CS said a customer received two items incorrectly. Charmaine opened the order, pulled warehouse tracking, checked FedEx: everything in one box. She compared the catalog item number with CHUB, asked for the pattern numbers from the boxes, and checked the batch number on the back. She offered to talk to the customer directly. The customer ordered 5 boxes of FTV462; 2 arrived as 44820 instead of 46220 (3 were correct). **Resolution:** Lowes credits the customer, who keeps the tiles, and Lowes places a new order. Charmaine no longer enters orders in the new system, and since Lowes has an allowance she tells them to credit and reorder. *(How do 3 of 5 identical items ship right and 2 wrong? It happens from time to time, and the patterns look nothing alike.)*

### Email triage (three rounds)
- 2023 customer: item broke, replacement arrived damaged, no order info at all. Saved for later.
- Morningstar blind arrived without wand or hardware: forwarded to Evelyn; replied that it ships by end of week with tracking to follow, apologized.
- Gift recipient wants to order hardware (blind received without it).
- Previous house owner wants a replacement valance for a mahogany MF blind (similar).
- **Nexus tile lifting off the floor:** CHUB showed it was a retro floor tile from Home Depot, ordered in August. She copied the images into the reply, apologized, and asked whether the tiles were acclimated, the subfloor type, and whether the temperature is regulated. She reread it twice before sending. The customer replied: acclimated a week, 70°, concrete. Charmaine escalated to Avi G. *(Acclimated = letting tiles sit in the room before installing.)*
- Kart It return: checked tracking that it reached the warehouse.
- Wayfair overdue alert: checked portal, nothing overdue.
- Two voicemail emails: one empty; for the other she searched her emails for the match. *(She takes off her headset every time.)*
- **Sample order to Justin (11:00 to 11:04):** cc Baruch Grossman, Peleg and Chani; no-charge sample order; asks for the sales order number back; package carefully. Copied from a printed email sheet and F&O; reviewed many times. **4 minutes for one email.**
- Voicemail: customer who ordered from Lowes wants more at a lower price and wants to order straight from Achim. She didn't respond.

### Home Depot ship-to-store call and UPS claim (~11:30 to 12:15)
Home Depot CS reported a ship-to-store order with 2 items missing. CHUB: multiple boxes. UPS: all delivered except two, delayed in Stafford, TX (appear lost). **Resolution:** customer places a replacement order; we file a UPS claim. *(Order was somehow closed without being received short; probably a Home Depot rep.)* She wrote everything down, called UPS and waited on hold. Teams wasn't working (she'd emailed Peleg yesterday, no reply), so she called Brandon for cushioning, single/double wall and tape type. She chose Brandon because he is the easiest to reach, not Jhony or anyone else in the warehouse.

## Suzanne, AR (3:00 to 4:30)

**Tools:** F&O (customer payments, journals), InOrder (phone numbers), desk calculator, paper checks and remittances, email, highlighters.
**Working relationship:** Chani deposits checks, scans them and sends them to Suzanne, plus a paperclipped pile for each batch.

| Time | Episode |
|---|---|
| 3:00 to ~3:05 | Deductions list sent to Avi (Lowes, Home Depot) |
| ~3:05 to 3:08 | Account breakdown call to David Dweck (sales) |
| 3:08 to 3:13 | Calling Herman's about a postdated check |
| 3:13 to 3:22 | Payment entry, customer 5121 |
| 3:22 to ~3:28 | Customer 472: wrong tariff deduction |
| ~3:28 | Customer 462: $200 short-pay email |
| 3:30 | Customer 11598 |
| ~3:30 to 3:45 | New journal: deposit structure and errors |
| ~3:45 to 3:50 | Matching a batch to Chani's email |
| 3:50 to ~4:10 | Batches that won't post |
| ~4:10 to 4:30 | Return → credit memo |

- **Deductions list (3:00):** sent to Avi, cc Chani, Tina, Isaac. A couple of days of work. *(She had InOrder open!?!?!)*
- **David Dweck call:** gave him a breakdown on customer 6903: orders about every 2 months, about $12k a year, good business but used to order more often. Mid-call Chani brought in a check from HD Supply, which went to her office to join a deposit batch and returns after deposit.
- **Herman's (1098), 3:08 to 3:13:** Customer payments → Menu → Customers → Herman's. Phone number not in F&O, so she got it from InOrder *(two years after the switch)*, then added the number and email to F&O. No pickup; she used her cell. Pam answered; Ricky is at the other store. She asked Pam to remind him to email the postdated check.
- **Payment entry (3:13 to 3:30)** *(she was nervous being watched)*:
  - **5121 (3:13 to 3:22):** add payment (date, reference, amount) → tick orders at the bottom per the remittance. Mistake: unticked the wrong ones, rechecked. She scrolls the list instead of sorting or filtering; invoices skipped around, so each was checked by hand. Saved the journal, then entered a "destroy in field" deduction for the remainder (deduction reason: customer throws the goods out; we write them off).
  - **472:** same steps; desk calculator for the deductions. They took a tariff deduction, which is wrong; left open and told Avi, Mendy and others to go back to the customer. Notes highlighted on the check, set aside.
  - **462:** $200 short-pay; emailed to ask why; hard time wording it *(could use a template)*. Notes highlighted, check set aside.
  - **11598 (3:30):** matched remittance to open invoices; journal left open because of issues.
  - *(Observer assumed she applies payments from the top down and lets them balance; she was observed matching invoice by invoice against the remittance. Whether this is her normal method or extra care while watched is not asked: observer rule, only ask WHAT.)*
- **How deposits are structured:** every journal: delete the default description and use the deposit amount as the name. Every deposit = one journal; every check = one customer payment. 5194 sent postdated checks (entered as a partial payment); 6102 matched exactly; she applied the last 4 payments to the previous journal by mistake and rebuilt a new journal *(distracted by the observer)*.
- **Matching a batch to Chani's email (~3:45 to 3:50):** Chani gives a paperclipped pile with a calculator total slip, and emails the scanned checks and deposit batch. Suzanne searches her email for the slip total to find the matching message. *(The fun part.)* She checks deduction and credit math while entering.
- **Batches that won't post (3:50 to ~4:10):** Batch 1: error; set aside; there was an extra payment, deleted, then it posted. Batch 2: error again; she deleted and re-entered a payment; cause: **method of payment defaulted to credit card, but they paid by check.** Changed, posted.
- **Return → credit memo (~4:10 to 4:30):** the earlier deduction was a return we picked up. She printed the customer's attachment for the batch. Batch already posted, so she applied a credit memo. To verify the amount: Customer → Balance → Sales order → View details → Show invoice → Lines, add up pricing, confirm it matches the deduction.

## Observer's own work (not part of the process study)
~4:30: Tina asked about the sales reporting app. After clearing it with Avi and Baruch Grossman, the observer turned off the daily jobs and test mode so users' own schedules send. Tina and Tatty (Isaac Grossman, CEO) can now get their reports.

---

# Day 2: Thursday, Oct 15

| # | Time | Who | Episode |
|---|---|---|---|
| 1 | 9:52 | Evelyn | Her role (from Chani) |
| 2 | ~10:00 | Moshe Aryeh Grossman | Not in yet at the time; shadowed later (see #16) |
| 3 | 10:00 to ~10:40 | Avi Altman | Supplier color email; Excel / PortPro / F&O juggling |
| 4 | 10:43 | Tina | Kohls inventory upload (DSCO Rithum) |
| 5 | After 4 | Tina | Suzanne's call; Teams problem |
| 6 | After 5 | Tina | Amazon return label → email to Vendo |
| 7 | After 6 | Tina | Deduction disputes: Avi → Baruch Salamander |
| 8 | After 7 | Tina | Low-stock vs open-PO matching workflow |
| 9 | After 8 | Tina | Chani: problems with Lincoln Supply |
| 10 | After 9 | Tina | Sending Amazon inventory file |
| 11 | After 10 | Tina | Reviewing Daniel's submission sheet |
| 12 | After 11 | Tina | Jamie's call: new customer product list |
| 13 | After 12 | Tina | Call from David Dweck (content not heard) |
| 14 | After 13 | Tina | Home Depot mats PowerPoint |
| | 12:00 to ~1:45 | | Break (not shadowing) |
| 15 | ~1:45 to 2:00 | Daniel | Building a Wayfair spec sheet from the main product spec sheet |
| 16 | ~2:15 to 2:30 | Moshe Aryeh Grossman | Analyzing PortPro load and truck data with ChatGPT via screenshots |
| 17 | 2:50 | Charmaine | Wayfair customer complaint: listing shows wrong curtain width |
| 18 | After 17 | Charmaine | Voicemail and email review; customer service |
| 19 | After 18 | Charmaine | Wayfair deductions: accept or dispute |
| 20 | After 19 | Charmaine | Closing Mason orders by hand |
| 21 | After 20 | Charmaine | Wayfair deductions: CSV download |

Times for #5 to #14 and #18 to #21 are relative only (exact timestamps: 9:52, 10:43, 12:00 and 2:50; Moshe's block is ~2:15 to 2:30).

### 1. Evelyn (9:52)
Per Chani, Evelyn forwards order emails to Justin, sometimes ships out replacements, and handles the front door. Observer also asked Chani about everyone else: Baruch Salamander (she doesn't know what he does; emails numbers out all day, looks like a report runner), Tina and Daniel (Daniel works for Tina and Avi), the sales team and the buying team (Moshe Aryeh Grossman, Avi Altman).

### 2. Moshe Aryeh Grossman
Gets in between 9 and 10 and usually starts the day cleaning up Bais Trucking in PortPro. Come back later.

### 3. Avi Altman (10:00 to ~10:40) *(low confidence: very hard to follow)*
- Emailed a supplier: wrong color on some items.
- Worked from an Excel sheet and an email; flagging emails for later.
- Replied to an email about allocations: we don't need weekly allocations, only every couple of months.
- Opened F&O and PortPro, then deleted a row off the main Excel sheet. It seems he checks PortPro for status changes and deletes those rows from the sheet.
- Opened the purchase order Excel file but did nothing with it; back to email. Opened Goods in Transit, back to email.
- Pattern: rapid switching between PortPro, F&O, email and Excel.

### 4. Tina: Kohls inventory upload (10:43)
- Uploaded an inventory file manually in DSCO Rithum. Messaged Daniel that Kohls has quantities on items that shouldn't have any; she needs to fix it. *(Later clarified: Daniel does the Kohls upload every day; Tina was only uploading here to diagnose this issue.)*
- Kohls inventory is updated manually every day. **Rule:** if inventory is under 5, send 0. Always send the line with 0 and never leave it off, otherwise Kohls may shut the item down entirely. Discontinued items go to 0 but stay on the file so they stay live (we may still sell one now and then).

### 5. Tina: Suzanne's call; Teams
Suzanne called her (topic not heard). Tina's Teams app isn't working; she uses web Teams, which doesn't download normally, and gets frustrated. *(She talks a lot.)*

### 6. Tina: Amazon return label
Keith sent a message with an image of an Amazon shipping label: we received a return from Amazon today and aren't supposed to. She emailed Matt at Vendo and Reggie, cc Avi. *(She works faster than Charmaine and Suzanne and actually knows how to drag and drop and copy and paste.)*

### 7. Tina: Deduction disputes
Avi emailed a list of invoices needing disputes; Tina forwarded it to Baruch Salamander (who seems to handle Amazon disputes) and asked whether he's up to date on disputing. Avi's list wasn't fully clear, so she went back to him. She right-clicks emails to mark them read *(opening an email already marks it read)*.

### 8. Tina: Low-stock vs open-PO matching *(the big one)*
1. Downloads the master spec sheet from Daniel.
2. In F&O, pulls all POs / open PO lines.
3. Checks the spec sheet for low-stock items and pastes them into one field on the open POs so they filter.
4. Downloads the filtered results.
5. Looks up the spec sheet against the open PO download to see which low-stock items are on open POs.
6. Also downloads Goods in Transit, because some open PO lines don't have updated dates.

**Whole workflow:** Daniel downloads a file from Vendo's SharePoint and adds low-stock / out-of-stock items → sends it to Tina → she adds the next available date (Daniel has no access to open PO lines or Goods in Transit) → she reviews → sends it back to Vendo.
*(She does this well, but it should be done in the system itself. Why does Daniel send a low-stock list she has to match against an F&O export?)*

### 9. Tina: Lincoln Supply
Chani came in about problems with customer Lincoln Supply. Tina called Brandon about the shipping to them. *(Looks like a mess.)*

### 10. Tina: Sending Amazon inventory
To send the inventory file she opens an email, opens Explorer, goes to the folder with Amazon's inventory files, drags the file into the email and sends. *(Should be using the attach button.)*

### 11. Tina: Reviewing Daniel's submission sheet
Reviewed every column of a submission sheet from Daniel. They review it **at least 3 times** before it goes to any ecommerce customer. The file carries all the ecomm info and goes to every customer who needs it.

### 12. Tina: Jamie's call, new customer
Jamie called about what looks like a new customer. Jamie sends a list of products needed; Tina gets the info. Jamie sent it; Tina forwarded the email to Daniel to build the file.

### 13. Tina: call from David Dweck
Observer was still typing earlier notes and did not listen in.

### 14. Tina: Home Depot mats PowerPoint
She'd saved a file into Documents instead of the customers folder; moved it with cut and paste and renamed it. It's a PowerPoint of mats for Home Depot, with images made in ChatGPT, then room settings requested from it. *(Someone's in 2026: no more costly photography. But she should be using better models than ChatGPT.)* Lots of clicking around to find things; folders all over. She edited a long prompt in Word, using Word's search for find and replace; she seems to have a templated prompt she copies and pastes. She handles a lot of files.

### 15. Daniel: Wayfair spec sheet (~1:45 to 2:00)
*(Observed from about 1:45, close to the beginning of the sheet. Not much to see, mostly grunt work.)*

**Example observed:** 4 products from one product line, all toilet seats in different sizes. That was the easy case: the shared info could be copied and pasted into 4 cells at once. **Estimate: about 15 to 20 minutes per product line.**

- He is building a **Wayfair spec sheet** in Excel, typing one product at a time. It is a different layout from our own: we have an internal product spec sheet with all our products and their ecommerce info (the same one Tina used this morning), and Wayfair expects its own template.
- He copies and pastes from our product spec sheet into the Wayfair sheet, matching columns to columns. A lot of manual copy and paste.
- He works fast and uses keyboard shortcuts well, though that might be because he was being watched. *(He seems like the type who could give the two files to ChatGPT and tell it to build the Wayfair sheet.)*
- For some columns on the Wayfair sheet he has to look at the actual product image (a toilet seat) to get the information. *(That's silly: it should already be on our main spec sheet.)* The observer didn't see which attribute it was.
- The Wayfair sheet works like a form with dropdowns and validation. Certain columns can't be typed into freely; the value must come from a list.
- By 2:00 he was nearly done. He then read the entire file through to check it, saved it, and emailed it to Tina to check over.
- *(Observer left for mincha at 2:00, as he was nearly done.)* The cost is the 15 to 20 minutes per product line noted above, mostly copy and paste.
- **Observer's view:** a bot should be able to take the Wayfair template and build it on its own from our main spec sheet.

**Full chain for ecommerce files so far (Tina and Daniel):** the main product spec sheet → Daniel builds the channel file (Wayfair, Amazon, etc.) → Tina reviews → sent out. Each customer expects a different template, and the work is column mapping plus filling gaps by hand.

### 16. Moshe Aryeh Grossman: PortPro data analyzed with ChatGPT (~2:15 to 2:30)
- Works for Bais Trucking and, as the buying team, for Achim. Bais Trucking is Achim's sister company but runs on a different system, PortPro.
- He now uses ChatGPT to analyze information about his loads and trucks. The process is manual: he takes screenshots of PortPro information, pastes them into ChatGPT, and talks to it. ChatGPT has trouble reading some details from the screenshots.
- He asks it different kinds of questions, such as driver assignments. One question, as best the observer recalls, was whether drivers assigned to routes could pick up from where they finish dropping off at a nearby location.
- He doesn't use ChatGPT all the time, only for complicated questions.
- He talks to it conversationally, as if to a person. *(Funny, but it also shows he's comfortable with it.)*
- *(Observer's side note, not a module: he would benefit from an automatic connector between PortPro and ChatGPT instead of screenshots.)*

## Charmaine, Customer Service: Day 2 afternoon (from 2:50)

**Tools:** email, voicemail, Wayfair portal, Mason portal, F&O, Jhony by email.

### 17. Wayfair customer complaint: wrong width on the listing (2:50)
A customer who bought through Wayfair complained about the width of the item. It arrived by email. On Wayfair's site the dimensions are wrong: the curtain is two connected panels, and Wayfair lists 55" per panel, but 55" is the size of the whole curtain. *(This is a product-data error on the channel listing; see module 8.)*

### 18. Voicemail and email review
She listened to a voicemail, ran through emails and handled customer service issues. She reviews her emails a few times. At one point she forwarded an email asking for a replacement part to Jhony.

### 19. Wayfair deductions: accept or dispute
- In the Wayfair portal she clicks the PO number, which shows the reason for the deduction. Late receipt: she accepts. Customer received the wrong item: she accepts.
- She works on this while answering customer service emails at the same time.
- She also accepts returns to Wayfair. *(Observer: it must be part of our trade agreement with Wayfair that they take deductions for returns.)*
- **Method difference, Charmaine vs Suzanne (observation only):** when Suzanne gets a deduction she checks the original invoice to see if the numbers match. Charmaine accepts Wayfair's deduction without that check. *(Observer: maybe she used to check and now trusts them. Not asked.)*

### 20. Closing Mason orders by hand
- Second part of what she did on Day 1 morning: she checks Mason a few times, and when orders close in our system she closes them in Mason manually. *(Grunt work.)* She says Mason orders don't close automatically like other customers' do.
- It is only a few orders, so she does them one by one instead of downloading and uploading a file.
- **Access path:** she starts from the sales order. She finds the sales order using the customer PO from the customer portal, clicks Invoice at the top (which lists the invoices for that order, usually one), then opens the invoice and copies and pastes from it. Opening the invoice is an extra step compared with copying from the invoice list, *(but that's fine)*.
- **Method difference, Charmaine vs Suzanne (observation only):** the two work in opposite directions. Charmaine starts from the sales order, and when she needs invoice information she clicks Invoice at the top of the sales order. Suzanne starts from the invoice, and when she needs information from the sales order she gets there from the invoice. For copying invoice details into Mason, starting from the sales order adds steps.

### 21. Wayfair deductions: CSV download
After going through another deduction, she went back in to download the deductions. Wayfair offers a CSV download, so she gets a normal-looking list, unlike the Lowes list from Day 1. She then reviewed it.

---

# Day 3: Friday, Oct 16

| # | Time | Who | Episode |
|---|---|---|---|
| 1 | 9:00 | Suzanne | Sales order: processing fee and credit card payment |
| 2 | After 1 | Suzanne | Dashboard; credit card notebook |
| 3 | After 2 | Suzanne | Email and aging report review |
| 4 | After 3 | Suzanne | Charmaine asks about an account number |
| 5 | After 4 | Suzanne | Email to a customer about unpaid, skipped invoices |
| 6 | After 5, to 9:32 | Suzanne | Aging follow-up: call about a June invoice |
| 7 | After 9:32 | Suzanne | Aging follow-up: next customer |

Only 9:00 and 9:32 are exact times; the other episodes are in order. The observer's estimate is about 5 minutes per call or email. Suzanne said she does this follow-up every week, starting sometime on Thursday and going through Friday.

## Suzanne, AR: Day 3 morning (from 9:00)

**Purpose of the visit:** to see whether her flow in the morning differs from the afternoon on Day 1. What was seen was a different kind of work: customer follow-up on overdue invoices (collections), not the payment entry seen on Day 1.
**Tools:** F&O (sales orders, dashboard, aging report, customer info, open transactions, balance), a printed aging report, email, phone, a paper credit card notebook.

### 1. Sales order: processing fee and credit card payment (9:00)
- In a sales order she manually added a processing fee to the invoice first, then charged the credit card. Credit card payments get a processing fee.
- She backed out of the order and went back in *(observer: probably a misstep)*, then added the credit card payment: click Header to show the header buttons → Open prices and discounts → select a credit card from the list.
- This customer changes credit cards often, so sometimes she has to add the new card first.

### 2. Dashboard; credit card notebook
- She uses her F&O dashboard well; it looks well set up for her.
- She still keeps a paper notebook of credit card information. Customers sometimes email the card details to her anyway. F&O doesn't save the CVC code, so she has to record it somewhere. *(Observer's flag: card details on paper and in email is a security concern.)*

### 3. Email and aging report review
She went through emails and checked the aging report. Mostly she was confirming and reading rather than doing: reading, making sure everything is fine, and moving on. *(Observer: looked like inbox cleanup.)*

### 4. Charmaine asks about an account number
Charmaine interrupted to clarify an account number. Suzanne answered immediately while continuing her own work. *(Observer: Suzanne seems to know account numbers better than Charmaine.)*

### 5. Email to a customer about skipped invoices
She drafted an email to a customer about skipped invoices they have not paid. She cc'd Avi G, Baruch Salamander, Chani, AP, and one more person the observer couldn't recall (maybe Isaac Grossman; unconfirmed).

### 6. Aging follow-up: June invoice call (to 9:32)
- The observer realized what she is doing: following up with customers who are behind. She has a printed aging report in front of her and goes down the list.
- She called a customer and asked for the owner. There is a June invoice they haven't paid. *(Observer's guess, unconfirmed: the credit card charge earlier was part of this follow-up, after the customer said to use the card on file.)*
- They couldn't pay because the person in charge of checks wasn't in. She wrote a note and told the salesman, Heshy, what happened.
- It was 9:32 when this call ended.

### 7. Aging follow-up: next customer
- She checked the open transactions and the balance for the customer. Both were extra clicks at the top of the screen. She then went to customer info to get the phone number and made the call.
- She writes notes on every customer she follows up with.

### Observer's ideas from this visit (not modules yet)
- *A dashboard for this work: the aging list with customer phone numbers already on it, and notes added from the same screen, without clicking between screens.*
- *Automatic emails with the aging attached, like the ones the observer set up on the Tomche Shabbos site.*
- *Order emails now forwarded by hand to Justin could be forwarded automatically by a bot.* (This task was part of Evelyn's role, see Day 2 #1.)

---

# Day 4: Monday, Oct 19

| # | Time | Who | Episode |
|---|---|---|---|
| 1 | 9:00 | Chani | Vendor invoice journal; payment proposal |
| 2 | After 1 | Chani | Printing checks on the regular printer |
| 3 | After 2 | Chani | Isaac Grossman signs; payment slip; posting the payment batch |
| 4 | After 3 | Chani | Lincoln orders waiting on payment; releasing credit holds |
| 5 | After 4 | Chani | Suzanne's check image: print, scissors, deposit |
| 6 | After 5 | Chani | Credit card emails from Avi G → desk calendar |
| 7 | After 6 | Chani | "OFB" list from Ken |
| 8 | After 7 | Chani | Isaac Grossman's order email → Justin |
| 9 | 9:36 | Chani | Explanation: who handles credit card vs check payments |
| 10 | After 9 | Chani | Contact Electric bill from Robert; nothing paid since April |
| 11 | After 10 | Chani | ACH payments notebook (from Avi Altman's printed email) |
| 12 | After 11 | Chani | Back to ACH: open transactions vs notebook |
| 13 | ~10:00 | Chani | Calls Isaac Grossman about putting in ACH |
| 14 | 11:00 | Tina | Daniel's role (content and listing checks); AI tool question |
| 15 | After 14 | Tina | Walmart delayed orders: Retail Link |
| 16 | After 15 | Tina | Monday is cleanup and update-notes day |
| 17 | After 16 | Tina | Kohls / DSCO pricing exception: debugging |
| 18 | During 17 | Tina | OneDrive file-sharing problem → email to IT |
| 19 | 11:50 | Daniel | Home Depot spec sheet |
| 20 | After 19 | Suzanne | Customer balance: open invoices and a hold on an order |

Exact times: 9:00, 9:36 and ~10:00. Episodes 1 to 8 happened between 9:00 and 9:36, and episodes 10 to 12 between 9:36 and ~10:00; their order is known, their exact times are not. Between ~10:00 and 11:00 the observer was elsewhere (spoke with Isaac Grossman and Avi G about something else; not shadowing). Tina is observed from 11:00 to 11:50, Daniel from 11:50, and Suzanne after that (start time not given).

## Chani, AP and Office Manager: Day 4 morning (9:00 to ~10:00)
*(Episodes 1 to 13.)*

**Tools:** F&O (vendor invoice journal, payment proposal, customers, credit and collection), the regular office printer (inkjet) and check stock, a check deposit scanner, a paper notebook, a large desk calendar, printed emails, Excel, email.

### 1. Vendor invoice journal and payment proposal (9:00)
- In the vendor invoice journal she validates and posts the journal, then clicks Create payment proposal.
- She selects all payments and looks down the list, which mixes all vendors. F&O sets the payment method (check, ACH or card) automatically and adds every line to the payment.
- She then goes through the list unchecking everything except what she wants to pay. *(Observer: this works backwards; the default should be nothing selected.)*
- For Chase Card Services she changes the method to check, then clicks Create payment → OK → OK.

### 2. Printing checks
- She loads the check paper into the regular printer by hand. *(There used to be a dedicated check printer, which died.)* The regular printer is a slow inkjet. After printing she switches the paper back.
- Asked about it: the old printer needs a new drum, which costs $300 to $400, and she doesn't print checks often, so she uses the regular printer.

### 3. Signature, payment slip, posting
- She takes the checks to Isaac Grossman (CEO) to be signed. *(Observer's idea: print the checks already signed. Controls would need to be checked.)*
- She fills out a payment slip and paper-clips it to the bill.
- She posts the payment batch. She was speaking with someone and told them that they can do something now that it is posted.

### 4. Lincoln orders; credit holds
- She turned to Suzanne about Lincoln (comfy) orders they are waiting on payment for. Nothing yet.
- Releasing a credit hold: Customers → filter by name → open transactions, then Credit and collection → Open credit holds → select → Release → Release from credit hold.
- There are two Amazon credit holds that have been open for over a year. Chani told someone on the phone that Peleg and Troy (the consultant who helped with the F&O migration) could not release them.

### 5. Suzanne's check image
- Suzanne emailed a picture of a customer's check with a list of the invoices it pays. The customer writes the check, photographs it and sends the picture, so the original is never handled. Chani tried to print the email, but the image was too large and spilled onto another page.
- Instead of printing the text and the image separately, she scaled the whole email down to 65% so it fit on one page and printed it. She then cut the check out of the printed image with scissors and set it aside.
- About half an hour later the observer asked what it was for: she uses the printed, cut-out check to deposit in the check deposit scanner. The scanner accepted it on regular paper. *(Observer found this surprising and is unsure whether it is allowed under the bank's rules.)*

### 6. Credit card emails from Avi G
- She opened an email from Avi G to Zundel with credit card bills (reading "cc" as credit card).
- While going through emails she deleted junk. For the credit card charge emails from Avi G, she writes the scheduled payment dates in the large desk calendar and then deletes the email. She did this several times.
- The observer first thought Avi G handles credit card payments, or that Chani writes the checks and notes when from his emails. Chani explained it (see #9).

### 7. "OFB" list from Ken
She received a list from Ken with OFB and today's date on it and looked through an Excel sheet. The observer didn't know what OFB is. *(Open question.)*

### 8. Isaac Grossman's order email → Justin
She received an email from Isaac Grossman about an order. He doesn't want the invoice to go to Alex Grossman, who the order is for. She forwarded the email to Justin and told him to use Isaac Grossman as the customer and Alex as the ship-to.

### 9. Who handles credit card vs check payments (9:36)
Explained by Chani:
- Avi G takes care of credit card payments. Chani does check payments.
- Avi G tells Chani when a credit card payment is due. She writes it down so Isaac Grossman can make sure there is money in the account.
- Chani thought Mordy tells Isaac Grossman, but Mordy thought someone else does, so Chani does it.
- *(Observer: the chain has many hand-offs and many ways to go wrong. It could be automated: an email to Isaac Grossman, or a calendar entry, reminding him to fund the payment account.)*

### 10. Contact Electric bill
- She got an email from Robert (a warehouse employee who also helps Isaac Grossman and forwards bills sent to his email) with a Contact Electric bill for 5702 (the Brooklyn office location; the warehouse in Jersey is 1600). She took a stack of papers and found what looks like a printed email, and copied information to a list *(the notes are cut off here; see open questions)*.
- Later she printed the bill from Robert, wrote something on it and set it aside. *(Observer's read: nothing has been paid to Contact Electric since April. Robert forwarded a number of unpaid invoices.)*

### 11. ACH payments notebook
She took a break from emails for ACH payments. From a printed email from Avi Altman she wrote the list of ACH payments in a notebook. *(Observer: she prefers this by hand.)*

### 12. Open transactions vs notebook
She checked a vendor's open transactions against her handwritten notebook and did some arithmetic. The purpose wasn't clear to the observer.

### 13. Calling Isaac Grossman about ACH (~10:00)
Finishing, she called Isaac Grossman to ask whether she should put in the ACH. The answer wasn't heard. The observer moved on at about 10:00.

*(Observation across the morning: much of the work runs through paper: printed emails, written lists and notebook entries, a desk calendar, hand-filled payment slips, and a printed copy of a check.)*

## Tina, Day 4 (11:00 to 11:50)

**Tools:** email, Walmart Retail Link, DSCO Rithum (Kohls), Excel (historical upload files), OneDrive.

### 14. Daniel's role; AI tool question (11:00)
- Daniel manages content: for every new piece of content we have, he makes sure it reaches every customer that sells that item.
- Daniel also checks inventory for customers, to make sure that everything we say we are selling them is actually online on the customer's site.
- Tina started building an AI tool to do this automatically. She then saw that Avi G is working on some kind of AI tool (the Grok bots that Peleg and Baruch Grossman are rolling out, with Avi G as first tester), so she is not sure whether to continue. She works under Avi G, and realized the company as a whole was doing what she was doing on a different tool. Her own tool is a personal use of ChatGPT to automate her tasks. Left for now. *(Overlapping efforts: see Other observations.)*

### 15. Walmart delayed orders: Retail Link
- During email cleanup (deleting junk) she got an email from Walmart about delayed orders (the observer thinks it is from a store account).
- She logged into Retail Link, Walmart's portal. It took a long time to load, then didn't load at all. She logged out and back in, which needed a new OTP.
- She confirmed the order status on Retail Link and replied to the customer that the order has shipped and is in transit.

### 16. Monday is cleanup day
More email cleanup. Tina said Monday is her cleanup day and her update-notes day.

### 17. Kohls / DSCO pricing exception: debugging
- While updating Kohls inventory on DSCO, Daniel hit an exception on a pricing error for one item. Tina is trying to find where it came from so it doesn't revert tomorrow.
- She checked many historical upload Excel files, including the file from an issue she worked on 3 weeks ago, and could not find the problem there.
- She then checked the line inventory update history on DSCO to see when the issue first appeared. This was a debugging session of about 10 to 15 minutes by the time the observer noted it. *(Observer wondered whether this time is better spent now or when it happens again.)*
- **Cause found:** the item's price was changing to more than 2 decimal places.
- **Still unexplained:** we don't send Kohls pricing daily, only inventory numbers and SKUs, so how did their pricing get updated? She also tried to correct the price by hand on the Kohls portal, and it would not save. *(Observer: the portal's own save failed.)*
- She put it aside for now.

### 18. OneDrive file-sharing problem
During this she also had a problem with OneDrive and sharing files with customers. An email about it went to Peleg, Baruch Grossman and Dan (who works in IT). *(Who sent it: see open questions.)*

## Daniel, Day 4 (11:50)

### 19. Home Depot spec sheet
He was building a spec sheet for Home Depot, the same process as last time: copy, paste, validate, review. The observer then moved to Suzanne.

## Suzanne, Day 4 (after 11:50; start time not given)

### 20. Customer balance
She was going through emails. She then went Customers → filter → Balance at the top for a customer. They have open invoices and a hold on an order. *(The notes end here.)*

---

# Day 5: Tuesday, Oct 20

Observer started at 11:00. Only 11:00 is an exact time; the episodes are in the order they happened.

| # | Time | Who | Episode |
|---|---|---|---|
| 1 | 11:00 | Baruch Salamander | Home Depot deduction disputes on SPS Commerce |
| 2 | After 1 | Baruch Salamander | Recovery report emails |
| 3 | After 2 | Baruch Salamander | Bank funding check |
| 4 | After 3 | Baruch Salamander | Amazon payments and deductions report |
| 5 | After 4 | Baruch Salamander | Aging reports grouped by salesman |
| 6 | After 5 | Baruch Salamander | Chasing customers for payment; non-paying customer sheet |

## Baruch Salamander: Day 5 (from 11:00)

**Tools:** SPS Commerce, Excel (several files, two screens), Amazon Vendor Central, OceanFirst (bank), F&O (statement balances, assumed), email.

### 1. Home Depot deduction disputes (11:00)
- He was disputing Home Depot deductions on SPS Commerce. SPS Commerce collects the deductions and disputes from Walmart, Home Depot, Amazon and Lowes in one place.
- He has an Excel file open on one screen and SPS Commerce on the other, and compares numbers methodically. The observer wasn't sure exactly what he was doing at first.
- He types values rather than copying and pasting.
- One file lists paid, approved and disputed deductions. *(Observer: it looks nice, but isn't set up correctly.)* On the left he has a file with the total recovery numbers, and compares the two.

### 2. Recovery report emails
- The observer thinks he sends the left-hand file, with the final recovery numbers, to whoever needs it. He puts the totals in the body of the email and attaches the summary files.
- He has recovered about $146k in disputes this year so far.
- The emails go out daily, although the content is month-to-date or year-to-date totals. *(Observer isn't sure why they are sent daily.)*
- Recipients: Mordy Berman, Avi G and Isaac Grossman (CEO), cc Ken, Chani and Zundel. All of them deal with money at some level; the observer doesn't know their individual workflows.
- *(Observer, later: Avi G does not use any of these reports for anything. Mordy Berman could run the same reports from the observer's reporting tool, so it is unclear whether he does, and if not, what his role with these numbers is. Not asked: observer rule. Can be checked in the reporting tool's schedules and run history.)*
- **Checked (Oct 21):** the reporting tool's history shows Mordy Berman used it twice, on 9/22 and 9/14, running 5 reports in total. He receives similar numbers daily from Baruch Salamander. *(Observer's idea: the tool can schedule reports and email them automatically, so the same reports could be sent straight from it.)*

### 3. Bank funding check
He makes sure the bank has enough money for the day. *(Observer: this is an extension of what Chani does, ensuring there is money in the bank for Avi G's credit card payments, Day 4. Several people ensure funds through different channels, with room for error.)*

### 4. Amazon payments and deductions report
- Amazon gives a discount if it is paid early. It also takes daily deductions on orders, which is very complicated.
- He breaks this down for Isaac Grossman: how much money came in, how much Amazon deducted, and why.
- Vendor Central and OceanFirst almost always match. For some invoices Amazon holds payment instead of paying on time or early, so it can hold them against future deductions.
- He copies and pastes, and sends several reports that show the same information, each in great detail.
- **Finding (his analysis, not verified):** ignoring labor and other costs, Amazon takes on average about 30 cents off every dollar we sell to them. *(Observer: useful business information if it is used. Not sure anyone uses it.)*

### 5. Aging reports grouped by salesman
He creates several aging reports grouped by salesman, manually, with SUMIF formulas in Excel. He breaks the information down in many different ways. *(Observer's view: much of this Excel work could be done with the observer's reporting tool, which can group and report it more easily.)*

### 6. Chasing customers for payment
- He first emails the sales reps to make sure they haven't received a check that is sitting around. Once they confirm, he runs a statement balance and sends it to the customer. If the customer is missing invoices they didn't receive, they ask and he sends them.
- Some customers frequently don't pay on time. He keeps a separate sheet of all customers who are not paying; it is close to $300k right now. He looks into each one that is over 120 days to decide whether it can be chased or will be a write-off.
- *(Observer: Suzanne also follows up with late customers from an aging report, see Day 3. How the two split this work is not known.)*

---

# Day 6: Wednesday, Oct 21

Observer sat down with Moshe Aryeh Grossman at 11:15 (first note); a later note says observation started about 11:30 and ended at 12:00. The observer found not much new to see: mostly the same switching between platforms. The order below is the order in the notes; no other times were given.

| # | Time | Who | Episode |
|---|---|---|---|
| 1 | ~11:30 | Moshe Aryeh Grossman | Communication through Teams (observation) |
| 2 | After 1 | Moshe Aryeh Grossman | EZPass claim for a missing tag |
| 3 | After 2 | Moshe Aryeh Grossman | US Customs emails forwarded to five people |
| 4 | After 3 | Moshe Aryeh Grossman | Switching between PortPro and Achim work |
| 5 | After 4 | Moshe Aryeh Grossman | Verizon dashcam reviews |
| 6 | Time not given | Moshe Aryeh Grossman | Item creation in F&O from Troy's manual |
| 7 | After 6 | Moshe Aryeh Grossman | Family Dollar order projections |
| 8 | After 7 | Moshe Aryeh Grossman | Vessel ETAs: F&O fields and the tracking Excel sheet |
| 9 | After 8 | Moshe Aryeh Grossman | Allways Shipping: customs, bookings, portal |
| 10 | 12:22 | Moshe Aryeh Grossman | Wire to All Blinds Co.: Excel to OceanFirst draft |
| 11 | After 10 | Moshe Aryeh Grossman | Supplier invoice and bill of lading chain |
| 12 | After 11 | Moshe Aryeh Grossman | Wire cleared: releasing the containers |
| 13 | After 12 | Moshe Aryeh Grossman | Customs release and freight release; 7 containers at the port |

## Moshe Aryeh Grossman: Day 6 (~11:30 on; Achim side from 12:22)

*(Episodes 6 to 9 were added after the session; the notes give no times for them.)*

**Tools:** PortPro, Teams, email, WhatsApp, Excel (several shared files), OceanFirst portal, Allways portal, F&O (Achim side), Verizon dashcam camera system, EZPass, US Customs notices.

### 1. Communication through Teams
- Moshe Aryeh Grossman is the first person the observer has seen who uses Teams extensively for communication. Everyone else uses the phone, talks face to face, or uses email.
- *(Observer's view: this creates different communication channels, and nobody is on the same page about anything. Things should be in one central place, like Slack or a similar tool. All internal communication should be there, with no internal emails. Reports should also be sent there, so errors and questions about a report are raised in one place.)*
- *(Observer's example, not being dealt with now: when there is an issue on a scheduled report that goes out by email from the observer's reporting app, sometimes it is reported in the Teams chat between the observer, Baruch Grossman and Avi G, and sometimes Avi G replies to the email, which cc's the observer and Baruch Grossman. That allows confusion, lost messages and skipped issues. A centralized communication channel is needed.)*

### 2. EZPass claim
- He filed a claim with EZPass. A tag was either left in a truck that was returned and is now being used by someone else, or it was stolen.
- *(Observer: EZPass's process is a problem. If a tag is reported lost, they simply switch to charging the license plate, but they never report someone else using the tag.)*
- A police report was filed for the possible theft. The total is $38k.

### 3. US Customs emails forwarded by hand
- US Customs automatically pulls money from us. Moshe gets the emails and forwards them to whoever needs to know: Mordy Berman, Zundel, AP, Avi Altman and Baruch Salamander.
- He went down a list of emails, clicked forward, copied the email addresses into the field and sent. It doesn't take him much time. *(Observer: it could go straight to them, and a central communication channel would help.)*
- *(Observer's link: money pulled automatically is the kind of payment the bank-funding checks on Day 4 and Day 5 are about; whether Customs pulls are part of those checks is not known.)*

### 4. Switching between PortPro and Achim work
- He is constantly switching between PortPro and Achim work. Bais Trucking does pickups from the port for Achim, so he and Avi (read as Avi Altman, since this is the buying team) track containers from the port to Achim, and also charge Achim for the trucking. It is a mix of the two companies.
- PortPro tracks the trucks and drivers by GPS, so he knows exactly where everyone is. *(Observer: it's a great tool.)*
- *(Observer's idea: could PortPro data be copied into F&O, and does it make sense to? It is officially a different company, but there is a lot of overlap, and connecting straight from one to the other would eliminate a number of steps he does. Related: Avi Altman checking PortPro and deleting Excel rows on Day 2.)*

### 5. Verizon dashcam reviews
He also reviews Verizon dashcam recordings of the drivers; the cameras keep recording for him to review. He uses extensive tools that seem to be good.

### 6. Item creation in F&O
Most data entry into F&O is done by Avi Altman, but Moshe Aryeh Grossman does item creation. He follows a step-by-step manual from Troy.

### 7. Family Dollar order projections
He runs projections for Family Dollar of what he needs to order from F&O. Family Dollar is a customer that became his personal project; he runs everything for this customer. The rest of his connection to Achim is emails and PortPro.

### 8. Vessel ETAs
- He doesn't update the ETA fields for water vessels. Avi Altman is supposed to enter them, but Moshe doesn't know whether it is being done correctly. F&O has multiple ETA fields that connect to different places, so he isn't sure it is being done correctly.
- He tracks vessels in an Excel sheet that he, Avi Altman and Sal D'Rienzo can access. When Avi G wants to know an item's exact ETA, the answer comes from that Excel file. The ETAs in it are updated by Avi Altman whenever he wants to, knows of an update, or gets one (no set schedule was described). Moshe thinks Avi Altman uses the Allways portal for this at this point.
- *(Possible link, not verified: on Day 2, Tina had to download Goods in Transit because some open PO lines didn't have updated dates.)*

### 9. Allways Shipping
- He uses Allways Shipping to clear customs. They also book the shipping vessels and assign containers to suppliers.
- They give us access to their portal, which has the exact location of every shipment.
- *(Observer's idea: this would be a powerful connection to F&O and PortPro, updating ETAs to exact dates. They have API and EDI integrations available, and we should use them.)*

### 10. Wire to All Blinds Co. (12:22)
- At 12:22 he was working on the Achim side, setting up a wire for Isaac Grossman to send to All Blinds Co., a long-tenured supplier in China headed by Duke.
- He copies from one Excel file to another that totals everything for him. He prepares wires and saves them as drafts in OceanFirst, and Isaac Grossman releases them. He copies the information from his spreadsheet into the OceanFirst portal.
- The wires get split somehow *(the observer isn't sure what splits them)*. He explained: every payment has to match a bill of lading (BOL), and one BOL can have multiple containers on it.

### 11. Supplier invoice and bill of lading chain
1. The supplier sends an Excel file with the invoice and packing list to Avi Altman.
2. A few days later the supplier sends the BOL.
3. Avi Altman sends the BOL to Lina at Allways. She confirms it and adds it into their portal. If Allways books the shipping for us, it is in their portal earlier. If we only use Allways for customs, we only see it when Lina enters it, after Avi Altman's email.
4. Avi Altman also adds it to the shared Excel file (on Moshe's desk) with the ETAs and other details.
5. Moshe is cc'd, so he sees when this happens. When he sees Avi Altman forward it, he knows it was confirmed by Avi Altman and matched to F&O.
6. Moshe adds the total to a shared Excel file with the payments team (Zundel), who apply it to the PO and voyages in F&O. Moshe doesn't know what they do with it.
7. Moshe puts the invoice, ETA and PO into the Excel file, goes into OceanFirst and sets up a new payment for Isaac Grossman to clear.

### 12. Wire cleared: releasing the containers
Once Isaac Grossman clears the payment, he tells Moshe by email or WhatsApp, and Moshe updates the factory so they release the containers at the port.

### 13. Customs release and freight release
- Another step in this chain is customs, which Allways handles. There are two releases: the customs release and the freight release.
- The freight release has two parts: the shipping lines need to get paid, and the factory (supplier) needs to surrender the BOL to the shipping line. This changed: for the past two years the surrender works electronically. The supplier does not do it until it gets paid, so the payment to the supplier and the freight release happen at the same time.
- **Live example:** Achim has 7 containers sitting at the port right now. All were released by customs, because Allways took care of that. The freight release was not done yet because the factory had not been paid, although the shipping lines had been paid. Chani pays the freight.
- **Demurrage rule (general, not part of this example):** after the allotted free time of 4 working days, we have to pay demurrage charges, about $300 to $350 per day per container. The 7 containers above are still within free time and waiting on payment, so no demurrage applies to them yet.

*(Observer's note on this chain: the same invoice, ETA, PO and BOL data is entered or copied into several places (supplier Excel, Allways portal, shared Excel, payments Excel, F&O, OceanFirst), and the status moves by cc'd emails and messages. Isaac Grossman is the approver for checks (Day 4) and wires (Day 6). The containers can't be released until the whole chain finishes: the wire is cleared, Moshe is told by email or WhatsApp, Moshe tells the factory, and the factory surrenders the BOL.)*

---

# Day 7: Friday, Oct 23

Observer sat with Tina. Daniel's part was described by Tina, not watched. No clock times given.

## Tina and Daniel: weekly Amazon inventory file for OnePlatform (Vendo)

**Tools:** OnePlatform (Vendo) SharePoint, network drive (Daniel's base sheet), F&O (on-hand, open PO lines, Goods in Transit), Excel VLOOKUPs, email, Teams.

**What:** a weekly file telling OnePlatform whether each Amazon item is in stock, low or out, with the next available date for low and out-of-stock items. **Why:** OnePlatform uses it for advertising decisions on Amazon. **When:** weekly, on Friday (an earlier answer said OnePlatform updates the file usually Thursday, sometimes Friday). **Who:** Daniel, then Tina. **Where it goes:** emailed to Matt (OnePlatform) and Reggie (our Amazon rep), cc Avi G and Tara (OnePlatform).

### The file
- OnePlatform's SharePoint Excel is a running report of everything we do with Amazon, with the full product list. Daniel copies one sheet into a base sheet on the network and reuses it to start each week's file.
- Black rows are items we keep selling. Red rows are discontinued or obsolete; they stay on so Amazon can sell its own remaining stock and OnePlatform gets info on them. Once a red item's Amazon inventory is 0, it's dead.
- Reds are only updated when the item becomes obsolete in F&O (disco'd and no stock). Amazon might still have inventory in its DCs.
- We send the whole list every week, not just the changes (required, per Tina).
- Of OnePlatform's fields, only Amazon product line, subcategory and similar aren't in F&O. What we send is ASIN, SKU, UPC, product name and inventory status, all of which we have.

### Stock levels (pieces in F&O, warehouse 1600, our only warehouse)
- Quantity: Tina and Daniel both use available quantity (Daniel's was first given as on-hand; confirmed available).
- Out of stock: 11 or fewer, as Tina first described (Amazon requires full packs and 12 is the most common pack size). Daniel actually uses under 24, and Tina says that's fine: any cutoff above the pack size works.
- Low stock: under 50. Arbitrary. *(Observer's view: should probably be a multiple of 12, like 48 or 60. Not changing it now.)*
- In stock: 50 or more.
- We don't give Amazon exact inventory because the warehouse is too fluid.

### Steps
1. Daniel downloads OnePlatform's file from SharePoint and starts from his base sheet (from scratch every week, by design: a full download plus a lookup is easier than finding only the changed items).
2. Daniel marks each item in, low or out of stock from on-hand. When Tina did this part, a formula with a lookup to an on-hand download wrote the status automatically and it took her very little time. Daniel's time is unknown; Tina says he may be leaving.
3. Daniel emails the file to Tina as an attachment (not a shared file).
4. Tina downloads open PO lines from F&O and VLOOKUPs the low and out-of-stock items to them, taking the earliest open PO date. Daniel can't do this step: he has no access to open PO lines or Goods in Transit.
5. If that date is within 30 days of today, or already past, she pulls Goods in Transit for those items and uses its date instead. *(Observer: the 30-day rule should already be gone. Recommended order, already given to her: Goods in Transit dates first, then the earliest open PO date for items still without a date.)* The open PO date is set when the PO is created; the Goods in Transit date is set when the goods ship and updated as things change. Goods in Transit alone isn't enough, because items not yet on the water have no date there, so the result is a coalesce. The 30-day rule comes from Avi Altman's explanation of how he updates dates in the system.
6. No open PO and no Goods in Transit: the date is left blank. A past date usually means the warehouse already received it.
7. Tina emails the file to Matt and Reggie, cc Avi G and Tara. Her part takes under 10 minutes, depending on interruptions.

### Gaps and ideas
- The file holds every item in our Amazon catalog; no exact count.
- Out-of-stock items should be marked temporarily unavailable with an in-stock date. Tina is fairly sure OnePlatform doesn't do it, and we don't either.
- *(Observer's idea: an F&O report with the due dates already coalesced would be an easy first step, even without changing the rest of the flow. Since everything we send is in F&O, the whole file could be built for her each week.)*
- *(Observer's note: the file should be one shared file updated weekly, not an attachment passed back and forth.)*
- Tina uses Teams well and also a lot of email (relevant to the central channel idea).

## Follow-up with Daniel (after Day 7): daily inventory feeds for 5 more customers

The Amazon file is one of six inventory feeds Daniel builds. From a conversation with Daniel, not watched.

- **Amazon:** weekly. Daniel said dropship only, but Tina clarified it's OnePlatform's whole catalog, which is the entire Amazon catalog. He thought dropship because it's the same process as his other feeds, and he doesn't know what the file is used for (Tina: OnePlatform's advertising decisions for Amazon warehouse). His template is already on the server. He saves the finished file in OneDrive as well as emailing it to Tina.
- **Mason, Dealora, Kohls, Lincoln Comfy, Sears:** daily. Each gets a quantity of 0, 24 or 50 per item (numbers, not in/low/out; Kohls gets the real quantity on disco'd items), each in its own format. Dealora and Lincoln are emailed; Mason, Kohls and Sears are uploaded to portals.
- **Time:** about 10 to 15 minutes a day for all the daily ones.
- **How:** downloads inventory from F&O, filters the stock column for one band, types the status (or number) in the next column, copies it down, then filters the next band. Then a VLOOKUP from his working inventory file into each customer's file.
- **Cutoffs:** under 24 is out of stock, 24 to 50 is low, above that is in stock. Tina had said 12, but confirmed 24 is fine as long as it's above the pack size, so 24 is the rule.
- **To check:** Lincoln Comfy wants an image URL (is it in F&O, and do they actually need it?); Sears has a variation group ID.
- For a bot or report runner, Amazon and the daily feeds are the same job, scheduled differently.
- **Kohls exception** (Tina): these five are the only daily feeds Daniel builds by hand; all other customers get inventory automatically by EDI 846 or a standard emailed inventory file. Those automated feeds zero an item once it gets to 6, so no automated customer gets inventory for disco'd items under 6. Kohls is manual, so Tina puts a 5 on disco'd items we still have (from returns, or never sold off) to sell them off there. This is the reason behind Day 2's "under 5, send 0" note.
- Kohls is the sell-off channel because, of the five daily feeds, it carries the largest catalog of our items. F&O already flags disco'd items and the on-hand sheet shows which still have stock, so the check can be automated. *(Observer's view: maybe pick the channel by best pricing instead.)*
- **Main rule** (Tina): never send more than we have. Out-of-stock marked out, and numbers at or below real stock (have 30, send 24). Daniel's different cutoffs are fine.
- **Dates** (Tina): only Amazon gets next available dates. Mason and Kohls would like future dates too, but we don't add them now; any automation we build should.
- **Sell-off quantity** (Tina): she sends 1, 2, 3, 4 or 5 on Kohls depending on what we have, not always 5.
- **Who uploads Kohls:** Daniel, every day. Active items go through his filters and VLOOKUP as 0, 24 or 50; disco'd items keep their real quantity. Tina only uploaded on Day 2 to diagnose an issue; she usually doesn't.
- **Dates for Mason and Kohls:** they need the next receive date and the next available quantity. The quantity is always 24, as long as the next PO has more than 24.
- **Quantity:** Daniel uses available, like Tina.
- **Amazon item list:** our Amazon catalog in F&O is the same list. OnePlatform has its own reporting sheet; Daniel downloaded it once and re-uses it.
- **Reds:** only updated when the item becomes obsolete in F&O (disco'd and no stock). Amazon may still have inventory in its DCs.
- **Never drop the line:** Daniel seems to know it; he sends Tina the list with those items still on it.
- **Why these five are manual:** they don't have EDI capability for inventory; not all customers take an 846.

---

# Candidate pain-point modules (working list)

| # | Module | What it would do |
|---|---|---|
| 1 | Cross-system lookup / match | One search or match across order, PO, tracking, customer, amount, batch / email |
| 2 | Retailer and portal handler | One place for each retailer's rules (cancellations, invoices, open orders, deductions, inventory feed rules) instead of paper manuals or memory |
| 3 | Intake triage and routing | Recognize the source (Amazon, Kohls, Home Depot, new customer) and route or reply, instead of forwarding by email |
| 4 | Templates and checklists | Standard text and field rules for repeated messages and files |
| 5 | Payment-to-remittance matching | Suggested matching, sort and filter, amount defaults, clear post errors |
| 6 | Exception and open-item tracker | One list for things "left open" (instead of highlighted notes on checks, printed lists) |
| 7 | Defaults and validation | Fix defaults that cause errors; validate before submit |
| 8 | Product data → channel file builder (new, from Day 2) | Keep one complete product spec sheet and generate each customer's template (Wayfair, Amazon, Kohls, Home Depot) from it, including dropdown-valid values. Fill gaps in the main sheet once instead of by hand each time |

## Possible additions (not adopted; for the observer to decide)
- **Recurring reports and grouped summaries:** Baruch Salamander's daily recovery emails, Amazon breakdown and SUMIF aging reports by salesman (Day 5); Suzanne's printed aging and the aging dashboard idea (Day 3). Observer's own reporting tool is relevant here.
- **Central communication channel (observer's idea, Day 6):** one place (like Slack) for internal communication and for questions about reports, instead of phone, face to face, email and Teams. Evidence: Teams outages (Days 1 and 2), an unanswered email about Teams (Day 1), order and payment information moved by email forwarding (Evelyn to Justin, Chani to Justin, Moshe's US Customs forwards, Tina to Baruch Salamander), the scheduled-report issue split between Teams and email, and wire status passed by email or WhatsApp (Day 6).
- **Paper handling:** printed emails and lists, notebooks, a desk calendar, hand-filled slips, a printed check copy (Days 1, 3, 4).

## Signals by module

| Module | Day 1 | Day 2 | Day 3 | Day 4 | Day 5 | Day 6 |
|---|---|---|---|---|---|---|
| 1. Cross-system match | CHUB / F&O / FedEx / UPS hopping; InOrder phone numbers; searching email for a total | **Tina's low-stock vs open-PO lookup (clearest yet)**; Avi's PortPro → Excel row deletion; Moshe Aryeh Grossman's PortPro screenshots pasted into ChatGPT (misread details) | Suzanne's aging → customer info → phone number; open transactions and balance each behind extra clicks | Contact Electric: printed bill vs stack of printed emails; ACH notebook vs a vendor's open transactions; dates copied from email to desk calendar; Tina's historical Excel upload files vs DSCO line update history to trace a price change | Excel files vs SPS Commerce (deductions); Vendor Central vs OceanFirst (almost always match); recovery totals compared across two files | PortPro to Achim hops: containers tracked port to Achim, trucking charged to Achim; PortPro GPS data (observer: could connect to F&O); vessel ETAs in an Excel sheet, several F&O ETA fields and the Allways portal; Family Dollar projections from F&O; supplier invoice, BOL, ETA and PO data copied across a supplier Excel, Allways portal, shared Excels, F&O and OceanFirst |
| 2. Retailer / portal handler | Lowes 810, Wayfair, Mason (doesn't auto-close), Home Depot, Lowes pending list | Kohls inventory feed (under 5 → send 0, never omit the line); Amazon returns / disputes via Vendo; **Charmaine's Wayfair deductions (accept or dispute per PO in the portal; CSV export available) and hand-closing Mason orders again** | Credit card added to the sales order via Header → Open prices and discounts; processing fee added by hand | Credit hold release (Customers → Credit and collection → Open credit holds); two old Amazon holds unresolved; Walmart Retail Link slow, then not loading, OTP again; Kohls portal wouldn't save a price correction | SPS Commerce already collects deductions and disputes from Walmart, Home Depot, Amazon and Lowes in one place; Amazon early-pay discount, daily deductions, and holds against future deductions | EZPass: lost-tag process charges the plate and doesn't report misuse; US Customs auto-pulls money; Allways Shipping portal (customs, bookings, exact locations; API/EDI available) |
| 3. Intake / routing | Amazon and Kohls customers sent back to retailer; emails forwarded to Evelyn | Evelyn forwards orders to Justin; Jamie → Tina → Daniel by email; Keith → Tina for Amazon return; Charmaine forwards replacement-part request to Jhony | Order emails forwarded by hand to Justin (observer: could be forwarded automatically by a bot); Charmaine asks Suzanne for an account number | Isaac Grossman's order email forwarded by Chani to Justin (customer and ship-to named in the forward); credit card due dates pass Avi G → Chani → Isaac Grossman, with unclear ownership of the last step; Suzanne's check image emailed to Chani; Walmart store email to Tina, who checks Retail Link and replies on shipment status | Recovery totals emailed daily to six people (Mordy Berman, Avi G, Isaac Grossman, cc Ken, Chani, Zundel); sales reps emailed to confirm no check is pending | US Customs emails forwarded by hand to five people; Teams vs email vs phone channels (observer: one central channel); supplier documents routed by email forward (supplier to Avi Altman to Allways); status known by being cc'd; wire cleared reported by email or WhatsApp |
| 4. Templates / checklists | 4-minute email; short-pay wording; Nexus reply | Templated prompt copy-pasted; Daniel's sheet reviewed 3x | Each follow-up call or email ~5 min; email drafted to a customer about skipped invoices; every follow-up gets a written note | Payment slip filled by hand and clipped to each bill; the forward to Justin spells out customer and ship-to each time; Daniel's Home Depot spec sheet again: copy, paste, validate, review | Several reports sent with the same information; statement balances sent to late customers | n/a; item creation in F&O follows a step-by-step manual from Troy; each wire must match a bill of lading, which can have several containers |
| 5. Payment matching | Most of Suzanne's afternoon | n/a | n/a (morning was collections follow-up, not payment entry) | n/a (vendor side, not customer payments) | n/a (deductions and Amazon payments reconciled, not customer payment entry) | n/a |
| 6. Open-item tracker | Mason, tariff deduction, $200 short-pay, lost UPS package, Lowes pending list | Returns we shouldn't receive; Avi's unclear dispute list; unresolved Lincoln Supply shipping; Mason orders to be closed after they close in our system | Weekly Thu to Fri follow-up from a printed aging; notes per customer; salesman (Heshy) told by note; June invoice still open | Credit holds open over a year; nothing paid to Contact Electric since April; Lincoln orders waiting on payment; desk calendar and notebook used as the reminder list; Tina's DSCO pricing issue set aside, cause partly unexplained; Monday is cleanup and update-notes day | Separate sheet of non-paying customers (~$300k); each over 120 days reviewed for chase vs write-off | EZPass claim of $38k (police report filed for possible theft); shared Excel tracks vessel and payment status by hand; 7 containers at the port cleared by customs but waiting on freight release until the factory is paid (still within free time); general rule: demurrage of about $300 to $350 per container per day after 4 working days of free time |
| 7. Defaults / validation | Credit-card default; 810 required fields; item line lost without "Add item" | Repeated 3x manual review instead of validation; Daniel reads the whole Wayfair file at the end to check it; Charmaine reviews emails a few times; deduction checking differs by person (Suzanne checks the original invoice, Charmaine accepts Wayfair's figure) | CVC code not stored by F&O, so card details go in a paper notebook or arrive by email | Payment proposal selects every line and sets the method automatically; she unticks all but what she wants and changes the method (e.g. check for Chase Card Services); a price with more than 2 decimal places reached Kohls; no check caught it | n/a | n/a; F&O has several ETA fields that connect to different places, unclear which is right |
| 8. Product data → channel files | n/a | **Daniel's Wayfair sheet (column-to-column copy and paste, dropdown-restricted columns, info read off product images); Tina's Kohls inventory feed, Amazon inventory file and Daniel's submission sheet reviewed 3x; Wayfair listing shows curtain width per panel when 55" is the whole curtain (customer complaint reached Charmaine)** | n/a | n/a; Daniel distributes new content to every customer that sells the item and checks listings match what we sell; Home Depot spec sheet; the DSCO price issue; Tina's unfinished AI listing-check tool | n/a | n/a; item creation at the source in F&O |

**Other observations:** AI tools are already in use informally on different platforms: Avi G started on Claude and moved to Grok; Tina uses ChatGPT on her own for her tasks (including the Home Depot mats images, Day 2); Moshe Aryeh Grossman pastes PortPro screenshots into ChatGPT (Day 2); the company's own rollout is on Grok. Deductions are handled in several places: Suzanne (deductions list to Avi G, Day 1), Charmaine (Wayfair, Day 2), Tina forwarding Avi G's list to Baruch Salamander, who disputes on SPS Commerce (Days 2 and 5). Late-customer follow-up is also done twice: Suzanne from an aging report (Day 3) and Baruch Salamander from statements and a 120-day sheet (Day 5). Several people ensure the bank has enough money (Chani, Baruch Salamander), through different channels. Overlapping AI efforts: Tina started a personal ChatGPT tool to check that customer listings match what we sell, then saw Avi G working with the Grok bots that Peleg and Baruch Grossman are rolling out, and paused. Worth telling her whether to continue. The observer's reporting site remains as a manual report runner and is not changing. Report consumption: Avi G, a recipient of Baruch Salamander's daily recovery reports, does not use them (per the observer); Mordy Berman has run reports in the reporting tool only twice (9/14 and 9/22, 5 reports); others' usage not yet checked. OTP prompts recur across portals (Lowes Day 1, Walmart Retail Link Day 4). Adoption note for automation: Chani (office manager) works largely by hand and on paper and is comfortable that way, so automation aimed at her tasks should account for comfort and adoption, not only time saved. Paper bridges recur: printed lists and emails, handwritten notebooks, a desk calendar, hand-filled slips, a printed copy of a check (Charmaine's printed Lowes list on Day 1, Suzanne's printed aging on Day 3, Chani on Day 4). The check printer has been broken for some time and checks are printed on the regular printer (drum replacement $300 to $400).  Teams was down for Charmaine (Day 1) and Tina (Day 2). File handling is manual and scattered (misplaced files, drag-drop into email, folders everywhere). The warehouse floor manager (Keith) is a key signal source for the office. Same task, different routes: Charmaine starts from the sales order and reaches the invoice from there, while Suzanne starts from the invoice and reaches the sales order from there; Suzanne verifies deductions against the original invoice, Charmaine accepts Wayfair's. Retailers differ in what they export: Wayfair gives a CSV of deductions, Lowes gives a list that doesn't download cleanly.

---

# Open questions
- Moshe Aryeh Grossman: which PortPro screens and which details does ChatGPT misread? What other complicated questions does he ask besides driver assignments? Does PortPro offer an export or API?
- Day 3: who was the last person cc'd on Suzanne's email about skipped invoices (maybe Isaac Grossman)? Is the follow-up always from a printed aging? Who is Heshy's customer here?
- Day 4: what is OFB? Which tasks are the Grok bots meant to take on first, and does that include Tina's listing check? Is "Lincoln (comfy)" the same customer as Lincoln Supply? What was copied "to a list of" with the Contact Electric email (the note was cut off)? What did Isaac Grossman answer about the ACH? What was the purpose of checking the vendor's open transactions against the notebook? Does the bank allow depositing a printed copy of a customer's check image?
- Day 4 afternoon: does Tina continue her listing-check tool, given the Grok bots? How often does Daniel run the content and listing checks, and how long do they take? How did Kohls' pricing change if only inventory and SKUs are sent? Who sent the OneDrive email to Peleg, Baruch Grossman and Dan, and what exactly was failing? What was Suzanne doing with the customer balance and the held order?
- Day 5: Mordy Berman has used the reporting tool twice (9/14 and 9/22, 5 reports in total) and receives Baruch Salamander's reports; what is his role with these numbers, and which of Baruch Salamander's reports could be replaced by scheduled ones from the tool? Avi G reportedly doesn't use the reports; do any recipients? Why are the recovery reports sent daily? Does anyone use the Amazon analysis (about 30 cents of every dollar)? What exactly was he comparing between Excel and SPS Commerce for Home Depot? Who does what on collections, Suzanne or Baruch Salamander? What does each cc'd recipient do with the recovery emails? How long does each report take, and how often?
- Day 6: what splits the wires in OceanFirst? (About 5 wires a week, which Isaac Grossman releases; answered Oct 22.) What does Zundel do with the shared payments Excel? Which F&O ETA fields exist and what does each connect to? How often are items created, and how long does it take? How often are Family Dollar projections run and how long do they take? What would the Allways Shipping API or EDI connect to? Day 6: what time did the Moshe session start (11:15 or about 11:30)? Is the "Avi" he tracks containers with Avi Altman? Do the US Customs pulls go through the bank-funding check? What does each person do with the Customs emails? What does the EZPass claim cover, and who else was told? Could PortPro data connect to F&O?
- Wayfair listing with wrong curtain width: who maintains Wayfair product data, and has it been corrected? (Possible link to Daniel's Wayfair sheet.)
- OnePlatform (Vendo): beyond the weekly file and advertising decisions, what else do they do for us?
- Day 7: Is exactly 50 low or in stock? How many items need dates each week (the file is our whole Amazon catalog)? How long does Daniel's part take? Does Daniel download the file Thursday or Friday? Who should mark out-of-stock items temporarily unavailable on Amazon? (Answered Oct 23: the 30-day rule should go; Goods in Transit first, then the earliest open PO.)
- Daniel's feeds (answered: 24 is the cutoff; the Amazon file is the whole OnePlatform catalog). Does Lincoln Comfy need the image URL, and is it in F&O? What is Sears' variation group ID? (Answered: Daniel uses available.) (Answered: Daniel uploads Kohls daily; disco'd items keep their real quantity.)
- Topics of Suzanne's call and David Dweck's call to Tina (not heard).
- Daniel: how many product lines a week does he build, and for which customers? Does each customer (Wayfair, Amazon, Home Depot, Kohls) need its own template?
- Daniel: which attributes are missing from the main spec sheet and have to be read off the product images?
- Daniel: when product lines have many different items (not 4 near-identical ones), does the 15 to 20 minute estimate grow a lot?
- Lunch window (12:15 to ~2:45 on Day 1) is blank by design (not shadowing).

# Shadowing plan
- Next: Moshe Aryeh Grossman's PortPro cleanup. Baruch Salamander done (Day 5, first session). Done for now: Tina, Daniel, Moshe's ChatGPT use (#16), Charmaine's afternoon.
- Final report: remove the "ask Suzanne" open item from the Day 1 content; the observer rule is to only ask WHAT.
- Done: Suzanne's morning (Day 3), Charmaine's afternoon (#17 to #21), Chani's morning, Tina, Daniel and part of Suzanne's day (Day 4). Moshe Aryeh Grossman's second session (Day 6) is done.
- Sales team and buying team.
- **Not shadowing Avi G:** he already uses the Grok bots heavily, and anything to streamline there is handled directly between him, Baruch Grossman and Peleg.
- **Suggested priorities (Oct 21):** Justin (order entry and sample orders; now also where order emails need a path); the warehouse (Sal D'Rienzo, Keith Hamby, Brandon, Jhony, Robert); sales (David Dweck, Jamie, Heshy). Repeat sessions: Daniel (a full spec sheet build, weekly volume, customers, missing attributes), Moshe Aryeh Grossman and Avi Altman (buying side feeds Tina's low-stock vs open-PO matching), Baruch Salamander (second session), Tina (full low-stock cycle), Suzanne (one more block). Probably conversation rather than shadowing: Mordy Berman and Zundel (offsite), Dan Holland (IT and EDI).
- Audience note: the final report goes to Baruch Grossman and Peleg. Before it goes out, phrase individual-level remarks (speed, talkativeness, "stupid", etc.) as process observations, and decide how to handle observations about named people's mistakes.
- Word document format: match `reference/Shadowing_Day_Report_2026-10-14_v1.pdf` (the PDF of the Day 1 Word report). Header "Shadowing Day Report, <date> | Page N"; title and subtitle; intro line on `~` estimates and italic asides; "The Day at a Glance" table; one Part per person (systems and tools line, episode table of Time / Episode / Type, then "What happened" with bold-led episode subsections and numbered steps); the observer's own work as a separate Part; Open Items; candidate modules table (# / Module / What it would do / Episodes touched) with a closing next-step line.
- Word document: `Shadowing_Report_2026-10-21.docx` (Days 1 to 6, Parts 1 to 14) was built Oct 21 by `build_report.js` (needs `npm install docx`; run `node build_report.js [out.docx]`). It explains the Grok background, frames the 8 modules as candidate Grok bot tasks, uses Baruch Grossman (COO) and neutral wording, and omits personnel remarks. The earlier `Shadowing_Report_2026-10-15.docx` (Days 1 and 2) is superseded. When more days are added, edit the content in `build_report.js` and rebuild.
