import React, { useState } from 'react';
import { TbMenu } from 'react-icons/tb';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: 'HOME', link: '#home', icon: 'AiOutlineHome' },
    { name: 'ABOUT', link: '#about' },
    { name: 'SKILLS', link: '#skills' },
    { name: 'PROJECTS', link: '#projects' },
    { name: 'CONTACT', link: '#contact' },
  ];

  const changeScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeScroll);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] ${
        scroll ? 'bg-slate-100/90 text-gray-900' : 'text-white'
      }`}
    >
      {/* TITLE */}

      <div className='flex items-center justify-between'>
        <div className='mx-7'>
          <h4 className='uppercase text-4xl font-bold'>
            Ha<span className='text-cyan-600'>nzl</span>ah
          </h4>
        </div>

        {/* NAV LINKS */}

        <div
          className={`text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full ${
            scroll ? 'md:bg-white/0 bg-white' : 'bg-white'
          }`}
        >
          <ul className='flex gap-1 items-center py-2 text-lg'>
            {menuLinks?.map((menu, i) => {
              return (
                <li key={i} className='md:px-4 px-6 hover:text-cyan-600 '>
                  <a href={menu.link}>{menu.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* MOBILE SCREEN */}

        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? 'text-gray-900' : scroll && 'text-gray-900'
          } text-3xl md:hidden m-5 cursor-pointer`}
        >
          <TbMenu />
        </div>

        <div
          className={`md:hidden text-gray-900 bg-white h-screen px-7 py-2 absolute
         w-2/3 font-medium top-0 duration-500 ${
           open ? 'right-0' : 'right-[-100%]'
         }`}
        >
          <ul className='flex flex-col items-start justify-center h-full gap-10 py-2 text-lg'>
            {menuLinks?.map((menu, i) => {
              return (
                <li key={i} className='px-6 hover:text-cyan-600'>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
