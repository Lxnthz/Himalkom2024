
import { motion } from 'framer-motion';

import bgKomunlg from '../assets/IGallery_Phone.svg'
import bgKomunsm from '../assets/IGallery_bg.svg'
import saungdesain from '../assets/saungdesain.svg'
import Card_Desktop from '../assets/card-proker/card-Riset-Desktop.svg'

function Syntax() {
    return (
        <div className="p-4">
        
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
                            className="flex flex-col items-center text-center pt-64 md:pt-8 md:pr-[22rem] lg:pr-[30rem] lg:mx-20 xl:pr-[34rem] xl:pb-8 xl:mx-60  xl:mt-16 2xl:pr-[34rem] 2xl:pb-8 2xl:mx-60 2xl:mt-16"
                        >
                            <h2 className="font-sports font-normal text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black pt-2">
                                AGRIUX
                            </h2>
                            <p className="font-monts font-normal text-base md:text-sm lg:text-base xl:text-base 2xl:text-base leading-6 px-6 md:px-9 lg:px-1 xl:px-1 2xl:px-6 pt-6 pb-11">
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
            {/* Ilkomunity */}
            <div className='bg-ilkomunity-box bg-cover bg-no-repeat bg-bottom h-fit items-center flex flex-col pt-5 w-screen'> 
                <section className='grid grid-cols-2 lg:grid-cols-3 md:gap-6 gap-3 p-3 place-items-center w-full max-w-[320px] md:max-w-full'>
                    <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full 
                                    md:h-[250px]">                           
                        <img src={Card_Desktop } alt="Saung Desain" className="w-[60px] h-[60px] md:w-full md:h-[140px] lg:h-[100px]" />
                        <h4 className="text-xs mt-2 md:text-2xl">Saung Desain</h4>
                    </div>      
                    <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full
                                    md:h-[250px]">                           
                        <img src={saungdesain} alt="Saung Desain" className="w-[60px] h-[60px] md:w-full md:h-[140px] lg:h-[100px]" />
                        <h4 className="text-xs mt-2 md:text-2xl">Saung Desain</h4>
                    </div>  
                    <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full
                                    md:h-[250px]">                           
                        <img src={saungdesain} alt="Saung Desain" className="w-[60px] h-[60px] md:w-full md:h-[140px] lg:h-[100px]" />
                        <h4 className="text-xs mt-2 md:text-2xl">Saung Desain</h4>
                    </div>  
                    <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full
                                    md:h-[250px]">                           
                        <img src={saungdesain} alt="Saung Desain" className="w-[60px] h-[60px] md:w-full md:h-[140px] lg:h-[100px]" />
                        <h4 className="text-xs mt-2 md:text-2xl">Saung Desain</h4>
                    </div>
                    <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full
                                    md:h-[250px]">                           
                        <img src={saungdesain} alt="Saung Desain" className="w-[60px] h-[60px] md:w-full md:h-[140px] lg:h-[100px]" />
                        <h4 className="text-xs mt-2 md:text-2xl">Saung Desain</h4>
                    </div>      
                    <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full
                                    md:h-[250px]">                           
                        <img src={saungdesain} alt="Saung Desain" className="w-[60px] h-[60px] md:w-full md:h-[140px] lg:h-[100px]" />
                        <h4 className="text-xs mt-2 md:text-2xl">Saung Desain</h4>
                    </div>  
                    <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full
                                    md:h-[250px]">                           
                        <img src={saungdesain} alt="Saung Desain" className="w-[60px] h-[60px] md:w-full md:h-[140px] lg:h-[100px]" />
                        <h4 className="text-xs mt-2 md:text-2xl">Saung Desain</h4>
                    </div>  
                    <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full
                                    md:h-[250px]">                           
                        <img src={saungdesain} alt="Saung Desain" className="w-[60px] h-[60px] md:w-full md:h-[140px] lg:h-[100px]" />
                        <h4 className="text-xs mt-2 md:text-2xl">Saung Desain</h4>
                    </div>                              
                </section>
            </div>
        </section>
    </div>
    );
}

export default Syntax;
