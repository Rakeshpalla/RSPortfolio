import React from 'react';

const Hero = () => {

  const handleLinkedInConnect = () => {
    window.open('https://www.linkedin.com/in/rakeshsharma364/', '_blank');
  };


  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden py-12">
      {/* Professional Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle geometric accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-emerald-900/10 to-transparent"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      

      <div className="max-w-5xl mx-auto text-center relative z-10" role="main" id="main-content">
        <div className="animate-fade-in">

          {/* Profile Photo */}
          <div className="mt-0 mb-8 animate-slide-up">
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden ring-2 ring-white/20 ring-offset-4 ring-offset-slate-900 shadow-2xl">
              <img 
                src={`${process.env.PUBLIC_URL}/profile-photo.jpeg`} 
                alt="Rakesh Sharma Palla - Director-Level Product & Portfolio Leader" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Experience Badge - Minimal & Elegant */}
          <div className="mb-6 animate-slide-up">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-300 text-sm font-medium tracking-wide">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              19+ Years in Enterprise Product Leadership
            </span>
          </div>

          {/* Name - Large, Bold, Distinctive */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 animate-slide-up tracking-tight">
            Rakesh Sharma
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-slate-400 mt-1 tracking-normal">Palla</span>
          </h1>
          
          {/* Title - Accent Color, Clear Hierarchy */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Director-Level Product & Portfolio Leader
            </span>
            <span className="block text-slate-500 text-base md:text-lg font-normal mt-2 tracking-wide">
              SaaS · Cloud · Audit Tech · Financial Services
            </span>
          </h2>
          
          {/* Value Proposition - Clean, Scannable */}
          <p className="text-lg md:text-xl text-slate-300 font-light mb-10 animate-slide-up max-w-2xl mx-auto leading-relaxed">
            Helping enterprise firms <span className="text-white font-medium">modernize platforms</span>, 
            drive <span className="text-emerald-400 font-semibold">85%+ adoption</span>, and 
            unlock <span className="text-blue-400 font-semibold">35% efficiency gains</span>
          </p>

          
          {/* Contact Row - Elegant Pills */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-10 animate-slide-up">
            <a href="mailto:rakeshpalla364@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-slate-300 hover:text-white text-sm transition-all duration-300">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              rakeshpalla364@gmail.com
            </a>
            
            <a href="tel:+918985409428" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-slate-300 hover:text-white text-sm transition-all duration-300">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 8985409428
            </a>
            
            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm">
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Hyderabad, India
            </span>
          </div>
          
          {/* Summary Card - Glassmorphism Style */}
          <div className="max-w-3xl mx-auto mb-10 animate-slide-up">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-emerald-400 rounded-full"></div>
                <h3 className="text-lg font-semibold text-white">What I Do</h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-4">
                Own the strategy and execution for a 3-product SaaS portfolio serving 100K+ enterprise users, aligning investment decisions, roadmaps, and delivery to business outcomes
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-4">
                Over 19 years across Deloitte, Infosys, Tech Mahindra, CGI, and Dion Global, I've specialized in solving enterprise adoption challenges, legacy platform modernization, and fragmented product portfolio integration. My approach combines portfolio strategy, platform architecture, and cross-functional leadership to drive measurable business outcomes.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                At Deloitte, I own a <span className="text-white font-medium">$50M+ SaaS portfolio</span> serving <span className="text-white font-medium">100,000+ enterprise users</span>, driving <span className="text-white font-medium">85%+ adoption rates</span> and <span className="text-white font-medium">35% efficiency gains</span> through strategic platform investments and cross-product integration. I lead a team of product professionals while coaching developers and testers across cross-functional teams, building technical credibility and fostering collaboration.
              </p>
            </div>
          </div>

          {/* CTA Buttons - Modern, Clear Hierarchy */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up">
            <button 
              onClick={handleLinkedInConnect}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </button>
            
            <a
              href="mailto:rakeshpalla364@gmail.com?subject=Let's Discuss Platform Challenges&body=Hi Rakesh, I'd like to discuss..."
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Discuss Challenges
            </a>
            
            <a
              href={`${process.env.PUBLIC_URL}/Rakesh%20Sharma%20Palla%20Resume.docx`}
              download="Rakesh_Sharma_Palla_Resume.docx"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-700/80 hover:bg-slate-600/90 text-white font-semibold rounded-xl border-2 border-slate-500/50 hover:border-slate-400/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
