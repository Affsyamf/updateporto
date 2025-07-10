import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClickMenuIcon = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fff4e0] top-0 z-50'>
      {/* Judul */}
      <div className='hidden md:block'>
        <a className='font-bold text-base uppercase text-[#052123]' href='/'>
          FULL-STACK DEVELOPER
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link offset={-80} to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link offset={-80} to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link offset={-80} to='education' smooth={true} duration={500}>Education</Link>
        </li>
        <li>
          <Link offset={-80} to='experience' smooth={true} duration={500}>Experience</Link>
        </li>
        <li>
          <Link offset={-80} to='certificate' smooth={true} duration={500}>Certificate</Link>
        </li>
      </ul>

      {/* Mobile: Social icons kiri & Hamburger kanan */}
      {/* Mobile layout: judul kiri, icon sosial tengah, hamburger kanan */}
      <div className="md:hidden flex justify-between items-center w-full px-4">
        {/* Judul kiri (tetap) */}
        <div className="text-[#052123] font-bold text-sm uppercase">
          FULL-STACK DEVELOPER
        </div>

        {/* Social icons tengah */}
        <div className="flex gap-3 text-[#052123]">
          <a href='https://www.linkedin.com/in/afif-syam-fauzi-365b84270/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={20} />
          </a>
          <a href='https://www.instagram.com/affsyamf/' target='_blank' rel='noopener noreferrer'>
            <AiFillInstagram size={20} />
          </a>
          <a href='https://github.com/Affsyamf' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={20} />
          </a>
          <a href='https://wa.me/6289517644630' target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Hamburger kanan */}
        <div onClick={handleClickMenuIcon} className='text-[#052123] z-10'>
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>
      </div>


      {/* Mobile Menu */}
      <ul className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#fff4e0] flex flex-col justify-center items-center text-[#114e53]'
      }>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClickMenuIcon} to='home' smooth={true} duration={500} offset={-80}>Home</Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClickMenuIcon} to='about' smooth={true} duration={500} offset={-80}>About</Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClickMenuIcon} to='education' smooth={true} duration={500} offset={-80}>Education</Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClickMenuIcon} to='experience' smooth={true} duration={500} offset={-80}>Experience</Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClickMenuIcon} to='certificate' smooth={true} duration={500} offset={-80}>Certificate</Link>
        </li>
      </ul>

      {/* Social Icons Desktop */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[100px] h-[50px] flex justify-between items-center ml-[-50px] hover:ml-[-10px] duration-300 bg-[#052123] opacity-[0.85] rounded-t-md'>
            <a href='https://www.linkedin.com/in/afif-syam-fauzi-365b84270/' className='flex justify-between items-center w-full text-[#fff4e0]'>
              LI. <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[100px] h-[50px] flex justify-between items-center ml-[-50px] hover:ml-[-10px] duration-300 bg-[#052123] opacity-[0.85]'>
            <a href='https://www.instagram.com/affsyamf/' className='flex justify-between items-center w-full text-[#fff4e0]'>
              IG. <AiFillInstagram size={30} />
            </a>
          </li>
          <li className='w-[100px] h-[50px] flex justify-between items-center ml-[-50px] hover:ml-[-10px] duration-300 bg-[#052123] opacity-[0.85]'>
            <a href='https://github.com/Affsyamf' className='flex justify-between items-center w-full text-[#fff4e0]'>
              GIT. <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[100px] h-[50px] flex justify-between items-center ml-[-50px] hover:ml-[-10px] duration-300 bg-[#052123] opacity-[0.85] rounded-b-md'>
            <a href='https://wa.me/6289517644630' className='flex justify-between items-center w-full text-[#fff4e0]' target='_blank' rel='noopener noreferrer'>
              WA. <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;