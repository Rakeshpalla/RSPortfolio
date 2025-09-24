import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Personalization & Analytics Platform",
      year: "2024",
      client: "Global Financial Services",
      description: "Designed and implemented enterprise-wide personalization strategy for a global financial services client, transforming their digital customer experience",
      challenge: "Legacy systems unable to provide personalized experiences, leading to low digital adoption rates",
      solution: "Built AI-powered personalization engine with real-time analytics and customer journey mapping",
      impact: {
        primary: "18% increase in digital adoption",
        secondary: ["25% improvement in customer engagement", "30% reduction in support tickets", "$2.5M annual revenue increase"],
        users: "50K+ customers"
      },
      technologies: ["AI/ML", "Real-time Analytics", "Personalization Engine", "Customer Journey Mapping"],
      icon: "📊",
      category: "Digital Transformation"
    },
    {
      title: "AI-Powered Logistics Automation Platform",
      year: "2023",
      client: "Global Logistics Provider",
      description: "Developed comprehensive AI-enabled logistics platform automating end-to-end supply chain workflows for a major logistics provider",
      challenge: "Manual processes causing delays, errors, and high operational costs",
      solution: "Implemented AI-driven workflow automation with predictive analytics and intelligent routing",
      impact: {
        primary: "35% faster turnaround times",
        secondary: ["$4M annual cost savings", "45% reduction in processing errors", "60% improvement in delivery accuracy"],
        users: "15K+ logistics professionals"
      },
      technologies: ["AI/ML", "Workflow Automation", "Predictive Analytics", "IoT Integration"],
      icon: "🤖",
      category: "Process Automation"
    },
    {
      title: "Scaled Agile Transformation Initiative",
      year: "2022",
      client: "Global Technology Organization",
      description: "Led enterprise-wide SAFe implementation across 15+ product teams, transforming delivery culture and accelerating time-to-market",
      challenge: "Fragmented development processes and slow delivery cycles impacting customer satisfaction",
      solution: "Implemented SAFe framework with cross-functional team structures and continuous delivery pipelines",
      impact: {
        primary: "40% faster release frequency",
        secondary: ["30% improved team collaboration", "25% reduction in defects", "50% faster feature delivery"],
        users: "200+ development team members"
      },
      technologies: ["SAFe", "Agile Methodologies", "DevOps", "Continuous Delivery"],
      icon: "🔄",
      category: "Organizational Transformation"
    },
    {
      title: "Strategic Portfolio Management Program",
      year: "2021-Present",
      client: "Deloitte Enterprise Clients",
      description: "Directed $2M+ annual budgets and guided product organizations across multiple enterprise clients, ensuring strategic alignment and ROI optimization",
      challenge: "Disconnected product strategies and inefficient resource allocation across multiple business units",
      solution: "Established centralized portfolio management office with standardized governance and performance metrics",
      impact: {
        primary: "100K+ global enterprise users impacted",
        secondary: ["20% improvement in portfolio ROI", "15% reduction in project overhead", "30% faster decision making"],
        users: "100K+ enterprise users"
      },
      technologies: ["Portfolio Management", "Strategic Planning", "ROI Optimization", "Governance Frameworks"],
      icon: "💰",
      category: "Strategic Leadership"
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3Ccircle cx='90' cy='30' r='10'/%3E%3Ccircle cx='30' cy='90' r='10'/%3E%3Ccircle cx='90' cy='90' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <CollapsibleSection
          id="projects"
          title="Strategic Project Portfolio"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
          gradient="from-amber-700 to-amber-800"
          isOpenByDefault={false}
        >
          <div className="p-8">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Strategic Project Portfolio</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Leading high-impact digital transformation initiatives that drive measurable business outcomes 
                and deliver exceptional value to enterprise clients
              </p>
            </div>
            
            <div className="space-y-12 mb-12">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Project Header */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-white">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <div className="text-4xl">{project.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                            <span className="text-blue-300 font-semibold">{project.client}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-300">{project.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      {/* Challenge & Solution */}
                      <div className="space-y-6">
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                          <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            Challenge
                          </h4>
                          <p className="text-red-700">{project.challenge}</p>
                        </div>
                        
                        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                          <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Solution
                          </h4>
                          <p className="text-green-700">{project.solution}</p>
                        </div>
                      </div>
                      
                      {/* Impact Metrics */}
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          Business Impact
                        </h4>
                        
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-blue-600 mb-1">{project.impact.primary}</div>
                            <div className="text-sm text-blue-700 font-medium">Primary Impact</div>
                          </div>
                          
                          <div className="space-y-2">
                            {project.impact.secondary.map((impact, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-blue-700">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-sm">{impact}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="bg-white p-3 rounded-lg shadow-sm mt-4">
                            <div className="text-sm text-blue-600 font-medium">
                              <span className="font-semibold">{project.impact.users}</span> users impacted
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-slate-800 mb-4">Technologies & Methodologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Project Leadership Summary */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Project Leadership Excellence</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold mb-2">15+</div>
                  <div className="text-blue-200">Cross-functional Teams Led</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold mb-2">$2M+</div>
                  <div className="text-blue-200">Annual Budgets Managed</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold mb-2">100K+</div>
                  <div className="text-blue-200">Users Impacted</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold mb-2">95%</div>
                  <div className="text-blue-200">Project Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </section>
  );
};

export default Projects;