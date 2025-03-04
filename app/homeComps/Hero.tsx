import Image from 'next/image'
import React, { Fragment } from 'react'

const Hero = () => {
  return (
    <Fragment>
      <main className="h-[calc(100vh-110px)] max-h-[720px] xltablet:max-h-[900px] w-[100%]">
        <div>
          <Image src="/public/images/Meeee.jpg" alt="Pro email developer" height={300} width={500} />
          <Image src="/public/images/portfolio-img.jpg" alt="Pro email developer" height={300} width={500}/>
        </div>
      </main>
    </Fragment>
  )
}

export default Hero