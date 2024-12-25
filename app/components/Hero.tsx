
import Link from "next/link";
import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ["latin"],
    weight:["400", "700"]
 });
import React from "react";

const Hero = () => {
  return (
    <div className={`${roboto.className} min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6`}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Get Data from API</h1>
        <p className="text-gray-600 mb-6 text-xl font-thin">
        Choose client-side or server-side for faster performance.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/ClientSide">
          <button  className="bg-slate-500 text-gray-900 px-4 py-2 rounded-lg shadow hover:bg-slate-600 transition duration-300">
            Client Side
          </button>
          </Link>
          <Link href="ServerSide">
          <button className="bg-slate-500 text-gray-900 px-4 py-2 rounded-lg shadow hover:bg-slate-600 transition duration-300">
            Server Side
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
