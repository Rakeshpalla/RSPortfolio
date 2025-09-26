import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const Tools = () => {
  const tools = [
    {
      name: "Azure DevOps",
      category: "DevOps & CI/CD",
      description: "Enterprise-grade DevOps platform for source control, build automation, and release management",
      icon: "🔧",
      features: ["Source Control", "Build Automation", "Release Management", "Work Item Tracking", "Test Management"],
      experience: "Advanced",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "ServiceNow",
      category: "IT Service Management",
      description: "Comprehensive ITSM platform for service management, workflow automation, and enterprise operations",
      icon: "⚙️",
      features: ["ITSM", "Workflow Automation", "Service Management", "Incident Management", "Change Management"],
      experience: "Expert",
      color: "from-green-500 to-green-700"
    },
    {
      name: "Power BI",
      category: "Business Intelligence",
      description: "Microsoft's business analytics service for data visualization, reporting, and business intelligence",
      icon: "📊",
      features: ["Data Visualization", "Business Intelligence", "Reporting", "Analytics", "Dashboard Creation"],
      experience: "Advanced",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="tools" className="py-20 relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='30'/%3E%3Ccircle cx='20' cy='20' r='10'/%3E%3Ccircle cx='80' cy='20' r='10'/%3E%3Ccircle cx='20' cy='80' r='10'/%3E%3Ccircle cx='80' cy='80' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <CollapsibleSection
          id="tools"
          title="Enterprise Tools & Platforms"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
          gradient="from-emerald-700 to-emerald-800"
          isOpenByDefault={false}
        >
          <div className="p-8">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Enterprise Platform Expertise</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Proficient in leading enterprise platforms that drive digital transformation and operational excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Tool Header */}
                  <div className={`bg-gradient-to-r ${tool.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{tool.icon}</div>
                      <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm font-medium">
                        {tool.experience}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-blue-100 text-sm">{tool.category}</p>
                  </div>
                  
                  {/* Tool Description */}
                  <div className="p-6">
                    <p className="text-slate-600 leading-relaxed mb-6">{tool.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4">Key Capabilities:</h4>
                      <div className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tools Summary */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Platform Expertise</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold mb-2">3</div>
                  <div className="text-blue-200">Enterprise Platforms</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold mb-2">Expert</div>
                  <div className="text-blue-200">ServiceNow Proficiency</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold mb-2">Advanced</div>
                  <div className="text-blue-200">Azure & Power BI</div>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </section>
  );
};

export default Tools;
