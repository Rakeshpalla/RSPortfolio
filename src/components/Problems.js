import React from 'react';

const Problems = () => {
  return (
    <section id="problems" className="py-16 relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Problems I Love Solving
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            These are the challenges I repeatedly tackle across enterprise SaaS, audit tech, and financial platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Low Enterprise Adoption</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Critical enterprise applications with heavy investment but low adoption rates, leading to wasted resources and frustrated users
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Legacy Platform Frustration</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Legacy audit and financial platforms that frustrate users with 15+ click workflows, increase support tickets by 40%, and limit enterprise requirements
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Fragmented Product Portfolios</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Standalone products operating in isolation, forcing users to switch between multiple systems and limiting portfolio value
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:bg-orange-500/20 hover:border-orange-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Compliance & Data Integrity Risks</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ad-hoc processes and inconsistent workflows creating compliance gaps, data integrity risks, and audit trail violations in cloud environments
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:bg-red-500/20 hover:border-red-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Slow Digital Transformation</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Organizations struggling with slow digital transformation in audit and financial services, unable to balance platform modernization with feature velocity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;

