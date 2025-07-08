import React from 'react';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#052123] text-[#fff4e0] py-8 flex flex-col items-center justify-center shadow-inner">
      <div className="flex items-center text-xl md:text-2xl font-[Prata] space-x-2">
        <FaCopyright className="text-[#fff4e0]" />
        <span>Afif Syam Fauzi | 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
