import Button from '@/components/block/Button'
import { Fragment } from 'react'



const Hero = () => {
  return (
    <Fragment>
      <main className="bg-brandAccent w-[100%] flex justify-center text-absoluteWhite py-24 rounded-3xl">
        <div className="w-[85%] grid justify-center">
          <h2 className="text-4xl font-bold mb-6">Hi! I&apos;m Joseph Olu</h2>
          <p className="text-xl mb-14 max-w-[650px]">I specialize in crafting pixel-perfect HTML email templates that are responsive, accessible, and cross-client compatible.</p>
          <div className='grid grid-cols-2 gap-[15px] max-w-[620px]'>
            <Button text="View My Work" size="large" className='w-full' />
            <Button text="Contact Me" size="large" variant="secondary" className='w-full' />
          </div>
          
        </div>
      </main>

    </Fragment>
  )
}

export default Hero