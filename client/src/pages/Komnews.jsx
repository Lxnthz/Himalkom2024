import sample from "../assets/komnews-sample.svg"

function Komnews() {
    return (
        <section className="flex flex-col justify-center items-center mt-5 m-0 p-0">
            
            {/* Banner Komnews */}
            <section className="flex flex-col justify-center items-center w-full h-[300px] bg-komnews-banner bg-center bg-cover bg-no-repeat isolate box-border ms-* me-*">
                {/*Header + desc Komnews*/}
                <div className="text-center opacity-[1] transform-none block">
                    <h1 className="text-[#f0e4d4] -webkit-text-stroke-color: #040404 drop-shadow-[7px_5px_3px_rgba(0,0,0,0.8)] font-sports text-[35px] not-italic 
                    font-normal tracking-[-2px] shade-width shade-color">KOMNEWS</h1>
                    <p className="font-monts max-w-[400px]"><span className="text-[#111827] font-bold">KOMNEWS</span> merupakan tempat untuk membaca berita seputar ilmu komputer</p>
                </div>
            </section>

            {/* Headline */}
            <section className="box-border isolate block">
                {/* Whole */}
                <div className="flex flex-col opacity-100 transform-none w-[100%] items-center">
                    {/* Title */}
                    <div className="mt-[80px] mb-[30px] w-[100%] md:ml-[10%] lg:ml-0">
                        <h1 className="text-[#f0e4d4] -webkit-text-stroke-color: #040404 drop-shadow-[7px_5px_3px_rgba(0,0,0,0.8)] font-sports text-[35px] not-italic 
                    font-normal tracking-[-2px] shade-width shade-color text-center md:text-left lg:text-center">TODAY'S HEADLINE</h1>
                    </div>
                    {/* Content */}
                    <div className="w-[90%] flex flex-col-reverse md:flex-row md:justify-around gap-[25px] mb-[40px] h-auto bg-komnews-headline bg-center bg-no-repeat bg-cover border-[4px] border-[#040404] items-center">
                        {/* Beritanya */}
                        <div className="flex flex-col items-center md:items-start md:w-[50%]">
                            <h1 className="text-[23px] leading-[25px] font-changa font-normal text-center block isolate md:mt-[15px] md:text-left ml-[15px] mr-[15px] lg:mr-[15px]">
                                {"Pelantikan Rektor IPB Periode 2023-2028"}
                            </h1>
                            <p className="m-block-start m-block-end text-[15px] font-monts leading-[24px] font-normal ml-[15px] mr-[15px] text-justify line-clamp-6"> 
                                {"Pada 18 Januari 2023 bertempat di Graha Widya Wisuda (GWW) Kampus IPB Dramaga, Bogor dilangsungkan Sidang Paripurna Terbuka Majelis Wali Amanat (MWA) IPB University dengan agenda Pelantikan Rektor IPB University Periode 2023-2028. Prof Arif Satria terpilih sebagai Rektor IPB University periode 2023-2028. Prof Arif Satria menjadi rektor terpilih berdasarkan hasil putusan MWA IPB University dalam Sidang Paripurna Tertutup yang digelar di IPB International Convention Center (IICC), Bogor, (9/11). Ini adalah periode kedua jabatan Prof Arif Satria sebagai Rektor IPB University"}
                            </p>
                            {/* Read More */}
                            <a href="" className="border-[2px] border-black shadow-[5px_5px_0_0_#040404] flex w-[156px] cursor-pointer justify-center items-center md:ml-[15px] md:mr-[15px] bg-[#e49800] border-solid box-border text-white font-bold h-[36px] mt-[30px] md:mt-[15px] mb-[30px]"> 
                                {"Read More >"}
                            </a>
                        </div>
                        {/* Gambarnya */}
                        <div className="block md:align-middle">
                            <img src={sample} alt="Gambar" className="h-[250px] w-[250px] shadow-[5px_5px_0_0_#040404] border-[4px] border-[#040404] object-cover overflow-clip mt-10 md:mb-10 md:mr-7"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Berita */}
            <section className="block isolate w-[95%]">
                {/* Group */}
                <div className="h-[950px] p-[0_15px_50px] flex flex-col-reverse xl:flex-row justify-end">
                    {/* Daftar Berita */}
                    <div className="flex flex-col flex-nowrap overflow-auto no-scrollbar">
                        
                        <div className="box-border">
                            <div className="h-auto md:h-[219px] w-auto items-center border-l-2 border-black bg-[#e49800] cursor-pointer flex flex-row justify-between mb-[20px] p-[10px_18px]">
                                <div>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0]">
                                        {"Selected for you"}
                                    </p>
                                    <h1 className="text-[14px] md:text-[20px] lg:text-[26px] leading-[16px] md:leading-[18px] font-changa font-normal max-w-[220px] md:max-w-[470px] lg:max-w-[840px]">
                                        {"Pelantikan Rektor IPB Periode 2023-2028"}
                                    </h1>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0] line-clamp-3">
                                        {"Pada 18 Januari 2023 bertempat di Graha Widya Wisuda (GWW) Kampus IPB Dramaga, Bogor dilangsungkan Sidang Paripurna Terbuka Majelis Wali Amanat (MWA) IPB University dengan agenda Pelantikan Rektor IPB University Periode 2023-2028. Prof Arif Satria terpilih sebagai Rektor IPB University periode 2023-2028. Prof Arif Satria menjadi rektor terpilih berdasarkan hasil putusan MWA IPB University dalam Sidang Paripurna Tertutup yang digelar di IPB International Convention Center (IICC), Bogor, (9/11). Ini adalah periode kedua jabatan Prof Arif Satria sebagai Rektor IPB University"}
                                    </p>
                                    <div className="p-[3.5px] bg-[#f0e4d4] border border-solid w-[115px] border-black justify-center shadow-[3px_3px_0_0_#040404] flex">
                                        <p className="text-[8px] leading-[10px] font-monts font-bold tracking-[.5px]">{"Event"}</p>
                                    </div>
                                </div>
                                <img src={sample} alt="gambar berita" className="h-[90px] md:h-[118px] lg:h-[170px] ml-[5px] w-[90px] md:w-[118px] lg:w-[170px] object-cover overflow-clip box-border"/>
                            </div>
                        </div>

                        <div className="box-border">
                            <div className="h-auto md:h-[219px] w-auto items-center border-l-2 border-black cursor-pointer flex flex-row justify-between mb-[20px] p-[10px_18px]">
                                <div>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0]">
                                        {"Selected for you"}
                                    </p>
                                    <h1 className="text-[14px] md:text-[20px] lg:text-[26px] leading-[16px] md:leading-[18px] font-changa font-normal max-w-[220px] md:max-w-[470px] lg:max-w-[840px]">
                                        {"Pelantikan Rektor IPB Periode 2023-2028"}
                                    </h1>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0] line-clamp-3">
                                        {"Pada 18 Januari 2023 bertempat di Graha Widya Wisuda (GWW) Kampus IPB Dramaga, Bogor dilangsungkan Sidang Paripurna Terbuka Majelis Wali Amanat (MWA) IPB University dengan agenda Pelantikan Rektor IPB University Periode 2023-2028. Prof Arif Satria terpilih sebagai Rektor IPB University periode 2023-2028. Prof Arif Satria menjadi rektor terpilih berdasarkan hasil putusan MWA IPB University dalam Sidang Paripurna Tertutup yang digelar di IPB International Convention Center (IICC), Bogor, (9/11). Ini adalah periode kedua jabatan Prof Arif Satria sebagai Rektor IPB University"}
                                    </p>
                                    <div className="p-[3.5px] bg-[#f0e4d4] border border-solid w-[115px] border-black justify-center shadow-[3px_3px_0_0_#040404] flex">
                                        <p className="text-[8px] leading-[10px] font-monts font-bold tracking-[.5px]">{"Event"}</p>
                                    </div>
                                </div>
                                <img src={sample} alt="gambar berita" className="h-[90px] md:h-[118px] lg:h-[170px] ml-[5px] w-[90px] md:w-[118px] lg:w-[170px] object-cover overflow-clip box-border"/>
                            </div>
                        </div>

                        <div className="box-border">
                            <div className="h-auto md:h-[219px] w-auto items-center border-l-2 border-black cursor-pointer flex flex-row justify-between mb-[20px] p-[10px_18px]">
                                <div>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0]">
                                        {"Selected for you"}
                                    </p>
                                    <h1 className="text-[14px] md:text-[20px] lg:text-[26px] leading-[16px] md:leading-[18px] font-changa font-normal max-w-[220px] md:max-w-[470px] lg:max-w-[840px]">
                                        {"Pelantikan Rektor IPB Periode 2023-2028"}
                                    </h1>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0] line-clamp-3">
                                        {"Pada 18 Januari 2023 bertempat di Graha Widya Wisuda (GWW) Kampus IPB Dramaga, Bogor dilangsungkan Sidang Paripurna Terbuka Majelis Wali Amanat (MWA) IPB University dengan agenda Pelantikan Rektor IPB University Periode 2023-2028. Prof Arif Satria terpilih sebagai Rektor IPB University periode 2023-2028. Prof Arif Satria menjadi rektor terpilih berdasarkan hasil putusan MWA IPB University dalam Sidang Paripurna Tertutup yang digelar di IPB International Convention Center (IICC), Bogor, (9/11). Ini adalah periode kedua jabatan Prof Arif Satria sebagai Rektor IPB University"}
                                    </p>
                                    <div className="p-[3.5px] bg-[#f0e4d4] border border-solid w-[115px] border-black justify-center shadow-[3px_3px_0_0_#040404] flex">
                                        <p className="text-[8px] leading-[10px] font-monts font-bold tracking-[.5px]">{"Event"}</p>
                                    </div>
                                </div>
                                <img src={sample} alt="gambar berita" className="h-[90px] md:h-[118px] lg:h-[170px] ml-[5px] w-[90px] md:w-[118px] lg:w-[170px] object-cover overflow-clip box-border"/>
                            </div>
                        </div>

                        <div className="box-border">
                            <div className="h-auto md:h-[219px] w-auto items-center border-l-2 border-black cursor-pointer flex flex-row justify-between mb-[20px] p-[10px_18px]">
                                <div>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0]">
                                        {"Selected for you"}
                                    </p>
                                    <h1 className="text-[14px] md:text-[20px] lg:text-[26px] leading-[16px] md:leading-[18px] font-changa font-normal max-w-[220px] md:max-w-[470px] lg:max-w-[840px]">
                                        {"Pelantikan Rektor IPB Periode 2023-2028"}
                                    </h1>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0] line-clamp-3">
                                        {"Pada 18 Januari 2023 bertempat di Graha Widya Wisuda (GWW) Kampus IPB Dramaga, Bogor dilangsungkan Sidang Paripurna Terbuka Majelis Wali Amanat (MWA) IPB University dengan agenda Pelantikan Rektor IPB University Periode 2023-2028. Prof Arif Satria terpilih sebagai Rektor IPB University periode 2023-2028. Prof Arif Satria menjadi rektor terpilih berdasarkan hasil putusan MWA IPB University dalam Sidang Paripurna Tertutup yang digelar di IPB International Convention Center (IICC), Bogor, (9/11). Ini adalah periode kedua jabatan Prof Arif Satria sebagai Rektor IPB University"}
                                    </p>
                                    <div className="p-[3.5px] bg-[#f0e4d4] border border-solid w-[115px] border-black justify-center shadow-[3px_3px_0_0_#040404] flex">
                                        <p className="text-[8px] leading-[10px] font-monts font-bold tracking-[.5px]">{"Event"}</p>
                                    </div>
                                </div>
                                <img src={sample} alt="gambar berita" className="h-[90px] md:h-[118px] lg:h-[170px] ml-[5px] w-[90px] md:w-[118px] lg:w-[170px] object-cover overflow-clip box-border"/>
                            </div>
                        </div>

                    </div>

                    {/* Tag */}
                    <div className="h-auto p-[25px_10px] w-auto xl:w-[432px]">
                        <h1 className="font-changa text-[20px] md:text-[32px] xl:text-[16px] italic font-normal leading-[18px] md:leading-[40px] xl:leading-[24px]">
                            {"Recommended Topic"}
                        </h1>
                        <div className="flex flex-wrap m-[10px_0] md:m-[15px_0] gap-2">
                            
                            <button className="shadow-[2.5px_3px_0_black] items-center bg-[#e49800] border-2 border-solid border-black flex w-auto justify-center p-[4px_8px] ps-[6px] pe-[6px] ">
                                <span className="text-[11px] leading-[15px] font-monts text-white font-bold tracking-[.1px]">
                                    {"Programming"}
                                </span>
                            </button>

                            <button className="shadow-[2.5px_3px_0_black] items-center bg-[#e49800] border-2 border-solid border-black flex w-auto justify-center p-[4px_8px] ps-[6px] pe-[6px] ">
                                <span className="text-[11px] leading-[15px] font-monts text-white font-bold tracking-[.1px]">
                                    {"Leadership"}
                                </span>
                            </button>

                            <button className="shadow-[2.5px_3px_0_black] items-center bg-[#e49800] border-2 border-solid border-black flex w-auto justify-center p-[4px_8px] ps-[6px] pe-[6px] ">
                                <span className="text-[11px] leading-[15px] font-monts text-white font-bold tracking-[.1px]">
                                    {"Writing"}
                                </span>
                            </button>

                            <button className="shadow-[2.5px_3px_0_black] items-center bg-[#e49800] border-2 border-solid border-black flex w-auto justify-center p-[4px_8px] ps-[6px] pe-[6px] ">
                                <span className="text-[11px] leading-[15px] font-monts text-white font-bold tracking-[.1px]">
                                    {"Technology"}
                                </span>
                            </button>

                            <button className="shadow-[2.5px_3px_0_black] items-center bg-[#e49800] border-2 border-solid border-black flex w-auto justify-center p-[4px_8px] ps-[6px] pe-[6px] ">
                                <span className="text-[11px] leading-[15px] font-monts text-white font-bold tracking-[.1px]">
                                    {"Data Science"}
                                </span>
                            </button>

                            <button className="shadow-[2.5px_3px_0_black] items-center bg-[#e49800] border-2 border-solid border-black flex w-auto justify-center p-[4px_8px] ps-[6px] pe-[6px] ">
                                <span className="text-[11px] leading-[15px] font-monts text-white font-bold tracking-[.1px]">
                                    {"AI"}
                                </span>
                            </button>

                            <button className="shadow-[2.5px_3px_0_black] items-center bg-[#e49800] border-2 border-solid border-black flex w-auto justify-center p-[4px_8px] ps-[6px] pe-[6px] ">
                                <span className="text-[11px] leading-[15px] font-monts text-white font-bold tracking-[.1px]">
                                    {"Data Mining"}
                                </span>
                            </button>

                            <button className="shadow-[2.5px_3px_0_black] items-center bg-[#e49800] border-2 border-solid border-black flex w-auto justify-center p-[4px_8px] ps-[6px] pe-[6px] ">
                                <span className="text-[11px] leading-[15px] font-monts text-white font-bold tracking-[.1px]">
                                    {"Machine Learning"}
                                </span>
                            </button>
                        </div>
                    </div>

                </div>


            </section>
        </section>
    );
}

export default Komnews;
