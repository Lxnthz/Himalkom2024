import { motion } from 'framer-motion';

const IGallery_card = (props) => {
    const imageSrc = `/IGalleryThumbnail/${props.img}.svg`;

    const redirectToLink = () => {
        window.open(props.link, '_blank');
    }

    return (
        <motion.div
            whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
            whileHover={{ scale: [null, 1.05, 1.05] }}
            transition={{ duration: 0.5 }}
            className='flex flex-col bg-[#E49800] p-[12px] rounded-md mx-2 min-h-full justify-between'
        >
            <img className="w-full h-auto object-cover" src={imageSrc} alt="gambar" />
            <div className='flex flex-col'>
                <h1 className='font-changa text-[#F0E4D4] text-stroke-2 text-stroke-color-black text-shadow-black text-2xl'>{props.title}</h1>
                <h1 className='w-full text-end font-changa text-[#F0E4D4] text-stroke-1 text-stroke-color-black'>{props.category}</h1>
            </div>
            <div className='flex flex-col'>
                <p className='text-justify text-[#F0E4D4] text-[12px] font-monts'>{props.desc}</p>
                <h1 className='mt-3 text-[#F0E4D4] text-[13px] font-monts'>Created by <span className='createdby'>{props.created}</span></h1>
            </div>
            <button onClick={redirectToLink} className='flex border-2 w-auto justify-center align-center p-[3px] bg-[#E49800] mt-[10px] mb-[5px] cursor-pointer shadow-solid-black'><span>See Project {'>'}</span></button>
        </motion.div>
    );
}

export default IGallery_card;
