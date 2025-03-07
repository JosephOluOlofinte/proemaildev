import { Fragment } from 'react'



const Hero = () => {
  return (
    <Fragment>
      <main className="bg-[#132238] w-[100%] flex justify-center text-absoluteWhite  py-16">
        <div className="w-[85%] grid justify-center">
          <h2 className="text-4xl font-bold mb-6">Hi! I&apos;m Joseph Olu</h2>
          <p className="text-xl mb-8 max-w-2xl">I specialize in crafting pixel-perfect HTML email templates that are responsive, accessible, and cross-client compatible.</p>
          <div className='grid grid-cols-2 gap-[15px]'>
          <button className="bg-absoluteWhite text-[#132238] px-6 py-3 rounded-md font-semibold">View My Work</button>

          <button className="text-absoluteWhite border border-absoluteWhite px-6 py-3 rounded-md font-semibold">Contact Me</button>
          </div>
          
        </div>
      </main>

    </Fragment>
  )
}

export default Hero