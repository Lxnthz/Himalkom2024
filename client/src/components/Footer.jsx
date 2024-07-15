import divider from '../assets/divider.svg'
import synapse from '../assets/logosynapse.svg'
import ilkom from '../assets/logoilmukomputer.svg'
import ipb from '../assets/logoipb.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'


const handleFacebookClick = () => {
    window.open('https://www.facebook.com', '_blank');
}; 
const handleInstagramClick = () => {
    window.open('https://www.instagram.com', '_blank');
};
const handleTwitterClick = () => {
    window.open('https://www.twitter.com', '_blank');
};
const handleYouTubeClick = () => {
    window.open('https://www.youtube.com', '_blank');
};


function Footer() {
    return (
        <footer className="p-4 bg-[#F0E4D4] text-black text-center font-monts gap-5 flex flex-col">
            <section className='w-full flex flex-col items-center gap-5'>
                <div className='flex flex-col items-center justify-center gap-5 md:flex-row'>
                    <img className='w-[80px] lg:w-[110px]' src={ilkom} alt="ilmu komputer"></img>
                    <img className='w-[120px] lg:w-[170px]' src={synapse} alt="synapse"></img>
                    <img className='w-[150px] md:w-[200px] lg:w-[250px]' src={ipb} alt="ipb"></img>
                </div>
                <div className='flex flex-row gap-5'>
                    <img src={facebook} onClick={handleFacebookClick} className='cursor-pointer hover:scale-110 transition-transform duration-300'></img>
                    <img src={instagram} onClick={handleInstagramClick} className='cursor-pointer hover:scale-110 transition-transform duration-300'></img>
                    <img src={twitter} onClick={handleTwitterClick} className='cursor-pointer hover:scale-110 transition-transform duration-300'></img>
                    <img src={youtube} onClick={handleYouTubeClick} className='cursor-pointer hover:scale-110 transition-transform duration-300'></img>
                </div>
            </section>
            <figure className='my-6 flex justify-center lg:px-10'>
                <img className='w-full' src={divider}></img>  {/* butuh versi layar lebih gede */}          
            </figure>
            <section className='flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:text-left lg:px-10 2xl:text-lg'>
                <p className="max-w-[350px] lg:w-1/2">Jl. Meranti Wing 20 Kampus IPB, Babakan, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680</p>
                <div className='flex flex-col items-left'>
                    <p>Email: himalkom@apps.ipb.ac.id</p>
                    <p>Phone: +62 851-5539-1409 </p>
                </div>
            </section>
            <section className='py-5 mt-1'>
                <p className='font-bold'>Copyright &copy; Himalkom 2024. All right reserved</p>
            </section>
        </footer>
    );
}

export default Footer;
