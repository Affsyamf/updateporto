import React from 'react';
import { FaUniversity } from 'react-icons/fa';

export const Education = () => {
  return (
    <div
      name='education'
      className='w-full px-4 py-12 text-[#fff4e0] bg-[#052123]'
    >
      <div className='flex flex-col justify-center items-center w-full h-full max-w-screen-xl mx-auto'>

        {/* Title */}
        <div className='w-full flex flex-col'>
          <div className='text-left sm:text-center pb-8'>
            <p className='text-4xl sm:text-5xl font-medium font-[Prata] inline border-b-2 border-[#fff4e0]'>
              Education
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className='max-w-[800px] w-full px-5 md:px-3 my-5'>
          <ol className='relative'>

            {/* Item 1 */}
            <li className='relative pl-10 pb-14'>
              {/* ICON */}
              <div className='absolute left-0 top-1.5'>
                <div className='w-6 h-6 bg-[#005c62] rounded-full ring-8 ring-white flex items-center justify-center z-10'>
                  <FaUniversity className='text-[#fff4e0] w-4 h-4' />
                </div>
              </div>

              {/* Garis */}
              <div className='absolute left-[13px] top-[32px] w-px h-[calc(100%-32px)] bg-gray-200 z-0'></div>

              {/* Konten */}
              <div className="ml-6">
                <h3 className='mb-1 text-xl sm:text-2xl font-semibold text-white'>
                  Telkom University
                </h3>
                <time className='block mb-2 text-sm sm:text-base font-normal leading-none text-white'>
                  Sep 2022 - Sep 2025
                </time>
                <p className='text-base sm:text-lg font-normal text-white'>
                  Diploma in Computer Engineering (IPK: 3.94 / 4.00)
                  <br />
                  Skills: Web Development & Embedded System Engineer
                </p>
              </div>
            </li>

            {/* Item 2 */}
            <li className='relative pl-10'>
              <div className='absolute left-0 top-1.5'>
                <div className='w-6 h-6 bg-[#005c62] rounded-full ring-8 ring-white flex items-center justify-center z-10'>
                  <FaUniversity className='text-[#fff4e0] w-4 h-4' />
                </div>
              </div>

              <div className="ml-6">
                <h3 className='mb-1 text-xl sm:text-2xl font-semibold text-white'>
                  SMK Lugina Rancaekek
                </h3>
                <time className='block mb-2 text-sm sm:text-base font-normal leading-none text-white'>
                  Jun 2019 - Jun 2022
                </time>
                <p className='text-base sm:text-lg font-normal text-white'>
                  Major: Software Engineering (Grade: A)
                </p>
              </div>
            </li>

          </ol>
        </div>
      </div>
    </div>
  );
};
