import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { CTA } from '../components/CTA';
import { PageHero } from '../components/PageHero';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function RestaurantTaxBillCantPayPage() {
  const meta = getMeta('/restaurant-tax-bill-cant-pay')!;
  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.canonicalPath}
        image={meta.image}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Restaurant Cash Advance', path: '/restaurant-cash-advance' },
          { name: 'Tax Bill Can\'t Pay', path: '/restaurant-tax-bill-cant-pay' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Restaurant Tax Bill You Can&apos;t Pay? What to Do Next</h1>
          <p className="page-lead">
            Sales tax, payroll tax, and income tax can land when you have already spent the money. If a restaurant tax bill shows up and you do not have the cash, ignoring it usually makes things worse. This guide covers your options: payment plans, penalties and interest, and when short-term funding or a cash advance might help you get current and avoid bigger problems.
          </p>

          <section className="prose-block">
            <h2>Why Restaurant Tax Bills Surprise Owners</h2>
            <p>
              You collect sales tax from guests and hold payroll taxes from wages—but that money is not yours. If you use it for operations and do not set it aside, the tax due date can hit with no cash to pay. Estimated income taxes work the same way: you owe based on profit, but the cash may have gone to vendors, payroll, or equipment. The <Link to="/restaurant-first-year-cash-flow-surprises">first-year cash flow surprises</Link> guide mentions this; here we focus on what to do when the bill is already in front of you and you cannot pay in full.
            </p>
            <p>
              The surprise is often a timing issue: you had the cash earlier in the month or the quarter but used it for something else. Or your profit was higher than expected and you did not set aside enough for estimated taxes. Whatever the reason, the bill is real—and ignoring it leads to penalties, interest, and in the case of payroll taxes, potential personal liability. Acting quickly gives you more options than waiting until the account is in collections.
            </p>
          </section>

          <section className="prose-block">
            <h2>Sales Tax: Pay What You Can, Communicate Early</h2>
            <p>
              State and local tax agencies often allow payment plans if you ask before the account goes to collections. Contact them, explain the situation, and propose a schedule you can keep. Penalties and interest will still apply, but getting on a plan is usually better than ignoring the bill. If you need to free up cash to make the first payment or get on a plan, <Link to="/restaurant-working-capital">restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> may help—see <Link to="/restaurant-funding-options">restaurant funding options</Link>.
            </p>
          </section>

          <section className="prose-block">
            <h2>Payroll Tax: Take This One Seriously</h2>
            <p>
              Payroll taxes (withheld from employees plus employer share) are trust funds—the government treats non-payment harshly. Interest, penalties, and personal liability can attach. If you are behind, get on a payment plan with the IRS or state as soon as possible. Do not use payroll tax money for other expenses; once you are in that habit, it is hard to catch up. If you need to cover payroll and tax in the same period, that is when short-term funding is often considered—to get current and then set up a separate reserve for tax so it does not happen again.
            </p>
          </section>

          <section className="prose-block">
            <h2>Income Tax: Estimated Payments and Catch-Up</h2>
            <p>
              If you did not pay estimated taxes during the year, the full bill at filing time can be a shock. The IRS allows payment plans; you can request one online or by phone. Penalties and interest will apply, but a plan gives you time. Going forward, set aside a percentage of profit (or revenue) each month so you are not surprised at tax time. The <Link to="/restaurant-profitable-on-paper-no-cash">profitable on paper but no cash</Link> guide explains how to align profit with cash; use that to build a tax reserve.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Short-Term Funding Helps</h2>
            <p>
              If you need to get current on taxes and do not have the cash, a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-working-capital">working capital</Link> product can provide funds quickly. Use it to pay the tax (or the first installment of a plan) and then fix the underlying habit: separate accounts for sales and payroll tax, and monthly set-asides for income tax. Funding is a bridge, not a substitute for tax planning.
            </p>
            <p>
              Once you are on a payment plan or have paid the balance, set up a system so it does not happen again. For sales tax: move a percentage of each day’s or week’s sales into a separate account and do not touch it. For payroll tax: the same—withhold and set aside before you spend anything else. For income tax: work with your accountant to estimate what you will owe and transfer a monthly amount into a tax reserve. Many owners find that automating the transfer (e.g., right after payday) is the only way to stay consistent. See <Link to="/restaurant-profitable-on-paper-no-cash">profitable on paper but no cash</Link> for how to align your P&amp;L with actual cash so you can build those reserves.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If you have a restaurant tax bill you cannot pay, contact the taxing authority and ask about payment plans. Do not ignore it. If you need cash to get on a plan or pay the first installment, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
