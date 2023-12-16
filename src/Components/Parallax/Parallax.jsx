// Parallax.jsx
import React, { useRef } from 'react';
import './Parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const setBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className='h-[100vh]'>
            <div
                className='parallax md:text-[100px] text-[30px]'
                style={{
                    background:
                        type === 'About'
                            ? 'linear-gradient(180deg, #111132, #0c0c1b)'
                            : 'linear-gradient(180deg, #111132, #505064)',
                }}
                ref={ref}
            >
                <motion.h1 style={{ y: setBg }}>
                    {type === 'About' ? 'What About Me' : 'Services'}
                </motion.h1>
                <motion.div className='mountains'></motion.div>
                <motion.div style={{ y: setBg }} className='planets'></motion.div>
                <motion.div className='stars'></motion.div>
            </div>
        </div>
    );
};

export default Parallax;
