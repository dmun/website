import React from 'react';
import { ReactComponent as ReactLogo } from '../logo.svg';

function Header() {
  return (
    <nav className='absolute w-full text-white p-5 flex flex-row place-content-between'>
      <a
        className='font-medium text-xl flex flex-row'
        href='/'
      >
        <ReactLogo className='h-6 sm:h-4 my-auto' />
        <a className='invisible absolute sm:visible sm:relative pt-1'>David van Munster</a>
      </a>
      <ul className='text-slate-400 flex flex-row my-auto'>
        <li className='px-2 hover:text-white transition-colors'>About</li>
        <li className='px-2 hover:text-white transition-colors'>Work</li>
        <li className='px-2 hover:text-white transition-colors'>Contact</li>
      </ul>
    </nav>
  );
}

export default Header;