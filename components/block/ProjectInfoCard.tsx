

import { ProjectInfoProp } from "@/lib/types"


const ProjectInfoCard: React.FC<ProjectInfoProp> = ({
    title, tags, desc, projectOverv, oriDesign, htmlImp,
    desktopView, tabView, mobView, lightMode, darkMode,
    code1, code2, gmail, outlook, apple, alltest
}) => {
  return (
    <>
        {/* Project Header */}
        <section className="bg-brandAccent w-[100%] flex justify-center text-absoluteWhite py-20 mt-5 rounded-3xl">
          <div className="w-full">
            <div className="max-w-5xl mx-auto px-6">
              <h1 className="font-bold mb-4"> {title} </h1>
              <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (

                  <div key={index} className="">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">{tag.tag} </span>
                  </div>

                ))}
              </div>
              <p className="max-w-3xl">
                {desc}
              </p>
            </div>
          </div>
        </section>
        
        <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Project Overview */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="font-bold mb-6">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-3">The Challenge</h3>
              <p className="text-gray-700 mb-4">
                {projectOverv.challenge}
              </p>
              <ul dangerouslySetInnerHTML={{ __html: projectOverv.challengeList }} className="list-disc pl-5 text-gray-700 space-y-2" />
            </div>
            <div>
              <h3 className="font-medium mb-3">The Solution</h3>
              <p className="text-gray-700 mb-4">
                {projectOverv.solution}
              </p>
              <ul dangerouslySetInnerHTML={{ __html: projectOverv.solutionList }} className="list-disc pl-5 text-gray-700 space-y-2" />
            </div>
          </div>
        </section>

        {/* Design Comparison */}
        <section className="mb-16">
          <h2 className="font-bold mb-6">Design to Code</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-r border-b md:border-b-0">
                <h3 className="font-medium mb-4">Original Design</h3>
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <span className="text-gray-500"> {oriDesign} </span>
                </div>
              </div>
              <div className="p-6 border-b md:border-b-0">
                <h3 className="font-medium mb-4">HTML Implementation</h3>
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <span className="text-gray-500"> {htmlImp} </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Views */}
        <section className="mb-16">
          <h2 className="font-bold mb-6">Responsive Behavior</h2>
          <div className="grid grid-cols-1 lgtablet:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium mb-4">Desktop View</h3>
              <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                <span className="text-gray-500"> {desktopView} </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium mb-4">Tablet View</h3>
              <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                <span className="text-gray-500"> {tabView} </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium mb-4">Mobile View</h3>
              <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                <span className="text-gray-500"> {mobView} </span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="font-bold mb-6">Technical Challenges</h2>
          
          <div className="mb-8">
            <h3 className="font-medium mb-3">Dark Mode Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500"> {lightMode} </span>
              </div>
              <div className="bg-gray-800 h-64 flex items-center justify-center">
                <span className="text-gray-400"> {darkMode} </span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded border mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code>
                    {code1}
                </code>
              </pre>
            </div>
            <p className="text-gray-700">
              Implemented fallback colors and specialized media queries to enhance readability in dark mode while preserving brand identity.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Outlook VML Background Fix</h3>
            <div className="bg-gray-50 p-4 rounded border mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code>
                    {code2}
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
          <h2 className="font-bold mb-6">Email Client Testing</h2>
          <div className="grid grid-cols-1 lgtablet:grid-cols-2 laptop:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500"> {gmail} </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Gmail (Web)</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500"> {outlook} </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Outlook 2019</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500"> {apple} </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Apple Mail</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500"> {alltest} </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Full test video</h3>
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
    </>
  )
}

export default ProjectInfoCard