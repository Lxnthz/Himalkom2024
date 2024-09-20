import React, { useState } from 'react';
import { motion } from 'framer-motion';
import anggota1 from './../../assets/Divisi/Eksternal/Anggota/Synapse_Ghani_Kadiv.png';
import anggota2 from './../../assets/Divisi/Eksternal/Anggota/Synapse_Ferdi.png';
import anggota3 from './../../assets/Divisi/Eksternal/Anggota/Synapse_Aisha.png';
import anggota4 from './../../assets/Divisi/Eksternal/Anggota/Synapse_Sri.png';
import anggota5 from './../../assets/Divisi/Eksternal/Anggota/Synapse_Aleeka.png';
import anggota6 from './../../assets/Divisi/Eksternal/Anggota/Synapse_Faya.png';
import anggota7 from './../../assets/Divisi/Eksternal/Anggota/Synapse_Agal.png';
import anggota8 from './../../assets/Divisi/Eksternal/Anggota/Synapse_Nurul.png';
import bgPatternT from './../../assets/Background/pattern-top.svg'
import bgPatternB from './../../assets/Background/pattern-bottom.svg'
import bgBPsm from './../../assets/Divisi/Eksternal/Eksternal_background_phone.svg'
import bgBPlg from './../../assets/Divisi/Eksternal/Eksternal_background.svg'
import Accordion from '../../components/accordion';


function Eksternal (){
  const proker = [
    {title: 'I-Talks', description: 'Acara talkshow seru bersama ILkomerz 55 yang membahas tentang persiapan memulai karir di dunia Ilmu Komputer.'},
    {title: 'I-Training', description: 'Tips & trick lolos tes seleksi kerja di perusahaan bersama Ilkomerz 55.'},
    {title: 'Webinar Series', description: 'Membahas dunia karir, tips n trick, serta teknologi yang bekerja sama dengan perusahaan-perusahaan terkait.'},
    {title: 'Expo', description: 'Expo terdiri dari career expo, scholarship expo, achievement expo, prestasi perusahaan, prestasi scholarship, performance (tarian dan nyanyian), talkshow yang diisi oleh alumni dan content creator/influencer, serta terdapat konsultasi karir.'},
    {title: 'I-Visit', description: 'Program kerja berupa kunjungan, baik dari Ilkom ke industri maupun dari industri ke Ilkom.'},
    {title: 'I-Collab', description: 'Program kerja berupa studi banding ke/dari organisasi lain, baik di dalam kampus maupun luar kampus.'},
    {title: 'LPK Tepi Sawah', description: 'Program kerja berupa pengabdian Ilkomerz mengajar anak-anak di LPK Tepi Sawah. IG : @sahabattepisawah'},
    {title: 'Partnership & Event Collaborative', description: 'Menerima dan mengelola segala macam bentuk penawaran kerja sama.'},
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

                    
        <div className="col-start-1 row-start-1 flex  h-[33rem] pt-[18rem]  md:pt-[3rem] md:text-left md:ml-[15rem] md:px-[5rem] lg:ml-[15rem] lg:px-[8rem] md:mt-[4rem] lg:mt-[7rem]  xl:ml-[28rem] xl:mt-[9rem] xl:px-[7rem]">
          <motion.div className="text-center lg:ml-[5vw]" >
            <h2 className="font-sports font-light text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black mb-3 md:mb-5 md:text-left">Eksternal</h2>
            <p className="font-monts font-normal text-sm text-center lg:text-lg leading-6 item-center md:text-justify px-3 md:px-0">Eksternal merupakan badan yang bertugas  untuk menjalin hubungan baik dengan pihak kampus meliputi alumni, perguruan tinggi lain,  ORMAWA kampus, serta  lingkungan luar kampus.</p>
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
          
      {[anggota1, anggota2, anggota3, anggota4, anggota5, anggota6, anggota7, anggota8].map((anggota, index) => (
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

export default Eksternal;
