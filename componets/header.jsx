import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="text-black-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" bis_skin_checked="1">
      <a className="flex title-font font-medium items-center text-black-900 mb-4 md:mb-0">
        
      <Image
        src="/assets/images/logo.jpg"
        width={150}
        height={150}
        alt="Picture of the author"
      />
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link className='mr-5' href="/">
        Home
        </Link>
        <Link className='mr-5' href='/'>
        Shop
        </Link>
        <Link className='mr-5' href='/'>
        About Us
        </Link>
        <Link className='mr-5' href='/'>
        Contact Us
        </Link>
      </nav>
      <button className="inline-flex items-center text-white bg-black border-0 py-5 px-5 focus:outline-none hover:bg-black-200 rounded text-base mt-4 md:mt-0">My Account
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  )
}

export default Header