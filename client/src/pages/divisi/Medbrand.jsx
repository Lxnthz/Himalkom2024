import React, { useState } from 'react';
import { motion } from 'framer-motion';
import anggota1 from './../../assets/Divisi/Medbrand/Anggota/M Eljalalludin Rummi.png';
import anggota2 from './../../assets/Divisi/Medbrand/Anggota/Ahmad Qaulan S.png';
import anggota3 from './../../assets/Divisi/Medbrand/Anggota/Qurrotul Aini.png';
import anggota4 from './../../assets/Divisi/Medbrand/Anggota/Harits Helmi N.png';
import anggota5 from './../../assets/Divisi/Medbrand/Anggota/Dicky Anugrah.png';
import anggota6 from './../../assets/Divisi/Medbrand/Anggota/Wisnu Al Hussaeni.png';
import anggota7 from './../../assets/Divisi/Medbrand/Anggota/M Raihan Zhafran H.png';
import anggota8 from './../../assets/Divisi/Medbrand/Anggota/Hamdan Arif D.png';
import anggota9 from './../../assets/Divisi/Medbrand/Anggota/Maysa Fazila L.png';
import bgPatternT from './../../assets/Background/pattern-top.svg'
import bgPatternB from './../../assets/Background/pattern-bottom.svg'
import bgBPsm from './../../assets/Divisi/Medbrand/medbrand-background-phone.svg'
import bgBPlg from './../../assets/Divisi/Medbrand/medbrand-background.svg'
import Accordion from '../../components/accordion';


function Medbrand (){
  const proker = [
    {title: 'Upgrading', description: 'Mengadakan kegiatan workshop online tentang design, branding dan video editing untuk meningkatkan skill individu mengenai fundamental desain, video editing, dan branding'},
    {title: 'Center of Publication (COP)', description: 'Menerima request desain dari berbagai divisi Himalkom untuk dikerjakan sesuai prosedur yang ada.'},
    {title: 'Syntax', description: 'Membuat majalah tahunan yang berisi informasi seputar Himalkom IPB.'},
    {title: 'Launching Kabinet', description: 'Publikasi perkenalan kabinet, divisi, dan anggota divisi berupa feeds instagram.'},
    {title: 'Ramaikan!', description: 'Kegiatan berupa kuis berhadiah, info giveaway, dan kabar mingguan melalui instagram stories Himalkom IPB.'},
    {title: 'Skotteride', description: 'Publikasi berupa maskot, filter, dan guide pada media instagram.'},
    {title: 'Recap Proker', description: 'Recap kegiatan setiap divisi dalam rentang waktu 3-4 bulan. Setelah recap, akan ada post proker apa saja yang akan datang dalam kurun waktu 3-4 bulan ke depan.'},
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

                    
        <div className="col-start-1 row-start-1 flex  h-[33rem] pt-[18rem]  md:pt-[0rem] md:text-left md:px-[22rem] lg:px-[30rem] md:mt-[5rem] lg:mt-[8rem]  xl:ml-[32rem] xl:mt-[11rem] xl:px-[7rem]">
          <motion.div className="text-center" >
            <h2 className="font-sports font-light text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black mb-2 md:mb-5 md:text-left">MEDIA DAN BRANDING</h2>
            <p className="font-monts font-normal text-sm text-center lg:text-lg leading-6 item-center md:text-justify px-1 md:px-0">Mebrand merupakan badan yang bertugas untuk membuat, mengelola, dan mengoptimalkan media informasi Himalkom sebagai pusat informasi, mendokumentasikan kegiatan yang diselenggarakan oleh Himalkom, dan menjalin kerja sama dengan media partner untuk meningkatkan branding Himalkom.</p>
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

export default Medbrand;
