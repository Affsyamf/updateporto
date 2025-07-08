import React from 'react';

export const About = () => {
  return (
    <div name='about' className='w-full px-4 py-12 text-[#052123]'>
      <div className='flex flex-col justify-center items-center w-full h-full max-w-screen-xl mx-auto'>
        <div className='w-full flex flex-col'>

          {/* Title */}
          <div className='text-left sm:text-center pb-8'>
            <p className='text-4xl sm:text-5xl font-medium font-[Prata] inline border-b-2 border-[#052123]'>
              About
            </p>
          </div>

          {/* Paragraph */}
          <div className='text-justify leading-relaxed text-lg sm:text-xl'>
            <p>
              Saya adalah seorang <strong>Web Developer</strong> dan <strong>Teknisi Perangkat Keras</strong> dengan lebih dari 2 tahun pengalaman 
              dalam pengembangan <strong>Full-Stack Application Website</strong> dan <strong>Embedded System</strong>. 
              Memiliki latar belakang teknis yang kuat dalam merancang solusi yang <em>inovatif</em> dan <em>efisien</em>, 
              saya selalu antusias terhadap teknologi terbaru, mampu bekerja kolaboratif dalam tim, 
              dan berfokus pada pengalaman pengguna serta keberhasilan proyek.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};