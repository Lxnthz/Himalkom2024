import berita from "../assets/Komnews/komnews-icollabitb.jpeg"
import berita2 from "../assets/Komnews/komnews_berita.svg"
import berita3 from "../assets/Komnews/komnews-sample.svg"
import berita4 from "../assets/Komnews/komnews-saungdesain23.webp"

function Komnews_dalem3(){

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
                        {"Sinergi Himalkom IPB dan HMIF ITB Wujudkan Kolaborasi Inspiratif Melalui I-Collab 2024"}
                    </h1>

                    {/* Tanggal */}
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-medium mb-[14px] md:mb-[18px] font-monts text-[#a4a29f]">
                        {"03-03-2024"}
                    </p>

                    {/* Gambar */}
                    <div className="flex justify-center m-[20px_20px] md:m-[40px_40px]">
                        <img src={berita} alt="Gambar" className="object-cover w-[100%] h-[216px] md:h-[301px] lg:h-[514px]"/>
                    </div>

                    {/* Berita */}
                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Himpunan Mahasiswa Ilmu Komputer (Himalkom) IPB kembali menunjukkan eksistensinya dengan sukses menggelar acara I-Collab 2024 secara offline. Acara yang sudah ditunggu-tunggu ini dihadiri oleh Himpunan Mahasiswa Informatika (HMIF) dari Institut Teknologi Bandung (ITB). I-Collab sendiri merupakan kegiatan studi banding yang bertujuan untuk berbagi pengalaman dan insight baru yang dapat diimplementasikan serta dikembangkan lebih lanjut."}
                    </p>

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Kegiatan ini berlangsung pada hari Minggu, 3 Maret 2024 di gedung CCR RK. 1.01. Gedung tersebut dipilih karena fasilitasnya yang mendukung untuk kegiatan-kegiatan akademik dan diskusi. Kunjungan dari HMIF ITB ini disambut dengan antusias oleh anggota Himalkom IPB, yang melihat kesempatan ini sebagai peluang untuk memperluas jaringan dan menggali lebih banyak informasi tentang cara kerja dan program dari himpunan mahasiswa informatika di ITB."}
                    </p>

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"HMIF ITB sendiri memiliki tujuh divisi yang menaungi beberapa departemen di bawahnya. Setiap divisi memiliki peran dan tanggung jawab yang spesifik, memberikan struktur yang terorganisir dengan baik dan efisien. Keberadaan tujuh divisi ini memungkinkan HMIF ITB untuk menangani berbagai aspek kegiatan mahasiswa dengan lebih terfokus. Dengan hadirnya I-Collab, Himalkom IPB berharap bisa belajar dari struktur organisasi yang berbeda ini dan mengadopsi praktik terbaik yang relevan untuk pengembangan organisasi mereka sendiri."}
                    </p>

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Acara I-Collab 2024 dibuka dengan sambutan meriah dari MC yang membangkitkan semangat peserta. Setelah itu, masing-masing ketua himpunan menyampaikan sambutan mereka. Dalam sambutannya, Bang Adzik selaku ketua Himalkom, mengungkapkan harapannya agar hubungan antara ITB dan IPB semakin erat, serta semakin banyak kolaborasi yang dapat dilakukan di masa depan. Sambutan ini mendapat respon positif dari seluruh peserta yang hadir."}
                    </p>

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Acara berlanjut dengan pemaparan divisi dan program kerja dari masing-masing himpunan. Pemaparan ini memberikan gambaran yang jelas tentang cara setiap himpunan mengelola program-program mereka dan pencapaian yang telah diraih. Selanjutnya, puncak acara yang paling dinantikan adalah sesi Focus Group Discussion (FGD). Pada sesi ini, para peserta dibagi menjadi kelompok-kelompok kecil berdasarkan bidang divisi dan departemen yang relevan. Pembagian ini memungkinkan diskusi yang lebih terfokus dan mendalam, sesuai dengan fokus dan tujuan masing-masing divisi dan departemen. FGD ini menjadi momen krusial di mana berbagai insight dan ide-ide inovatif mengalir deras. Para peserta saling berbagi pengalaman, solusi atas berbagai permasalahan, serta potensi kolaborasi yang dapat diimplementasikan ke depannya. Momen ini tidak hanya memperkaya pengetahuan tetapi juga mempererat jaringan profesional antara kedua himpunan."}
                    </p>

                    <p className="text-[14px] leading-[20px] m-[40px_0_30px_0] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] lg:my-[40px] text-black font-monts font-medium">
                        {"Acara I-Collab 2024 ditutup dengan penyerahan cenderamata dan sesi foto bersama. Momen ini tidak hanya menjadi simbol kerjasama yang telah terjalin, tetapi juga sebagai kenang-kenangan atas kebersamaan yang telah dibangun sepanjang acara. Melalui I-Collab 2024, Himalkom IPB dan HMIF ITB berhasil membuktikan bahwa kolaborasi antarhimpunan dapat menjadi wadah yang efektif untuk saling belajar dan berkembang. Harapannya, kolaborasi ini dapat terus berlanjut dan memberikan manfaat yang lebih besar bagi kedua institusi di masa mendatang."}
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
                    <div onClick={pindah('/komnews/view/saungdesain-2023')} className="flex flex-col items-center justify-center bg-komnews-card bg-[#efc166] bg-cover bg-no-repeat text-black border-[2px] border-solid border-[#111827] p-[11px] lg:p-[17px] w-[300px] md:w-[688px] lg:w-[250px] max-h-[517px] md:max-h-[517px] lg:max-h-[300px] relative cursor-pointer">
                        
                        {/* Gambar */}
                        <div className="flex flex-col ">
                            <img src={berita4} alt="gambar" className="w-[250px] h-[254px] md:w-[633px] lg:w-[230px] md:h-[363px] lg:h-[150px] object-cover border-[2px] border-solid border-black shadow-[3px_3px_0_black]" />
                        </div>

                        <div>

                            {/* Judul berita */}
                            <h1 className="text-[14px] md:text-[18px] lg:text-[14px] leading-[15px] md:leading-[18px] lg:leading-[15px] shade-color card-title font-changa text-white drop-shadow-[1px_1px_0_black] pt-[.94rem] w-[250px] md:w-[633px] lg:w-[230px] line-clamp-3">
                                {"Menyusuri Jejak Inovasi: Saung Desain Menggali Potensi Karir Melalui Perpaduan UI/UX Design dan Kecerdasan Buatan"}
                            </h1>

                            {/* Tanggal */}
                            <p className="pt-2 font-monts text-[12px] leading-[16px] font-bold tracking-[.25px] text-black">
                                {"21/10/2023"}
                            </p>   

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Komnews_dalem3;