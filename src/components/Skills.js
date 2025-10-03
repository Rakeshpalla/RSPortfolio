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
    },
    {
      category: "Modern Development Tools & AI",
      description: "Senior Product Manager leveraging cutting-edge AI development tools to accelerate product delivery, validate concepts, and bridge technical gaps",
      icon: "⚡",
      achievements: ["AI-Powered Development", "Rapid Prototyping", "Technical Validation"],
      skills: ["Cursor IDE", "Lovable Platform", "Bolt New", "Claude AI", "ChatGPT", "Vibe Coding", "AI Product Tools"]
    }
  ];

  // Convert skills to carousel items (grouped by 2 skills per slide)
  const carouselItems = [];
  for (let i = 0; i < skills.length; i += 2) {
    const slideSkills = skills.slice(i, i + 2);
        carouselItems.push(
          <div key={i} className="p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {slideSkills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 md:p-8 shadow-xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full translate-y-8 -translate-x-8 opacity-50"></div>
              
              <div className="text-center mb-3 md:mb-4 relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg">
                  <div className="text-xl md:text-2xl">{skill.icon}</div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1 md:mb-2">{skill.category}</h3>
                <p className="text-slate-600 leading-relaxed text-xs md:text-sm mb-3 md:mb-4">{skill.description}</p>
              </div>
              
              <div className="space-y-3 relative z-10">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm flex items-center">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Achievements:
                  </h4>
                  <div className="space-y-2">
                    {skill.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-600 text-xs md:text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm flex items-center">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Core Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((skillItem, skillIndex) => (
                      <span key={skillIndex} className="px-2 md:px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200 hover:from-blue-100 hover:to-blue-200 transition-colors duration-200">
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
        <section id="skills" className="py-16 relative overflow-hidden">
      {/* Professional Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional skills background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-slate-50/85 to-blue-50/90"></div>
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
      </div>
    </section>
  );
};

export default Skills;
