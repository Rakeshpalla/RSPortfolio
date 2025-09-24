import React from 'react';

const Hero = () => {

  const handleLinkedInConnect = () => {
    window.open('https://www.linkedin.com/in/rakeshsharma364/', '_blank');
  };


  return (
    <section className="min-h-screen relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Corporate Building Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='60' width='20' height='40'/%3E%3Crect x='25' y='40' width='20' height='60'/%3E%3Crect x='50' y='50' width='20' height='50'/%3E%3Crect x='75' y='30' width='20' height='70'/%3E%3Crect x='100' y='45' width='20' height='55'/%3E%3Crect x='125' y='35' width='20' height='65'/%3E%3Crect x='150' y='55' width='20' height='45'/%3E%3Crect x='175' y='25' width='20' height='75'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">

          {/* Executive Headline */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6 animate-slide-up">
              🏆 Award-Winning Product Leader | Deloitte | 19+ Years Experience
            </span>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up leading-tight">
            Rakesh Sharma Palla
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6 animate-slide-up">
            Senior Product & Program Management Executive
          </h2>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 animate-slide-up">
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
          
          {/* Compelling Story */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-6 animate-slide-up">
              Transforming enterprise organizations through strategic product innovation and digital transformation
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-slide-up">
              As a seasoned executive at Deloitte, I've orchestrated <strong className="text-blue-300">$50M+ SaaS portfolio growth</strong> and led 
              <strong className="text-blue-300">100K+ enterprise users</strong> through complex digital transformations. My expertise lies in 
              building scalable product organizations, driving enterprise adoption, and delivering measurable business outcomes 
              that exceed stakeholder expectations.
            </p>
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center mb-16 animate-slide-up">
            <button 
              onClick={handleLinkedInConnect}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </button>
          </div>

          {/* Executive Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">$50M+</div>
              <div className="text-sm md:text-base text-gray-300 font-medium">SaaS Portfolio Growth</div>
              <div className="text-xs text-gray-400 mt-1">Multi-year strategic initiatives</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">100K+</div>
              <div className="text-sm md:text-base text-gray-300 font-medium">Enterprise Users</div>
              <div className="text-xs text-gray-400 mt-1">Global enterprise clients</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">20%</div>
              <div className="text-sm md:text-base text-gray-300 font-medium">Productivity Uplift</div>
              <div className="text-xs text-gray-400 mt-1">Through agile transformation</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-300 font-medium">Global Teams</div>
              <div className="text-xs text-gray-400 mt-1">Cross-functional leadership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
