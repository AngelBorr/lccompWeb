import React, { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (action) => {
    if (action === 'open') {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-white flex justify-between items-center w-full h-auto border-b-2 border-[#54ad99]">
      <div className="flex justify-start p-4">
        <picture>
          <img src="/img/small-logo.png" alt="logoLccomp" />
        </picture>
      </div>

      <div className="flex items-center">
        <button
          className={`md:hidden pr-2 flex justify-center justify-items-center ${menuOpen ? 'hidden' : ''}`}
          id="menuOpen"
          onClick={() => handleClick('open')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <button
          className={`md:hidden pr-2 flex justify-center justify-items-center ${menuOpen ? '' : 'hidden'}`}
          id="menuClose"
          onClick={() => handleClick('close')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className={`text-[#54ad99] text-base flex flex-col items-end absolute bg-white top-20 w-full h-auto md:flex md:flex-row md:top-0 md:static md:justify-end z-10 ${menuOpen ? '' : 'hidden'}`}>
        <a className="p-2 border-b-[1px] border-[#54ad99] w-full flex justify-end hover:bg-[#d7f0e9] md:border-0 md:w-auto md:pr-6 md:pl-6 md:rounded" href="/">Home</a>
        <a className="p-2 border-b-[1px] border-[#54ad99] w-full flex justify-end hover:bg-[#d7f0e9] md:border-0 md:w-auto md:pr-6 md:pl-6 md:rounded" href="/products">Productos</a>
        <a className="p-2 border-b-[1px] border-[#54ad99] w-full flex justify-end hover:bg-[#d7f0e9] md:border-0 md:w-auto md:pr-6 md:pl-6 md:rounded" href="/encuentranos">Encuentranos</a>        
      </nav>
    </header>
  );
};


