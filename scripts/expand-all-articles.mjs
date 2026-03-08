import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentPath = path.join(__dirname, '../src/data/blogContent.tsx');
let content = fs.readFileSync(contentPath, 'utf8');

// Normalize line endings and curly apostrophes
content = content.replace(/\r\n/g, '\n').replace(/\u2019/g, "'").replace(/\u2018/g, "'");

const replacements = [
  // 2. restaurant-payroll-gap - expand Why Payroll Gaps and What Owners Do
  {
    old: `      <h2>Why Payroll Gaps Happen</h2>
      <p>Restaurant revenue is uneven. A slow Tuesday, bad weather, or a holiday weekend can leave you short when payday arrives. Credit card deposits take 2–3 days to hit your account. Rent, utilities, and vendor bills don&apos;t wait. The timing mismatch between when money comes in and when it goes out is one of the main causes of restaurant payroll stress.</p>
      <h2>What Owners Do When They Can&apos;t Make Payroll</h2>
      <p>Some owners dip into personal savings. Others negotiate with staff for a short delay—though that damages trust and can violate labor laws. Many turn to`,
    new: `      <h2>Why Payroll Gaps Happen</h2>
      <p>Restaurant revenue is uneven. A slow Tuesday, bad weather, or a holiday weekend can leave you short when payday arrives. Credit card deposits take 2–3 days to hit your account. Rent, utilities, and vendor bills don&apos;t wait. The timing mismatch between when money comes in and when it goes out is one of the main causes of restaurant payroll stress.</p>
      <h3>The Payroll Calendar Trap</h3>
      <p>Biweekly payroll means a fixed schedule. But your revenue doesn&apos;t follow a calendar—weekend rushes, holiday lulls, and seasonal swings create unpredictable cash flow. When a big weekend falls right after payday, you may have already spent the previous week&apos;s revenue on bills. That gap is where many owners get stuck.</p>
      <h2>What Owners Do When They Can&apos;t Make Payroll</h2>
      <p>Some owners dip into personal savings. Others negotiate with staff for a short delay—though that damages trust and can violate labor laws. Many turn to`,
  },
  // 3. restaurant-slow-season-survival - expand Preparing and Using Funding
  {
    old: `      <h2>Preparing Before the Slow Season</h2>
      <p>Build reserves during busy periods. Trim non-essential costs. Renegotiate with suppliers if possible. And know your options: <Link to="/restaurant-working-capital">restaurant working capital</Link> and <Link to="/restaurant-cash-advance">restaurant cash advance</Link> products can help bridge the gap when you need cash before the next busy period.</p>
      <h2>Using Restaurant Funding During Slow Seasons</h2>
      <p>Many lenders focus on your revenue history over several months, not just the current slow period. If you have consistent sales over time, you may qualify for`,
    new: `      <h2>Preparing Before the Slow Season</h2>
      <p>Build reserves during busy periods. Trim non-essential costs. Renegotiate with suppliers if possible. And know your options: <Link to="/restaurant-working-capital">restaurant working capital</Link> and <Link to="/restaurant-cash-advance">restaurant cash advance</Link> products can help bridge the gap when you need cash before the next busy period.</p>
      <h3>When to Start Preparing</h3>
      <p>Don&apos;t wait until traffic drops. Identify your slow periods from last year&apos;s data—January, post-holiday summer, or quiet weekdays. Start setting aside cash during your busiest months. Even a small reserve can reduce stress when revenue dips. If you know a slow period is coming and your account is thin, explore <Link to="/restaurant-funding">restaurant funding</Link> options before you need them.</p>
      <h2>Using Restaurant Funding During Slow Seasons</h2>
      <p>Many lenders focus on your revenue history over several months, not just the current slow period. If you have consistent sales over time, you may qualify for`,
  },
  // 4. restaurant-equipment-repair-cost - expand Typical Costs and How Owners Fund
  {
    old: `      <h2>Typical Restaurant Equipment Repair Costs</h2>
      <p>Simple fixes—thermostats, gaskets, minor electrical—can run $200–$800. Compressor work or major component replacement often costs $2,000–$8,000. Full walk-in cooler or freezer replacement can reach $15,000–$50,000 or more. Commercial ovens and ranges vary widely. Many restaurant owners don&apos;t have that cash on hand when an emergency hits.</p>
      <h2>How Owners Fund Equipment Repairs</h2>
      <p>Some use reserves. Others put repairs on credit cards at high rates. Many turn to`,
    new: `      <h2>Typical Restaurant Equipment Repair Costs</h2>
      <p>Simple fixes—thermostats, gaskets, minor electrical—can run $200–$800. Compressor work or major component replacement often costs $2,000–$8,000. Full walk-in cooler or freezer replacement can reach $15,000–$50,000 or more. Commercial ovens and ranges vary widely. Many restaurant owners don&apos;t have that cash on hand when an emergency hits.</p>
      <h3>Hidden Costs of Downtime</h3>
      <p>Beyond the repair bill, consider lost sales. A broken oven during dinner service, a failed cooler overnight, or a hood system down during lunch—each hour of downtime costs revenue. Add spoiled inventory, emergency repair premiums, and potential health inspection issues, and the true cost of an equipment failure can far exceed the repair quote.</p>
      <h2>How Owners Fund Equipment Repairs</h2>
      <p>Some use reserves. Others put repairs on credit cards at high rates. Many turn to`,
  },
  // 5. restaurant-broken-walk-in-cooler - expand Immediate Steps and Funding
  {
    old: `      <h2>Immediate Steps When Your Cooler Fails</h2>
      <p>Move perishables to backup refrigeration or a temporary unit if possible. Call a commercial refrigeration repair service right away—restaurant equipment specialists can often diagnose and sometimes repair on the same day. Document the failure and any lost product for insurance and tax purposes. If the unit is beyond repair, get replacement quotes; lead times can be several days or weeks.</p>
      <h2>What Walk-In Cooler Repairs Cost</h2>
      <p>Simple fixes—thermostats, door gaskets, defrost issues—can run $300–$1,000. Compressor or evaporator work often costs $2,000–$6,000. Full replacement typically runs $15,000–$50,000 depending on size and specs. Many restaurant owners don&apos;t have that cash on hand.</p>
      <h2>How Restaurant Owners Fund Cooler Emergencies</h2>
      <p>When revenue doesn&apos;t line up with a large repair bill, many use`,
    new: `      <h2>Immediate Steps When Your Cooler Fails</h2>
      <p>Move perishables to backup refrigeration or a temporary unit if possible. Call a commercial refrigeration repair service right away—restaurant equipment specialists can often diagnose and sometimes repair on the same day. Document the failure and any lost product for insurance and tax purposes. If the unit is beyond repair, get replacement quotes; lead times can be several days or weeks.</p>
      <h3>Protecting Your Inventory</h3>
      <p>Perishables in the danger zone (above 41°F for more than two hours) may need to be discarded. Move high-value items first. If you have a second cooler or reach-in, use it. Some owners rent a portable refrigeration unit for a few days while repairs are done. The cost of a rental is often less than the cost of lost inventory and lost sales.</p>
      <h2>What Walk-In Cooler Repairs Cost</h2>
      <p>Simple fixes—thermostats, door gaskets, defrost issues—can run $300–$1,000. Compressor or evaporator work often costs $2,000–$6,000. Full replacement typically runs $15,000–$50,000 depending on size and specs. Many restaurant owners don&apos;t have that cash on hand.</p>
      <h2>How Restaurant Owners Fund Cooler Emergencies</h2>
      <p>When revenue doesn&apos;t line up with a large repair bill, many use`,
  },
  // 6. restaurant-cash-flow-mistakes - expand Mistake 1
  {
    old: `      <h2>Mistake 1: Poor Cash Flow Forecasting</h2>
      <p>Not knowing when money will come in and go out leaves you vulnerable. Build a simple forecast: when are your biggest expenses (payroll, rent, vendors)? When does revenue typically peak and dip? Forecasts don&apos;t have to be perfect—they just need to help you see gaps before they hit.</p>
      <h2>Mistake 2: No Reserve for Slow Periods</h2>`,
    new: `      <h2>Mistake 1: Poor Cash Flow Forecasting</h2>
      <p>Not knowing when money will come in and go out leaves you vulnerable. Build a simple forecast: when are your biggest expenses (payroll, rent, vendors)? When does revenue typically peak and dip? Forecasts don&apos;t have to be perfect—they just need to help you see gaps before they hit.</p>
      <h3>How to Build a Simple Forecast</h3>
      <p>List your fixed costs and their due dates. Map your typical revenue by week or month. Compare the two—where do expenses exceed expected revenue? Those are your risk periods. Once you see the gaps, you can plan: build reserves, adjust spending, or line up <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-working-capital">working capital</Link> options before you need them.</p>
      <h2>Mistake 2: No Reserve for Slow Periods</h2>`,
  },
  // 7. restaurant-late-vendor-payments
  {
    old: `      <h2>Consequences of Late Vendor Payments</h2>
      <p>Suppliers may stop delivery until you pay. You could lose favorable terms or discounts. Your reputation with vendors—and potentially with other businesses in your network—can suffer. In worst cases, vendors may send accounts to collections or take legal action.</p>
      <h2>How to Communicate With Vendors</h2>
      <p>Be honest and proactive. Explain the situation and propose a payment plan. Many vendors prefer a plan to radio silence. If you need a lump sum to get current,`,
    new: `      <h2>Consequences of Late Vendor Payments</h2>
      <p>Suppliers may stop delivery until you pay. You could lose favorable terms or discounts. Your reputation with vendors—and potentially with other businesses in your network—can suffer. In worst cases, vendors may send accounts to collections or take legal action.</p>
      <h3>How Late Payments Snowball</h3>
      <p>Once you fall behind with one vendor, others may tighten terms. You might lose net-30 and have to pay on delivery. Some suppliers require prepayment. That ties up more cash and makes it harder to catch up. Getting current often requires a lump sum—which is where <Link to="/restaurant-funding">restaurant funding</Link> can help.</p>
      <h2>How to Communicate With Vendors</h2>
      <p>Be honest and proactive. Explain the situation and propose a payment plan. Many vendors prefer a plan to radio silence. If you need a lump sum to get current,`,
  },
  // 8. restaurant-busy-season-preparation
  {
    old: `      <h2>Why Busy Season Preparation Costs Cash</h2>
      <p>You need to order more food, hire temporary staff, and sometimes invest in marketing or promotions. Those expenses hit before the busy period generates revenue. If your account is thin from a slow period, you may not have the cash to prepare properly.</p>
      <h2>How Owners Fund the Build-Up</h2>
      <p>Many use reserves from previous busy periods. Others use`,
    new: `      <h2>Why Busy Season Preparation Costs Cash</h2>
      <p>You need to order more food, hire temporary staff, and sometimes invest in marketing or promotions. Those expenses hit before the busy period generates revenue. If your account is thin from a slow period, you may not have the cash to prepare properly.</p>
      <h3>Timing the Build-Up</h3>
      <p>Inventory for the holiday rush often needs to be ordered weeks in advance. Extra staff may need to be scheduled before you see the revenue. Marketing and promotions cost money upfront. The gap between spending and earning is where many owners get stuck—and why <Link to="/restaurant-cash-advance">restaurant cash advance</Link> and <Link to="/restaurant-working-capital">working capital</Link> are commonly used to fund the build-up.</p>
      <h2>How Owners Fund the Build-Up</h2>
      <p>Many use reserves from previous busy periods. Others use`,
  },
  // 9. restaurant-overdraft-problems
  {
    old: `      <h2>Why Restaurant Accounts Overdraw</h2>
      <p>Payroll, rent, and vendor payments are due on fixed dates. Credit card deposits take 2–3 business days. A slow week, an unexpected expense, or a seasonal dip can leave your account short when a payment clears. One overdraft often leads to fees and a cascade of problems.</p>
      <h2>The Cost of Overdrafts</h2>
      <p>Banks charge overdraft fees—often $35 or more per transaction. Multiple overdrafts can add up quickly. They can also damage your banking relationship and make it harder to get future credit. Avoiding overdrafts is worth the effort.</p>
      <h2>How to Avoid Restaurant Overdrafts</h2>
      <p>Improve cash flow forecasting. Build a buffer in your account. Know when big payments are due and when deposits typically arrive. When you see a gap coming, act before it hits.`,
    new: `      <h2>Why Restaurant Accounts Overdraw</h2>
      <p>Payroll, rent, and vendor payments are due on fixed dates. Credit card deposits take 2–3 business days. A slow week, an unexpected expense, or a seasonal dip can leave your account short when a payment clears. One overdraft often leads to fees and a cascade of problems.</p>
      <h3>The Timing Trap</h3>
      <p>Weekend sales may not hit until Tuesday. A vendor payment might clear before the deposit. Automatic debits for utilities or insurance can hit on the wrong day. Restaurant cash flow is inherently lumpy—and when the lumps don&apos;t line up, overdrafts happen. <Link to="/restaurant-funding">Restaurant funding</Link> can help bridge those gaps before they become overdrafts.</p>
      <h2>The Cost of Overdrafts</h2>
      <p>Banks charge overdraft fees—often $35 or more per transaction. Multiple overdrafts can add up quickly. They can also damage your banking relationship and make it harder to get future credit. Avoiding overdrafts is worth the effort.</p>
      <h2>How to Avoid Restaurant Overdrafts</h2>
      <p>Improve cash flow forecasting. Build a buffer in your account. Know when big payments are due and when deposits typically arrive. When you see a gap coming, act before it hits.`,
  },
  // 10. restaurant-credit-card-cash-flow-delay
  {
    old: `      <h2>How the Card Deposit Delay Works</h2>
      <p>Card processors batch transactions and send them to your bank. Weekend sales may not arrive until Tuesday or Wednesday. Holiday periods can add extra delay. You've made the sales—but the cash isn't in your account yet. When payments are due, that timing gap can leave you short.</p>
      <h2>Why This Hurts Restaurants</h2>
      <p>Restaurants run on thin margins. Payroll hits every two weeks. Vendors want payment on delivery. Rent is due the first of the month. If a slow Monday means fewer deposits, and payroll clears Tuesday, you can overdraw even when your weekend was strong. The delay turns strong sales into cash flow stress.</p>
      <h2>What Restaurant Owners Do About It</h2>
      <p>Many plan for the lag—they know deposits take 2–3 days and schedule payments accordingly. Others build reserves. When the timing still doesn't work,`,
    new: `      <h2>How the Card Deposit Delay Works</h2>
      <p>Card processors batch transactions and send them to your bank. Weekend sales may not arrive until Tuesday or Wednesday. Holiday periods can add extra delay. You&apos;ve made the sales—but the cash isn&apos;t in your account yet. When payments are due, that timing gap can leave you short.</p>
      <h3>Understanding the Batch Cycle</h3>
      <p>Most processors batch at end of day and send to the bank. The bank then posts in 1–2 business days. So Friday night sales might not land until Tuesday. If payroll runs Monday or Tuesday, you&apos;re paying with money you haven&apos;t received yet. That&apos;s why so many restaurant owners use <Link to="/restaurant-working-capital">restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">restaurant cash advance</Link>—to access funds before the deposit arrives.</p>
      <h2>Why This Hurts Restaurants</h2>
      <p>Restaurants run on thin margins. Payroll hits every two weeks. Vendors want payment on delivery. Rent is due the first of the month. If a slow Monday means fewer deposits, and payroll clears Tuesday, you can overdraw even when your weekend was strong. The delay turns strong sales into cash flow stress.</p>
      <h2>What Restaurant Owners Do About It</h2>
      <p>Many plan for the lag—they know deposits take 2–3 days and schedule payments accordingly. Others build reserves. When the timing still doesn't work,`,
  },
];

for (const { old: o, new: n } of replacements) {
  if (content.includes(o)) {
    content = content.replace(o, n);
    console.log('Applied replacement');
  }
}

fs.writeFileSync(contentPath, content);
console.log('Done');