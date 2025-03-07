import { Fragment } from 'react'
import Header from '@/components/static/Header'
import Hero from './homeComps/Hero'
import QuickAbout from './homeComps/QuickAbout'
import ProjectSlider from './homeComps/ProjectSlider'
import Contact from './homeComps/Contact'
import Footer from '@/components/static/Footer'

const page = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <ProjectSlider />
      <QuickAbout />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default page