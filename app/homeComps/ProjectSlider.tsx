import React, { Fragment } from 'react'

const ProjectSlider = () => {
  return (
    <Fragment>
      {/* Portfolio Grid */}
      <section className="w-[85%] my-0 mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Email Projects</h2>
        
        <div className="grid grid-cols-1 tablet:grid-cols-2 lglaptop:grid-cols-3 gap-8">
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
    </Fragment>
  )
}

export default ProjectSlider