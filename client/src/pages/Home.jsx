import { motion } from 'framer-motion';

import header from "../assets/SYNAPSE.svg";
import logo from "../assets/fill-synapse.svg";

import saungdesain from "../assets/Logos/saungdesain.svg";
import logo_cp from "../assets/Logos/logo_cp.svg"
import logo_agribot from "../assets/Logos/logo_agribot.svg"
import logo_daming from "../assets/Logos/logo_daming.svg"
import logo_gary from "../assets/Logos/logo_gary.svg"
import logo_iwdc from "../assets/Logos/logo_iwdc.svg"
import logo_mad from "../assets/Logos/logo_mad.svg"
import logo_csi from "../assets/Logos/logo_csi.svg"

import cpsc from "../assets/card-proker/cpsc.svg";
import ittoday from "../assets/card-proker/ittoday.svg";


function Home() {
  return (
    <section className="flex flex-col justify-center items-center mt-2 m-0 p-0">
      {/* Banner Website */}
      <section className="flex justify-center items-center w-[105%] bg-hero-banner-phone bg-center bg-stretch bg-no-repeat md:bg-hero-banner-tablet lg:bg-hero-banner-desktop">
        <motion.div
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.35 }}
          className="flex flex-col justify-center items-center text-center max-w-[700px] max-h-[700px] my-12 md:h-[40vw]">
          <div className="min-w-[200px] flex flex-row items-center justify-center gap-0">
            <img
              src={logo}
              className="w-1/6 md:w-1/4 lg:w-[180px] xl:w-[250px]"></img>
            <div className="ml-2">
              <div className="flex flex-col items-start gap-1">
                <img
                  src={header}
                  className="h-[40px] m-0 md:h-[70px] lg:h-[100px] xl:h-[150px]"></img>
                <p className="hidden gap-1 text-[10px] md:text-sm md:flex lg:text-xl xl:text-2xl font-changa italic text-white text-stroke-2 text-stroke-color-black text-shadow-black">
                  <span>Synergy,</span>
                  <span>Networking,</span>
                  <span>Collaboration</span>
                </p>
              </div>
            </div>
          </div>
          <p className="text-[10px] pt-2 flex gap-1 font-changa italic md:text-sm md:hidden">
            <span>Synergy,</span>
            <span>Networking,</span>
            <span>Collaboration</span>
          </p>
          <p className="text-white text-stroke-1 text-stroke-color-black text-shadow-black text-[12px] md:text-stroke-2 md:text-xl md:mt-6 lg:text-2xl xl:text-3xl font-changa">
            Himpunan Mahasiswa Ilmu Komputer
          </p>
        </motion.div>
      </section>

      <section>
        {/* Ilkomunity */}
        <div className="bg-ilkomunity-box bg-cover bg-no-repeat bg-bottom h-fit items-center flex flex-col pt-5 w-screen ">
          <motion.div
            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.35 }}
            className='h-fit items-center flex flex-col pt-5 w-screen'
          >
            <h1 className="font-sports text-2xl md:text-3xl text-white text-stroke-2 text-stroke-color-black text-shadow-black">ILKOMUNITY</h1>
            <section className="grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 p-3 place-items-center w-full max-w-full md:max-w-full md:px-10 lg:px-4 xl:px-[80px]">
            <motion.div
                whileHover={{
                  scale: 1.05, // Slight scaling effect
                  boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 1)", // Solid black shadow offset
                  transition: { duration: 0.3 },
                }}
                className="bg-grid-ilkomunity bg-center bg-stretch bg-no-repeat flex flex-col items-center justify-center p-6 w-full 
                          md:h-[250px]"
              >
                <img
                  src={saungdesain}
                  alt="Saung Desain"
                  className="w-[60px] h-[60px] 
                            mob-m:w-[70px] mob-m:h-[70px] 
                            mob-l:w-[100px] mob-l:h-[100px]
                            md:w-full md:h-[150px] 
                            lg:h-[120px]"
                />
                <h4 className="text-xs mt-2 font-sports font-[1000] text-stroke-1 text-stroke-color-black text-shadow-black pt-2 text-[#F0E4D4] 
                              md:text-2xl mob-m:text-[1rem] mob-l:text-[1.2rem]">AGRIUX</h4>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05, // Slight scaling effect
                  boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 1)", // Solid black shadow offset
                  transition: { duration: 0.3 },
                }}
                className="bg-grid-ilkomunity bg-center bg-stretch bg-no-repeat flex flex-col items-center justify-center p-6 w-full 
                          md:h-[250px]"
              >
                <img
                  src={logo_csi}
                  alt="Saung Desain"
                  className="w-[60px] h-[60px] 
                            mob-m:w-[70px] mob-m:h-[70px] 
                            mob-l:w-[100px] mob-l:h-[100px]
                            md:w-full md:h-[150px] 
                            lg:h-[120px]"
                />
                <h4 className="text-xs mt-2 font-sports font-[1000] text-stroke-1 text-stroke-color-black text-shadow-black pt-2 text-[#F0E4D4] 
                              md:text-2xl mob-m:text-[1rem] mob-l:text-[1.2rem]">CSI</h4>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05, // Slight scaling effect
                  boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 1)", // Solid black shadow offset
                  transition: { duration: 0.3 },
                }}
                className="bg-grid-ilkomunity bg-center bg-stretch bg-no-repeat flex flex-col items-center justify-center p-6 w-full 
                          md:h-[250px]"
              >
                <img
                  src={logo_agribot}
                  alt="Saung Desain"
                  className="w-[60px] h-[60px] 
                            mob-m:w-[70px] mob-m:h-[70px] 
                            mob-l:w-[100px] mob-l:h-[100px]
                            md:w-full md:h-[150px] 
                            lg:h-[120px]"
                />
                <h4 className="text-xs mt-2 font-sports font-[1000] text-stroke-1 text-stroke-color-black text-shadow-black pt-2 text-[#F0E4D4] 
                              md:text-2xl mob-m:text-[1rem] mob-l:text-[1.2rem]">AGRIBOT</h4>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05, // Slight scaling effect
                  boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 1)", // Solid black shadow offset
                  transition: { duration: 0.3 },
                }}
                className="bg-grid-ilkomunity bg-center bg-stretch bg-no-repeat flex flex-col items-center justify-center p-6 w-full 
                          md:h-[250px]"
              >
                <img
                  src={logo_cp}
                  alt="Saung Desain"
                  className="w-[60px] h-[60px] 
                            mob-m:w-[70px] mob-m:h-[70px] 
                            mob-l:w-[100px] mob-l:h-[100px]
                            md:w-full md:h-[150px] 
                            lg:h-[120px]"
                />
                <h4 className="text-xs mt-2 font-sports font-[1000] text-stroke-1 text-stroke-color-black text-shadow-black pt-2 text-[#F0E4D4] 
                              md:text-2xl mob-m:text-[1rem] mob-l:text-[1.2rem]">CP</h4>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05, // Slight scaling effect
                  boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 1)", // Solid black shadow offset
                  transition: { duration: 0.3 },
                }}
                className="bg-grid-ilkomunity bg-center bg-stretch bg-no-repeat flex flex-col items-center justify-center p-6 w-full 
                          md:h-[250px]"
              >
                <img
                  src={logo_daming}
                  alt="Saung Desain"
                  className="w-[60px] h-[60px] 
                            mob-m:w-[70px] mob-m:h-[70px] 
                            mob-l:w-[100px] mob-l:h-[100px]
                            md:w-full md:h-[150px] 
                            lg:h-[120px]"
                />
                <h4 className="text-xs mt-2 font-sports font-[1000] text-stroke-1 text-stroke-color-black text-shadow-black pt-2 text-[#F0E4D4] 
                              md:text-2xl mob-m:text-[1rem] mob-l:text-[1.2rem]">DAMING</h4>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05, // Slight scaling effect
                  boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 1)", // Solid black shadow offset
                  transition: { duration: 0.3 },
                }}
                className="bg-grid-ilkomunity bg-center bg-stretch bg-no-repeat flex flex-col items-center justify-center p-6 w-full 
                          md:h-[250px]"
              >
                <img
                  src={logo_iwdc}
                  alt="Saung Desain"
                  className="w-[60px] h-[60px] 
                            mob-m:w-[70px] mob-m:h-[70px] 
                            mob-l:w-[100px] mob-l:h-[100px]
                            md:w-full md:h-[150px] 
                            lg:h-[120px]"
                />
                <h4 className="text-xs mt-2 font-sports font-[1000] text-stroke-1 text-stroke-color-black text-shadow-black pt-2 text-[#F0E4D4] 
                              md:text-2xl mob-m:text-[1rem] mob-l:text-[1.2rem]">IWDC</h4>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05, // Slight scaling effect
                  boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 1)", // Solid black shadow offset
                  transition: { duration: 0.3 },
                }}
                className="bg-grid-ilkomunity bg-center bg-stretch bg-no-repeat flex flex-col items-center justify-center p-6 w-full 
                          md:h-[250px]"
              >
                <img
                  src={logo_gary}
                  alt="Saung Desain"
                  className="w-[60px] h-[60px] 
                            mob-m:w-[70px] mob-m:h-[70px] 
                            mob-l:w-[100px] mob-l:h-[100px]
                            md:w-full md:h-[150px] 
                            lg:h-[120px]"
                />
                <h4 className="text-xs mt-2 font-sports font-[1000] text-stroke-1 text-stroke-color-black text-shadow-black pt-2 text-[#F0E4D4] 
                              md:text-2xl mob-m:text-[1rem] mob-l:text-[1.2rem]">GARY</h4>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05, // Slight scaling effect
                  boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 1)", // Solid black shadow offset
                  transition: { duration: 0.3 },
                }}
                className="bg-grid-ilkomunity bg-center bg-stretch bg-no-repeat flex flex-col items-center justify-center p-6 w-full 
                          md:h-[250px]"
              >
                <img
                  src={logo_mad}
                  alt="Saung Desain"
                  className="w-[60px] h-[60px] 
                            mob-m:w-[70px] mob-m:h-[70px] 
                            mob-l:w-[100px] mob-l:h-[100px]
                            md:w-full md:h-[150px] 
                            lg:h-[120px]"
                />
                <h4 className="text-xs mt-2 font-sports font-[1000] text-stroke-1 text-stroke-color-black text-shadow-black pt-2 text-[#F0E4D4] 
                              md:text-2xl mob-m:text-[1rem] mob-l:text-[1.2rem]">MAD</h4>
              </motion.div>
            </section>
          </motion.div>
        </div>

        {/* Megaproker */}
        <div className="bg-megaproker-box bg-cover bg-no-repeat bg-bottom h-full">
        <motion.div
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.35 }}
          className='items-center flex flex-col pt-5 w-screen'
        >
            <h1 className="font-sports text-2xl md:text-3xl text-white text-stroke-2 text-stroke-color-black text-shadow-black lg:mb-4">MEGAPROKER</h1>
            <div className='mx-3 md:mx-10 lg:m-0 lg:mx-4 xl:mx-[5rem]'>

              {/* ITOD */}
              <section className='bg-card-top-mobile bg-no-repeat bg-center bg-stretch w-fit flex flex-col items-center px-4 py-6 gap-y-5 min-h-[750px]
                                  md:bg-card-top-tablet md:flex-row md:items-start md:pt-10 md:min-h-[630px]
                                  lg:bg-card-top-desktop lg:m-0 lg:min-h-[400px] lg:px-[40px] lg:pt-[70px] lg:gap-x-5
                                  xl:min-h-[600px] xl:pt-[140px] xl:px-[110px]'>          
                <img
                    src={ittoday}
                    className="w-full items-center justify-center mt-5 max-w-[350px] 
                              lg:m-0 xl:max-w-[500px]"
                    alt="IT Today"
                />            
                <div className="flex flex-col items-center mb-[15rem] gap-y-2 lg:m-0">
                  <h2 className="font-sports w-full text-white text-left text-3xl text-stroke-2 text-stroke-color-black text-shadow-black
                                xl:text-[45px]">IT TODAY</h2>
                  <p className="font-monts text-justify text-sm xl:text-xl">
                    <span className="font-bold">IT Today{" "}</span>
                      merupakan serangkaian acara nasional yang bertemakan teknologi
                      informasi dalam dunia Agriculture. Kegiatan ini terdiri atas
                      HackToday (Capture the Flag), UXToday (UI/UX Design), Poster
                      Competition, Workshop. Festival, dan National Seminar mengenai
                      teknologi informasi terkini.
                  </p>
                </div>
              </section>

              {/* CPSC */}
              <section className='bg-card-bottom-mobile bg-no-repeat bg-center bg-stretch w-full flex flex-col items-center px-4 py-6 gap-y-5 min-h-[750px] mt-[-12rem]
                    md:bg-card-bottom-tablet md:flex-row-reverse md:min-h-[630px] md:mt-[-16rem] md:pt-[100px] md:gap-x-10 
                    lg:bg-card-bottom-desktop lg:m-0 lg:min-h-[400px] lg:px-[40px] lg:mt-[-3rem] lg:gap-x-5
                    xl:min-h-[600px] xl:pt-[140px] xl:px-[110px] xl:mt-[-5rem]'>
                <img
                  src={cpsc}
                  className="w-1/2 flex items-end justify-end mt-[11rem] max-w-[200px] md:mt-0 xl:max-w-[350px]"
                  alt="CPSC"
                />
                <div className="flex flex-col items-center gap-y-2 md:items-center md:justify-between">
                  <h2 className="font-sports w-full text-white text-left text-3xl text-stroke-2 text-stroke-color-black text-shadow-black
                                xl:text-[45px]">CPSC</h2>
                  <p className="font-monts text-justify text-sm xl:text-xl">
                    <span className="font-bold">
                      Computer Problem Solving Competition (CPSC){" "}
                    </span>
                    merupakan ajang kompetisi tahunan yang diadakan oleh Himpunan Mahasiswa Ilmu Komputer (Himalkom) IPB. 
                    Acara ini menjadi bagian dari rangkaian kegiatan Pesta Sains Nasional (PSN) yang diselenggarakan oleh 
                    Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) IPB, bertujuan untuk mengasah kemampuan peserta 
                    dalam memecahkan masalah di bidang ilmu komputer.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>

        {/* Komnews */}
        <div>
          <h1>Komnews</h1>
        </div>
      </section>
    </section>
  );
}

export default Home;
