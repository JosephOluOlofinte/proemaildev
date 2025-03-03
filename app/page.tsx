import Footer from '@/components/static/Footer'
import Header from '@/components/static/Header'
import React, { Fragment } from 'react'
import QuickAbout from './homeComps/QuickAbout'
import ProjectSlider from './homeComps/ProjectSlider'
import Hero from './homeComps/hero'
import Contact from './homeComps/Contact'

const page = () => {
  return (
    <Fragment>
        <Header />
        <Hero />
        <QuickAbout />
        <ProjectSlider />
        <Contact />
        <Footer />
    </Fragment>
  )
}

export default page