import '../styles/globals.css';
import '../styles/landing.css';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';

export function WhenToExploreOptions() {
  return (
    <section className="landing-section when-to-explore">
      <h2 className="section-title">When It Helps to Explore Your Options</h2>
      <p className="section-subtitle">
        If you're facing payroll gaps, seasonal slumps, equipment emergencies, or cash flow crunches, you're not alone. Many restaurant owners hit the same walls. Understanding what’s out there—and when it makes sense to look—can help you decide your next step.
      </p>
      <ul className="when-to-explore__grid">
        <li className="when-to-explore__card">
          <span className="when-to-explore__icon" aria-hidden>→</span>
          <strong>You need to cover payroll or bills now</strong>
          <span>When revenue is slow but obligations aren’t, exploring options that match your situation can help you bridge the gap.</span>
        </li>
        <li className="when-to-explore__card">
          <span className="when-to-explore__icon" aria-hidden>→</span>
          <strong>You want to plan ahead for a busy season</strong>
          <span>Stocking up or staffing up before a rush often requires cash upfront. Knowing what’s available helps you prepare.</span>
        </li>
        <li className="when-to-explore__card">
          <span className="when-to-explore__icon" aria-hidden>→</span>
          <strong>You’re dealing with an emergency repair or replacement</strong>
          <span>Equipment breaks don’t wait. Finding a path to fast funding can get you back up and running sooner.</span>
        </li>
      </ul>
      <p className="when-to-explore__cta">
        <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL} className="btn btn-primary">
          Review Restaurant Financing Options
        </a>
      </p>
    </section>
  );
}
