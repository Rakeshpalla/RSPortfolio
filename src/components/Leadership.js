import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const Leadership = () => {
  const leadershipItems = [
    {
      category: "Org Building & Team Scaling",
      items: [
        "Built, scaled, and restructured global cross-functional teams (40+ FTEs across APAC/EMEA/US)",
        "20+ team promotions driven through robust talent development pipeline",
        "30% retention improvement—quantifiable people leadership outcomes",
        "Measurable upskilling data demonstrating org-wide capability development"
      ],
      icon: "👥"
    },
    {
      category: "Industry Leadership & Community Impact",
      items: [
        "Scaled professional development impact from 200 to 500+ members as President, IIBA Hyderabad",
        "Led 20+ industry events annually—embedding culture of innovation across orgs",
        "Built Product Management Community of Practice at Deloitte—institutionalizing best practices globally"
      ],
      icon: "👑"
    },
    {
      category: "Executive Engagement & Strategic Influence",
      items: [
        "Acted as trusted advisor to executive leadership—steering product strategy and investment decisions",
        "Led crisis turnaround of at-risk division ($10M risk)—demonstrating high-stakes leadership",
        "Drove consensus on multi-year tech vision—C-suite/Board engagement at material business risk levels"
      ],
      icon: "💼"
    },
    {
      category: "Market Impact & Innovation",
      items: [
        "Championed org-wide adoption of AI/automation platforms—saving $2M+ annual cost",
        "Led enterprise cloud adoption unlocking $20M+ in new revenue",
        "35% operational efficiency gains through strategic transformation initiatives"
      ],
      icon: "🚀"
    }
  ];

  return (
    <section id="leadership" className="py-8 relative bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <CollapsibleSection
          id="leadership"
          title="Community & Leadership"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          gradient="from-rose-700 to-rose-800"
          isOpenByDefault={true}
        >
          <div className="p-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Executive Leadership & Org Impact</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Quantifiable leadership outcomes: team building, people development, executive engagement, and market transformation—demonstrating Director/VP-level impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 mb-2">{item.category}</h3>
                      <ul className="space-y-2">
                        {item.items.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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

export default Leadership;
