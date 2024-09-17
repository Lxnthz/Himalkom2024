import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const IGallery_card = (props) => {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const importImage = async () => {
            try {
                const image = await import(`../../assets/IGalleryAssets/IGalleryThumbnail/${props.img}.svg`);
                setImageSrc(image.default);
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };
        importImage();
    }, [props.img]);

    const redirectToLink = () => {
        window.open(props.link, '_blank');
    }

    return (
        <motion.div
            whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
            whileHover={{ scale: [null, 1.05, 1.05] }}
            transition={{ duration: 0.5 }}
            className='IG-content'
        >
            {imageSrc && (
                <img className="IG-content-img" src={imageSrc} alt="gambar" />
            )}
            <h1 className=''>{props.title}</h1>
            <h1 className=''>{props.category}</h1>
            <p className=''>{props.desc}</p>
            <h1 className=''>Created by <span className='createdby'>{props.created}</span></h1>
            <button className='' onClick={redirectToLink}><span>See Project {'>'}</span></button>
        </motion.div>
    );
}

export default IGallery_card;