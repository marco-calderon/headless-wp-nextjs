import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed flex flex-row items-center w-full px-16 py-3 h-22 backdrop-blur-md bg-white/30 dark:bg-black/30">
      <Link href="/">
        <h3 className="text-lg font-bold text-black dark:text-white">Blog</h3>
      </Link>

      <span className="flex-1"></span>

      <div className="flex flex-row items-center gap-8">
        <a className="font-semibold text-black text-md dark:text-white">
          Daily Digest
        </a>
        <a className="font-semibold text-black text-md dark:text-white">
          Tools
        </a>
        <a className="font-semibold text-black text-md dark:text-white">
          Tutorials
        </a>

        <div className="flex items-center justify-center w-30"></div>
        <button className="px-4 py-3 font-semibold text-white bg-black rounded-md dark:bg-white dark:text-black">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Navbar;
