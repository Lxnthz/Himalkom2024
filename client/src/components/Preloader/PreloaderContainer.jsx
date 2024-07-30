import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PreloaderLogo from "./PreloaderLogo";

const PreloaderContainer = () => {
    const [showLogo, setShowLogo] = useState(true);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const logoTimer = setTimeout(() => {
            setShowLogo(false);
            setShowText(true);
        }, 8000);

        return () => clearTimeout(logoTimer);
    }, []);

    return (
        <section className="w-full max-h-[100vh] flex justify-center items-center bg-[#E49800] overflow-hidden">
        <AnimatePresence>
            {showLogo && (
                <motion.div
                    className="preloader-logo-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <PreloaderLogo />
                </motion.div>
            )}
            {showText && (
                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 3 }}
                >
                    <motion.p
                        className="preloader-text font-changa italic flex flex-col items-center md:flex-row gap-x-2 text-lg lg:text-xl"
                    >
                        <motion.span
                            initial={{ opacity: 0, rotateX: 180 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Synergy,
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, rotateX: 180 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            Networking,
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, rotateX: -180 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            transition={{ duration: 0.5, delay: 2 }}
                        >
                            and Collaboration
                        </motion.span>
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
        </section>
    );
};

export default PreloaderContainer;
