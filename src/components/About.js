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
              Here's what drives me: <strong className="text-blue-300 font-semibold">solving real problems for real people</strong>. Over 19 years, I've learned that the best product leaders are those who listen first, fail fast, and never stop learning. Every challenge is an opportunity to grow and I've faced plenty.
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
                <h4 className="text-lg font-bold text-white mb-2">Product Management</h4>
                <span className="text-sm text-blue-200 bg-blue-600/20 px-3 py-1 rounded-full">Product Owner</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Product Management:</strong> Manage product roadmaps, write user stories with acceptance criteria, prioritize backlog based on user needs and business value</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Requirements Gathering:</strong> Conduct user interviews, workshops, and stakeholder meetings to gather requirements and translate them into product features</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Delivery Management:</strong> Lead sprint planning, manage release schedules, remove blockers, coordinate QA testing, and ensure on-time delivery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Cross-Functional Collaboration:</strong> Work closely with engineering, UX/UI, QA, and business stakeholders to align product vision with delivery capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Managed products serving <strong className="text-blue-300">100,000+ enterprise users</strong>—ensuring features solve real problems and are delivered with quality</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Delivery Excellence Card */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 animate-slide-up animate-on-scroll hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Delivery Management</h4>
                <span className="text-sm text-green-200 bg-green-600/20 px-3 py-1 rounded-full">SAFe POPM Certified</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Sprint Planning & Execution:</strong> Facilitate sprint planning sessions, manage sprint backlogs, track velocity, and ensure sprint goals are met</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Release Management:</strong> Coordinate release schedules, manage dependencies between teams, conduct pre-release reviews, and ensure successful deployments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Risk & Blocker Management:</strong> Identify risks early, proactively remove blockers, escalate issues when needed, and keep stakeholders informed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Quality Assurance:</strong> Coordinate QA testing, manage test cases, ensure quality gates are met, and maintain product quality standards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>SAFe POPM certified with hands-on experience applying Agile and Scrum methodologies in real-world product delivery</span>
                </li>
              </ul>
            </div>

            {/* Thought Leadership & Community Impact Card */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 animate-slide-up animate-on-scroll hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Thought Leadership & Community Impact</h4>
                <span className="text-sm text-purple-200 bg-purple-600/20 px-3 py-1 rounded-full">Product Community</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Founded the <strong className="text-blue-300">Product Management Community of Practice</strong> at Deloitte—because I believe in giving back</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mentored <strong className="text-blue-300">20+ professionals</strong>—many have gone on to become leaders themselves. That's what success looks like to me</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>As <strong className="text-blue-300">President of IIBA Hyderabad</strong>, I organized major conferences—learned that community building is as important as product building</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Volunteer of the Year nominee</strong>—not for the recognition, but because I genuinely care about helping others grow</span>
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
