import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Agribot() {
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

    return (
        <div>
            <section>
                <div id="Agribot-header-container" className="bg-cover bg-center bg-no-repeat flex items-center h-80 md:h-160 mt-2 justify-center border-t-4 border-b-4 border-black" style={{ backgroundImage: "url('../../../Assets/Ilkommunity/Agribot/bg-agribot.svg')" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-64">
                        <motion.div
                            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col items-center p-0 gap-6 w-11/12 md:w-94 h-auto md:h-52"
                        >
                            <h2 className="font-sports-world font-normal text-4xl md:text-6xl leading-10 md:leading-16 text-center text-black-100 shadow-black-5">
                                AGRIBOT
                            </h2>
                            <p className="font-montserrat font-normal text-base md:text-sm lg:text-base xl:text-base 2xl:text-sm leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center">
                                AgriUX IPB adalah komunitas yang bergerak pada bidang UI/UX design
                                <br />
                                <br />
                                Setiap Rabu pukul 19:00 di RKU 2.01 (FMIPA lantai 2)
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section>
                <div id="Agribot-main-container" className="bg-[url('../../../Assets/Background/pattern-top.svg'),url('../../../Assets/Background/pattern-bottom.svg')] bg-contain bg-no-repeat bg-right-top pt-20">
                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.35 }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex justify-center items-center gap-10 md:gap-20">
                            <h2 id='Agribot-deskripsi'
                                onClick={handleDeskripsiClick}
                                className={`font-changa-one text-xl md:text-3xl text-center cursor-pointer ${showDeskripsi ? 'font-sports-world text-2xl md:text-4xl text-[#E49800] shadow-black-5 border-b-4 border-black pb-1' : ''}`}
                            >
                                Deskripsi
                            </h2>
                            <h2 id='Agribot-tujuan'
                                onClick={handleTujuanClick}
                                className={`font-changa-one text-xl md:text-3xl text-center cursor-pointer ${!showDeskripsi ? 'font-sports-world text-2xl md:text-4xl text-[#E49800] shadow-black-5 border-b-4 border-black pb-1' : ''}`}
                            >
                                Tujuan
                            </h2>
                        </div>
                        {
                            showDeskripsi
                                ? <div className="flex items-center justify-center bg-[#E49800] border-4 border-black shadow-black-7 my-8 p-4 md:p-10 mx-auto w-11/12 max-w-screen-lg">
                                    <p className="font-montserrat font-semibold text-sm md:text-lg leading-5 md:leading-6 text-justify text-white">
                                        AgriUX merupakan komunitas yang bertujuan untuk mewadahi minat mahasiswa Ilmu Komputer dalam bidang User Interface dan User Experience pada suatu aplikasi atau web, serta minat dalam bidang desain dengan menggunakan tools desain yang beragam.
                                        <br />
                                        <br />
                                        Product Design memiliki 2 cabang, yaitu UI/UX dan Creative Design. UI/UX lebih fokus kepada problem dan penyelesaiannya serta penerapan tampilan aplikasi atau interface dengan cara melakukan wireframing, lalu pada Creative Design fokus pada pembelajar segala macam jenis desain dengan menggunakan aplikasi Adobe Illustrator, Adobe Photoshop dan lain lain.
                                    </p>
                                </div>
                                : <div className="flex flex-col justify-center bg-[#E49800] border-4 border-black shadow-black-7 my-8 p-4 md:p-10 mx-4 md:mx-8 max-w-screen-lg w-11/12">
                                    <h3 className="font-montserrat font-semibold text-sm md:text-lg leading-5 md:leading-6 text-justify text-white">
                                        Mewadahi Mahasiswa IPB khususnya departemen Ilmu Komputer dalam menyalurkan minatnya di bidang UI/UX Design
                                    </h3>
                                </div>
                        }

                        <motion.div
                            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col justify-center items-center w-full py-10 md:py-10 lg:py-10 xl:py-10 2xl:py-10"
                        >
                            <div className="flex justify-center items-center w-44 md:w-44 lg:w-44 xl:w-44 2xl:w-44 h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12 bg-[#E49800] border border-gray-900 shadow-black-4 translate-y-6">
                                <h2 className="font-montserrat font-semibold text-2xl md:text-2xl lg:text-2xl xl:text-2xl 3xl:text-2xl leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center text-white">
                                    PRESTASI
                                </h2>
                            </div>
                            <div className="flex flex-col justify-center items-center border-2 border-black max-w-screen-lg w-11/12 bg-white shadow-black-3 py-6 md:py-11 px-6 md:px-11">
                                <li className="font-montserrat font-normal text-base md:text-2xl leading-6 md:leading-7 text-center text-black">
                                    Medali Perak Gemastik IX Cabang Desain Pengalaman Pengguna 2016
                                </li>
                                <li className="font-montserrat font-normal text-base md:text-2xl leading-6 md:leading-7 text-center text-black">
                                    Juara 2 Samsung Ideaction 2016
                                </li>
                                <li className="font-montserrat font-normal text-base md:text-2xl leading-6 md:leading-7 text-center text-black">
                                    Juara 2 Bidang UI/UX ITFEST USU 2017
                                </li>
                                <li className="font-montserrat font-normal text-base md:text-2xl leading-6 md:leading-7 text-center text-black">
                                    Juara 2 UnityFest UNY cabang UX Design Competition
                                </li>
                                <li className="font-montserrat font-normal text-base md:text-2xl leading-6 md:leading-7 text-center text-black">
                                    Medali Emas Gemastik XIII Cabang Desain Pengalaman Pengguna 2020
                                </li>
                                <li className="font-montserrat font-normal text-base md:text-2xl leading-6 md:leading-7 text-center text-black">
                                    Juara 2 International Prototype Design Competition - Proto A Thon
                                </li>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.35 }}
                        className="flex flex-col justify-center items-center py-10 md:py-10 lg:py-10 xl:py-10 2xl:py-10 xl:mb-20"
                    >
                        <div className="flex justify-center items-center w-56 md:w-56 lg:w-56 xl:w-56 2xl:w-56 h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12 bg-[#E49800] border border-gray-900 shadow-black-4 translate-y-6">
                            <h2 className="font-montserrat font-semibold text-2xl md:text-2xl lg:text-2xl xl:text-2xl 3xl:text-2xl leading-6 md:leading-6 lg:leading-6 xl:leading-6 2xl:leading-6 text-center text-white">
                                NARAHUBUNG
                            </h2>
                        </div>
                        <div className="flex flex-col justify-center items-center border-2 border-black max-w-screen-lg w-11/12 bg-white shadow-black-3 h-36 md:h-44">
                            <h3 className="font-montserrat font-normal text-base md:text-2xl lg:text-2xl leading-6 md:leading-8 lg:leading-8 xl:leading-8  2xl:leading-8 text-center text-black">
                                Muhammad Raihan Zhafran Halawa
                                <br />
                                Whatsapp: 082260302171
                                <br />
                                IG: @agriux
                            </h3>
                            </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Agribot;

