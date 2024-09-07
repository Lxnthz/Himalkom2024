import { motion } from 'framer-motion';
import bgKomunlg from '../assets/IGallery_Desktop.svg';
import bgKomunsm from '../assets/IGallery_Phone.svg';
import Card_Desktop from '../assets/BibitQ.svg';
import bgPatternT from '../assets/pattern-top.svg';
import bgPatternB from '../assets/pattern-bottom.svg';

function IGallery() {
  return (
    <div className="p-4">
      {/* Section 1: Header Section with Background Images */}
      <section className="absolut sm:h-[18 rem] lg:w-[22 rem] lg:h-[32 rem] grid grid-cols-1 grid-rows-1 border-t-4 border-b-4 border-black mt-1">
        {/* Mobile Background Image */}
        <div
          className="col-start-1 row-start-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgKomunsm})` }}
        ></div>

        {/* Desktop Background Image */}
        <div
          className="col-start-1 row-start-1 hidden sm:block bg-cover bg-center"
          style={{ backgroundImage: `url(${bgKomunlg})` }}
        ></div>

        {/* Centered Content with Animation */}
        <div className="col-start-1 row-start-1 flex items-center justify-center">
          <motion.div
            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center text-center pt-64 md:pt-8 md:pr-[22rem] lg:pr-[30rem] lg:mx-20 xl:pr-[34rem] xl:pb-8 xl:mx-60 xl:mt-16 2xl:pr-[34rem] 2xl:pb-8 2xl:mx-60 2xl:mt-16"
          >
            <h2 className="font-sports font-normal text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black pt-2">
            I-GALLERY
            </h2>
            <p className="font-monts font-normal text-base md:text-sm lg:text-base xl:text-base 2xl:text-base leading-4 px-3 md:px-9 lg:px-1 xl:px-2 2xl:px-6 pt-6 pb-11">
              I-Gallery adalah platform yang berisi kumpulan projek-projek yang telah
              dibuat oleh mahasiswa ilmu komputer. I-Gallery menampilkan projek dari
              setiap mata kuliah berprojek. Tujuan dari I-Gallery adalah untuk
              menunjukan projek yang telah dibuat oleh mahasiswa ilmu komputer.

            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Cards Section with Background Patterns */}
      <section className=" bg-no-repeat bg-right bg-contain pt-20"
        style={{
          backgroundImage: `url(${bgPatternT}), url(${bgPatternB})`,
          backgroundPosition: '100% 0, 0 100%',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundSize: 'contain, contain',
        }}
      >
        {/* Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 md:gap-12 gap-20 p-30 place-items-center w-full max-w-[30 rem] md:max-w-full mx-auto'>
          {/* box kartu*/}
          <div className="w-11/12 h-[28rem] bg-[#E49800] border-4 border-black">
            <div
              className="  bg-center bg-no-repeat flex flex-col items-center justify-center  w-full md:h-[250px] pt-3"
            >
              {/* Box gambar */}
            <div className="border-2 border-[#16052B] w-[15rem] h-[140px] sm:w-[180px] sm:h-[160 px] md:w-[45 rem] md:h-[13 rem] lg:w-[200 px] lg:h-[200 px] m-9 transition-transform transform hover:scale-110">
              <img
                src={Card_Desktop}
                alt="Saung Desain"
                className="w-[20rem] h-[] md:h-[140px] lg:w-[150 px] pb-6 lg:h-[150 px]   xl:pt-[3rem]"
              />
              </div>
              <h2 className='pr-[6rem] pt-[10 rem]'>
                Saung Desain
                </h2>
                <h2 className='pl-[6rem] pb-[0.5rem]'>
                Saung Desain
                </h2>
              <div className="flex flex-col max-w-[190px]">
                <div className="flex flex-col w-full">
                  <div className="w-full text-sm font-bold leading-4 text-black">
                    Ketertarikan Ilkomerz dalam membangun
                    <br />
                    Startup
                  </div>
                  <div className="mt-1 text-xs leading-none text-zinc-600">23/12</div>
                </div>
                <div className="self-start mt-2 text-xs font-medium tracking-normal leading-none text-indigo-800">
                  Baca selengkapnya
                </div>
              </div>
            </div>
            </div>
            {/* Cards Grid */}
            <div
              className="bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full md:h-[250px]"
            >
              <img
                src={Card_Desktop}
                alt="Saung Desain"
                className="w-[120px] h-[90px] md:w-full md:h-[140px] lg:h-[100px]"
              />
              <div className="flex flex-col max-w-[190px]">
                <div className="flex flex-col w-full">
                  <div className="w-full text-sm font-bold leading-4 text-black">
                    Ketertarikan Ilkomerz dalam membangun
                    <br />
                    Startup
                  </div>
                  <div className="mt-1 text-xs leading-none text-zinc-600">23/12</div>
                </div>
                <div className="self-start mt-2 text-xs font-medium tracking-normal leading-none text-indigo-800">
                  Baca selengkapnya
                </div>
              </div>
            </div>
            {/* Cards Grid */}
            <div
              className="bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full md:h-[250px]"
            >
              <img
                src={Card_Desktop}
                alt="Saung Desain"
                className="w-[120px] h-[90px] md:w-full md:h-[140px] lg:h-[100px]"
              />
              <div className="flex flex-col max-w-[190px]">
                <div className="flex flex-col w-full">
                  <div className="w-full text-sm font-bold leading-4 text-black">
                    Ketertarikan Ilkomerz dalam membangun
                    <br />
                    Startup
                  </div>
                  <div className="mt-1 text-xs leading-none text-zinc-600">23/12</div>
                </div>
                <div className="self-start mt-2 text-xs font-medium tracking-normal leading-none text-indigo-800">
                  Baca selengkapnya
                </div>
              </div>
            </div>
            {/* Cards Grid */}
            <div
              className="bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full md:h-[250px]"
            >
              <img
                src={Card_Desktop}
                alt="Saung Desain"
                className="w-[120px] h-[90px] md:w-full md:h-[140px] lg:h-[100px]"
              />
              <div className="flex flex-col max-w-[190px]">
                <div className="flex flex-col w-full">
                  <div className="w-full text-sm font-bold leading-4 text-black">
                    Ketertarikan Ilkomerz dalam membangun
                    <br />
                    Startup
                  </div>
                  <div className="mt-1 text-xs leading-none text-zinc-600">23/12</div>
                </div>
                <div className="self-start mt-2 text-xs font-medium tracking-normal leading-none text-indigo-800">
                  Baca selengkapnya
                </div>
              </div>
            </div>
            {/* Cards Grid */}
            <div
              className="bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full md:h-[250px]"
            >
              <img
                src={Card_Desktop}
                alt="Saung Desain"
                className="w-[120px] h-[90px] md:w-full md:h-[140px] lg:h-[100px]"
              />
              <div className="flex flex-col max-w-[190px]">
                <div className="flex flex-col w-full">
                  <div className="w-full text-sm font-bold leading-4 text-black">
                    Ketertarikan Ilkomerz dalam membangun
                    <br />
                    Startup
                  </div>
                  <div className="mt-1 text-xs leading-none text-zinc-600">23/12</div>
                </div>
                <div className="self-start mt-2 text-xs font-medium tracking-normal leading-none text-indigo-800">
                  Baca selengkapnya
                </div>
              </div>
            </div>
            {/* Cards Grid */}
            <div
              className="bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full md:h-[250px]"
            >
              <img
                src={Card_Desktop}
                alt="Saung Desain"
                className="w-[120px] h-[90px] md:w-full md:h-[140px] lg:h-[100px]"
              />
              <div className="flex flex-col max-w-[190px]">
                <div className="flex flex-col w-full">
                  <div className="w-full text-sm font-bold leading-4 text-black">
                    Ketertarikan Ilkomerz dalam membangun
                    <br />
                    Startup
                  </div>
                  <div className="mt-1 text-xs leading-none text-zinc-600">23/12</div>
                </div>
                <div className="self-start mt-2 text-xs font-medium tracking-normal leading-none text-indigo-800">
                  Baca selengkapnya
                </div>
              </div>
            </div>
            {/* Cards Grid */}
            <div
              className="bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full md:h-[250px]"
            >
              <img
                src={Card_Desktop}
                alt="Saung Desain"
                className="w-[120px] h-[90px] md:w-full md:h-[140px] lg:h-[100px]"
              />
              <div className="flex flex-col max-w-[190px]">
                <div className="flex flex-col w-full">
                  <div className="w-full text-sm font-bold leading-4 text-black">
                    Ketertarikan Ilkomerz dalam membangun
                    <br />
                    Startup
                  </div>
                  <div className="mt-1 text-xs leading-none text-zinc-600">23/12</div>
                </div>
                <div className="self-start mt-2 text-xs font-medium tracking-normal leading-none text-indigo-800">
                  Baca selengkapnya
                </div>
              </div>
            </div>
            {/* Cards Grid */}
            <div
              className="bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full md:h-[250px]"
            >
              <img
                src={Card_Desktop}
                alt="Saung Desain"
                className="w-[120px] h-[90px] md:w-full md:h-[140px] lg:h-[100px]"
              />
              <div className="flex flex-col max-w-[190px]">
                <div className="flex flex-col w-full">
                  <div className="w-full text-sm font-bold leading-4 text-black">
                    Ketertarikan Ilkomerz dalam membangun
                    <br />
                    Startup
                  </div>
                  <div className="mt-1 text-xs leading-none text-zinc-600">23/12</div>
                </div>
                <div className="self-start mt-2 text-xs font-medium tracking-normal leading-none text-indigo-800">
                  Baca selengkapnya
                </div>
              </div>
            </div>
            {/* Cards Grid */}
            <div
              className="bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center p-6 w-full md:h-[250px]"
            >
              <img
                src={Card_Desktop}
                alt="Saung Desain"
                className="w-[120px] h-[90px] md:w-full md:h-[140px] lg:h-[100px]"
              />
              <div className="flex flex-col max-w-[190px]">
                <div className="flex flex-col w-full">
                  <div className="w-full text-sm font-bold leading-4 text-black">
                    Ketertarikan Ilkomerz dalam membangun
                    <br />
                    Startup
                  </div>
                  <div className="mt-1 text-xs leading-none text-zinc-600">23/12</div>
                </div>
                <div className="self-start mt-2 text-xs font-medium tracking-normal leading-none text-indigo-800">
                  Baca selengkapnya
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default IGallery;
