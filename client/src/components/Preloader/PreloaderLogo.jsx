import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PreloaderLogo = () => {
    const [reverseFast, setReverseFast] = useState(false);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReverse(!reverse);
        }, 5500);

        return () => clearTimeout(timer);
    }, [reverse]);

    useEffect(() => {
        const timerFast = setTimeout(() => {
            setReverseFast(!reverseFast);
        }, 4500);

        return () => clearTimeout(timerFast);
    }, [reverseFast]);
    
    return (
        <motion.svg 
            width="230" 
            height="230" 
            viewBox="0 0 240 240"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 8, ease: "easeInOut" }}
            >
            {/* Lingkaran luar logo */}
            <motion.circle 
                cx="115"
                cy="115"
                r="107.958"
                stroke="#2EC4B6"
                strokeWidth="14.0681"
                strokeDasharray="678.58"
                initial={{ strokeDashoffset: 678.58 }}
                animate={{
                    strokeDashoffset: reverse ? 678.58 : 0,
                    rotate: reverse ? 0 : 180,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Lingkaran tengah logo */}
            <motion.path 
                d="M124.9 78.8978C128.592 81.8375 131.179 85.859 131.744 90.5626C131.998 93.9021 131.693 97.218 130.098 100.205C129.987 100.424 129.876 100.645 129.761 100.87C127.816 104.492 124.54 107.173 120.636 108.49C116.098 109.715 111.441 109.466 107.255 107.197C102.975 104.586 100.129 101.153 98.9297 96.2844C97.8832 91.4633 99.0884 87.3242 101.611 83.2556C103.215 80.9227 105.232 79.1871 107.749 77.8701C108.045 77.7104 108.045 77.7104 108.349 77.5479C113.569 74.961 120.154 75.4831 124.881 78.8931L124.9 78.8978Z" 
                fill="#CBF3F0"
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: reverseFast ? 0 : 1 
                }}
                transition={{ duration: 0.5, delay: 3 }}
            />

            {/* Lingkaran bawah logo */}
            <motion.path 
                d="M124.9 167.324C125.761 167.968 126.511 168.664 127.252 169.44C127.496 169.683 127.496 169.683 127.746 169.93C131.062 173.387 132.308 177.737 132.237 182.441C132.092 186.909 129.973 190.813 126.781 193.894C123.16 196.904 118.997 198.198 114.317 197.892C109.613 197.292 105.474 195.164 102.394 191.566C99.642 187.756 98.6072 183.241 99.2657 178.608C100.221 173.975 102.887 169.906 106.815 167.249C112.506 163.862 119.256 163.745 124.9 167.319V167.324Z" 
                fill="#2EC4B6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                    opacity: reverseFast ? 0 : 1, 
                    y : reverseFast ? 25 : 0
                }}
                transition={{ duration: 0.5, delay: 3.2 }}
            />

            {/* abstrak bawah kiri logo */}
            <motion.path 
                d="M72.2195 155.33C73.7034 156.174 75.1592 157.077 76.5937 157.987C77.4945 158.54 78.4163 159.05 79.3453 159.563C82.8964 161.548 85.6715 163.561 86.918 167.63C87.6917 170.64 87.3742 173.697 86.7239 176.684C86.2748 178.817 86.0937 180.964 85.9408 183.128C85.7303 185.621 84.9531 187.808 83.0481 189.501C81.6606 190.529 80.2966 191.006 78.5798 190.912C76.1575 190.366 73.9233 189.315 71.6891 188.278C71.5179 188.2 71.3458 188.121 71.1694 188.04C68.7 186.912 66.3248 185.719 63.9965 184.325C63.7096 184.164 63.4227 184.005 63.1358 183.845C57.2093 180.576 57.2093 180.576 56.1981 177.73C55.6431 175.673 56.0704 173.521 56.5273 171.475C56.5805 171.23 56.6339 170.985 56.6887 170.732C57.152 168.648 57.7023 166.616 58.3655 164.57C58.4179 164.406 58.4701 164.243 58.5242 164.074C60.97 156.477 60.97 156.477 63.9333 154.808C66.873 153.411 69.4599 153.782 72.235 155.32L72.2195 155.33Z" 
                fill="#2EC4B6"
                initial={{ opacity: 0, y: -15, x: 15 }}
                animate={{ 
                    opacity: reverseFast ? 0 : 1, 
                    y: reverseFast ? 15 : 0, 
                    x: reverseFast ? -15 : 0
                }}
                transition={{ duration: 0.5, delay: 3.4 }}
            />

            {/* Lengkung atas 'S', warna biru paling muda logo */}
            <motion.path 
                d="M123.189 35.1547C123.364 35.1787 123.539 35.2027 123.72 35.2274C133.621 36.615 143.122 40.66 151.001 46.9157C151.228 47.097 151.457 47.2778 151.69 47.466C154.982 50.147 158.016 52.9926 160.65 56.3321C160.804 56.5174 160.958 56.7037 161.115 56.8942C162.508 58.5781 163.702 60.3748 164.878 62.2092C165.044 62.4655 165.21 62.7195 165.379 62.9829C166.515 64.7773 167.493 66.6281 168.413 68.5331C168.568 68.86 168.726 69.1845 168.883 69.509C171.329 74.5653 172.717 79.9509 173.587 85.501C173.618 85.6962 173.649 85.8914 173.68 86.0937C175.331 97.1469 174.191 112.198 167.472 121.37C166.959 121.904 166.959 121.904 166.428 122.37C166.167 122.604 166.167 122.604 165.898 122.845C164.153 124.15 161.783 123.943 159.713 123.722C158.744 123.465 157.971 123.077 157.126 122.546C156.929 122.426 156.731 122.306 156.529 122.184C155.859 121.765 155.2 121.332 154.539 120.9C153.944 120.514 153.347 120.133 152.747 119.752C152.51 119.602 152.51 119.602 152.268 119.449C151.27 118.825 150.257 118.266 149.21 117.737C145.753 115.982 143.825 113.974 142.531 110.305C141.574 106.989 142.204 104.026 142.978 100.757C143.989 96.3591 143.905 91.3969 142.788 87.0461C142.74 86.8086 142.692 86.5711 142.642 86.3265C141.986 83.2692 140.579 80.4236 138.785 77.8837C138.643 77.6746 138.5 77.4651 138.355 77.2487C133.957 70.9695 127.701 67.0185 120.199 65.4193C112.368 64.1376 104.583 65.8544 98.0925 70.3815C91.7427 75.0145 87.5331 81.5759 86.122 89.3603C85.4706 93.5699 85.7316 97.7561 86.8205 101.872C86.883 102.116 86.9453 102.363 87.0098 102.615C88.101 106.307 89.9495 109.788 92.4659 112.68C92.6053 112.855 92.7457 113.028 92.8892 113.209C94.7706 115.507 97.3105 117.16 99.7563 118.807C99.9409 118.935 100.126 119.063 100.316 119.195C104.925 122.205 110.805 122.981 116.19 123.099C119.318 123.174 122.329 123.407 125.386 123.971C125.595 124.009 125.804 124.046 126.018 124.085C132.039 125.192 137.613 127.26 143.022 130.082C143.188 130.169 143.356 130.256 143.527 130.345C147.173 132.271 150.536 134.625 153.616 137.377C153.815 137.55 154.014 137.723 154.218 137.901C156.735 140.121 159.087 142.487 161.133 145.145C161.41 145.49 161.41 145.49 161.695 145.846C168.209 154.03 174.535 166.047 173.783 176.889C173.47 178.817 172.266 180.064 170.772 181.24C167.433 183.638 163.647 185.543 159.931 187.307C159.779 187.379 159.627 187.451 159.472 187.525C158.452 188.007 157.429 188.483 156.415 188.953C156.17 189.067 155.928 189.182 155.677 189.301C153.609 190.265 151.561 191.098 149.256 190.439C147.036 189.531 145.658 188.064 144.647 185.9C144.059 184.329 143.908 182.796 143.852 181.126C143.598 174.118 140.724 168.45 136.42 163.088C135.402 161.771 134.169 160.855 132.921 159.767C127.629 155.416 121.139 153.794 114.413 153.605C104.676 153.333 95.4338 151.16 86.8969 146.621C86.7233 146.531 86.5488 146.442 86.3701 146.35C83.6891 144.967 81.2903 143.246 78.8915 141.459C78.678 141.301 78.4635 141.143 78.2448 140.979C77.0336 140.064 75.9189 139.053 74.8112 138.016C74.3126 137.559 73.8046 137.122 73.2849 136.689C68.6284 132.621 65.1008 127.353 62.2081 121.92L61.9682 121.478C54.5602 107.791 53.6195 91.3755 58.0173 76.5594C60.0939 69.8569 63.2852 63.6012 67.6125 58.0745C67.8062 57.8182 68.0005 57.5619 68.191 57.3055C72.9886 50.9322 79.0326 45.9935 85.9468 42.0896C86.1116 41.9946 86.276 41.8996 86.4454 41.8027C97.4751 35.4765 110.904 33.2658 123.368 35.0296L123.189 35.1547Z" 
                fill="#CBF3F0"
                initial={{ opacity: 0, x: -45, y: -35, rotate: 90 }}
                animate={{ 
                    opacity: reverseFast ? 0 : 1, 
                    x: 0, 
                    y: 0 , 
                    rotate: reverse ? 180 : 0
                }}
                transition={{ duration: 0.5, delay: 2.5 }}
            />

            {/* Bayangan 'S' logo */}
            <motion.path 
                d="M169.996 181.677C166.852 183.824 163.361 185.573 159.931 187.201C159.779 187.273 159.627 187.345 159.472 187.42C158.451 187.902 157.428 188.377 156.415 188.847C156.232 188.933 156.05 189.019 155.865 189.106C155.802 189.136 155.74 189.165 155.676 189.195C153.609 190.159 151.561 190.992 149.256 190.333C147.036 189.426 145.658 187.958 144.646 185.794C144.059 184.223 143.908 182.69 143.852 181.02C143.598 174.012 140.724 168.344 136.42 162.982C135.622 161.95 134.692 161.164 133.726 160.349C133.46 160.124 133.191 159.897 132.921 159.661C127.629 155.31 121.138 153.688 114.412 153.5C104.676 153.227 95.4335 151.054 86.8966 146.515C86.7707 146.45 86.6442 146.385 86.516 146.319C86.4676 146.295 86.4189 146.27 86.3698 146.244C83.6888 144.862 81.29 143.14 78.8912 141.353C78.8336 141.31 78.7759 141.267 78.718 141.225C78.5616 141.109 78.4042 140.993 78.2445 140.873C77.0333 139.958 75.9186 138.947 74.8109 137.91C74.3124 137.454 73.8044 137.016 73.2846 136.583C68.6281 132.515 65.1005 127.247 62.2078 121.814L61.968 121.372C57.4968 113.111 55.3816 103.856 55.374 94.5593C63.2056 100.601 74.6894 106.363 90.4069 109.858C91.0329 110.809 91.7199 111.717 92.4656 112.574C92.5103 112.63 92.555 112.686 92.6 112.742C92.6953 112.861 92.7914 112.981 92.8889 113.104C94.6779 115.288 97.0622 116.891 99.395 118.458C99.5155 118.539 99.6359 118.62 99.7561 118.701L99.758 118.702C99.9419 118.83 100.126 118.958 100.316 119.089C104.925 122.099 110.805 122.875 116.19 122.993C119.318 123.068 122.328 123.301 125.386 123.865C125.595 123.903 125.804 123.94 126.018 123.979C132.039 125.087 137.612 127.154 143.021 129.976C143.168 130.053 143.316 130.129 143.466 130.207L143.527 130.239C147.172 132.165 150.535 134.519 153.616 137.271L153.658 137.307C153.843 137.468 154.028 137.629 154.218 137.795C156.735 140.016 159.086 142.381 161.132 145.039C161.41 145.385 161.41 145.385 161.694 145.74C167.882 153.513 173.9 164.745 173.843 175.143L169.996 181.677Z" 
                fill="#2EC4B6" 
                fillOpacity="0.33"
                initial={{ opacity: 0, x: 0, y: 25, rotate: 0 }}
                animate={{ 
                    opacity: reverseFast ? 0 : 1, 
                    x: [-50, 0], 
                    y: [50, 0] , 
                    rotateZ: [-50, 0]
                }}
                transition={{ duration: .5, delay: 2.7 }}
            />

            {/* Bagian bawah 'S', warna paling gelap logo */}
            <motion.path 
                d="M106.869 121.975C109.92 122.753 113.134 123.032 116.19 123.098C119.318 123.174 122.328 123.407 125.385 123.971C125.481 123.988 125.577 124.005 125.674 124.023C125.788 124.043 125.902 124.064 126.018 124.085C132.038 125.192 137.612 127.259 143.021 130.082C143.188 130.169 143.355 130.256 143.527 130.345C147.172 132.271 150.535 134.625 153.616 137.377C153.815 137.55 154.013 137.722 154.218 137.901C156.734 140.121 159.086 142.487 161.132 145.145C161.399 145.478 161.409 145.49 161.664 145.808L161.694 145.845C168.208 154.03 174.535 166.047 173.782 176.889C173.469 178.817 172.265 180.064 170.772 181.239C167.432 183.638 163.646 185.543 159.93 187.307C159.779 187.379 159.627 187.451 159.472 187.525C158.451 188.007 157.428 188.482 156.414 188.953C156.35 188.983 156.285 189.013 156.221 189.044C156.041 189.128 155.861 189.213 155.676 189.301C153.609 190.265 151.56 191.098 149.256 190.439C147.035 189.531 145.657 188.064 144.646 185.9C144.058 184.329 143.908 182.796 143.851 181.126C143.597 174.118 140.723 168.45 136.42 163.088C135.622 162.056 134.692 161.27 133.726 160.455C133.459 160.23 133.19 160.002 132.92 159.767C127.629 155.416 121.138 153.793 114.412 153.605C104.676 153.332 95.4331 151.159 86.8962 146.621C86.7226 146.531 86.5481 146.442 86.3694 146.35C83.6884 144.967 81.2896 143.246 78.8908 141.458C78.8332 141.416 78.7754 141.373 78.7176 141.33C78.5612 141.215 78.4037 141.099 78.2441 140.979C77.0329 140.064 75.9182 139.053 74.8105 138.015C74.3119 137.559 73.8039 137.122 73.2842 136.689C68.6277 132.621 65.1001 127.353 62.2074 121.92L61.9675 121.478C57.9414 114.039 55.8255 105.794 55.4387 97.4387C65.0933 107.401 81.7241 118.356 106.869 121.975Z" 
                fill="#2EC4B6"
                initial={{ opacity: 0, x: 20, y: 125 }}
                animate={{ 
                    opacity: reverseFast ? 0 : 1, 
                    x: [-50, 0], 
                    y: [50, 0], 
                    rotateZ: [-50, 0]
                }}
                transition={{ duration: .5, delay: 2.8 }}
            />
        </motion.svg>
    );
};

export default PreloaderLogo;