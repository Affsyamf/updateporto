import React from 'react';

export const About = () => {
  return (
    <div name='about' className='w-full px-3 py-8 md:p-[3%] text-[#052123] '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full flex flex-col'>
          <div className=' text-left sm:text-center pb-8'>
            <p className='text-4xl font-medium font-[Prata] inline border-b-2 border-[#052123]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right text-3xl sm:text-4xl font-semibold'>
            <p>Hi. I'm Akis nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              🌍🔧I am an environmental engineer and my favourite about my
              profession is the energy production, savings or energy streams.
            </p>
            <br />
            <p>
              ♻️Therfore recycle always was my passion so i like a lot the
              recycling systems. In addition i have learn about anti-pollutant
              technologies.
            </p>
            <br />
            <p>
              🎓I have study at University of Western Macedonia in Kozani,Greece
              and my thesis was about a cogeneration of electricity and heat
              system fueled by natural gas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
