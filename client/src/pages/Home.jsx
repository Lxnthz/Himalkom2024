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
                <div className='bg-ilkomunity-box bg-cover bg-no-repeat bg-bottom h-fit items-center flex flex-col pt-5 w-screen'> 
                    <h1 className='font-sports text-2xl md:text-3xl'>Ilkomunity</h1>
                    <section className='grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 p-3 place-items-center w-full max-w-[320px] md:max-w-full'>
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
                        <div className="bg-grid-ilkomunity bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full
                                        md:h-[250px]">                           
                            <img src={saungdesain} alt="Saung Desain" className="w-[60px] h-[60px] md:w-full md:h-[140px] lg:h-[100px]" />
                            <h4 className="text-xs mt-2 md:text-2xl">Saung Desain</h4>
                        </div>                              
                    </section>
                </div>

                {/* Megaproker */}
                <div className='bg-megaproker-box bg-cover bg-no-repeat bg-bottom h-[1200px] md:h-[1100px] items-center flex flex-col pt-5 w-screen'>
                    <h1>Megaproker</h1>
                    {/* ITod */}
                    <div className='relative flex flex-col px-7 w-[280px] mx-5 min-w-[10rem] min-h-[672px] h-fit bg-no-repeat bg-center bg-cover bg-card-top-mobile
                                    md:max-h-[50vh] md:h-[660px] md:min-w-[43rem] md:bg-card-top-tablet md:w-[688px] md:m-0 md:p-0'>
                        <div className='flex-grow flex flex-col justify-start relative md:flex-row md:justify-around md:items-start mt-10'>
                            <div className='flex justify-center items-center mt-10 md:items-start md:mt-6'>
                                <img src={ittoday} className='w-[250px] md:w-[300px] items-center justify-center' alt="IT Today" />
                            </div>
                            <div className='mt-5 flex justify-center flex-col items-center md:justify-center md:m-0'>
                                <h2>IT TODAY</h2>
                                <p className='text-justify text-xs pb-[200px] max-w-[240px] md:text-[14px]'>
                                    <span className='font-bold'>IT Today </span> 
                                    merupakan serangkaian acara nasional yang
                                    bertemakan teknologi informasi dalam dunia
                                    Agriculture. Kegiatan ini terdiri atas HackToday (Capture
                                    the Flag), UXToday (UI/UX Design), Poster Competition,
                                    Workshop. Festival, dan National Seminar mengenai
                                    teknologi informasi terkini.
                                </p>
                            </div>
                        </div>
                    </div>    
                    {/* CPSC */}
                    <div className='bg-card-bottom-mobile bg-stretch bg-no-repeat md:bg-card-bottom-tablet md:max-h-[50vh] md:h-[660px] md:min-w-[43rem]
                                    relative flex flex-col min-w-[10rem] w-[280px] min-h-[755px] h-auto translate-y-[-15rem] px-7 mt-5 justify-start items-start md:m-0 md:translate-y-[-20rem]'>
                        <div className='flex-grow w-full flex flex-col justify-start relative md:flex-row-reverse md:justify-around md:items-start pt-[150px] mt-6 md:mt-[150px]'>
                            <div className=' flex flex-col justify-start items-center relative md:justify-around md:items-start mt-[100px] md:m-0'>
                                <img src={cpsc} className='w-[170px]' />
                            </div>
                            <div className='mt-5 flex justify-center flex-col items-center md:justify-center md:m-0'>
                                <h2>CPSC</h2>
                                <p className='text-justify text-xs max-w-[240px] md:text-[14px]'>
                                        <span className='font-bold'>Computer Problem Solving Competition (CPSC) </span> 
                                        merupakan ajang perlombaan tahunan yang diselenggarakan oleh 
                                        Himpunan Mahasiswa Ilmu Komputer (Himalkom) IPB dan merupakan 
                                        rangkaian dari acara Pesta Sains Nasional (PSN) FMIPA IPB
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