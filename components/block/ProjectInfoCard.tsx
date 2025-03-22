

import { ProjectInfoProp } from "@/lib/types"
import Button from "./Button"
import Image from "next/image"


const ProjectInfoCard: React.FC<ProjectInfoProp> = ({
    title, tags, desc, url, projectOverv, oriDesign, htmlImp,
    desktopView, tabView, mobView, campaignSeries, modularComp, gmail, outlook, apple, alltest, ctaTitle, ctaCopy
}) => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">  
        <main className="max-w-5xl mx-auto px-6 py-12">

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4"> {title} </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (

              <div key={index} className="">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">{tag.tag} </span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
           {desc}                     
          </p>
          { url ? 

            (<><br /> <a href={url} className="text-indigo-700 border-0">View project on the web</a></>)
            :
            null
          }
        </div>

        {/* Project Overview */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="font-bold mb-6">Project overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-3">The challenge</h3>
              <p className="text-gray-700 mb-4">
                {projectOverv.challenge}
              </p>
              <ul dangerouslySetInnerHTML={{ __html: projectOverv.challengeList }} className="list-disc pl-5 text-gray-700 space-y-2" />
            </div>
            <div>
              <h3 className="font-medium mb-3">The solution</h3>
              <p className="text-gray-700 mb-4">
                {projectOverv.solution}
              </p>
              <ul dangerouslySetInnerHTML={{ __html: projectOverv.solutionList }} className="list-disc pl-5 text-gray-700 space-y-2" />
            </div>
          </div>
        </section>

        {/* Design Comparison */}
        {
          oriDesign && htmlImp ?
          <section className="mb-16">
            <h2 className="font-bold mb-6">Design to code</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lgtablet:grid-cols-2">
                <div className="p-6 border-r border-b md:border-b-0">
                  <h3 className="font-medium mb-4">Original design</h3>
                  <div className="bg-gray-200 h-fit flex items-center justify-center overflow-hidden">
                    <span className="text-gray-500">
                      <Image src={oriDesign} alt={title} width={0} height={0} sizes="100vw" style={{minWidth: "250px", maxWidth: "400px", height: "auto"}} />
                    </span>
                  </div>
                </div>
                <div className="p-6 border-b md:border-b-0">
                  <h3 className="font-medium mb-4">HTML implementation</h3>
                  <div className="bg-gray-200 h-fit flex items-center justify-center overflow-hidden">
                    <span className="text-gray-500">
                      <Image src={htmlImp} alt={title} width={0} height={0} sizes="100vw" style={{minWidth: "250px", maxWidth: "500px", height: "auto"}} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        :
        null
        }
        

        {/* Responsive Views */}
        <section className="mb-16">
          <h2 className="font-bold mb-6">Responsive behavior</h2>
          <div className="grid grid-cols-1 lgtablet:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium mb-4">Desktop view</h3>
              <div className="bg-gray-200 h-fit w-full flex items-center justify-center overflow-hidden">
                <span className="text-gray-500"> 
                  <Image src={desktopView} alt={title} width={0} height={0} sizes="100vw" style={{minWidth: "250px", maxWidth: "350px", height: "auto"}} />  
                  </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium mb-4">Tablet view</h3>
              <div className="bg-gray-200 h-fit w-full flex items-center justify-center overflow-hidden">
                <span className="text-gray-500"> 
                  <Image src={tabView} alt={title} width={0} height={0} sizes="100vw" style={{minWidth: "250px", maxWidth: "350px", height: "auto"}} />  
                  </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium mb-4">Mobile view</h3>
              <div className="bg-gray-200 h-fit w-full flex items-center justify-center overflow-hidden">
                <span className="text-gray-500"> 
                  <Image src={mobView} alt={title} width={0} height={0} sizes="100vw" style={{minWidth: "150px", maxWidth: "220px", height: "auto"}} />  
                </span>
              </div>
            </div>
          </div> {/* End of grid */}
        </section>

        {/* Email suite display */}
        {
          campaignSeries ?
          <section className="mb-16">
            <h2 className="font-bold mb-6">The campaign series</h2>
            <div className="grid grid-cols-1 lgtablet:grid-cols-2 gap-6">
              {          
                campaignSeries.map((campaign, index) => (
                    <div  key={index} className="bg-white rounded-lg shadow-md p-6 overflow-hidden">
                      <div className="p-4 h-[150px]">
                        <h3 className="mb-3"> {campaign.title} </h3>
                        <p className="text-sm text-gray-600 mb-3"> {campaign.desc} </p>
                      </div>
                      <div className="bg-gray-200 h-fit w-full flex items-center justify-center overflow-hidden">
                       <Image src={campaign.img} alt={campaign.title} width={0} height={0} sizes="100vw" style={{minWidth: "300px", height: "auto"}} />
                      </div>
                    </div>
                ))
              }
            </div>
          </section>
          :
          null
        }

        {/* Component Library */}
        {
          modularComp ?
          <section className="mb-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Modular Component System</h2>
            <p className="text-gray-700 mb-6">
              To ensure consistency and maintainability, I developed a library of reusable components that could be assembled in different combinations to create each template.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="border rounded p-4">
                <h3 className="font-medium mb-2">Header Components</h3>
                {
                  modularComp.headerComps.map((comp, index) => (
                    <>
                      <ul key={index} className="text-sm text-gray-600 space-y-1">
                        <li> {comp.comp} </li>
                      </ul>
                    </>
                  ))
                }
                
              </div>
              <div className="border rounded p-4">
                <h3 className="font-medium mb-2">Content Components</h3>
                {
                  modularComp.contentComps.map((comp, index) => (
                    <>
                      <ul key={index} className="text-sm text-gray-600 space-y-1">
                        <li> {comp.comp} </li>
                      </ul>
                    </>
                  ))
                }
              </div>
              <div className="border rounded p-4">
                <h3 className="font-medium mb-2">Footer Components</h3>
                {
                  modularComp.footerComps.map((comp, index) => (
                    <>
                      <ul key={index} className="text-sm text-gray-600 space-y-1">
                        <li> {comp.comp} </li>
                      </ul>
                    </>
                  ))
                }
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded border">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code>
                  {`<!-- Example of component-based structure -->
                  <module name="header">
                    <!-- Logo and branding elements -->
                  </module>

                  <module name="transactionSummary" data-type="{{transactionType}}">
                    <!-- Dynamic transaction details -->
                  </module>

                  <module name="ctaButton" url="{{actionUrl}}" text="{{actionText}}">
                    <!-- Bulletproof button component -->
                  </module>

                  <module name="footer" locale="{{userLocale}}">
                    <!-- Localized footer content -->
                  </module>`}
                </code>
              </pre>
            </div>
          </section>
          :
          null
        }
        

        {/* Client Testing */}
        <section className="mb-16">
          <h2 className="font-bold mb-6">Email client testing</h2>
          <div className="grid grid-rows-[2] gap-8">
            <div className="h-fit grid grid-cols-1 laptop:grid-cols-3 gap-4">

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3>Gmail (Web)</h3>
                </div>
                <div className="bg-gray-200 h-fit flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500"> 
                    <Image src={gmail} alt={title} width={0} height={0} sizes="100vw" style={{minWidth: "300px", height: "auto"}} />  
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3>Outlook 2019</h3>
                </div>
                <div className="bg-gray-200 h-fit flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500">
                    <Image src={outlook} alt={title} width={0} height={0} sizes="100vw" style={{minWidth: "300px", height: "auto"}} />
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3>Apple Mail</h3>
                </div>
                <div className="bg-gray-200 h-fit flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500">
                    <Image src={apple} alt={title} width={0} height={0} sizes="100vw" style={{minWidth: "300px", height: "auto"}} />
                  </span>
                </div>
              </div>

            </div>

            <div className="bg-white h-fit rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500"> {alltest} me </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Full test video</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="bg-indigo-700 text-white rounded-lg shadow-md p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4"> {ctaTitle} </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {ctaCopy}
          </p>

          <Button text="Let's Work Together" size="large" className="text-indigo-700 border-0" exUrl="mailto:josepholuolofinte@gmail.com?subject=Email%20template%20development%20services&body=Hey%20Joseph.%20I'd%20like%20to%20chat%20about%20your%20HTML%20email%20development%20services.%0A%0ASpecifically%2C%20I'm%20wondering%20if%20you%20can%20help%20with" />

        </section>
        </main>
      </div>
    </>
  )
}

export default ProjectInfoCard