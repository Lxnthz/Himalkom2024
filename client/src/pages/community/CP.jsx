import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageSlider from "./../../components/ImageSlider";
import bgKomunlg from './../../assets/Ilkommunity/CP/bg-cp.svg'
import bgKomunsm from './../../assets/Ilkommunity/CP/bg-mobile-cp.svg'
import bgPatternT from './../../assets/Background/pattern-top.svg'
import bgPatternB from './../../assets/Background/pattern-bottom.svg'
import dokum1 from './../../assets/Ilkommunity/CP/CP-Dokum1.png'
import dokum2 from './../../assets/Ilkommunity/CP/CP-Dokum2.png'
import dokum3 from './../../assets/Ilkommunity/CP/CP-Dokum3.png'
import dokum4 from './../../assets/Ilkommunity/CP/CP-Dokum4.png'
import dokum5 from './../../assets/Ilkommunity/CP/CP-Dokum5.png'
import dokum6 from './../../assets/Ilkommunity/CP/CP-Dokum6.png'


function CP() {
    const [showDeskripsi, setShowDeskripsi] = useState(true);

    const fadeInVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const handleDeskripsiClick = () => {
        setShowDeskripsi(true);
    };

    const handleTujuanClick = () => {
        setShowDeskripsi(false);
    };

    const slides = [
        { url: dokum1 },
        { url: dokum2 },
        { url: dokum3 },
        { url: dokum4 },
        { url: dokum5 },
        { url: dokum6 }
    ];

    return (
        <div>
            <section>
                <div className="absolut sm:h-[28rem] lg:h-[32rem] grid grid-cols-1 grid-rows-1 border-t-4 border-b-4 border-black mt-2">
                   
                    <div
                        className="col-start-1 row-start-1 bg-cover bg-center "
                        style={{
                            backgroundImage: `url(${bgKomunsm})`,
                        }}
                    ></div>

                  
                    <div
                        className="col-start-1 row-start-1 hidden sm:block bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${bgKomunlg})`,
                        }}
                    ></div>

               
                    <div className="col-start-1 row-start-1 flex items-center justify-center ">
                        <motion.div
                            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col items-center text-center pt-64 md:pt-8 md:pr-[22rem] lg:pr-[30rem] lg:mx-20 xl:pr-[34rem] xl:pb-8 xl:mx-60  xl:mt-12 2xl:pr-[34rem] 2xl:pb-8 2xl:mx-60 2xl:mt-16"
                        >
                            <h2 className="font-sports font-normal text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black pt-2">
                                CP
                            </h2>
                            <p className="font-monts font-normal text-base md:text-sm lg:text-base xl:text-base 2xl:text-base leading-6 px-6 md:px-9 lg:px-1 xl:px-0 2xl:px-6 pt-6 pb-11">
                            Competitive Programming IPB adalah komunitas yang bergerak pada perlombaan pemrograman kompetitif yang merupakan kompetisi menyelesaikan suatu masalah secara algoritmik
                                <br />
                                <br />
                                Setiap Senin pukul 18:45 di Localhost (FMIPA lantai 4)
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section>
                <div  className="bg-no-repeat bg-right-top bg-contain pt-20"
                    style={{
                        backgroundImage: `url(${bgPatternT}), url(${bgPatternB})`,
                        backgroundPosition: '10% 0, 0 100% ', 
                        backgroundRepeat: 'no-repeat, no-repeat', 
                        backgroundSize: 'contain, contain', 
                    }}
                >
                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.35 }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex justify-center items-center gap-10 md:gap-20">
                            <h2 id='deskripsi'
                                onClick={handleDeskripsiClick}
                                className={`font-changa text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-center cursor-pointer text-[#E49800] ${showDeskripsi ? 'font-sports font-normal text-md md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black border-b-4 border-black pb-1' : ''}`}
                            >
                                Deskripsi
                            </h2>
                            <h2 id='tujuan'
                                onClick={handleTujuanClick}
                                className={`font-changa text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-center cursor-pointer text-[#E49800] ${!showDeskripsi ? 'font-sports font-normal text-md md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black border-b-4 border-black pb-1' : ''}`}
                            >
                                Tujuan
                            </h2>
                        </div>
                        {
                            showDeskripsi
                                ? <div className="flex flex-col justify-center bg-[#E49800] border-4 border-black shadow-black-7 my-8 p-4 md:p-10 mx-4 md:mx-8 max-w-screen-lg w-11/12 shadow-[7px_7px_0_#000000]">
                                    <p className="font-montserrat font-semibold text-sm md:text-lg leading-5 md:leading-6 text-justify text-white">
                                    Competitive Programming adalah sebuah kegiatan penyelesaian masalah (problem solving) tertentu menggunakan program komputer dengan mengedepankan algoritma yang paling optimal. Competitive Programming membutuhkan kemampuan logika, matematika dan algoritma yang baik untuk menyelesaikan masalah-masalah yang diberikan.
                                        <br />
                                    </p>
                                </div>
                                : <div className="flex flex-col justify-center bg-[#E49800] border-4 border-black shadow-black-7 my-8 p-4 md:p-10 mx-4 md:mx-8 max-w-screen-lg w-11/12 shadow-[7px_7px_0_#000000]">
                                    <h3 className="font-montserrat font-semibold text-sm md:text-lg leading-5 md:leading-6 text-justify text-white">
                                    Tujuan Competitive Programming IPB adalah mendukung anggota-anggotanya untuk meraih juara pada perlombaan-perlombaan pemrograman kompetitif.
                                    </h3>
                                </div>
                        }

                        <motion.div
                            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col justify-center items-center w-full py-10 md:py-10 lg:py-10 xl:py-4 2xl:py-10"
                        >
                            <div className="flex justify-center items-center w-44 md:w-44 lg:w-44 xl:w-44 2xl:w-44 h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12 bg-[#E49800] border border-black shadow-black-4 translate-y-6 shadow-[7px_7px_0_#000000]">
                                <h2 className="font-monts font-semibold text-2xl md:text-2xl lg:text-2xl xl:text-2xl 3xl:text-2xl leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center text-white ">
                                    PRESTASI
                                </h2>
                            </div>
                            <div className="flex flex-col justify-center items-center border-2 border-black max-w-screen-lg w-11/12 bg-white shadow-black-3 py-14 md:py-14 lg:py-14 xl:py-14 2xl:py-14 px-6 md:px-14 lg:px-14 xl:px-14 2xl:px-14 shadow-[7px_7px_0_#000000]">
                                <p className="font-monts font-normal text-md md:text-xl leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center text-black ">
                                Finalis JOINTS
                                </p>
                                <p className="font-monts font-normal text-md md:text-xl leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center text-black mt-4">
                                CP Finalis Arkavidia
                                </p>
                                <p className="font-monts font-normal text-md md:text-xl leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center text-black mt-4">
                                CP Peserta Regional ICPC
                                </p>
                                <p className="font-monts font-normal text-md md:text-xl leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center text-black mt-4">
                                CP Finalis Gemastik Divisi I
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <ImageSlider slides={slides} />
 
                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.35 }}
                        className="flex flex-col justify-center items-center py-8 pb-32 md:pb-40 lg:pb-44 xl:pb-44 2xl:pb-44 "
                    >
                        <div className="flex justify-center items-center w-56 md:w-56 lg:w-56 xl:w-56 2xl:w-56 h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12 bg-[#E49800] border border-gray-900 shadow-black-4 translate-y-6 shadow-[7px_7px_0_#000000]">
                            <h2 className="font-monts font-semibold text-2xl md:text-xl lg:text-xl xl:text-xl 3xl:text-xl leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center text-white ">
                                NARAHUBUNG
                            </h2>
                        </div>
                        <div className="flex flex-col justify-center items-center border-2 border-black max-w-screen-lg w-11/12 bg-white shadow-black-3 h-44 md:h-44 shadow-[7px_7px_0_#000000]">
                            <h3 className="font-monts font-normal text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl leading-6 md:leading-8 lg:leading-8 xl:leading-8  2xl:leading-8 text-center text-black mt-14 pb-9">
                                Ariyudo Pertama
                                <br />
                                Whatsapp: 087736466423
                            </h3>
                            </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default CP;

