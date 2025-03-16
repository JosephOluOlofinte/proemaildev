'use client'

import Link from "next/link";
import { Fragment } from "react"

const Header = () => {
  return (
    <Fragment>
      <header className="w-full flex flex-col items-center justify-center bg-absoluteWhite">
        <div className="w-[90%] tablet:w-[95%] latop:w-[85%] h-[100px] flex items-center justify-between">
          <div>
            <Link href="/">
              <h1 className="min-w-fit text-[28px]">Pro <br />Email Developer</h1>
            </Link>
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