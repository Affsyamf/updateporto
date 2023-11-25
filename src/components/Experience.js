import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import ModalImage from 'react-modal-image';
import Power from '../assets/power.jpg';

const dataAccordion = [
  {
    job: 'Environmental Engineer at SUNWIND',
    description: `⚡ My first Photovoltaic Park ⚡ 🔸After a long ride the construction is over. 
    The photovoltaic park is ready to produce Energy.`,
    images: [
      {
        imageName: 'img-1',
        imagePath: `${Power}`,
      },
      {
        imageName: 'img-2',
        imagePath: `${Power}`,
      },
      {
        imageName: 'img-3',
        imagePath: `${Power}`,
      },
    ],
  },
  {
    job: 'Manufacture of antiseptic - 2022',
    description:
      ' "Utilization of essential oil, lavender and oregano flower water in the context of smart specialization in the agri-food sector."',
  },
];

export const Exprerience = () => {
  const [accordion, setAccordion] = useState(-1);

  const toggleAccordion = (index) => {
    if (index === accordion) {
      setAccordion(-1);
    } else {
      setAccordion(index);
    }
  };
  return (
    <div
      name='experience'
      className='w-full px-3 py-8 md:p-[3%] text-[#052123]'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* Title */}
        <div className='max-w-[1000px] w-full flex flex-col'>
          <div className='text-left sm:text-center pb-8'>
            <p className='text-4xl font-medium font-[Prata] inline border-b-2 border-[#052123]'>
              Experience
            </p>
          </div>
        </div>
        {/* Accordion */}
        <div className='max-w-[1000px] w-full md:px-3'>
          {dataAccordion.map((item, index) => {
            return (
              <div key={index}>
                <div
                  onClick={() => {
                    toggleAccordion(index);
                  }}
                >
                  <button
                    type='button'
                    className={
                      accordion === index
                        ? 'flex items-center justify-between w-full py-5 text-xl font-bold text-left border-b-[3px] border-[#052123]  bg-white text-[#052123] '
                        : 'flex items-center justify-between w-full py-5 text-xl font-bold  text-left text-[#052123] border-b-[3px] border-[#052123] '
                    }
                  >
                    {/* Accordion Title */}
                    <span>{item.job}</span>
                    <span
                      className={
                        accordion === index
                          ? 'w-6 h-6 rotate-180 shrink-0'
                          : 'w-6 h-6 shrink-0'
                      }
                    >
                      <IoIosArrowDown />
                    </span>
                  </button>
                </div>
                {/* Accordion Content */}
                <div className={accordion === index ? 'block' : 'hidden'}>
                  <div className='py-5 font-[#052123] border-b border-gray-200 '>
                    <p className='mb-2'>{item.description}</p>
                  </div>
                  {/* Accordion Gallery */}
                  {item.images && (
                    <section className='overflow-hidden text-gray-700 '>
                      <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
                        <div className='flex flex-wrap -m-1 md:-m-2'>
                          {item.images.map((img, index) => {
                            return (
                              <div
                                key={index}
                                className='flex flex-wrap w-1/2 sm:w-1/3'
                              >
                                <div className='w-full p-1 md:p-2'>
                                  <ModalImage
                                    hideDownload={true}
                                    hideZoom={true}
                                    small={`${img.imagePath}`}
                                    large={`${img.imagePath}`}
                                    alt={img.imageName}
                                    className='block object-cover object-center w-full h-full rounded-lg'
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
