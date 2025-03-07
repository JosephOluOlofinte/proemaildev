import { Fragment } from 'react'
import Hero from './homeComps/Hero'
import QuickAbout from './homeComps/QuickAbout'
import ProjectSlider from './homeComps/ProjectSlider'
import Contact from './homeComps/Contact'

const page = () => {
  return (
    <Fragment>
      <Hero />
      <ProjectSlider />
      <QuickAbout />
      <Contact />
    </Fragment>
  )
}

export default page