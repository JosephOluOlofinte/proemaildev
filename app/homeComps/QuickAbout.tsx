import React from 'react'

const QuickAbout = () => {
  return (
    <>
    {/* Process Section */}
    <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">My Development Process</h2>
          
          <div className="grid grid-cols-1 xltablet:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold text-xl mb-2">Requirements</h3>
              <p className="text-gray-600">Understanding goals, target audience, and technical requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold text-xl mb-2">Development</h3>
              <p className="text-gray-600">Coding responsive, cross-client compatible HTML emails</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold text-xl mb-2">Testing</h3>
              <p className="text-gray-600">Rigorous testing across 40+ email clients and devices</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 xltablet:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-4">Core Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>HTML5 & CSS3 with email-specific limitations</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>Responsive design with media queries</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>Cross-client compatibility techniques</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>Accessibility implementation</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>Email testing methodologies</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-4">Tools & Platforms</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>MJML/Foundation for Emails</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>Litmus/Email on Acid</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>ESP knowledge (Mailchimp, Campaign Monitor)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>Git version control</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span>Build automation tools</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default QuickAbout