import React from 'react';
import { ReactComponent as ReactLogo } from '../logo.svg';

function Header() {
  return (
    <nav className='opacity-50 hover:opacity-100 transition-opacity absolute top-0 z-10 w-full text-white p-5 flex flex-row place-content-between'>
      <a
        className='font-medium text-xl flex flex-row'
        href='/'
      >
        <ReactLogo className='h-6 sm:h-4 my-auto' />
        <a className='invisible absolute sm:visible sm:relative pt-1'>David van Munster</a>
      </a>
      <ul className='flex flex-row my-auto'>
        <li className='px-2 opacity-50 hover:opacity-100 transition-opacity'>About</li>
        <li className='px-2 opacity-50 hover:opacity-100 transition-opacity'>Work</li>
        <li className='px-2 opacity-50 hover:opacity-100 transition-opacity'>Contact</li>
      </ul>
    </nav>
  );
}

export default Header;