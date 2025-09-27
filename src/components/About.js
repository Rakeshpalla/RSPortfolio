import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 0L100 50L50 100L0 50z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Executive Leadership Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Executive Narrative */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 animate-slide-up animate-on-scroll">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                🎯 Product Leadership | 🤝 People Centered | 📈 Outcome Driven
              </div>
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-200 leading-relaxed mb-8 text-center">
                Over the past <strong className="text-blue-300 font-semibold">19+ years</strong>, I've built a distinguished career transforming 
                enterprise organizations through strategic product leadership and digital innovation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    As a Product and Delivery Manager at <strong className="text-blue-300">Deloitte</strong>, I led the growth of a multimillion dollar portfolio across three product lines, overseeing the entire product lifecycle from ideation to launch and beyond. My leadership transformed the work experience for <strong className="text-blue-300">100,000+ enterprise users</strong>.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Leading <strong className="text-blue-300">100K+ enterprise users</strong> through digital transformations, I've consistently 
                    delivered <strong className="text-blue-300">20% productivity improvements</strong> and <strong className="text-blue-300">18% cost reductions</strong> 
                    through strategic automation and analytics initiatives.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My expertise spans <strong className="text-blue-300">scaled agile delivery</strong> across <strong className="text-blue-300">15+ global teams</strong>, 
                    where I've implemented SAFe methodologies that improved release frequency by <strong className="text-blue-300">40%</strong> and 
                    accelerated customer value realization.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    As President of the <strong className="text-blue-300">IIBA Hyderabad Chapter</strong>, I have conducted development programs demonstrating my commitment to community building 
                    and thought leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Leadership Pillars */}
        <h3 className="text-3xl font-bold text-white mb-12 text-center">Strategic Leadership Pillars</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 animate-slide-up animate-on-scroll hover:bg-white/10 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Portfolio Leadership</h4>
            </div>
            <ul className="space-y-3 text-gray-300">
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
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 animate-slide-up animate-on-scroll hover:bg-white/10 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Delivery Excellence</h4>
            </div>
            <ul className="space-y-3 text-gray-300">
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
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 animate-slide-up animate-on-scroll hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Enterprise Impact</h4>
            </div>
            <ul className="space-y-3 text-gray-300">
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
