import React from 'react';
import Carousel from './Carousel';

const Skills = () => {
  const skills = [
    {
      category: "Project & Program Management",
      description: "SAFe POPM certified leader with expertise in Agile & Scaled Agile Frameworks, driving enterprise transformation across global teams",
      icon: "📋",
      achievements: ["SAFe POPM Certification", "Agile & Scaled Agile Frameworks", "Global Team Leadership"],
      skills: ["SAFe POPM", "Agile Methodologies", "Scaled Agile Frameworks", "Program Management", "Cross-Functional Leadership"]
    },
    {
      category: "Product Management & Strategy",
      description: "Strategic product leader with expertise in 0-to-1 product development, roadmap strategy, and go-to-market enablement",
      icon: "🎯",
      achievements: ["0-to-1 Product Development", "Strategic Roadmaps", "Go-to-Market Enablement"],
      skills: ["Product Strategy", "Roadmap Planning", "Customer Discovery", "Developer Experience", "Ecosystem Partnerships"]
    },
    {
      category: "Audit & Finance Expertise",
      description: "Deep expertise in audit tech platforms, risk management, and regulatory compliance across financial services",
      icon: "📊",
      achievements: ["Audit Tech Platforms", "Risk Management", "Regulatory Compliance"],
      skills: ["Audit Technology", "Risk Assessment", "Regulatory Compliance", "Financial Services", "Compliance Frameworks"]
    },
    {
      category: "Leadership & People Development",
      description: "President, IIBA Hyderabad Chapter; built professional development programs impacting 500+ members across the business analysis community",
      icon: "👥",
      achievements: ["500+ members impacted", "Professional development programs", "Community building"],
      skills: ["People Development", "Mentorship", "Cross-Functional Team Leadership", "Executive Stakeholder Engagement", "Community Building"]
    },
    {
      category: "Business Strategy & Communication",
      description: "Expert in stakeholder communication, portfolio prioritization, and strategic business alignment across enterprise organizations",
      icon: "💼",
      achievements: ["Stakeholder Communication", "Portfolio Prioritization", "Strategic Alignment"],
      skills: ["Stakeholder Management", "Portfolio Management", "Business Strategy", "Strategic Planning", "Executive Communication"]
    },
    {
      category: "Technology & Innovation",
      description: "Cloud adoption specialist with expertise in process automation, strategic roadmaps, and digital transformation initiatives",
      icon: "🚀",
      achievements: ["Cloud Adoption", "Process Automation", "Digital Transformation"],
      skills: ["Cloud Platforms", "Process Automation", "Strategic Roadmaps", "Digital Transformation", "Technology Innovation"]
    }
  ];

  // Convert skills to carousel items (grouped by 2 skills per slide)
  const carouselItems = [];
  for (let i = 0; i < skills.length; i += 2) {
    const slideSkills = skills.slice(i, i + 2);
    carouselItems.push(
      <div key={i} className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {slideSkills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full translate-y-8 -translate-x-8 opacity-50"></div>
              
              <div className="text-center mb-6 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="text-3xl">{skill.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{skill.category}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">{skill.description}</p>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm flex items-center">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Achievements:
                  </h4>
                  <div className="space-y-2">
                    {skill.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-600 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm flex items-center">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Core Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((skillItem, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200 hover:from-blue-100 hover:to-blue-200 transition-colors duration-200">
                        {skillItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M40 0L80 40L40 80L0 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <Carousel
          items={carouselItems}
          title="Executive Leadership Strengths"
          icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          gradient="from-blue-700 to-blue-800"
          autoPlay={true}
          interval={6000}
        />
        
        {/* Leadership Impact Summary */}
        <div className="mt-12 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-center relative z-10">Leadership Impact</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold mb-2 text-blue-300">85%</div>
              <div className="text-blue-200 font-medium">Adoption Rate</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-xl border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold mb-2 text-green-300">35%</div>
              <div className="text-green-200 font-medium">Efficiency Gain</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold mb-2 text-purple-300">100K+</div>
              <div className="text-purple-200 font-medium">Users Impacted</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-xl border border-red-400/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-3xl font-bold mb-2 text-red-300">40%</div>
              <div className="text-red-200 font-medium">Bottlenecks Reduced</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
