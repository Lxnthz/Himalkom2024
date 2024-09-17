import { useState } from 'react';
import { motion } from 'framer-motion';
import data from "../data/igallery_data.jsx";
import Card from '../components/Admin/IGalleryCard.jsx';

import vector from "../assets/IGalleryAssets/igallery-vector.svg";

export default function IGallery() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        category={item.category}
        desc={item.desc}
        created={item.created}
        img={item.img}
        link={item.link}
      />
    );
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllClick = () => {
    setSelectedCategory(null);
  };

  const filteredCards = selectedCategory
    ? cards.filter((item) => item.props.category === selectedCategory)
    : cards;

  const cardElements = filteredCards.map((card, index) => (
    <div key={index}>
      {card}
    </div>
  ));

  return (
    <section>
      {/* Hero */}
      <div className='bg-gallery-hero bg-stretch flex flex-col-reverse mt-3 py-12 lg:flex-row lg:justify-evenly lg:items-center'>
        <motion.div
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.35}}
          className='w-full flex flex-col items-center text-justify px-4 mt-10 gap-y-3 lg:w-[47vw]'
        >
          <h1 className='font-sports text-2xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black md:text-3xl lg:text-4xl'>I-GALLERY</h1>
          <p className='font-monts'>I-Gallery adalah platform yang berisi kumpulan projek-projek yang telah dibuat oleh mahasiswa ilmu komputer. 
          I-Gallery menampilkan projek dari setiap mata kuliah berprojek. Tujuan dari I-Gallery adalah untuk menunjukan 
          projek yang telah dibuat oleh mahasiswa ilmu komputer.</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.35}}
          className='flex justify-center'
        >
          <img src={vector} className='w-[70vw] md:w-[40vw] lg:max-w-[25vw]'></img>
        </motion.div>
      </div>

      {/* MAIN */}
      <div className='flex flex-col mt-6 items-center'>
        <motion.div
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.35}}
        >
          <div className='flex flex-col items-center gap-y-2'>
            <h1 className='text-2xl font-sports text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black'>DAFTAR MATKUL</h1>
            <div className='flex justify-center flex-wrap'>
            <motion.button
              whileHover={{ scale: [null, 1.09, 1.06] }}
              transition={{ duration: 0.4 }}
              className='flex border-2 border-black w-auto justify-center align-center py-[4px] px-[9px] bg-[#E49800] m-[5px] font-monts text-[13px] text-white font-[500] rounded '
              onClick={handleAllClick}
            >
              <span>Semua</span>
            </motion.button>
            <motion.button
            whileHover={{ scale: [null, 1.09, 1.06] }}
            transition={{ duration: 0.4 }}
            className='flex border-2 border-black w-auto justify-center align-center py-[4px] px-[9px] bg-[#E49800] m-[5px] font-monts text-[13px] text-white font-[500] rounded '
            onClick={() => handleFilterClick('Basis Data')}
            >
              <span>Basis Data</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: [null, 1.09, 1.06] }}
              transition={{ duration: 0.4 }}
              className='flex border-2 border-black w-auto justify-center align-center py-[4px] px-[9px] bg-[#E49800] m-[5px] font-monts text-[13px] text-white font-[500] rounded '
              onClick={() => handleFilterClick('Rekayasa Perangkat Lunak')}
            >
              <span>Rekayasa Perangkat Lunak</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: [null, 1.09, 1.06] }}
              transition={{ duration: 0.4 }}
              className='flex border-2 border-black w-auto justify-center align-center py-[4px] px-[9px] bg-[#E49800] m-[5px] font-monts text-[13px] text-white font-[500] rounded '
              onClick={() => handleFilterClick('Grafika Komputer')}
            >
              <span>Grafika Komputer</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: [null, 1.09, 1.06] }}
              transition={{ duration: 0.4 }}
              className='flex border-2 border-black w-auto justify-center align-center py-[4px] px-[9px] bg-[#E49800] m-[5px] font-monts text-[13px] text-white font-[500] rounded '
              onClick={() => handleFilterClick('Analisis Desain Sistem')}
            >
              <span>Analisis Desain Sistem</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: [null, 1.09, 1.06] }}
              transition={{ duration: 0.4 }}
              className='flex border-2 border-black w-auto justify-center align-center py-[4px] px-[9px] bg-[#E49800] m-[5px] font-monts text-[13px] text-white font-[500] rounded '
              onClick={() => handleFilterClick('Desain Pengalaman Pengguna')}
            >
              <span>Desain Pengalaman Pengguna</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: [null, 1.09, 1.06] }}
              transition={{ duration: 0.4 }}
              className='flex border-2 border-black w-auto justify-center align-center py-[4px] px-[9px] bg-[#E49800] m-[5px] font-monts text-[13px] text-white font-[500] rounded '
              onClick={() => handleFilterClick('Pengolahan Citra Digital')}
            >
              <span>Pengolahan Citra Digital</span>
            </motion.button>
            </div>
          </div>
        </motion.div>
        <div className='flex justify-center flex-wrap gap-[50px]'>
          {cardElements}
        </div>
      </div>
    </section>
  )
}