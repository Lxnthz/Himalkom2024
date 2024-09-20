import React, { useState } from 'react';
import { motion } from 'framer-motion';
import anggota1 from './../../assets/Divisi/Entrepreneur/Anggota/Tiffany Anastasia J.png';
import anggota2 from './../../assets/Divisi/Entrepreneur/Anggota/Muhammad Hafidz R.png';
import anggota3 from './../../assets/Divisi/Entrepreneur/Anggota/Sazkia Ananda Z.png';
import anggota4 from './../../assets/Divisi/Entrepreneur/Anggota/Fadhil Mumtaz.png';
import anggota5 from './../../assets/Divisi/Entrepreneur/Anggota/Rusydi Balfas.png';
import anggota6 from './../../assets/Divisi/Entrepreneur/Anggota/Qonita Khairunisa.png';
import anggota7 from './../../assets/Divisi/Entrepreneur/Anggota/Muhammad Bagir S.png';
import anggota8 from './../../assets/Divisi/Entrepreneur/Anggota/Nabiel Muaafi R.png';
import bgPatternT from './../../assets/Background/pattern-top.svg'
import bgPatternB from './../../assets/Background/pattern-bottom.svg'
import bgBPsm from './../../assets/Divisi/Entrepreneur/entre-background-phone.svg'
import bgBPlg from './../../assets/Divisi/Entrepreneur/entre-background.svg'
import Accordion from '../../components/accordion';


function Entrepreneur (){
  const proker = [
    {title: 'Komstore', description: 'Membentuk suatu toko online di marketplace yang menjual produk makanan, merchandise Ilkom, dan barang second hand milik Ilkomerz.'},
    {title: 'Kompreneurs IPB', description: 'Program kerja yang berfokus kepada edukasi entrepreneurship. Selain edukasi, program kerja ini memiliki misi untuk membangkitkan jiwa kewirausahaan masyarakat ilkomerz.'},
    {title: 'BY-I', description: 'Bisnis marketing dari divisi entrepreneur himalkom dimana kita melakukan promosi/marketing dari sebuah produk yang ada di online shop dan mendapatkan keuntungan berupa komisi.'},
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

                    
        <div className="col-start-1 row-start-1 flex  h-[33rem] pt-[18rem]  md:pt-[3rem] md:m-0 md:text-left md:px-[22rem] lg:px-[30rem] md:mt-[5rem] lg:mt-[8rem]  xl:ml-[32rem] xl:mt-[9rem] xl:px-[7rem]">
          <motion.div className="text-center xl:ml-[5vw]" >
            <h2 className="font-sports font-light text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black mb-3 md:mb-5 md:text-left">ENTREPRENEUR</h2>
            <p className="font-monts font-normal text-sm text-center lg:text-lg leading-6 item-center md:text-justify px-3 md:px-0">Divisi Entrepreneur merupakan divisi yang mengelola dana usaha guna meningkatkan pemasukan untuk menunjang kegiatan-kegiatan yang diadakan oleh HIMALKOM dari segi keuangan.</p>
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

export default Entrepreneur;
