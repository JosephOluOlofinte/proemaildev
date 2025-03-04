'use client'

import Link from "next/link";
import { Fragment } from "react"
import { FaWhatsapp } from "react-icons/fa6";


const Header = () => {
  return (
    <Fragment>
      <header className="w-full h-[50px]">
        <div>
          <Link href="" className="flex items-center gap-[8px]">
          <FaWhatsapp />
          <p>+234 7036533954</p></Link>
        </div>
        <div></div>
      </header>
    </Fragment>
  )
}

export default Header