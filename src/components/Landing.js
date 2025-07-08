import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Profile from '../assets/afif.png';
import Backgorund from '../assets/15.jpg';

const Landing = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${Backgorund}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className="w-full bg-fixed bg-center"
      style={backgroundImageStyle}
    >
      <div
        name="home"
        className="w-full py-8 md:py-[9%] px-4 md:px-[5%] h-auto bg-[#052123]/90"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* LEFT TEXT */}
          <div className="w-full md:w-3/5 text-[#fff4e0] text-center md:text-left mt-6 md:mt-0">
            <h1 className="font-[Prata] text-4xl sm:text-5xl md:text-6xl leading-tight">
              Hello <br />
              I'm Afif <br />
              Syam Fauzi
            </h1>
            <p className="mt-4 md:w-[90%] text-sm sm:text-base leading-relaxed text-justify">
            I'm a Web Application Developer, and what I love most about my profession is 
            building dynamic, user-friendly interfaces and creating systems that solve real-world problems efficiently. 
            I'm especially passionate about integrating technology with meaningful user experiences.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-[#ccc] text-justify">
            Key: #Website Developer, #React.jS, #Node.jS, #Internet of Things, 
            #PHP, #SQL
            </p>
            <div className="mt-6">
              <a href="CV_Juli.pdf"
               target="_blank" 
               rel="noopener noreferrer">
                <button className="group border-2 border-[#fff4e0] px-4 py-2 flex items-center hover:bg-[#fff4e0] hover:text-[#052123] transition">
                  DOWNLOAD CV
                  <span className="group-hover:rotate-90 duration-300 ml-2">
                    <HiArrowNarrowRight />
                  </span>
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-2/5 flex justify-center">
            <img
              src={Profile}
              alt="Afif Foto"
              className="rounded-lg w-2/3 sm:w-1/2 md:w-3/4 lg:w-2/3 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
