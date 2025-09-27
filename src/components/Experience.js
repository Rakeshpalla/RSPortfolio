import React from 'react';
import Carousel from './Carousel';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Product Manager",
      company: "Deloitte",
      duration: "December 2013 – Present",
      location: "Hyderabad, India",
      companyLogo: "🏢",
      industry: "Consulting & Technology",
      achievements: [
        {
          metric: "$50M+ SaaS Portfolio Growth",
          description: "Built and executed multi-year product strategies that drove user adoption across cloud, digital transformation, and enterprise platforms, positioning the portfolio for sustained market leadership.",
          impact: "Strategic Portfolio Management"
        },
        {
          metric: "20% Productivity Uplift",
          description: "Standardized scaled agile practices across global teams, reducing cycle time and enabling faster feature delivery",
          impact: "Operational Excellence"
        },
        {
          metric: "100K+ Enterprise Users",
          description: "Led cross-functional programs that improved customer satisfaction scores by 22% year-over-year",
          impact: "Customer Success"
        },
        {
          metric: "Leadership Pipeline",
          description: "Mentored and coached 10+ product managers, several of whom advanced into senior leadership roles",
          impact: "Talent Development"
        },
        {
          metric: "Executive Partnerships",
          description: "Secured sponsorship by delivering business cases that tied product investments to measurable ROI",
          impact: "Stakeholder Management"
        }
      ],
      current: true,
      story: "Leading digital transformation initiatives at Deloitte, I've orchestrated enterprise-wide product strategies that have reshaped how global enterprises approach SaaS adoption and digital innovation."
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
          metric: "$15M Client Acquisitions",
          description: "Delivered core banking product enhancements that supported new client acquisitions worth ~$15M",
          impact: "Revenue Growth"
        },
        {
          metric: "Tier-1 Account Wins",
          description: "Partnered with sales and delivery to win multiple Tier-1 accounts by co-authoring proposals and delivering executive presentations",
          impact: "Business Development"
        }
      ],
      current: false,
      story: "At Infosys, I specialized in financial services transformation, helping global banks modernize their core systems and improve operational efficiency through strategic product implementations."
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
          metric: "25% Error Reduction",
          description: "Improved compliance and reduced reconciliation errors by 25% through process re-engineering in capital markets products",
          impact: "Process Optimization"
        }
      ],
      current: false,
      story: "Early in my career at Tech Mahindra, I focused on capital markets solutions, where I learned the importance of precision and compliance in financial systems."
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
          metric: "2 Weeks Faster Delivery",
          description: "Shortened delivery timelines by 2 weeks by creating detailed use cases and documentation that reduced requirement clarification cycles",
          impact: "Delivery Excellence"
        },
        {
          metric: "15% Process Efficiency",
          description: "Improved process efficiency by 10-15% through analysis of business workflows and translation of stakeholder requirements",
          impact: "Process Improvement"
        }
      ],
      current: false,
      story: "At CGI Group, I developed my foundation in business analysis, learning to bridge the gap between business needs and technical solutions."
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
      story: "My career began in financial technology at Dion Global Solutions, where I gained deep expertise in capital markets and learned the critical importance of regulatory compliance and system reliability."
    }
  ];

  // Convert experiences to carousel items
  const carouselItems = experiences.map((exp, index) => (
    <div key={index} className="p-8">
      {/* Experience Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <div className="flex items-center space-x-2 mb-2 md:mb-0">
                  <span className="text-xl font-semibold text-blue-300">{exp.company}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-300">{exp.industry}</span>
                </div>
              </div>
            </div>
            {exp.current && (
              <span className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium">
                Current Role
              </span>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-slate-300">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{exp.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{exp.location}</span>
            </div>
          </div>
        </div>
        
        {/* Story */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <p className="text-slate-700 leading-relaxed italic">
            "{exp.story}"
          </p>
        </div>
        
        {/* Achievements */}
        <div className="p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Achievements & Impact</h4>
          <div className="space-y-4">
            {exp.achievements.map((achievement, achIndex) => (
              <div key={achIndex} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <span className="font-semibold text-blue-700">{achievement.metric}</span>
                    <span className="text-sm text-slate-500 bg-slate-200 px-2 py-1 rounded-full">
                      {achievement.impact}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="experience" className="py-20 relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='40' height='40'/%3E%3Crect x='40' y='40' width='40' height='40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <Carousel
          items={carouselItems}
          title="Executive Career Journey"
          icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          gradient="from-indigo-700 to-indigo-800"
          autoPlay={true}
          interval={8000}
        />
      </div>
    </section>
  );
};

export default Experience;
