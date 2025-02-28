import React, { Fragment } from 'react'

const projectInfo = () => {
  return (
    <Fragment>
        <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header - Simplified version of main site header */}
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

      {/* Project Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to All Projects
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Previous Project</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Next Project</a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">E-commerce Seasonal Campaign</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Responsive</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Dark Mode</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">MJML</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Interactive</span>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            A responsive promotional email campaign for a major retail client, featuring dynamic content, dark mode support, and interactive elements with robust fallbacks.
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">The Challenge</h3>
              <p className="text-gray-700 mb-4">
                Create a visually rich promotional email that maintains design integrity across all major email clients while implementing interactive elements where supported.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Support for 40+ email clients including Outlook 2007-2019</li>
                <li>Mobile-responsive design with text size adjustments</li>
                <li>Dark mode compatibility</li>
                <li>Interactive product carousel with fallbacks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">The Solution</h3>
              <p className="text-gray-700 mb-4">
                I developed a hybrid approach using MJML for the base structure while implementing custom code for critical sections requiring specific client support.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Table-based layout with responsive breakpoints</li>
                <li>VML for Outlook background images</li>
                <li>CSS targeting for dark mode adjustments</li>
                <li>Progressive enhancement for interactive elements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Design to Code</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-r border-b md:border-b-0">
                <h3 className="text-xl font-medium mb-4">Original Design</h3>
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <span className="text-gray-500">Design Mockup Image</span>
                </div>
              </div>
              <div className="p-6 border-b md:border-b-0">
                <h3 className="text-xl font-medium mb-4">HTML Implementation</h3>
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <span className="text-gray-500">Final HTML Email Screenshot</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Views */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Responsive Behavior</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium mb-4">Desktop View</h3>
              <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                <span className="text-gray-500">Desktop Screenshot</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium mb-4">Tablet View</h3>
              <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                <span className="text-gray-500">Tablet Screenshot</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium mb-4">Mobile View</h3>
              <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                <span className="text-gray-500">Mobile Screenshot</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Technical Challenges</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-3">Dark Mode Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">Light Mode Screenshot</span>
              </div>
              <div className="bg-gray-800 h-64 flex items-center justify-center">
                <span className="text-gray-400">Dark Mode Screenshot</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded border mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code>
{`@media (prefers-color-scheme: dark) {
  .darkmode-bg { background-color: #121212 !important; }
  .darkmode-text { color: #ffffff !important; }
  .darkmode-button { 
    background-color: #bb86fc !important;
    color: #000000 !important; 
  }
}`}
                </code>
              </pre>
            </div>
            <p className="text-gray-700">
              Implemented fallback colors and specialized media queries to enhance readability in dark mode while preserving brand identity.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3">Outlook VML Background Fix</h3>
            <div className="bg-gray-50 p-4 rounded border mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code>
{`<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" 
  style="width:600px;height:400px;">
<v:fill type="tile" src="bg-image.jpg" color="#f8f8f8" />
<v:textbox inset="0,0,0,0">
<![endif]-->
  <div>
    <!-- Content here -->
  </div>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->`}
                </code>
              </pre>
            </div>
            <p className="text-gray-700">
              Used Vector Markup Language (VML) to ensure background images displayed correctly in Outlook desktop clients while maintaining the design integrity.
            </p>
          </div>
        </section>

        {/* Client Testing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Email Client Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Gmail Screenshot</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Gmail (Web)</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Outlook Screenshot</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Outlook 2019</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Apple Mail Screenshot</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Apple Mail</h3>
              </div>
            </div>
          </div>
          <div className="mt-6 text-right">
            <a href="#" className="text-indigo-600 hover:text-indigo-800">View all email client tests →</a>
          </div>
        </section>

        {/* Call To Action */}
        <section className="bg-indigo-700 text-white rounded-lg shadow-md p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need similar results for your email campaigns?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            I can help you create responsive, accessible HTML emails that look great across all major email clients.
          </p>
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium">Let&apos;s Work Together</button>
        </section>
      </main>

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

export default projectInfo