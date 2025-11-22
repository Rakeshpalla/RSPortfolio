import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const Tools = () => {
  const tools = [
    {
      name: "Enterprise Cloud Platforms",
      category: "Strategic Technology Adoption",
      description: "Led org-wide adoption of enterprise cloud platforms, driving $20M+ revenue unlock and 35% operational efficiency gains. Architected cloud transformation strategy that reshaped market positioning.",
      icon: "☁️",
      features: ["Cloud Strategy", "Enterprise Adoption", "Revenue Growth", "Market Transformation", "Digital Innovation"],
      experience: "Strategic Leader",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "AI/Automation Platforms",
      category: "Org-Wide Innovation",
      description: "Championed org-wide adoption of AI/automation platforms, saving $2M+ annual cost while embedding culture of innovation across global teams. Strategic lever for competitive advantage.",
      icon: "🤖",
      features: ["AI Strategy", "Automation Leadership", "Cost Optimization", "Innovation Culture", "Competitive Advantage"],
      experience: "Strategic Leader",
      color: "from-green-500 to-green-700"
    },
    {
      name: "Business Intelligence & Analytics",
      category: "Data-Driven Decision Making",
      description: "Leveraged enterprise analytics platforms to drive data-driven portfolio decisions, investment prioritization, and executive reporting. Enabled strategic insights for C-suite decision-making.",
      icon: "📊",
      features: ["Portfolio Analytics", "Investment Insights", "Executive Reporting", "Strategic Decision Making", "Business Intelligence"],
      experience: "Strategic Leader",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="tools" className="py-10 relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      
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
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Strategic Technology Leadership</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Led org-wide adoption of strategic platforms that drove measurable business outcomes including revenue growth, cost optimization, and market transformation
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
          </div>
        </CollapsibleSection>
      </div>
    </section>
  );
};

export default Tools;
