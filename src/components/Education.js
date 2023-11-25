import React from 'react';
import { FaUniversity } from 'react-icons/fa';
export const Education = () => {
  return (
    <div
      name='education'
      className='w-full px-3 py-8 md:p-[3%] text-[#fff4e0] bg-[#052123]'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* Title */}
        <div className='max-w-[1000px] w-full flex flex-col'>
          <div className='text-left sm:text-center pb-8'>
            <p className='text-4xl font-medium font-[Prata] inline border-b-2 border-[#fff4e0]'>
              Education
            </p>
          </div>
          <div></div>
        </div>
        {/* Content */}
        <div className='max-w-[1000px] w-full grid grid-row-2 gap-8 md:px-3'>
          <div className='sm:text-left  text-3xl sm:text-4xl font-semibold'>
            <p>Master degree of Environmental Engineering</p>
          </div>
          <div>
            {/* <p>
              Extra Description.
            </p> */}
          </div>
        </div>
        {/* Timeline */}
        <div className='max-w-[800px] w-full  md:px-3 flex flex-col justify-center px-8 my-5'>
          <ol className='relative border-l border-gray-200 '>
            <li className='mb-10 ml-6'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#005c62] rounded-full ring-8 ring-white '>
                <span className='w-4 h-4 text-[#fff4e0] '>
                  <FaUniversity />
                </span>
              </span>
              <h3 className='flex items-center mb-1 text-lg font-semibold text-white '>
                University of Western Macedonia{' '}
              </h3>
              <time className='block mb-2 text-sm font-normal leading-none text-white'>
                Oct 2015 - Mar 2021
              </time>
              <p className='mb-4 text-base font-normal text-white '>
                Master's degree, Environmental Engineering
                <br />
                Skills: Solar Energy
              </p>
            </li>
            <li className='mb-10 ml-6'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#005c62] rounded-full ring-8 ring-white '>
                <span className='w-4 h-4 text-[#fff4e0] '>
                  <FaUniversity />
                </span>
              </span>
              <h3 className='mb-1 text-lg font-semibold text-white'>
                University of Western Macedonia
              </h3>
              <time className='block mb-2 text-sm font-normal leading-none text-white'>
                Oct 2021 - Jan 2022
              </time>
              <p className='text-base font-normal text-white'>
                "Energy efficiency and sustainability in small and medium-sized
                enterprises"
              </p>
            </li>
            <li className='ml-6'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#005c62] rounded-full ring-8 ring-white '>
                <span className='w-4 h-4 text-[#fff4e0] '>
                  <FaUniversity />
                </span>
              </span>
              <h3 className='mb-1 text-lg font-semibold text-white'>
                The complete SOLAR ENERGY course
              </h3>
              <time className='block mb-2 text-sm font-normal leading-none text-white'>
                Udemy, Issued Jan 2022
              </time>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
