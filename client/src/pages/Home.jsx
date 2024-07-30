import header from '../assets/SYNAPSE.svg'
import logo from '../assets/fill-synapse.svg'
import saungdesain from '../assets/saungdesain.svg'
import cpsc from '../assets/card-proker/cpsc.svg'
import ittoday from '../assets/card-proker/ittoday.svg'

function Home() {
    return (
        <section className="flex flex-col justify-center items-center mt-2 m-0 p-0">
            {/* Banner Website */}
            <section className="flex justify-center items-center w-[105%] bg-hero-banner-phone bg-center bg-stretch bg-no-repeat md:bg-hero-banner-tablet lg:bg-hero-banner-desktop"> 
                <div className='flex flex-col justify-center items-center text-center max-w-[700px] max-h-[700px] my-12 md:h-[40vw]'>
                    <div className='min-w-[200px] flex flex-row items-center justify-center gap-0'>
                        <img src={logo} className='w-1/6 md:w-1/4 lg:w-[180px] xl:w-[250px]'></img>
                        <div className='ml-2'>
                            <div className='flex flex-col items-start gap-1'>
                                <img src={header} className='h-[40px] m-0 md:h-[70px] lg:h-[100px] xl:h-[150px]'></img>
                                <p className='hidden gap-1 text-[10px] md:text-sm md:flex lg:text-xl xl:text-2xl font-changa italic'>
                                    <span>Synergy,</span> 
                                    <span>Networking,</span> 
                                    <span>Collaboration</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className='text-[10px] pt-2 flex gap-1 font-changa italic md:text-sm md:hidden'>
                                    <span>Synergy,</span> 
                                    <span>Networking,</span> 
                                    <span>Collaboration</span>
                    </p>
                    <p className='text-[12px] md:text-xl md:mt-6 lg:text-2xl xl:text-3xl font-changa'>Himpunan Mahasiswa Ilmu Komputer</p>
                </div>
            </section>


            <section>
                {/* Ilkomunity */}
                <div className='bg-ilkomunity-box bg-cover bg-no-repeat bg-center h-full items-center flex flex-col pt-5 w-screen'> 
                    <h1 className='font-sports'>Ilkomunity</h1>
                    <section className='grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3 p-3'>
                        <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6">                           
                            <img src={saungdesain} alt="Saung Desain" className="w-[50px] h-[50px]" />
                            <h4 className="text-xs mt-2">Saung Desain</h4>
                        </div>      
                        <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6">                           
                            <img src={saungdesain} alt="Saung Desain" className="w-[50px] h-[50px]" />
                            <h4 className="text-xs mt-2">Saung Desain</h4>
                        </div>  
                        <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6">                           
                            <img src={saungdesain} alt="Saung Desain" className="w-[50px] h-[50px]" />
                            <h4 className="text-xs mt-2">Saung Desain</h4>
                        </div>  
                        <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6">                           
                            <img src={saungdesain} alt="Saung Desain" className="w-[50px] h-[50px]" />
                            <h4 className="text-xs mt-2">Saung Desain</h4>
                        </div>
                        <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6">                           
                            <img src={saungdesain} alt="Saung Desain" className="w-[50px] h-[50px]" />
                            <h4 className="text-xs mt-2">Saung Desain</h4>
                        </div>      
                        <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6">                           
                            <img src={saungdesain} alt="Saung Desain" className="w-[50px] h-[50px]" />
                            <h4 className="text-xs mt-2">Saung Desain</h4>
                        </div>  
                        <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6">                           
                            <img src={saungdesain} alt="Saung Desain" className="w-[50px] h-[50px]" />
                            <h4 className="text-xs mt-2">Saung Desain</h4>
                        </div>  
                        <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6">                           
                            <img src={saungdesain} alt="Saung Desain" className="w-[50px] h-[50px]" />
                            <h4 className="text-xs mt-2">Saung Desain</h4>
                        </div>                              
                    </section>
                </div>

                {/* Megaproker */}
                <div className='bg-megaproker-box bg-cover bg-no-repeat bg-center h-full items-center flex flex-col pt-5 w-screen'>
                    <h1>Megaproker</h1>
                    <div className='bg-card-top-mobile bg-center bg-stretch bg-no-repeat flex flex-col px-7 mx-5 min-w-fit w-auto min-h-fit h-auto'>
                        <div className='flex-grow flex flex-col justify-start'>
                            <div className='flex justify-center mt-10'>
                                <img src={ittoday} className='w-[250px]'></img>
                            </div>
                            <div className='mt-5 flex justify-center flex-col items-center'>
                                <h2>IT TODAY</h2>
                                <p className='text-justify text-xs pb-[200px] max-w-[240px]'>
                                    <span className='font-bold'>IT Today</span> merupakan serangkaian acara nasional yang
                                    bertemakan teknologi informasi dalam dunia
                                    Agriculture. Kegiatan ini terdiri atas HackToday (Capture
                                    the Flag), UXToday (UI/UX Design), Poster Competition,
                                    Workshop. Festival, dan National Seminar mengenai
                                    teknologi informasi terkini.
                                </p>
                            </div>
                        </div>
                        </div>
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