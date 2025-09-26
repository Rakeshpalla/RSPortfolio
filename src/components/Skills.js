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
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{skill.category}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">{skill.description}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm">Key Achievements:</h4>
                  <div className="space-y-2">
                    {skill.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-600 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm">Core Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((skillItem, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
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
        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Leadership Impact</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Community Members</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-2">Multiple</div>
              <div className="text-blue-200">Deloitte Awards</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Teams Transformed</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-2">19+</div>
              <div className="text-blue-200">Years Leadership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
