import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClickMenuIcon = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fff4e0] top-0 z-50'>
      <div>
        <a className=' font-bold text-base uppercase text-[#052123] ' href='/'>
          Akis Tsolaklidis
        </a>
      </div>
      <ul className='hidden md:flex  '>
        <li>
          <Link offset={-80} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {' '}
          <Link offset={-80} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link offset={-80} to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link offset={-80} to='experience' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link offset={-80} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClickMenuIcon} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : ' absolute top-0 left-0 w-full h-screen bg-[#fff4e0] flex flex-col justify-center items-center text-[#114e53] '
        }
      >
        <li className='py-4 text-2xl'>
          {' '}
          <Link
            onClick={handleClickMenuIcon}
            to='home'
            smooth={true}
            duration={500}
            offset={-80}
          >
            Home
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          {' '}
          <Link
            onClick={handleClickMenuIcon}
            to='about'
            smooth={true}
            duration={500}
            offset={-80}
          >
            About
          </Link>
        </li>

        <li className='py-4 text-2xl'>
          {' '}
          <Link
            onClick={handleClickMenuIcon}
            to='education'
            smooth={true}
            duration={500}
            offset={-80}
          >
            Education
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          {' '}
          <Link
            onClick={handleClickMenuIcon}
            to='experience'
            smooth={true}
            duration={500}
            offset={-80}
          >
            Experience
          </Link>
        </li>

        <li className='py-4 text-2xl'>
          <Link
            onClick={handleClickMenuIcon}
            to='contact'
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className=' hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul>
          <li className='w-[100px] h-[50px] flex justify-between items-center ml-[-50px] hover:ml-[-10px] duration-300 bg-[#052123] opacity-[0.85] rounded-t-md '>
            <a
              href='https://www.linkedin.com/'
              className='flex justify-between  items-center w-full text-[#fff4e0] '
            >
              LI. <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[100px] h-[50px] flex justify-between items-center ml-[-50px] hover:ml-[-10px] duration-300 bg-[#052123] opacity-[0.85] rounded-b-md '>
            <a
              href='https://gmail.com'
              className='flex justify-between  items-center w-full text-[#fff4e0]'
            >
              EM. <HiOutlineMail size={30} />{' '}
            </a>
          </li>
          {/*  <li className='w-[100px] h-[50px] flex justify-between items-center ml-[-50px] hover:ml-[-10px] duration-300'>
            <a
              href='/'
              className='flex justify-between  items-center w-full text-[#fff4e0]'
            >
              RE. <BsFillPersonLinesFill size={30} />{' '}
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
