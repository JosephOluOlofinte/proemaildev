import React, { Fragment } from 'react'

const Home = () => {
  return (

    <Fragment>
      <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-indigo-600">Your Name</h1>
            <p className="text-gray-600">HTML Email Developer</p>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li className="text-indigo-600 font-medium">Portfolio</li>
              <li className="text-gray-600 hover:text-indigo-600">About</li>
              <li className="text-gray-600 hover:text-indigo-600">Process</li>
              <li className="text-gray-600 hover:text-indigo-600">Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Crafting Pixel-Perfect HTML Emails</h2>
          <p className="text-xl mb-8 max-w-2xl">Specialized in responsive, accessible, and cross-client compatible email development.</p>
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium">View My Work</button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Email Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">Email Preview</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">E-commerce Newsletter</h3>
              <p className="text-gray-600 mb-3">Responsive promotional email with interactive elements</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Responsive</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Dark Mode</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">MJML</span>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">Email Preview</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Transactional Email Suite</h3>
              <p className="text-gray-600 mb-3">Set of transactional emails for SaaS platform</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Outlook</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Accessible</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Custom</span>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">Email Preview</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Interactive Newsletter</h3>
              <p className="text-gray-600 mb-3">Interactive content with fallbacks for all clients</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">AMP for Email</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Fallbacks</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Animation</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-600 hover:text-white">View All Projects</button>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">My Development Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      
      {/* Contact Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Looking for an HTML email developer for your next project?</p>
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium">Get in Touch</button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2025 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <span>LinkedIn</span>
            <span>GitHub</span>
            <span>Twitter</span>
          </div>
        </div>
      </footer>
    </div>
    </Fragment>

  )
}

export default Home;