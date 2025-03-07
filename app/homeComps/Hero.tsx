import { Fragment } from 'react'



const Hero = () => {
  return (
    <Fragment>
      <main className="bg-[#132238] text-absoluteWhite  py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Hi! I&apos;m Joseph Olu</h2>
          <p className="text-xl mb-8 max-w-2xl">I specialize in crafting pixel-perfect HTML email templates that are responsive, accessible, and cross-client compatible.</p>
          <button className="bg-absoluteWhite text-[#132238] px-6 py-3 rounded-md font-semibold">View My Work</button>
        </div>
      </main>

    </Fragment>
  )
}

export default Hero