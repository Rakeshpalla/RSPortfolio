import React from 'react';

const About = () => {
  return (
        <section id="about" className="py-16 relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Executive Leadership Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Executive Leadership Story Cards */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-4">
              🎯 Product Leadership | 🤝 People Centered | 📈 Outcome Driven
            </div>
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              I solve portfolio P&L challenges, build high-performing teams, and drive enterprise transformation with measurable business impact. Over 19 years, I've evolved from delivering projects to driving multi-product portfolios, shaping market direction, and influencing revenue outcomes. My approach combines strategic clarity, organizational leadership, and high-accountability execution, building products and teams that improve customer value and long-term growth rather than just shipping features.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Strategic Product Leadership Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 animate-slide-up animate-on-scroll hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Portfolio & P&L Leadership</h4>
                <span className="text-sm text-blue-200 bg-blue-600/20 px-3 py-1 rounded-full">Strategic Executive</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">P&L Ownership:</strong> Owned $65M+ portfolio P&L across 5 product lines, driving investment prioritization, budget management, and double-digit year-over-year growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Strategic Planning:</strong> Architected multi-year product vision, investment roadmaps, and business case articulation for C-suite/Board approval</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Business Transformation:</strong> Led enterprise cloud adoption unlocking $20M+ in new revenue, 35% operational efficiency gains, and 85%+ adoption rates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Executive Engagement:</strong> Acted as trusted advisor to executive leadership, steering product strategy, investment decisions, and crisis turnaround of at-risk divisions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Transformed products serving <strong className="text-blue-300">100K+ enterprise users</strong> by architecting digital transformation that reshaped market positioning</span>
                </li>
              </ul>
            </div>

            {/* Org Building & People Leadership Card */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 animate-slide-up animate-on-scroll hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Org Building & People Leadership</h4>
                <span className="text-sm text-green-200 bg-green-600/20 px-3 py-1 rounded-full">Team Builder</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Team Building & Scaling:</strong> Built, scaled, and restructured global cross-functional teams (40+ FTEs across APAC/EMEA/US), driving org-wide alignment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">People Development:</strong> Built robust pipeline for talent development resulting in 20+ team promotions, 30% retention improvement, and measurable upskilling outcomes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Crisis Leadership:</strong> Led crisis turnaround of at-risk division ($10M risk), navigating critical delivery challenges and ensuring on-time quality deliverables</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Cross-Functional Influence:</strong> Steered exec/steerco meetings, aligning Product, Engineering, Sales, Marketing, Customer Success at enterprise level</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Led org-wide adoption of AI/automation platforms, saving <strong className="text-blue-300">$2M+ annual cost</strong> while embedding culture of innovation</span>
                </li>
              </ul>
            </div>

            {/* Market Impact & Innovation Card */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 animate-slide-up animate-on-scroll hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Market Impact & Innovation</h4>
                <span className="text-sm text-purple-200 bg-purple-600/20 px-3 py-1 rounded-full">Industry Leader</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Scaled professional development impact from <strong className="text-blue-300">200 to 500+ members</strong> as President, IIBA Hyderabad, embedding culture of innovation across orgs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Championed industry best practices and innovation by leading org-wide adoption of AI/automation platforms, saving <strong className="text-blue-300">$2M+ annual cost</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built <strong className="text-blue-300">Product Management Community of Practice</strong> at Deloitte, institutionalizing best practices across global delivery teams</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Drove measurable people development outcomes including <strong className="text-blue-300">20+ promotions</strong>, <strong className="text-blue-300">30% retention improvement</strong>, and quantifiable upskilling data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Timeline Snapshot */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Career Timeline</h3>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 text-center">
              <div className="text-2xl font-bold text-white">Deloitte</div>
              <div className="text-blue-200">Senior Product Manager</div>
              <div className="text-blue-100 text-sm">2013 – Present</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 text-center">
              <div className="text-2xl font-bold text-white">Infosys</div>
              <div className="text-blue-200">Senior Associate Consultant</div>
              <div className="text-blue-100 text-sm">2011 – 2013</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 text-center">
              <div className="text-2xl font-bold text-white">Tech Mahindra, CGI & Dion Global</div>
              <div className="text-blue-200">Analyst / Business Analyst</div>
              <div className="text-blue-100 text-sm">2006 – 2011</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
