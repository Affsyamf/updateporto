import React from 'react';

const certificates = [
  {
    id: 1,
    title: 'Sertifikat Publish Jurnal',
    description: 'Publish Jurnal di CSIT Inovasi  Kampas Rem.',
    pdfUrl: 'sertif paper.pdf', // Link ke PDF
  },
  {
    id: 1,
    title: 'Sertifikat Penghargaan Menjadi Asisten Dosen',
    description: 'Menjadi Asisten Dosen Pada Mata Kuliah Sistem Jaringan Komputer.',
    pdfUrl: 'SJK.pdf', // Link ke PDF
  },
  {
    id: 1,
    title: 'Sertifikat Penghargaan Menjadi Asisten Dosen',
    description: 'Menjadi Asisten Dosen Pada Mata Kuliah Alpro Lanjut.',
    pdfUrl: 'alpro.pdf', // Link ke PDF
  },
  {
    id: 1,
    title: 'Sertifikat Penghargaan Menjadi Asisten Dosen',
    description: 'Menjadi Asisten Dosen Pada Mata Kuliah Sistem Operasi.',
    pdfUrl: 'SISOP.pdf', // Link ke PDF
  },
  {
    id: 1,
    title: 'Sertifikat Penghargaan Menjadi Asisten Dosen',
    description: 'Menjadi Asisten Dosen Pada Mata Kuliah Sistem Digital.',
    pdfUrl: 'SISDIG.pdf', // Link ke PDF
  },
  {
    id: 1,
    title: 'Sertifikat Anggota Himpunan Mahasiswa Teknik Komputer',
    description: 'Menjadi Anggota HIMA Teknik Komputer Department Internal.',
    pdfUrl: 'HIMA.pdf', // Link ke PDF
  },
  {
    id: 1,
    title: 'Sertifikat Anggota PKKMB Jurusan Teknik Komputer',
    description: 'Menjadi Anggota Ospek Teknik Komputer Divisi Komdis.',
    pdfUrl: 'PKKMB.pdf', // Link ke PDF
  },
  {
    id: 1,
    title: 'Sertifikat Mengikuti Pelatihan CCNAv7',
    description: 'Pelatihan Cisco tentang Networking, Security, dan Automation.',
    pdfUrl: 'CCNAv7.pdf', // Link ke PDF
  },
  {
    id: 2,
    title: 'Sertifikat Bootcamp Machine Learning',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus Machine Learning untuk pemula.',
    pdfUrl: 'ml.pdf', // Gambar lokal/public
  },
  {
    id: 2,
    title: 'Sertifikat Pelatihan Machine Learning Google Cloud',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus Machine Learning untuk pemula.',
    pdfUrl: 'ml2.pdf', // Gambar lokal/public
  },
  {
    id: 2,
    title: 'Sertifikat Pelatihan Machine Learning TensorFlow',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus Machine Learning untuk pemula.',
    pdfUrl: 'ml3.pdf', // Gambar lokal/public
  },
  {
    id: 2,
    title: 'Sertifikat Pelatihan Flutter Image Picker',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus Flutter untuk pemula.',
    pdfUrl: 'f1.pdf', // Gambar lokal/public
  },
  {
    id: 2,
    title: 'Sertifikat Pelatihan Flutter Go Router',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus Flutter untuk pemula.',
    pdfUrl: 'f2.pdf', // Gambar lokal/public
  },
  {
    id: 2,
    title: 'Sertifikat Pelatihan Flutter Navigasi Navigator 2.0',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus Flutter untuk pemula.',
    pdfUrl: 'f3.pdf', // Gambar lokal/public
  },
  {
    id: 2,
    title: 'Sertifikat Pelatihan Mobile Engineering',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus Mobile Engineering untuk pemula.',
    pdfUrl: 'me.pdf', // Gambar lokal/public
  },
  {
    id: 2,
    title: 'Sertifikat Pelatihan Data Science',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus React untuk pemula.',
    pdfUrl: 'ds.pdf', // Gambar lokal/public
  },
  {
    id: 2,
    title: 'Sertifikat Bootcampe Data Science',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus React untuk pemula.',
    pdfUrl: 'ds1.pdf', // Gambar lokal/public
  },
  {
    id: 2,
    title: 'Sertifikat Bootcampe Deep Learning',
    description: 'Diberikan oleh Dicoding setelah menyelesaikan kursus React untuk pemula.',
    pdfUrl: 'dl.pdf', // Gambar lokal/public
  },
  {
    id: 3,
    title: 'Sertifikat Pelatihan Virtual Asisstant',
    description: 'Sertifikat dari Menyelesaikan Course DIgital Skola 2024.',
    imageUrl: 'va.png',
  },
  {
    id: 3,
    title: 'Sertifikat Pelatihan DevOps Engineer',
    description: 'Sertifikat dari Menyelesaikan Course DIgital Skola 2024.',
    imageUrl: 'devops.png',
  },
  {
    id: 3,
    title: 'Sertifikat Pelatihan Quality Engineer (QA)',
    description: 'Sertifikat dari Menyelesaikan Course DIgital Skola 2024.',
    imageUrl: 'qa.png',
  },
  {
    id: 3,
    title: 'Sertifikat Pelatihan Technical Writer',
    description: 'Sertifikat dari Menyelesaikan Course DIgital Skola 2024.',
    imageUrl: 'tw.png',
  },
  {
    id: 3,
    title: 'Sertifikat Pelatihan AI Basics Overview of AI',
    description: 'Sertifikat dari Menyelesaikan Course Huawei 2024.',
    imageUrl: 'ai.png',
  },
  {
    id: 3,
    title: 'Sertifikat Pelatihan Overview of IoT Tehcnologies',
    description: 'Sertifikat dari Menyelesaikan Course Huawei 2024.',
    imageUrl: 'iot.png',
  },
  
  // Tambahkan lebih banyak sertifikat di sini jika perlu
];

const Certificate = () => {
  return (
    <div className="w-full px-4 py-12 lg:mx-auto xl:ml-70 bg-[#062325]" id='certificate'>
      <div className='w-full flex flex-col'>
          <div className='text-left sm:text-center pb-8'>
            <p className='text-4xl sm:text-5xl text-[#fff4e0] font-medium font-[Prata] inline border-b-2 border-[#fff4e0]'>
              Certificate
            </p>
          </div>
        </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 dark:bg-slate-800"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold text-emerald-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {cert.description}
              </p>

              {cert.imageUrl && (
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="rounded-md mb-4 w-full h-48 object-cover"
                />
              )}

              {cert.pdfUrl && (
                <iframe
                  src={cert.pdfUrl}
                  className="w-full h-48 rounded-md mb-4"
                  title={cert.title}
                />
              )}

              {(cert.imageUrl || cert.pdfUrl) && (
                <a
                  href={cert.imageUrl || cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-white bg-emerald-900 px-4 py-2 rounded-full text-sm hover:bg-emerald-700 transition"
                >
                  Lihat Sertifikat
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
