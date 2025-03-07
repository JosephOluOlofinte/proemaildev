import { Fragment } from 'react'
import Image from 'next/image'
import joseph from '@/public/images/joseph.png'


const Hero = () => {
  return (
    <Fragment>
      <main className="double-bg h-[calc(100vh-110px)] max-h-[800px] xltablet:max-h-[900px] w-[100%] flex justify-center bg-gradient-to-tl from-absoluteWhite via-absoluteWhite to-[rgba(196,245,233,0.7)]">
        <div className='w-[80%] h-full py-[100px] grid grid-cols-1 xltablet:grid-cols-2 gap-[140px]'>

          <div className='h-[70%] xltablet:h-[100%] bg-absoluteWhite rounded-xl'>
            <Image src={joseph} alt='' style={{
              width: '100%',
              height: 'auto',
            }} />
          </div>
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