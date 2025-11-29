import React from 'react';

const Hero = () => {

  const handleLinkedInConnect = () => {
    window.open('https://www.linkedin.com/in/rakeshsharma364/', '_blank');
  };


  return (
        <section className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden py-8">
      {/* Professional Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
          alt="Professional business background" 
          className="w-full h-full object-cover"
        />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-slate-800/85"></div>
      </div>
      

      <div className="max-w-6xl mx-auto text-center relative z-10" role="main" id="main-content">
        <div className="animate-fade-in">

              {/* Profile Photo */}
              <div className="mt-0 mb-6 animate-slide-up">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-3 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
              <img 
                src={`${process.env.PUBLIC_URL}/profile-photo.jpeg`} 
                alt="Rakesh Sharma Palla - Product and Delivery Manager" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

              {/* Executive Headline */}
              <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-3 animate-slide-up">
              🏆 Senior Product Manager | Enterprise SaaS Portfolio Leader | $65M+ P&L Owner
            </span>
          </div>

              {/* Name and Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-slide-up leading-tight">
            Rakesh Sharma Palla
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mb-8 animate-slide-up" aria-label="Senior Product Manager driving enterprise SaaS portfolio growth, scaling global teams, and delivering $65M+ business impact through digital transformation">
            Senior Product Manager driving enterprise SaaS portfolio growth, scaling global teams, and delivering $65M+ business impact through digital transformation
          </h2>

          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 animate-slide-up">
            <div className="flex items-center space-x-2 text-gray-300">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm md:text-base">rakeshpalla364@gmail.com</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm md:text-base">+91 8985409428</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm md:text-base">Hyderabad, India</span>
            </div>
          </div>
          
          {/* Compelling Story - Executive-Level Narrative */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-base md:text-lg text-gray-100 leading-relaxed animate-slide-up">
              I solve portfolio P&L challenges, build high-performing global teams, and drive enterprise SaaS transformation across a <strong>$65M+ portfolio</strong>. I align <strong>multi-product platform strategy</strong> and end-to-end <strong>digital transformation</strong> with measurable <strong>business outcomes</strong>, <strong>ROI</strong>, and <strong>adoption</strong> across global markets. I bring <strong>product vision</strong>, <strong>operational rigor</strong>, and <strong>execution leadership</strong> that improves performance and customer value.
            </p>
          </div>

          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 animate-slide-up">
            <button 
              onClick={handleLinkedInConnect}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </button>
            <a
              href="mailto:rakeshpalla364@gmail.com?subject=Product Portfolio Strategy Discussion&body=Hi Rakesh, I'd like to discuss how you can help drive portfolio growth..."
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Discuss Portfolio Strategy
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/Rakesh%20Sharma%20Palla%20Resume.docx`}
              download="Rakesh_Sharma_Palla_Resume.docx"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all text-base"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Executive Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-up">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/20 backdrop-blur-sm rounded-xl border border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">$65M+</div>
              <div className="text-sm md:text-base text-gray-200 font-medium">Portfolio P&L</div>
              <div className="text-xs text-blue-200 mt-1">Owned & transformed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm rounded-xl border border-green-400/30 hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">100K+</div>
              <div className="text-sm md:text-base text-gray-200 font-medium">Enterprise Users</div>
              <div className="text-xs text-green-200 mt-1">Digital transformation</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/20 backdrop-blur-sm rounded-xl border border-purple-400/30 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">40+</div>
              <div className="text-sm md:text-base text-gray-200 font-medium">Global Team</div>
              <div className="text-xs text-purple-200 mt-1">Built & scaled (FTEs)</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/20 backdrop-blur-sm rounded-xl border border-orange-400/30 hover:bg-orange-500/20 hover:border-orange-400/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">35%</div>
              <div className="text-sm md:text-base text-gray-200 font-medium">Efficiency Gain</div>
              <div className="text-xs text-orange-200 mt-1">Operational impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
