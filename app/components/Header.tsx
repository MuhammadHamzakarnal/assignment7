import Link from 'next/link';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const Header = () => {
  return (
    <div className={`${roboto.className}`}>
      <div className='w-full bg-black/70 h-auto md:h-6  p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-center text-white'>
        <h1 className='text-xl sm:text-sm md:text-2xl lg:text-3xl hover:text-black duration-500 text-center sm:text-left'>
          Client & Server Data Fetching
        </h1>
        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4 sm:mt-0'>
          <Link href="/">
            <li className='hover:text-red-400 text-sm sm:text-base md:text-lg lg:text-xl text-center'>
              Home
            </li>
          </Link>
          <Link href="/ServerSide">
            <li className='hover:text-red-400 text-sm sm:text-base md:text-lg lg:text-xl'>
              Server Side
            </li>
          </Link>
          <Link href="/ClientSide">
            <li className='hover:text-red-400 text-sm sm:text-base md:text-lg lg:text-xl'>
              Client Side
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
