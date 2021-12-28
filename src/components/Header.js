import React from 'react';
import { ReactComponent as ReactLogo } from '../logo.svg';

function Header() {
  return (
    <header className='p-5 bg-slate-900 flex'>
      <div className='flex flex-row'>
        <ReactLogo className='h-5 my-auto' />
        <h1 className='text-white text-2xl font-serif font-medium'>
          David van Munster
        </h1>
      </div>
      <div className='grow'>
      </div>
      <div className='flex flex-row-reverse'>
        <h1 className='mx-4 text-white text-lg font-serif'>
          About me
        </h1>
        <h1 className='mx-4 text-white text-lg font-serif'>
          M'n ballen
        </h1>
      </div>
    </header>
  );
}

export default Header;
