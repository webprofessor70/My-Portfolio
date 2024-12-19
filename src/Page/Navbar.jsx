import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Resume", link: "/resume" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get the current route

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-40'>
      <div className="md:flex justify-between items-center bg-white py-4 px-7 md:px-10">
        {/* Logo */}
        <div className='font-bold text-2xl flex items-center cursor-pointer'>
          <Link to='/' className='text-semibold'>SAJID ALI</Link>
        </div>

        {/* Toggle Button */}
        <div 
          onClick={() => setOpen(!open)} 
          className='text-3xl text-black rounded p-1 absolute right-6 top-3 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        {/* Navigation Links */}
        <ul 
          className={`
            md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:z-auto z-[1] transition-all duration-500 ease-in
            ${open ? 'top-16 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}
          `}
        >
          {Links.map((link) => (
            <li 
              key={link.name} 
              className={`
                md:ml-8 md:my-0 my-7 text-lg font-medium text-center 
                ${location.pathname === link.link ? 'text-[#eb098d] font-bold' : 'text-gray-700 hover:text-[#eb098d]'}
              `}
            >
              <Link to={link.link} onClick={() => setOpen(false)}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
