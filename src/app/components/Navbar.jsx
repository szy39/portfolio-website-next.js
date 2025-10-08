import Link from 'next/link'
import React from 'react'
import NavLink from '../Utils/NavLink'
import NAV_LINKS from '../Utils/NAV_LINKS'

const Navbar = () => {
  return (
    <nav>
     <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
        <Link href={"/"} className='text-5xl text-white font-semibold'>LOGO</Link>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
            <ul className='flex items-center justify-between gap-5 text-xl font-medium'>
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href} title={link.title} />
              ))}
            </ul>
        </div>
     </div>
    </nav>
  )
}

export default Navbar