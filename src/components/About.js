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
              <strong className="text-blue-300 font-semibold">19+ years</strong> of proven leadership transforming enterprise organizations through strategic product innovation, 
              delivering measurable business outcomes and building high-performing teams across global markets.
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
                <h4 className="text-lg font-bold text-white mb-2">Strategic Product Leadership</h4>
                <span className="text-sm text-blue-200 bg-blue-600/20 px-3 py-1 rounded-full">Deloitte</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Led <strong className="text-blue-300">multimillion-dollar product portfolio</strong> across three product lines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Drove <strong className="text-blue-300">100,000+ enterprise user adoption</strong> across platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Achieved <strong className="text-blue-300">85% feature adoption rates</strong> through customer-centric design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Transformed product lifecycle management from ideation to scale</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Delivered <strong className="text-blue-300">35% operational efficiency gains</strong> and significant customer satisfaction improvements</span>
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
                <h4 className="text-lg font-bold text-white mb-2">Enterprise Delivery Excellence</h4>
                <span className="text-sm text-green-200 bg-green-600/20 px-3 py-1 rounded-full">SAFe Certified</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Orchestrated <strong className="text-blue-300">scaled agile transformation</strong> across <strong className="text-blue-300">15+ global teams</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented SAFe methodologies for enterprise-wide adoption</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Delivered <strong className="text-blue-300">40% faster release cycles</strong> through process optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Achieved <strong className="text-blue-300">accelerated time-to-market</strong> for product launches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduced project bottlenecks by <strong className="text-blue-300">40%</strong> through proactive risk management and cross-functional collaboration</span>
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
                  <span>Established the <strong className="text-blue-300">Product Management Community of Practice</strong> at Deloitte</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mentored <strong className="text-blue-300">20+ BAs and Product Owners</strong> through certification programs and study groups</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conducted domain training sessions to help technical teams think from a business perspective</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enabled better decision-making during product development through strategic guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>As <strong className="text-blue-300">President of IIBA Hyderabad</strong>, organized professional conferences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-blue-300">Consecutively nominated as 'Volunteer of the Year'</strong> for community leadership impact</span>
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

        {/* Core Leadership Pillars */}
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Strategic Leadership Pillars</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 animate-slide-up animate-on-scroll hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Portfolio Leadership</h4>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Scaled <strong className="text-blue-300">three product lines</strong> within a multimillion dollar portfolio</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Drove <strong className="text-blue-300">85% adoption rate</strong> through customer centric roadmaps</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Owned end to end lifecycle from ideation to launch and scale</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 animate-slide-up animate-on-scroll hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Delivery Excellence</h4>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Enabled <strong className="text-blue-300">35% efficiency increase</strong> across product delivery</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Reduced bottlenecks by <strong className="text-blue-300">40%</strong> via proactive risk management</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Elevated customer satisfaction with data informed decisions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 animate-slide-up animate-on-scroll hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Enterprise Impact</h4>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Transformed experiences for <strong className="text-blue-300">100,000+ users</strong> enterprise wide</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built collaborative, high performing product teams across functions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Delivered measurable, scalable, and sustainable outcomes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
