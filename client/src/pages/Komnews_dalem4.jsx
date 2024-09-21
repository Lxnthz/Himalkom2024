import berita from "../assets/Komnews/komnews-saungdesain23.webp"
import berita2 from "../assets/Komnews/komnews_berita.svg"
import berita3 from "../assets/Komnews/komnews-sample.svg"
import berita4 from "../assets/Komnews/komnews-icollabitb.jpeg"

function Komnews_dalem4(){

    const pindah = (mylink) => () => {
        window.location.href=mylink
    }

    return (
        <div className="flex flex-col lg:flex-row">
            {/* Background */}
            <div className="p-[20px] md:p-[40px] lg:p-[70px] bg-komnews-dalem bg-no-repeat bg-cover">

                {/* Icon + kategori*/}
                <div className="flex flex-row items-center">
                    {/* Icon */}
                    <div className="text-[11px] md:text-[14px] text-white p-[4px_10px_4px_10px] md:p-[4px_8px_4px_10px] w-auto md:w-[100px] h-[28px] bg-[#e49800] border border-solid border-black  shadow-[2px_3px_0_black] md:shadow-[3px_4px_0_black] mr-[9px] md:mr-[24px] leading-[16px] flex items-center justify-center font-monts font-bold">
                        {"KOMNEWS"}
                    </div>

                    {/* Garis */}
                    <div className="border-l-[2px] border-solid border-black h-[35px]"/>

                    {/* Kategori */}
                    <div className="text-[11px] md:text-[12px] font-monts font-medium leading-[16px] tracking-[.25px] p-[3px_8px] md:p-[4px_10px] ml-[9px] flex border border-solid border-black bg-[#f0e4d4]" >
                        {"Event"}
                    </div>

                </div>

                {/* Isi berita */}
                <div>

                    {/* Judul */}
                    <h1 className="text-[24px] md:text-[32px] lg:text-[45px] leading-[32px] md:leading-[40px] lg:leading-[52px] text-black font-changa m-[18px_0]">
                        {"Menyusuri Jejak Inovasi: Saung Desain Menggali Potensi Karir Melalui Perpaduan UI/UX Design dan Kecerdasan Buatan"}
                    </h1>

                    {/* Tanggal */}
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-medium mb-[14px] md:mb-[18px] font-monts text-[#a4a29f]">
                        {"21-10-2023"}
                    </p>

                    {/* Gambar */}
                    <div className="flex justify-center m-[20px_20px] md:m-[40px_40px]">
                        <img src={berita} alt="Gambar" className="object-cover w-[100%] h-[216px] md:h-[301px] lg:h-[514px]"/>
                    </div>

                    {/* Berita */}
                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Divisi external Himalkom menyelenggarakan kegiatan bernama ICC (Ilkomerz Campus Connect). ICC merupakan serangkaian kegiatan Career Fest. Mulai dari kalangan mahasiswa hingga masyarakat umum dapat mengikuti ICC 2023. Dalam konteks ini, akan dibahas topik seperti perencanaan karir, pengembangan jalur karir, koneksi dengan peluang pekerjaan, pembangunan keterampilan yang relevan, dan strategi untuk mencapai tujuan karir. Kegiatan ICC 2023 berlangsung pada tanggal 22-23 Oktober 2023 dengan tema “Navigating Your Future: Building Career Pathways and Connecting with Opportunities” dan dilaksanakan secara Online. ICC 2023 dibagi menjadi 2 rangkaian kegiatan, Expo yang dilaksanakan pada tanggal 22 Oktober 2023 dan Webinar Series yang dilaksanakan pada tanggal 23 Oktober 2023."}
                    </p>

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Pada tanggal 22 Oktober 2023 dilaksanakan EXPO. Expo ICC 2023 ini terdiri dari kegiatan company session, talkshow bersama Habibul Fuadi Hanif, dan kegiatan menarik lainnya."}
                    </p>

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Kegiatan Webinar Series yang dilaksanakan tanggal 23 Oktober 2023 terbagi menjadi 2 rangkaian kegiatan yaitu “The Future of Work: Embracing Digital Transformation” bersama Losania Vernanda. Pada sesi ini dijelaskan transformasi digital berdasarkan dari pengalaman pembicara."}
                    </p>

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Sesi kedua dari kegiatan Webinar Series adalah “Building Your Personal Brand in the Digital Era: How to Stand Out Online” yang diisi oleh Diella Amanda. Pada sesi ini dibahas apa itu Personal Branding dan beberapa persepsi yang salah mengenai personal branding, kemudian pentingnya personal branding di kalangan manapun apalagi mahasiswa, dan juga apa saja yang bisa kita lakukan untuk melakukan personal branding melalui social media."}
                    </p>

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Kegiatan ICC (Ilkomerz Campus Connect) 2023 ini bertujuan untuk menghasilkan individu yang unggul salah satunya di departemen Ilmu Komputer IPB University supaya siap di dunia pekerjaan, memfasilitasi pencarian pekerjaan, memberikan informasi beasiswa, meningkatkan kesadaran tentang karir di bidang teknologi informasi, serta membangun hubungan sinergis di kalangan dunia usaha."}

                    </p> 

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Adapun di sela-sela kegiatan pada hari kedua, terdapat ice breaking/games dari ICC, dimana bukan hanya menghilangkan rasa bosan, tetapi juga bisa memenangkan hadiah. Pertanyaan-pertanyaannya pun tidak jauh dengan materi yang sudah disampaikan, maupun yang akan dilaksanakan pada sesi kedua."}
                    </p>                   

                </div>
            </div>
            {/* Card */}
            <div className="p-[20px] lg:pt-[70px] lg:pl-[0]">
                {/* Judul */}
                <h1 className="text-black text-center md:text-left lg:text-center text-[32px] font-changa leading-[40px]">
                    {"Terkait"}
                </h1>

                {/* List Cardnya */}
                <div className="flex flex-col items-center gap-6 md:gap-16 py-8 overflow-auto w-auto no-scrollbar">
                    {/* Cardnya */}
                    <div onClick={pindah('/komnews/view/rektor-ipb')} className="flex flex-col items-center justify-center bg-komnews-card bg-[#efc166] bg-cover bg-no-repeat text-black border-[2px] border-solid border-[#111827] p-[11px] lg:p-[17px] w-[300px] md:w-[688px] lg:w-[250px] max-h-[517px] md:max-h-[517px] lg:max-h-[300px] relative cursor-pointer">
                        
                        {/* Gambar */}
                        <div className="flex flex-col ">
                            <img src={berita3} alt="gambar" className="w-[250px] h-[254px] md:w-[633px] lg:w-[230px] md:h-[363px] lg:h-[150px] object-cover border-[2px] border-solid border-black shadow-[3px_3px_0_black]" />
                        </div>

                        <div>

                            {/* Judul berita */}
                            <h1 className="text-[14px] md:text-[18px] lg:text-[14px] leading-[15px] md:leading-[18px] lg:leading-[15px] shade-color card-title font-changa text-white drop-shadow-[1px_1px_0_black] pt-[.94rem] w-[250px] md:w-[633px] lg:w-[230px] line-clamp-3">
                                {"Pelantikan Rektor IPB Periode 2023-2028"}
                            </h1>

                            {/* Tanggal */}
                            <p className="pt-2 font-monts text-[12px] leading-[16px] font-bold tracking-[.25px] text-black">
                                {"18/01/2023"}
                            </p>   

                        </div>
                    </div>
                    
                    {/* Cardnya */}
                    <div onClick={pindah('/komnews/view/student-portal-ipb')} className="flex flex-col items-center justify-center bg-komnews-card bg-[#efc166] bg-cover bg-no-repeat text-black border-[2px] border-solid border-[#111827] p-[11px] lg:p-[17px] w-[300px] md:w-[688px] lg:w-[250px] max-h-[517px] md:max-h-[517px] lg:max-h-[300px] relative cursor-pointer">
                        
                        {/* Gambar */}
                        <div className="flex flex-col ">
                            <img src={berita2} alt="gambar" className="w-[250px] h-[254px] md:w-[633px] lg:w-[230px] md:h-[363px] lg:h-[150px] object-cover border-[2px] border-solid border-black shadow-[3px_3px_0_black]" />
                        </div>

                        <div>

                            {/* Judul berita */}
                            <h1 className="text-[14px] md:text-[18px] lg:text-[14px] leading-[15px] md:leading-[18px] lg:leading-[15px] shade-color card-title font-changa text-white drop-shadow-[1px_1px_0_black] pt-[.94rem] w-[250px] md:w-[633px] lg:w-[230px] line-clamp-3">
                                {"Student Portal IPB University Dukung Aktivitas Merdeka Belajar Kampus Merdeka (MBKM)"}
                            </h1>

                            {/* Tanggal */}
                            <p className="pt-2 font-monts text-[12px] leading-[16px] font-bold tracking-[.25px] text-black">
                                {"21/01/2024"}
                            </p>   

                        </div>
                    </div>


                    {/* Cardnya */}
                    <div onClick={pindah('/komnews/view/icollab-2024')} className="flex flex-col items-center justify-center bg-komnews-card bg-[#efc166] bg-cover bg-no-repeat text-black border-[2px] border-solid border-[#111827] p-[11px] lg:p-[17px] w-[300px] md:w-[688px] lg:w-[250px] max-h-[517px] md:max-h-[517px] lg:max-h-[300px] relative cursor-pointer">
                        
                        {/* Gambar */}
                        <div className="flex flex-col ">
                            <img src={berita4} alt="gambar" className="w-[250px] h-[254px] md:w-[633px] lg:w-[230px] md:h-[363px] lg:h-[150px] object-cover border-[2px] border-solid border-black shadow-[3px_3px_0_black]" />
                        </div>

                        <div>

                            {/* Judul berita */}
                            <h1 className="text-[14px] md:text-[18px] lg:text-[14px] leading-[15px] md:leading-[18px] lg:leading-[15px] shade-color card-title font-changa text-white drop-shadow-[1px_1px_0_black] pt-[.94rem] w-[250px] md:w-[633px] lg:w-[230px] line-clamp-3">
                                {"Sinergi Himalkom IPB dan HMIF ITB Wujudkan Kolaborasi Inspiratif Melalui I-Collab 2024"}
                            </h1>

                            {/* Tanggal */}
                            <p className="pt-2 font-monts text-[12px] leading-[16px] font-bold tracking-[.25px] text-black">
                                {"03/03/2024"}
                            </p>   

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Komnews_dalem4;