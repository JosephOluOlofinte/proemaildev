import FeaturedProject from '@/components/block/FeaturedProject'
import { Fragment } from 'react'
import rss10Off from '@/public/images/red-stick-spice/rss-10-off.png'
import captureDesktop from '@/public/images/capture/capture-desktop.png'
import linguaProUpdateDesk from '@/public/images/lingua/lingua-pro-update-desk.png'

const ProjectSlider = () => {
  return (
    <Fragment>
      {/* Portfolio Grid */}
      <section className="w-[85%] my-0 mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Email Projects</h2>
        
        <div className="grid grid-cols-1 lgtablet:grid-cols-3 lgtablet:gap-4 gap-8 lglaptop:gap-8">
          {/* Project 1 */}

          <FeaturedProject 
            slug='projects/rss-promotional-email-suite'
            imgPreview={rss10Off}
            title='Promotional email suite for Red Stick Spice.' 
            desc='A series of four distinct yet cohesive email templates for Red Stick Spice.' 
            tag1='Responsive' tag2='Email suite' tag3='MJML' />

          
          {/* Project 2 */}
          <FeaturedProject 
            slug='projects/welcome-email-template-for-capture'
            imgPreview={captureDesktop} 
            title='Welcome email template for Capture.' 
            desc='A single welcome email developement for Capture&apos;s new subscribers.' 
            tag1='MJML' tag2='Welcome email' tag3='Custom' />

          
          {/* Project 3 */}
          <FeaturedProject 
            slug='projects/linguaproofer-transactional-email-suite'
            imgPreview={linguaProUpdateDesk} 
            title='Transactional email suite for Linguaproofer.' 
            desc='Transactional email suite with 2 distinct templates for Linguaproofer.' 
            tag1='HTML' tag2='CSS' tag3='Transactional email' />


          {/* Project 4 */}
          {/* <FeaturedProject 
            slug=''
            imgPreview={rss10Off} 
            title='Interactive Newsletter' 
            desc='Interactive content with fallbacks for all e-mail clients' 
            tag1='AMP for Email' tag2='Fallbacks' tag3='Animation' /> */}

          {/* Project 5 */}
          {/* <FeaturedProject 
            slug=''
            imgPreview={rss10Off} 
            title='Interactive Newsletter' 
            desc='Interactive content with fallbacks for all e-mail clients' 
            tag1='AMP for Email' tag2='Fallbacks' tag3='Animation' /> */}

          {/* Project 6 */}
          {/* <FeaturedProject 
            slug=''
            imgPreview={rss10Off} 
            title='Interactive Newsletter' 
            desc='Interactive content with fallbacks for all e-mail clients' 
            tag1='AMP for Email' tag2='Fallbacks' tag3='Animation' /> */}


        </div> {/* End of grid */}
        
        <div className="text-center mt-12">
          <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-600 hover:text-white">View All Projects</button>
        </div>
      </section>
    </Fragment>
  )
}

export default ProjectSlider