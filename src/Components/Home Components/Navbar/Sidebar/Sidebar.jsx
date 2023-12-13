import ToggleButton from './ToggleButton/ToggleButton';
import Links from './Links/Links';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: 'circle(1200px at 30px 40px)',
            transition: {
                type: 'spring',
                stiffness: 20,
            },
        },
        closed: {
            clipPath: 'circle(30px at 30px 30px)',
            transition: {
                delay: 0.2,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <div>
            <motion.div animate={open ? "open" : "closed"} className='sidebar bg-white text-black '>
                <motion.div className='bg fixed top-0 left-0 w-[300px] min-h-screen  bg-white flex flex-col justify-center items-center z-30' variants={variants}>
                    <Links></Links>
                </motion.div>
                <ToggleButton setOpen={setOpen}></ToggleButton>
            </motion.div>
        </div >
    );
};

export default Sidebar;