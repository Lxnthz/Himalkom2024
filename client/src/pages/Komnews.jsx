import sample from "../assets/Komnews/komnews-icollabitb.jpeg"
import berita from "../assets/Komnews/komnews_berita.svg"
import berita2 from "../assets/Komnews/komnews-saungdesain23.webp"
import berita3 from "../assets/Komnews/komnews-icc.webp"
import berita4 from "../assets/Komnews/komnews-sample.svg"


function Komnews() {

    const pindah = (mylink) => () => {
        window.location.href=mylink
    }

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
                                {"Sinergi Himalkom IPB dan HMIF ITB Wujudkan Kolaborasi Inspiratif Melalui I-Collab 2024"}
                            </h1>
                            <p className="m-block-start m-block-end text-[15px] font-monts leading-[24px] font-normal ml-[15px] mr-[15px] text-justify line-clamp-6"> 
                                {"Himpunan Mahasiswa Ilmu Komputer (Himalkom) IPB kembali menunjukkan eksistensinya dengan sukses menggelar acara I-Collab 2024 secara offline. Acara yang sudah ditunggu-tunggu ini dihadiri oleh Himpunan Mahasiswa Informatika (HMIF) dari Institut Teknologi Bandung (ITB). I-Collab sendiri merupakan kegiatan studi banding yang bertujuan untuk berbagi pengalaman dan insight baru yang dapat diimplementasikan serta dikembangkan lebih lanjut. Kegiatan ini berlangsung pada hari Minggu, 3 Maret 2024 di gedung CCR RK. 1.01. Gedung tersebut dipilih karena fasilitasnya yang mendukung untuk kegiatan-kegiatan akademik dan diskusi. Kunjungan dari HMIF ITB ini disambut dengan antusias oleh anggota Himalkom IPB, yang melihat kesempatan ini sebagai peluang untuk memperluas jaringan dan menggali lebih banyak informasi tentang cara kerja dan program dari himpunan mahasiswa informatika di ITB. HMIF ITB sendiri memiliki tujuh divisi yang menaungi beberapa departemen di bawahnya. Setiap divisi memiliki peran dan tanggung jawab yang spesifik, memberikan struktur yang terorganisir dengan baik dan efisien. Keberadaan tujuh divisi ini memungkinkan HMIF ITB untuk menangani berbagai aspek kegiatan mahasiswa dengan lebih terfokus. Dengan hadirnya I-Collab, Himalkom IPB berharap bisa belajar dari struktur organisasi yang berbeda ini dan mengadopsi praktik terbaik yang relevan untuk pengembangan organisasi mereka sendiri. Acara I-Collab 2024 dibuka dengan sambutan meriah dari MC yang membangkitkan semangat peserta. Setelah itu, masing-masing ketua himpunan menyampaikan sambutan mereka. Dalam sambutannya, Bang Adzik selaku ketua Himalkom, mengungkapkan harapannya agar hubungan antara ITB dan IPB semakin erat, serta semakin banyak kolaborasi yang dapat dilakukan di masa depan. Sambutan ini mendapat respon positif dari seluruh peserta yang hadir."}
                            </p>
                            {/* Read More */}
                            <a href="/komnews/view/icollab-2024" className="border-[2px] border-black shadow-[5px_5px_0_0_#040404] flex w-[156px] cursor-pointer justify-center items-center md:ml-[15px] md:mr-[15px] bg-[#e49800] border-solid box-border text-white font-bold h-[36px] mt-[30px] md:mt-[15px] mb-[30px]"> 
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
                        
                        <div className="box-border" onClick={pindah('/komnews/view/student-portal-ipb')}>
                            <div className="h-auto md:h-[219px] w-auto items-center border-l-2 border-black bg-[#e49800] cursor-pointer flex flex-row justify-between mb-[20px] p-[10px_18px]">
                                <div>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0]">
                                        {"Selected for you"}
                                    </p>
                                    <h1 className="text-[14px] md:text-[20px] lg:text-[26px] leading-[16px] md:leading-[18px] font-changa font-normal max-w-[220px] md:max-w-[470px] lg:max-w-[840px]">
                                        {"Student Portal IPB University Dukung Aktivitas Merdeka Belajar Kampus Merdeka (MBKM)"}
                                    </h1>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0] line-clamp-3">
                                        {"IPB University sosialisasikan Student Portal untuk mendukung kegiatan Merdeka Belajar Kampus Merdeka (MBKM), 13/12. Student portal merupakan aplikasi yang diperuntukkan bagi mahasiswa IPB University dalam mendukung aktivitas akademik dan kemahasiswaan. Dr Alim Setiawan Slamet, Direktur Kemahasiswaan dan Pengembangan Karir (Ditmawa PK) IPB University, mengatakan bahwa dalam kurun empat tahun terakhir IPB University secara bertahap melakukan transformasi digital. Transformasi digital ini tujuan utamanya adalah untuk meningkatkan pelayanan kepada stakeholder, salah satunya mahasiswa IPB University."}
                                    </p>
                                    <div className="p-[3.5px] bg-[#f0e4d4] border border-solid w-[115px] border-black justify-center shadow-[3px_3px_0_0_#040404] flex">
                                        <p className="text-[8px] leading-[10px] font-monts font-bold tracking-[.5px]">{"Campus Life"}</p>
                                    </div>
                                </div>
                                <img src={berita} alt="gambar berita" className="h-[90px] md:h-[118px] lg:h-[170px] ml-[5px] w-[90px] md:w-[118px] lg:w-[170px] object-cover overflow-clip box-border"/>
                            </div>
                        </div>

                        <div onClick={pindah('/komnews/view/saungdesain-2023')} className="box-border">
                            <div className="h-auto md:h-[219px] w-auto items-center border-l-2 border-black cursor-pointer flex flex-row justify-between mb-[20px] p-[10px_18px]">
                                <div>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0]">
                                        {"Selected for you"}
                                    </p>
                                    <h1 className="text-[14px] md:text-[20px] lg:text-[26px] leading-[16px] md:leading-[18px] font-changa font-normal max-w-[220px] md:max-w-[470px] lg:max-w-[840px]">
                                        {"Menyusuri Jejak Inovasi: Saung Desain Menggali Potensi Karir Melalui Perpaduan UI/UX Design dan Kecerdasan Buatan"}
                                    </h1>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0] line-clamp-3">
                                        {"Pada 21 Oktober 2023 di Auditorium Andi Hakim Nasution IPB, Saung Desain kembali hadir untuk kalian semua yang penasaran tentang materi UI/UX tapi bingung harus mulai dari mana. Program yang dinaungi oleh komunitas AgriUX ini membawakan tema “Unlocking the Secrets of UI/UX Design: Synergizing UI/UX Design and AI for Innovative Career Paths”. Acara dimulai dengan sambutan dari ketua pelaksana yang kemudian dilanjutkan dengan sambutan Pembina komunitas AgriUX. Kegiatan Saung Desain ini dibagi menjadi 2 sesi, yaitu sesi seminar di pagi hari yang dibawakan oleh 2 orang pembicara, yaitu:"}
                                    </p>
                                    <div className="p-[3.5px] bg-[#f0e4d4] border border-solid w-[115px] border-black justify-center shadow-[3px_3px_0_0_#040404] flex">
                                        <p className="text-[8px] leading-[10px] font-monts font-bold tracking-[.5px]">{"Event"}</p>
                                    </div>
                                </div>
                                <img src={berita2} alt="gambar berita" className="h-[90px] md:h-[118px] lg:h-[170px] ml-[5px] w-[90px] md:w-[118px] lg:w-[170px] object-cover overflow-clip box-border"/>
                            </div>
                        </div>

                        {/*<div className="box-border">
                            <div className="h-auto md:h-[219px] w-auto items-center border-l-2 border-black cursor-pointer flex flex-row justify-between mb-[20px] p-[10px_18px]">
                                <div>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0]">
                                        {"Selected for you"}
                                    </p>
                                    <h1 className="text-[14px] md:text-[20px] lg:text-[26px] leading-[16px] md:leading-[18px] font-changa font-normal max-w-[220px] md:max-w-[470px] lg:max-w-[840px]">
                                        {"Navigating Your Future: Building Career Pathways and Connecting with Opportunities"}
                                    </h1>
                                    <p className="text-[8px] md:text-[11px] lg:text-[16px] leading-[12px] md:leading-[14px] lg:leading-[23px] max-w-[220px] md:max-w-[470px] lg:max-w-[840px] font-monts tracking-[.2px] m-[10px_0] line-clamp-3">
                                        {"Divisi external Himalkom menyelenggarakan kegiatan bernama ICC (Ilkomerz Campus Connect). ICC merupakan serangkaian kegiatan Career Fest. Mulai dari kalangan mahasiswa hingga masyarakat umum dapat mengikuti ICC 2023. Dalam konteks ini, akan dibahas topik seperti perencanaan karir, pengembangan jalur karir, koneksi dengan peluang pekerjaan, pembangunan keterampilan yang relevan, dan strategi untuk mencapai tujuan karir. Kegiatan ICC 2023 berlangsung pada tanggal 22-23 Oktober 2023 dengan tema “Navigating Your Future: Building Career Pathways and Connecting with Opportunities” dan dilaksanakan secara Online. ICC 2023 dibagi menjadi 2 rangkaian kegiatan, Expo yang dilaksanakan pada tanggal 22 Oktober 2023 dan Webinar Series yang dilaksanakan pada tanggal 23 Oktober 2023. </p> <p> Pada tanggal 22 Oktober 2023 dilaksanakan EXPO. Expo ICC 2023 ini terdiri dari kegiatan company session, talkshow bersama Habibul Fuadi Hanif, dan kegiatan menarik lainnya. </p> <p> Kegiatan Webinar Series yang dilaksanakan tanggal 23 Oktober 2023 terbagi menjadi 2 rangkaian kegiatan yaitu “The Future of Work: Embracing Digital Transformation” bersama Losania Vernanda. Pada sesi ini dijelaskan transformasi digital berdasarkan dari pengalaman pembicara. </p> <p> Sesi kedua dari kegiatan Webinar Series adalah “Building Your Personal Brand in the Digital Era: How to Stand Out Online” yang diisi oleh Diella Amanda. Pada sesi ini dibahas apa itu Personal Branding dan beberapa persepsi yang salah mengenai personal branding, kemudian pentingnya personal branding di kalangan manapun apalagi mahasiswa, dan juga apa saja yang bisa kita lakukan untuk melakukan personal branding melalui social media. </p> <p> Kegiatan ICC (Ilkomerz Campus Connect) 2023 ini bertujuan untuk menghasilkan individu yang unggul salah satunya di departemen Ilmu Komputer IPB University supaya siap di dunia pekerjaan, memfasilitasi pencarian pekerjaan, memberikan informasi beasiswa, meningkatkan kesadaran tentang karir di bidang teknologi informasi, serta membangun hubungan sinergis di kalangan dunia usaha. </p> <p> Adapun di sela-sela kegiatan pada hari kedua, terdapat ice breaking/games dari ICC, dimana bukan hanya menghilangkan rasa bosan, tetapi juga bisa memenangkan hadiah. Pertanyaan-pertanyaannya pun tidak jauh dengan materi yang sudah disampaikan, maupun yang akan dilaksanakan pada sesi kedua."}
                                    </p>
                                    <div className="p-[3.5px] bg-[#f0e4d4] border border-solid w-[115px] border-black justify-center shadow-[3px_3px_0_0_#040404] flex">
                                        <p className="text-[8px] leading-[10px] font-monts font-bold tracking-[.5px]">{"Event"}</p>
                                    </div>
                                </div>
                                <img src={berita3} alt="gambar berita" className="h-[90px] md:h-[118px] lg:h-[170px] ml-[5px] w-[90px] md:w-[118px] lg:w-[170px] object-cover overflow-clip box-border"/>
                            </div>
                        </div>*/}

                        <div onClick={pindah('/komnews/view/rektor-ipb')} className="box-border">
                            <div className="h-auto md:h-[219px] w-auto items-center border-l-2 border-black cursor-pointer flex flex-row justify-between mb-[20px] p-[10px_18px]" onClick={pindah('/komnews/view/rektor-ipb')}>
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
                                        <p className="text-[8px] leading-[10px] font-monts font-bold tracking-[.5px]">{"Campus Life"}</p>
                                    </div>
                                </div>
                                <img src={berita4} alt="gambar berita" className="h-[90px] md:h-[118px] lg:h-[170px] ml-[5px] w-[90px] md:w-[118px] lg:w-[170px] object-cover overflow-clip box-border"/>
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
