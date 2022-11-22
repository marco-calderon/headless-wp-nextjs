import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full flex flex-row items-center h-22 px-16 py-3 backdrop-blur-md bg-white/30 dark:bg-black/30 fixed">
      <h3 className="text-black dark:text-white text-lg font-bold">Blog</h3>

      <span className="flex-1"></span>

      <div className="flex flex-row items-center gap-8">
        <a className="text-md text-black dark:text-white font-semibold">
          Daily Digest
        </a>
        <a className="text-md text-black dark:text-white font-semibold">
          Tools
        </a>
        <a className="text-md text-black dark:text-white font-semibold">
          Tutorials
        </a>

        <div className="w-30 flex items-center justify-center"></div>
        <button className="bg-black text-white dark:bg-white dark:text-black rounded-md font-semibold px-4 py-3">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Navbar;
