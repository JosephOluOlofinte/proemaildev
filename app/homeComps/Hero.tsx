import { Fragment } from 'react'


const Hero = () => {
  return (
    <Fragment>
      <main className="h-[calc(100vh-110px)] max-h-[720px] xltablet:max-h-[900px] w-[100%] bg-heroBgImg flex justify-center">
        <div className='text-absoluteWhite w-[80%] h-full flex flex-col items-center justify-center gap-[15px] text-center'>
          <h1 className="tablet:text-4xl xltablet:text-5xl">Professional Email Developer</h1>
          <h2 className=''>Crafting Pixel-Perfect HTML Emails</h2>
          <small>Specialized in responsive, accessible, and cross-client compatible email development.</small>
        </div>
      </main>
    </Fragment>
  )
}

export default Hero