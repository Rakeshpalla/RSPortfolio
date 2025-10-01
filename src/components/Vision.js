import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className="py-10 relative bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Always Visible Vision Section */}
        <div className="mb-3">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Header - Non-collapsible */}
            <div className="w-full bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold">Executive Vision & Aspiration</h2>
              </div>
            </div>

            {/* Content - Always Visible */}
            <div className="max-h-none opacity-100">
              <div className="p-8">
            <div className="text-center mb-12">
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
                My vision is to step into senior leadership roles (Director, Principal Product Manager, or Program Management Leader) 
                where I can make a transformative impact across organizations and drive the next generation of digital innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Strategic Leadership</h3>
                <p className="text-slate-600 leading-relaxed">
                  Shape long-term product strategy across SaaS, Cloud, and digital transformation programs that drive competitive advantage
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Enterprise Adoption</h3>
                <p className="text-slate-600 leading-relaxed">
                  Drive enterprise-wide adoption of customer-centric solutions that deliver measurable ROI and market differentiation
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Team Development</h3>
                <p className="text-slate-600 leading-relaxed">
                  Mentor and scale product management organizations, building future-ready leaders who drive innovation
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Value Delivery</h3>
                <p className="text-slate-600 leading-relaxed">
                  Translate complex challenges into simple, actionable roadmaps that maximize business value and stakeholder satisfaction
                </p>
              </div>
            </div>
            
            {/* Vision Statement */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-6">Leadership Philosophy</h3>
              <blockquote className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto italic">
                "Great leaders don't just manage products—they architect the future. My vision is to build organizations 
                that don't just adapt to change, but create it. Through strategic thinking, collaborative leadership, 
                and relentless focus on customer value, I aim to transform how enterprises approach digital innovation 
                and deliver exceptional outcomes that exceed expectations."
              </blockquote>
              <div className="mt-6 text-blue-300 font-semibold">— Rakesh Sharma Palla</div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
