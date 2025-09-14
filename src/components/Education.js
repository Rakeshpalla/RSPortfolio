import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const Education = () => {
  const education = [
    {
      degree: "MBA",
      institution: "JAGSOM, Bengaluru",
      type: "Education",
      icon: "🎓"
    },
    {
      degree: "SAFe Product Owner / Product Manager",
      institution: "Scaled Agile Inc.",
      type: "Certification",
      icon: "🏆"
    },
    {
      degree: "SAFe Practitioner",
      institution: "Scaled Agile Inc.",
      type: "Certification",
      icon: "🏆"
    },
    {
      degree: "CBAP (Certified Business Analysis Professional)",
      institution: "IIBA",
      type: "Certification",
      icon: "🏆"
    },
    {
      degree: "Azure Fundamentals (AZ-900)",
      institution: "Microsoft",
      type: "Certification",
      icon: "🏆"
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='50' height='50'/%3E%3Crect x='50' y='50' width='50' height='50'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <CollapsibleSection
          id="education"
          title="Education & Certifications"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>}
          gradient="from-teal-700 to-teal-800"
          isOpenByDefault={false}
        >
          <div className="p-8">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Academic & Professional Credentials</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Strong educational foundation and continuous professional development in product management and business leadership
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {education.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === 'Education' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{item.degree}</h3>
                      <p className="text-slate-600 text-sm">{item.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Continuous Learning & Development</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Industry Knowledge</h4>
                  <p className="text-blue-200 text-sm">Deep expertise in SaaS, Cloud, and Digital Transformation domains</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Agile Expertise</h4>
                  <p className="text-blue-200 text-sm">Certified in SAFe methodologies and advanced Agile practices</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Technical Skills</h4>
                  <p className="text-blue-200 text-sm">Cloud platforms, analytics tools, and modern product management technologies</p>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </section>
  );
};

export default Education;
