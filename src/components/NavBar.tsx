"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiMenu } from "react-icons/fi";
import Image from 'next/image';
import { IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';
type Props = {}

export default function NavBar({}: Props) {

    const [isSideMenuOpen, setMenu] = useState(false)

    const navlinks=[
        {
            label:"Collection",
            link:"/"
        },
        {
            label:"Men",
            link:"/men"
        },
        {
            label:"Women",
            link:"/women"
        },
        {
            label:"Contact",
            link:"/contact"
        }
        ];

  return (
    <main>
    <nav className='flex justify-between px-8 items-center py-6 '>
        <div className='flex items-center gap-4'>
      <section className='flex items-center gap-4'>
        {/*menu*/}
        <FiMenu onClick={()=>setMenu(true)}
        className='text-3xl cursor-pointer lg:hidden' 
        /> 
        {/* Logo */}
        <Link href={"/"} className='text-4xl font-serif'>
            E-Store
        </Link>
      </section>
      {navlinks.map((d, i)=>(
                <Link key={i} className="hidden lg:block  text-gray-400 hover:text-black" href={d.link} >
                {d.label}
                </Link>
            ))}
      </div>
      {/* sidebar mobile menu */}
      <div className={clsx
        ('fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all', isSideMenuOpen && 'translate-x-0')}>
        <section className='text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex'>
            <IoCloseOutline 
            onClick={()=>setMenu(false)}
            className='mt-0 mb-8 text-3xl cursor-pointer'/>
            {navlinks.map((d, i)=>(
                <Link key={i} className="font-bold" href={d.link} >
                {d.label}
                </Link>
            ))}
        </section>
      </div>

      <section className='flex items-center gap-4'>
        {/* cart icon */}
        <Link href="/cart">
        <AiOutlineShoppingCart 
        className='text-3xl'/>
        </Link>
        {/*avatar image*/}
        <Link href="/account">
        <Image
        src="https://i.pravatar.cc/150?img=0" 
        alt="avatar" 
        width={40} 
        height={40}
        className='w-8 h-8 rounded-full'/>
        </Link>
      </section>
    </nav>
    <hr className=''/>
    </main>
  )
}
