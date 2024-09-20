import React, { useState } from 'react';
import { motion } from 'framer-motion';
import anggota1 from './../../assets/Divisi/BPH/Anggota/Synapse_Adzik.png';
import anggota2 from './../../assets/Divisi/BPH/Anggota/Synapse_Zahran.png';
import anggota3 from './../../assets/Divisi/BPH/Anggota/Synapse_Khansa.png';
import anggota4 from './../../assets/Divisi/BPH/Anggota/Synapse_Halida.png';
import anggota5 from './../../assets/Divisi/BPH/Anggota/Synapse_Cindy.png';
import anggota6 from './../../assets/Divisi/BPH/Anggota/Synapse_Viby.png';
import bgPatternT from './../../assets/Background/pattern-top.svg'
import bgPatternB from './../../assets/Background/pattern-bottom.svg'
import bgBPsm from './../../assets/Divisi/BPH/bph_background-phone.svg'
import bgBPlg from './../../assets/Divisi/BPH/bph_background.svg'
import Accordion from '../../components/accordion';


function BPH (){
  const proker = [
    {title: 'IT Today', description: 'Salah satu megaproker yang diadakan oleh Himpunan Mahasiswa Ilmu Komputer (HIMALKOM) IPB dan departemen Ilmu Komputer IPB. Diselenggarakan pertama kali pada tahun 2003. Menjadi acara tahunan yang sudah berlangsung sebanyak 19 kali. Tiap tahunnya, IT Today berusaha membawakan tema yang berbeda sesuai dengan kondisi dan kebutuhan pada dunia informasi serta teknologi terbaru.'},
    {title: 'CPSC IPB', description: 'Kompetisi yang diselenggarakan oleh BEM fmipa IPB sebagai bentuk dari rangkaian acara Pesta Sains Nasional kompetisi ini menggunakan pendekatan berpikir komputasional untuk memecahkan masalah sederhana bagi siswa SMA/sederajat se-Indonesia.'},
    {title: 'Ilkomerz Night', description: 'Ilkomerz Night merupakan program kerja HIMALKOM IPB sebagai bentuk apresiasi kepada mahasiswa ilmu komputer sekaligus farewell party untuk Ilkomerz 56 dan pengurus HIMALKOM IPB kabinet yang bertugas serta dihadiri oleh dosen Ilmu Komputer dan seluruh Ilkomerz dari semua angkatan.'},
]

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' }},
  };

  return (
    <div>

      {/* Profil Divisi */}
      <section>
      <div className="absolut sm:h-[28rem] lg:h-[37rem] grid grid-cols-1 grid-rows-1 border-t-4 border-b-4 border-black mt-2 ">          
                    <div
                        className="col-start-1 row-start-1 bg-cover bg-center "
                        style={{
                            backgroundImage: `url(${bgBPsm})`,
                        }}
                    ></div>

                  
                    <div
                        className="col-start-1 row-start-1 hidden sm:block bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${bgBPlg})`,
                        }}
                    ></div>

                    
        <div className="col-start-1 row-start-1 flex  h-[35rem] pt-[18rem]  md:pt-0 md:text-left md:ml-[15rem] md:px-[5rem] lg:ml-[15rem] lg:px-[8rem] md:mt-[4rem] lg:mt-[6rem]  xl:ml-[28rem] xl:mt-[8rem] xl:px-[7rem]">
          <motion.div className="text-center lg:ml-[5vw]" >
            <h2 className="font-sports font-light text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black mb-2 md:mb-5 md:text-left">BADAN PENGURUS HARIAN</h2>
            <p className="font-monts font-normal text-sm text-center lg:text-lg leading-6 item-center md:text-justify px-4 md:px-0">Badan Pengurus Harian (BPH), merupakan salah satu badan yang melakukan fungsi kontrol, koordinasi, pengembangan dan peningkatan sistem manajemen administrasi dan keuangan serta komunikasi dalam membangun hubungan internal dan eksternal Himalkom.</p>
          </motion.div>
        </div>
        </div>
      </section>
     

      {/* Staff Divisi */}
      <section>
      <div className='relative'>
      <div  className="absolute inset-0 bg-no-repeat bg-right-top bg-contain z-0 "                      //Background Pattern 
                    style={{
                        backgroundImage: `url(${bgPatternT}), url(${bgPatternB})`,
                        backgroundPosition: '10% 0, 0 100% ', 
                        backgroundRepeat: 'no-repeat, no-repeat', 
                        backgroundSize: 'contain, contain',
                        
                    }}
                ></div>
        <div className="text-center py-12">
          
          <h2 className="font-sports font-normal text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black mt-10 px-20 xl:px-28 pb-8 border-b-8 border-black inline-block">STAFF</h2>
        </div>

       
        {/* grid anggota */}
        <div className="flex justify-center items-center">
  <div className="relative z-10 grid grid-cols-2 gap-y-8 gap-x-8 md:gap-x-28 xl:gap-x-44 w-fit mx-auto">
    {[anggota1, anggota2, anggota3, anggota4, anggota5, anggota6].map((anggota, index) => (
      <motion.div 
        key={index} 
        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }} 
        transition={{duration: 0.35}}
      >
        <img 
          src={anggota} 
          alt={`Anggota ${index + 1}`} 
          className="h-[8rem] md:h-[10rem] lg:h-[20rem] xl:h-[25rem] object-cover" 
        />
      </motion.div>
    ))}
  </div>
</div>




        {/* Program Kerja */}
        <motion.div whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }} transition={{duration: 0.35}} className="text-center pt-28">
          <h2 className="font-sports font-normal text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black pt-5 md:px-8 pb-8 border-b-8 border-black inline-block mb-10">PROGRAM KERJA</h2>
          <Accordion proker_divisi={proker} />
        </motion.div>
        </div>
        
      </section>
      
 
    </div>
  );
}

export default BPH;
