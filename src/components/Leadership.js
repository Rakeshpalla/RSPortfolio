import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const Leadership = () => {
  const leadershipItems = [
    {
      category: "President, IIBA Hyderabad Chapter",
      items: [
        "Led 500+ members, hosted 20+ industry events annually"
      ],
      icon: "👑"
    },
    {
      category: "Leader, Business Analysis CoP, Deloitte",
      items: [
        "Institutionalized best practices across global delivery"
      ],
      icon: "🏢"
    },
    {
      category: "Volunteer of the Year (multiple times)",
      items: [
        "Recognized for building communities of practice and mentoring"
      ],
      icon: "🏆"
    },
    {
      category: "Advocate for Diversity & Learning",
      items: [
        "Champion for diversity, continuous learning, and people-first leadership"
      ],
      icon: "🌍"
    }
  ];

  return (
    <section id="leadership" className="py-20 relative bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M40 0L80 40L40 80L0 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <CollapsibleSection
          id="leadership"
          title="Community & Leadership"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          gradient="from-rose-700 to-rose-800"
          isOpenByDefault={false}
        >
          <div className="p-8">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Community Leadership & Impact</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Active leadership in professional communities and commitment to advancing the business analysis and product management fields
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {leadershipItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{item.category}</h3>
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
