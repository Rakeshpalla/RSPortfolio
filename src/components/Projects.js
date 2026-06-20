import React from 'react';

const caseStudies = [
  {
    title: 'Scaling a Regulated Audit Platform from Launch to 85K Users',
    tag: 'Product Growth · Regulated SaaS',
    context: 'Deloitte needed a new enterprise audit & compliance SaaS platform built from the ground up to standardise practice across its global network.',
    problem: 'No platform existed. Audit workflows were fragmented across manual processes, creating compliance risk and inconsistent practitioner experience.',
    approach: 'As Product Owner (Mar 2017 – Sep 2019), I owned full-lifecycle discovery to adoption: ran user research, defined the MVP, drove iterative releases, and led the Product Community of Practice to build internal adoption momentum.',
    outcome: [
      'Scaled platform from launch to 85,000 active users',
      '25% improvement in audit completion speed via product-led workflow redesign',
      '35% CSAT improvement through user-research-driven prioritization',
      'Foundation set for platform later reaching 100,000+ Deloitte practitioners worldwide'
    ],
    skills: ['Product Strategy', 'User Research', 'Product Lifecycle', 'Regulated Platforms', 'Community of Practice']
  },
  {
    title: 'Delivery Transformation: 95%+ On-Time at 100K-User Scale, Zero Compliance Failures',
    tag: 'Delivery Excellence · Governance',
    context: 'As the platform scaled to 100,000 Deloitte practitioners worldwide, delivery complexity grew dramatically — multi-geography teams, regulatory obligations, and high-stakes release cycles.',
    problem: 'Delivery bottlenecks and coordination overhead threatened on-time quality releases. Any compliance failure carries significant reputational and regulatory consequences at this scale.',
    approach: 'As Technical Delivery Manager (Oct 2019 – Present), I restructured delivery workflows, established governance frameworks, and led cross-functional teams of 30–40 (product, engineering, QA, operations) across India and the U.S. Implemented proactive risk management and dependency tracking across multi-team programs.',
    outcome: [
      '95%+ on-time delivery sustained across multi-year, multi-team portfolio',
      'Zero compliance failures across all release cycles',
      '25% faster time-to-market after workflow restructuring',
      '30% operational efficiency gain',
      '40% reduction in delivery bottlenecks'
    ],
    skills: ['Delivery Management', 'Governance Frameworks', 'SAFe POPM', 'Risk Management', 'Cross-functional Leadership', 'Compliance']
  },
  {
    title: 'HireSignal: Shipping an AI Product Solo — No Team, No Budget',
    tag: 'AI Product · Hands-on Build',
    context: 'I wanted to demonstrate end-to-end product ownership and hands-on AI fluency — beyond managing teams, but actually conceiving and shipping a production AI product independently.',
    problem: 'Hiring managers and recruiters struggle to rank large résumé pools objectively and quickly. Existing tools are expensive or require integration teams to deploy.',
    approach: 'I conceived, designed, and shipped HireSignal — an AI résumé-ranking tool — solo using Cursor and Claude AI, with no team and no budget. From idea to live production in weeks, handling product design, prompt engineering, UX, and deployment independently.',
    outcome: [
      'Live in production at hiresignal11.vercel.app',
      'Proof of hands-on AI product development capability',
      'End-to-end ownership: concept → design → engineering → deployment',
      'Demonstrates AI fluency that complements 20+ years of enterprise product & delivery leadership'
    ],
    link: 'https://hiresignal11.vercel.app',
    linkLabel: 'View HireSignal Live →',
    skills: ['AI Product Development', 'Cursor', 'Claude AI', 'Prompt Engineering', 'Solo Founder', 'End-to-End Product Ownership']
  }
];

const Projects = () => {
  return (
    <section id="case-studies" className="py-16 relative overflow-hidden">
      {/* Professional Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Professional technology workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-slate-50/85 to-blue-50/90"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Case Studies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">Real problems, real approaches, real outcomes — using only verified metrics.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <article key={i} className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-3">
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">{cs.tag}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">{cs.title}</h3>
              </div>

              <dl className="text-sm text-slate-700 space-y-3 mt-2 flex-1">
                <div>
                  <dt className="font-semibold text-slate-800 flex items-center mb-1">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Context
                  </dt>
                  <dd className="ml-7 text-slate-600">{cs.context}</dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-800 flex items-center mb-1">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Problem
                  </dt>
                  <dd className="ml-7 text-slate-600">{cs.problem}</dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-800 flex items-center mb-1">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    My Approach
                  </dt>
                  <dd className="ml-7 text-slate-600">{cs.approach}</dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-800 flex items-center mb-1">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Outcome
                  </dt>
                  <dd className="ml-7">
                    <ul className="list-disc list-inside space-y-1 mt-1 text-slate-600">
                      {cs.outcome.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              {cs.link && (
                <a
                  href={cs.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {cs.linkLabel}
                </a>
              )}

              {cs.skills && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {cs.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
