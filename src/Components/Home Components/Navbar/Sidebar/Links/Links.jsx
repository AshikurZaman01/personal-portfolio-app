import { motion } from 'framer-motion';

const Links = () => {
    const items = ["Home", "About", "Services", "Portfolio", "Contact"];

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,

        },
    };

    return (
        <div>
            <nav>
                <motion.ul variants={variants} className="text-2xl flex flex-col justify-start items-center w-full gap-5 capitalize">
                    {items.map((item) => (
                        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.3 }}>
                            {item}
                        </motion.a>
                    ))}
                </motion.ul>
            </nav>
        </div>
    );
};

export default Links;
