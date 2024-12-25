import Link from 'next/link'
import React from 'react'
import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ["latin"],
    weight:["400", "700"]
 });
const Header = () => {
  return (
    <div className={`${roboto.className}`}>
        <div className='bg-black/70 h-6 p-9 flex justify-between items-center text-white'>
        <h1 className='text-2xl hover:text-black duration-500'>Client & Server data fetching </h1>
            <ul className='flex gap-5 '>
            <Link href="/"><li className='hover:text-red-400'>Home</li> </Link>
            <Link href="/ServerSide"><li className='hover:text-red-400'>Server Side</li> </Link>
            <Link href="/ClientSide">    <li className='hover:text-red-400'>Client Side</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header