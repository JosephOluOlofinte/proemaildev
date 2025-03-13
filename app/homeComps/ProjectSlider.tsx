import FeaturedProject from '@/components/block/FeaturedProject'
import { Fragment } from 'react'
import rss10Off from '@/public/images/red-stick-spice/rss-10-off.png'

const ProjectSlider = () => {
  return (
    <Fragment>
      {/* Portfolio Grid */}
      <section className="w-[85%] my-0 mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Email Projects</h2>
        
        <div className="grid grid-cols-1 lgtablet:grid-cols-2 lglaptop:grid-cols-3 gap-8">
          {/* Project 1 */}

          <FeaturedProject 
            slug='projects/rss-promotional-email-suite'
            imgPreview={rss10Off}
            title='Red Stick Spice Co. Promotional Email Suite' 
            desc='A series of four distinct yet cohesive email templates' 
            tag1='Responsive' tag2='Email suite' tag3='MJML' />

          
          {/* Project 2 */}
          <FeaturedProject 
            slug=''
            imgPreview={rss10Off} 
            title='Transactional Email Suite' 
            desc='Set of transactional emails for SaaS platform' 
            tag1='Outlook' tag2='Accessible' tag3='Custom' />

          
          {/* Project 3 */}
          <FeaturedProject 
            slug=''
            imgPreview={rss10Off} 
            title='Interactive Newsletter' 
            desc='Interactive content with fallbacks for all e-mail clients' 
            tag1='AMP for Email' tag2='Fallbacks' tag3='Animation' />

          {/* Project 4 */}
          <FeaturedProject 
            slug=''
            imgPreview={rss10Off} 
            title='Interactive Newsletter' 
            desc='Interactive content with fallbacks for all e-mail clients' 
            tag1='AMP for Email' tag2='Fallbacks' tag3='Animation' />

          {/* Project 5 */}
          <FeaturedProject 
            slug=''
            imgPreview={rss10Off} 
            title='Interactive Newsletter' 
            desc='Interactive content with fallbacks for all e-mail clients' 
            tag1='AMP for Email' tag2='Fallbacks' tag3='Animation' />

          {/* Project 6 */}
          <FeaturedProject 
            slug=''
            imgPreview={rss10Off} 
            title='Interactive Newsletter' 
            desc='Interactive content with fallbacks for all e-mail clients' 
            tag1='AMP for Email' tag2='Fallbacks' tag3='Animation' />


        </div> {/* End of grid */}
        
        <div className="text-center mt-12">
          <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-600 hover:text-white">View All Projects</button>
        </div>
      </section>
    </Fragment>
  )
}

export default ProjectSlider