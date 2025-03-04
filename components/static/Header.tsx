'use client'

import Link from "next/link";
import { Fragment } from "react"
import { AiOutlineLinkedin } from "react-icons/ai";


const Header = () => {
  return (
    <Fragment>
      <header className="w-full flex flex-col items-center justify-center">
        <div className="h-[40px] w-full flex items-center justify-center bg-brandBlue10">
          <div className="w-[90%] h-full flex justify-end">
            <a href="https://www.linkedin.com/in/joseph-olu" className="h-full flex items-center gap-[10px] font-semibold">
              <AiOutlineLinkedin size={24} className="" />
              <p className="leading-none">Connect on LinkedIn</p>
            </a>
          </div>        
        </div>
        <div className="w-[90%] h-[70px] flex items-center justify-between">
          <div>
            <h1 className="min-w-fit text-[28px]">Pro <br />Email Developer</h1>
          </div>
          <nav className="hidden xltablet:flex">
            <ul className="flex gap-[30px] font-medium">
              <li><Link href="">About</Link></li>
              <li><Link href="">Email templates</Link></li>
              <li><Link href="">Email strategy</Link></li>
              <li><Link href="">Email copy</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  )
}

export default Header