import React, { useState } from 'react';
import { motion } from 'framer-motion';
import anggota1 from './../../assets/Divisi/Ristek/Anggota/Ridwan Cahya A.png';
import anggota2 from './../../assets/Divisi/Ristek/Anggota/Zara Zanneta.png';
import anggota3 from './../../assets/Divisi/Ristek/Anggota/Ridho Al Fath N.png';
import anggota4 from './../../assets/Divisi/Ristek/Anggota/Abyan Fidriyansyah.png';
import anggota5 from './../../assets/Divisi/Ristek/Anggota/Zhafran Agus.png';
import anggota6 from './../../assets/Divisi/Ristek/Anggota/Raihana Luthfia.png';
import anggota7 from './../../assets/Divisi/Ristek/Anggota/M Darrel Azmi T.png';
import anggota8 from './../../assets/Divisi/Ristek/Anggota/Nabil Hamzah A.png';
import anggota9 from './../../assets/Divisi/Ristek/Anggota/Berlin Napoleon.png';
import bgPatternT from './../../assets/Background/pattern-top.svg'
import bgPatternB from './../../assets/Background/pattern-bottom.svg'
import bgBPsm from './../../assets/Divisi/Ristek/Ristek Mobile Bg.svg'
import bgBPlg from './../../assets/Divisi/Ristek/Ristek Bg.svg'
import Accordion from '../../components/accordion';


function Ristek (){
  const proker = [
    {
        title: 'Riset Ilkomerz',
        description: 'Kegiatan riset yang dilakukan dengan mengedepankan prinsip-prinsip riset dan data yang faktual sehingga dapat memahami permasalahan serta kebutuhan dari mahasiswa Ilmu Komputer.'
    },
    {
        title: 'Website Himalkom',
        description: 'Mengelola dan mengembangkan website Himalkom.'
    },
    {
        title: 'Komnews',
        description: 'Publikasi berbagai berita terkini terkait Ilmu Komputer IPB dengan berbasis riset.'
    },
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

                    
        <div className="col-start-1 row-start-1 flex  h-[33rem] pt-[18rem]  md:pt-[3rem] md:text-left md:ml-[15rem] md:px-[5rem] lg:ml-[15rem] lg:px-[8rem] md:mt-[3rem] lg:mt-[7rem]  xl:ml-[28rem] xl:mt-[7rem] xl:px-[7rem]">
          <motion.div className="text-center lg:ml-[5vw]" >
            <h2 className="font-sports font-light text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black mb-3 md:mb-5 md:text-left">RISET DAN TEKNOLOGI</h2>
            <p className="font-monts font-normal text-sm text-center lg:text-lg leading-6 item-center md:text-justify px-3 md:px-0">Ristek merupakan badan yang bertugas untuk melaksanakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi mahasiswa untuk membangun Himalkom, serta melakukan pengembangan pada website Himalkom.</p>
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
        <div className=" relative z-10 grid grid-cols-2 md:grid-cols-3   gap-y-8 gap-x-8 px-8 xl:pb-10 ">
          
      {[anggota1, anggota2, anggota3, anggota4, anggota5, anggota6, anggota7, anggota8, anggota9].map((anggota, index) => (
    <motion.div 
      key={index} 
      whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }} 
      transition={{duration: 0.35}} 
      className={`flex flex-col items-center ${index === 0 ? 'col-span-2 md:col-span-3' : ''}`}
    >
      <img 
        src={anggota} 
        alt={`Anggota ${index + 1}`} 
        className="h-[8rem] md:h-[10rem] lg:h-[18rem] xl:h-[25rem] object-cover" 
      />
    </motion.div>
  ))}
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

export default Ristek;
