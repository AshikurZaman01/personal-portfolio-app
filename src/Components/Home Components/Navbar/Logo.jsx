import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            {/* Link to the home page */}
            <Link to={'/'}>
                {/* Motion-animated heading with gradient text */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text px-5">
                    Ashik
                </motion.h1>
            </Link>
        </div>
    );
};

export default Logo;
