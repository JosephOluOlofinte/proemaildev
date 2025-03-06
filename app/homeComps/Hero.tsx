import { Fragment } from 'react'


const Hero = () => {
  return (
    <Fragment>
      <main className="double-bg h-[calc(100vh-110px)] max-h-[800px] xltablet:max-h-[900px] w-[100%] flex justify-center bg-gradient-to-tl from-absoluteWhite via-absoluteWhite to-[rgba(196,245,233,0.7)]">
        <div className='w-[80%] h-full grid grid-cols-1 xltablet:grid-cols-2'>

          <div></div>
          <div>
            <div>
              <h1>Hi, I&apos;m Joseph; <br /> professional email template developer</h1>
              <small className='text-[12px]'>I specialize in crafting pixel-perfect HTML Emails that are responsive, accessible, and cross-client compatible. </small>
            </div>
            <div></div>
          </div>
         
        </div>
      </main>
    </Fragment>
  )
}

export default Hero