import React from 'react';

const projects = [
  {
    title: 'Enterprise Platform Transformation & Investment Strategy',
    role: 'Portfolio Leader & Strategic Executive',
    timeframe: '2023 – 2024',
    problem: '5-year-old platform losing market share due to 68% user dissatisfaction, threatening $10M+ revenue risk. Legacy architecture unable to support enterprise scale, driving 40% increase in support costs.',
    action: 'Architected enterprise transformation strategy, secured $1.8M investment through C-suite/Board presentation, and led org-wide modernization initiative. Steered cross-functional alignment (Product, Engineering, Sales, Customer Success) to drive market-facing transformation.',
    result: [
      '30% adoption increase resulting in market share recovery',
      'Satisfaction scores 6.2→8.4/10 restoring competitive positioning',
      '45% faster task completion improving operational efficiency',
      '$2M+ annual cost savings through streamlined workflows',
      'Investment ROI delivered validating business case'
    ],
    skills: ['Strategic Planning', 'Executive Engagement', 'Investment Securing', 'Business Transformation', 'Market Strategy', 'Org Alignment']
  },
  {
    title: 'Unified Enterprise Platform Architecture',
    role: 'Portfolio Leader & Business Architect',
    timeframe: '2022 – 2023',
    problem: 'Fragmented product portfolio operating in isolation, limiting cross-sell opportunities and increasing TCO. Rigid architecture unable to support enterprise client requirements, impacting $15M+ revenue potential.',
    action: 'Led strategic integration initiative across 5 product lines, architected modular platform strategy, and drove executive consensus on unified vision. Steered cross-functional teams (40+ FTEs) to deliver enterprise-grade solution.',
    result: [
      '100K+ enterprise users served driving market expansion',
      '40% reduction in client onboarding time improving cost efficiency',
      '35% increase in cross-product adoption generating revenue growth',
      '$15M+ revenue opportunity unlocked',
      'Enterprise-grade platform positioning achieved'
    ],
    skills: ['Portfolio Strategy', 'Platform Architecture', 'Executive Steering', 'Revenue Growth', 'Enterprise Solutions', 'Business Model Shaping']
  },
  {
    title: 'Compliance & Risk Management Transformation',
    role: 'Strategic Product Executive',
    timeframe: '2021 – 2022',
    problem: 'Regulatory compliance gaps threatening enterprise client relationships and $5M+ contract renewals. Data integrity risks in cloud environment creating material business risk.',
    action: 'Architected compliance transformation strategy, secured executive buy-in for regulatory investment, and led org-wide adoption. Collaborated with C-suite on risk mitigation and business case for compliance platform.',
    result: [
      '85% adoption within 3 months enabling org-wide transformation',
      '25% improvement in audit completion time improving operational efficiency',
      '100% compliance achieved mitigating risk',
      '$5M+ contract renewals secured',
      'Zero audit violations strengthening regulatory positioning'
    ],
    skills: ['Risk Management', 'Executive Engagement', 'Compliance Strategy', 'Business Case', 'Org Transformation', 'Regulatory Leadership']
  }
];

const Projects = () => {
  return (
        <section id="projects" className="py-16 relative overflow-hidden">
      {/* Professional Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional technology background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-slate-50/85 to-blue-50/90"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Projects & Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{p.title}</h3>
                  <dl className="text-sm text-slate-700 space-y-3 mt-2">
                    <div>
                      <dt className="font-semibold text-slate-800 flex items-center mb-2">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.9-6.1-2.4l-.9.9a9 9 0 1112.7 0l-.9-.9z" />
                          </svg>
                        </div>
                        Problem
                      </dt>
                      <dd className="ml-8">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-800 flex items-center mb-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        Action
                      </dt>
                      <dd className="ml-8">{p.action}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-800 flex items-center mb-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        Result
                      </dt>
                      <dd className="ml-8">
                        {Array.isArray(p.result) ? (
                          <ul className="list-disc list-inside space-y-1 mt-1">
                            {p.result.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          p.result
                        )}
                      </dd>
                    </div>
                  </dl>
              
              {/* Skills */}
              {p.skills && (
                <div className="mt-3">
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
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


