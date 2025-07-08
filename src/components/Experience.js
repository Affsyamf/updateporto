import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

// Import semua gambar secara otomatis dari folder assets
const imageContext = require.context('../assets', false, /\.(png|jpe?g)$/);
const images = imageContext.keys().reduce((acc, key) => {
  acc[key.replace('./', '')] = imageContext(key);
  return acc;
}, {});

const dataAccordion = [
  {
    job: 'Early Warning System | Brake Pad 2024-2025 (Hardware)',
    description:
      'This project showcases an IoT-powered early warning system designed to monitor brake pad degradation. It utilizes a custom wire sensor coupled with an ESP32 microcontroller to deliver real-time alerts to the driver, significantly enhancing vehicle safety and promoting proactive maintenance.',
    imageFiles: ['2.png', '4.png', '1.png'],
  },
  {
    job: 'Parking Management - 2023 (Software)',
    description:
      'Parking Management is a website used to monitor and log the entry and exit of vehicles in a basement parking area.',
    imageFiles: ['5.jpg', '6.jpg', '7.jpg'],
  },
  {
    job: 'Material Shop Database SQL - 2023 (Software)',
    description:
      'Developed a complete MySQL database from the ground up for a local building supply store in Bandung. The project scope included designing the schema and implementing a role-based access control system for both employees and customers.',
    imageFiles: ['12.jpg', '14.jpg', '13.jpg'],
  },
  {
    job: 'Line Follower Analog - 2023 (Hardware)',
    description:
      'This project showcases the design of an autonomous analog line follower robot built purely from fundamental electronic components. Without using any microcontroller, the robot navigates a track using a system comprised of a sensor array, comparator, and motor driver.',
    imageFiles: ['15.jpg', '17.jpg', '16.jpg'],
  },
  {
    job: 'Smart Home - 2022 (Software)',
    description:
      'Advanced IoT Smart Home: An Integrated Safety and Automation Platform.',
    imageFiles: ['8.jpg', '8.jpg', '8.jpg'],
  },
  {
    job: 'Rain Detector - 2022 (Hardware)',
    description:
      'DIY rain alarm system featuring a custom-made PCB sensor. When water droplets make contact with the conductive traces, the buzzer gives an audible alert.',
    imageFiles: ['9.jpg', '10.jpg', '11.jpg'],
  },
   {
    job: 'Shape Detector - 2022 (Software)',
    description:
      'This project is a practical application of computer vision, featuring a system capable of identifying and classifying geometric shapes from a live video stream. By leveraging the power of Python and the OpenCV library, this application can distinguish between various shapes (triangles, squares, circles, etc.) and provide immediate textual feedback, demonstrating a solid foundation in image processing techniques',
    imageFiles: ['18.jpg', '19.jpg', '20.jpg'],
  },
];

export const Experience = () => {
  const [accordion, setAccordion] = useState(-1);

  const toggleAccordion = (index) => {
    setAccordion(index === accordion ? -1 : index);
  };

  return (
    <div
      name='experience'
      className='w-full px-3 py-8 md:px-8 lg:px-16 text-[#052123]'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full flex flex-col'>
          <div className='text-left sm:text-center pb-8'>
            <p className='text-5xl sm:text-6xl font-semibold font-[Prata] inline border-b-4 border-[#052123]'>
              Project Experience
            </p>
          </div>
        </div>

        <div className='max-w-[1000px] w-full'>
          {dataAccordion.map((item, index) => (
            <div key={index} className='mb-6'>
              <button
                onClick={() => toggleAccordion(index)}
                type='button'
                className={`flex items-center justify-between w-full py-5 px-4 text-xl sm:text-2xl font-bold text-left border-b-4 border-[#052123] transition duration-300 ${accordion === index ? 'bg-white text-[#052123]' : 'text-[#052123]'}`}
              >
                <span>{item.job}</span>
                <IoIosArrowDown className={`w-6 h-6 transition-transform ${accordion === index ? 'rotate-180' : ''}`} />
              </button>

              <div className={`${accordion === index ? 'block' : 'hidden'} bg-white p-5 rounded-b-md`}>
                <p className='text-lg sm:text-xl mb-4 leading-relaxed'>{item.description}</p>
                <section className='overflow-hidden text-gray-700'>
                  <div className='container px-5 py-2 mx-auto lg:px-16'>
                    <div className='flex flex-wrap -m-1 md:-m-2'>
                      {item.imageFiles.map((file, idx) => (
                        <div key={idx} className='flex w-1/2 sm:w-1/3 p-1 md:p-2'>
                          <img
                            src={images[file]}
                            alt={file}
                            className='block object-cover object-center w-full h-full rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105'
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
