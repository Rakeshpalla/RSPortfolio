import React from 'react';

const Experience = () => {

  const experiences = [
    {
      title: "Senior Product Manager",
      company: "Deloitte",
      duration: "December 2013 – Present",
      location: "Hyderabad, India",
      companyLogo: "🏢",
      achievements: [
        {
          metric: "30% Higher Adoption",
          description: "Built scalable enterprise platforms and launched SaaS products with measurable adoption improvements",
          impact: "Product Growth & Scale"
        },
        {
          metric: "25% Risk Reduction",
          description: "Led multiple products through full lifecycle from ideation to launch, scale and sustainment",
          impact: "Operational Excellence"
        },
        {
          metric: "20% Customer Satisfaction",
          description: "Mentored global product teams to achieve measurable results in customer success",
          impact: "Customer Experience"
        },
        {
          metric: "$10M+ Revenue Growth",
          description: "Drove revenue growth through strategic product launches and sustained business impact",
          impact: "Business Impact"
        },
        {
          metric: "Full Product Lifecycle",
          description: "Led multiple products from ideation to launch, scale and sustainment across enterprise platforms",
          impact: "Product Leadership"
        }
      ],
      current: true,
      story: "At Deloitte, I have led a $65M portfolio across three enterprise product lines, mentoring 15+ global product teams to achieve measurable results including 85% product adoption, 35% improvement in operational efficiency, and $10M+ revenue growth over 24 months. I have led multiple products through the full product lifecycle, from ideation to launch, scale and sustainment, consistently enhancing customer satisfaction and business impact across 100,000+ enterprise users."
    },
    {
      title: "Senior Associate Consultant",
      company: "Infosys",
      duration: "June 2011 – December 2013",
      location: "Hyderabad, India",
      companyLogo: "💼",
      industry: "IT Services",
      achievements: [
        {
          metric: "30% Efficiency Gain",
          description: "Conducted gap analyses and provided innovative recommendations for core banking solutions",
          impact: "Process Optimization"
        },
        {
          metric: "20% Delivery Time Reduction",
          description: "Led RFP responses and collaborated with sales teams to deliver impactful proposals",
          impact: "Business Development"
        },
        {
          metric: "Enhanced Feature Utilization",
          description: "Maintained and prioritized product backlogs, aligning with user and market demands",
          impact: "Product Strategy"
        }
      ],
      current: false,
      story: "At Infosys, I specialized in financial services transformation, delivering 30% efficiency gains through gap analysis and innovative core banking solutions. I reduced delivery time by 20% by leading RFP responses and collaborating with sales teams, while enhancing feature utilization through strategic backlog prioritization aligned with market demands."
    },
    {
      title: "Systems Analyst",
      company: "Tech Mahindra",
      duration: "November 2010 – June 2011",
      location: "Hyderabad, India",
      companyLogo: "⚙️",
      industry: "Technology Solutions",
      achievements: [
        {
          metric: "25% Validation Time Reduction",
          description: "Performed comprehensive system studies and provided feature enhancement recommendations",
          impact: "System Optimization"
        },
        {
          metric: "20% Testing Accuracy Improvement",
          description: "Developed and executed test plans and cases for capital market solutions",
          impact: "Quality Assurance"
        }
      ],
      current: false,
      story: "At Tech Mahindra, I focused on capital markets solutions, reducing validation time by 25% through comprehensive system studies and feature enhancement recommendations. I improved testing accuracy by 20% by developing and executing detailed test plans and cases for capital market solutions."
    },
    {
      title: "Business Analyst",
      company: "CGI Group",
      duration: "November 2009 – November 2010",
      location: "Bengaluru, India",
      companyLogo: "🔧",
      industry: "IT Consulting",
      achievements: [
        {
          metric: "20% Risk Reduction",
          description: "Led functional flow redesign and platform migration strategy that reduced delivery risks by 20% through improved integration and streamlined development processes",
          impact: "Platform Integration"
        },
        {
          metric: "Cross-Functional Collaboration",
          description: "Collaborated with business, engineering, and QA teams to gather requirements, translate them into user stories, and ensure seamless development cycles",
          impact: "Stakeholder Management"
        },
      ],
      current: false,
      story: "At CGI Group, I specialized in wealth management platform integration, redesigning functional flows and collaborating across business, engineering, and QA teams to successfully migrate standalone products into a unified Core Platform, reducing delivery risks by 20%."
    },
    {
      title: "Senior Business Analyst – Capital Markets",
      company: "Dion Global Solutions",
      duration: "May 2006 – November 2009",
      location: "Bengaluru, India",
      companyLogo: "📈",
      industry: "Financial Technology",
      achievements: [
        {
          metric: "15% Trade Processing Efficiency",
          description: "Improved trade processing efficiency through rollout of capital market initiatives, including trading system enhancements, IPO processing, and Mutual Fund platforms",
          impact: "System Optimization"
        },
        {
          metric: "12+ Client Implementations",
          description: "Delivered 12+ client implementations, including two large-scale projects, by leading end-to-end product lifecycle activities",
          impact: "Project Delivery"
        },
        {
          metric: "20% Downtime Reduction",
          description: "Reduced downtime by 20% and ensured 100% SEBI compliance by collaborating with traders, risk managers, and IT teams",
          impact: "System Reliability"
        }
      ],
      current: false,
      story: "My career began in financial technology where I gained deep expertise in capital markets and learned the critical importance of regulatory compliance and system reliability. I worked closely with clients and end users, developed trading, IPO and Mutual fund systems and delivered them successfully at multiple client locations, achieving 15% improvement in trade processing efficiency and 20% reduction in system downtime."
    }
  ];



  return (
      <section id="experience" className="py-16 relative overflow-hidden">
      {/* Professional Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional corporate background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-blue-50/85 to-slate-100/90"></div>
      </div>
      
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Leadership Recognition Testimonials */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">Leadership Recognition</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* First Testimonial */}
            <div className="bg-gradient-to-r from-emerald-50 via-blue-50 to-indigo-50 rounded-2xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Product Release Excellence</h4>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
              </div>

              <blockquote className="text-slate-700 leading-relaxed italic mb-4">
                <div className="px-4 py-1">
                  Rakesh made significant contributions to the successful release of <strong className="text-emerald-600">EMS 4.9, AAT 4.8, and Excel Analytics 4.3.1</strong>. He played a vital role in setting up the backlog for NCR features in Omnia POD while maintaining his existing Product Owner responsibilities for EMS, AAT, and Excel Analytics. His dedication to grooming and mentoring Business Systems Analysts has resulted in excellent production support for member firms. His contributions to the <strong className="text-blue-600">BSA Community of Practice</strong> and <strong className="text-blue-600">Tech It Easy platform initiatives</strong> are highly valued. He has been effectively driving the <strong className="text-indigo-600">'Auditutor'</strong> and <strong className="text-indigo-600">'Know Your Domain'</strong> initiatives, demonstrating exceptional leadership and domain expertise.
                </div>
              </blockquote>

              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2 shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">DT</span>
                  </div>
                  <div className="text-left">
                    <cite className="text-slate-700 font-semibold not-italic text-sm">Deloitte Leadership Team</cite>
                    <div className="text-slate-500 text-xs">Product Release Recognition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Delivery Excellence & Learning</h4>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <blockquote className="text-slate-700 leading-relaxed italic mb-4">
                <div className="px-4 py-1">
                  Rakesh has been instrumental for the delivery of <strong className="text-blue-600">AAT 4.12 release</strong>. He has picked delivery activities apart from PO activities. His contributions towards <strong className="text-indigo-600">AAT Redesign work</strong> are well received by stakeholders. Apart from Project deliverables, he is contributing to below initiatives which is much appreciated. Thanks for all the good work Rakesh! <strong className="text-purple-600">L&D SPOC from Audit KYD sessions for AAPS</strong> and <strong className="text-purple-600">CoP – BSA</strong>.
                </div>
              </blockquote>

              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2 shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">DT</span>
                  </div>
                  <div className="text-left">
                    <cite className="text-slate-700 font-semibold not-italic text-sm">Deloitte Leadership Team</cite>
                    <div className="text-slate-500 text-xs">Delivery Excellence Recognition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Testimonial */}
            <div className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 rounded-2xl p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Adaptability & Crisis Management</h4>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
              </div>

              <blockquote className="text-slate-700 leading-relaxed italic mb-4">
                <div className="px-4 py-1">
                  For leading <strong className="text-slate-800">Serengeti Megatron team</strong> and his special efforts in ensuring keep all deliverables to track. He navigated the <strong className="text-slate-800">new environment</strong>, handle and mitigate <strong className="text-slate-800">critical delivery and resource challenges</strong> and ensuring <strong className="text-slate-800">on time quality deliverables</strong>.
                </div>
              </blockquote>

              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2 shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">DT</span>
                  </div>
                  <div className="text-left">
                    <cite className="text-slate-700 font-semibold not-italic text-sm">Deloitte Leadership Team</cite>
                    <div className="text-slate-500 text-xs">Adaptability Recognition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Testimonial - IIBA Recognition */}
            <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-6 border border-violet-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Volunteer Excellence & Conference Leadership</h4>
                <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
              </div>

              <blockquote className="text-slate-700 leading-relaxed italic mb-4">
                <div className="px-4 py-1">
                  He has been a great <strong className="text-violet-600">IIBA volunteer</strong> who has ensured every speaker gets a great experience before, during and after the <strong className="text-purple-600">IIBA event</strong>. He has been the <strong className="text-fuchsia-600">face of IIBA</strong> for each of the conference. Great attitude and hard worker, keeping others interests in mind and working towards the common goal of providing a great experience to all the stakeholders attending the conference. Works well with other teams to ensure smooth handling of any challenges faced before or during the event. Besides this, he has consistently been a part of the various <strong className="text-violet-600">milaps (meet ups)</strong>, and other <strong className="text-purple-600">Hyderabad chapter events</strong> during August 2023 to July 2024 period. I am extremely extremely happy with his contributions and would like to nominate him for the <strong className="text-fuchsia-600">'Volunteer of the Year'</strong> for his immense contributions to the success of the two major <strong className="text-violet-600">Business Analysis Conferences</strong> held in Hyderabad during 2024.
                </div>
              </blockquote>

              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2 shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">IIBA</span>
                  </div>
                  <div className="text-left">
                    <cite className="text-slate-700 font-semibold not-italic text-sm">IIBA Leader</cite>
                    <div className="text-slate-500 text-xs">Volunteer of the Year Nomination</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-700 to-indigo-800 rounded-full mb-4">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Executive Career Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-indigo-800 mx-auto rounded-full"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-blue-500 to-indigo-600"></div>
          
            {/* Timeline Items */}
            <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Node */}
                <div className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-20 ${
                  exp.current ? 'bg-green-500' : 'bg-blue-500'
                }`}>
                  {exp.current && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse z-30"></div>
                  )}
                </div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
                }`}>
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-blue-600 font-semibold">{exp.company}</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-500 text-sm">{exp.industry}</span>
                        </div>
                      </div>
                      <div className="text-left md:text-right">
                        <div className="text-sm text-slate-500 mb-1">{exp.duration}</div>
                        <div className="text-sm text-slate-500">{exp.location}</div>
                        {exp.current && (
                          <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            Current Role
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-3 italic">
                      "{exp.story}"
                    </p>
                    
                    {/* Key Achievements */}
                    <div className="mb-3">
                      <h4 className="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <span key={achIndex} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                            {achievement.metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies/Impact Areas */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Impact Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <span key={achIndex} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                            {achievement.impact}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
          {/* Career Summary */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Career Impact Summary</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <div className="text-3xl font-bold mb-2">19+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-blue-200">Leading Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$65M</div>
              <div className="text-blue-200">Portfolio Value Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100K+</div>
              <div className="text-blue-200">Enterprise Users Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;