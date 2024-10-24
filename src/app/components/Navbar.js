'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-transparent relative'>
      {/* Hamburger Menu */}
      <div className='sm:hidden flex justify-between items-center px-4 py-2'>
        <Link href={'/home'} className='text-[26px] font-black text-black'>
          Landing
        </Link>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Links for larger screens */}
      <div className='hidden sm:flex justify-between mt-2'>
        <div className='flex justify-start sm:ml-[6rem] space-x-10'>
          <Link href={'/home'}>Home</Link>
          <Link href={'/about'}>About Us</Link>
          <Link href={'/contact'}>Contact Us</Link>
        </div>

        <div className='flex justify-center sm:ml-[-200px]'>
          <Link href={'/home'} className='text-[26px]  font-black text-black z-10'>
            Landing
          </Link>
        </div>

        <div className='flex justify-center sm:mt-3'>
          <div className="bg-black text-white py-2 px-8 sm:px-16 mt-[-10px] z-10 relative">
            <Link href={'/contact'}>Buy Now</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='sm:hidden bg-white rounded shadow-md mt-2 absolute left-0 right-0'>
          <div className='flex flex-col items-center space-y-2 py-4'>
            <Link href={'/home'} onClick={toggleMenu}>Home</Link>
            <Link href={'/about'} onClick={toggleMenu}>About Us</Link>
            <Link href={'/contact'} onClick={toggleMenu}>Contact Us</Link>
            <Link href={'/contact'} onClick={toggleMenu} className='bg-black text-white py-2 px-4 rounded'>
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
