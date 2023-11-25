import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Profile from '../assets/profile.jpg';
import Power from '../assets/power.jpg';

const Landing = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${Power}")`,
    backgroundSize: 'cover',
  };

  return (
    <div
      className=' w-full  flex items-center bg-fixed bg-center'
      style={backgroundImageStyle}
    >
      <div
        name='home'
        className=' w-full py-8 md:py-[9%] md:px-[5%] h-auto bg-[#052123] bg-opacity-[0.90] '
      >
        {/*  */}
        <div className='flex flex-col justify-center items-center w-full h-full md:flex-row '>
          <div className=' flex flex-col md:justify-center w-full sm:w-3/4 lg:w-2/4 px-3 md:px-7 mb-5  text-[#fff4e0] '>
            <h1 className='font-[Prata] text-4xl  md:text-6xl line-height: 2rem '>
              Hello <br />
              I'm Akis
              <br /> Tsoraklidis
            </h1>
            <p className='md:w-5/6 text-justify py-4 leading-6 '>
              I'm Environmental Engineer and my favourite about my profession is
              the energy production, saving or energy steam.
            </p>
            <p>
              Talks about #solarpv, #solarpower, #solarenergy, #solarpanels, and
              #solarsystems
            </p>
            <div>
              <button className='group border-2 border-[#fff4e0] px-4 py-2 my-2 flex items-center hover:bg-[#fff4e0] hover:text-[#052123]'>
                DOWNLOAD CV
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </div>
          </div>
          <div className='flex flex-col justify-center h-full md:w-1/4'>
            <img
              src={Profile}
              alt='Profile'
              className='rounded mx-auto my-2 w-1/2 sm:w-1/3 md:w-2/3  '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
