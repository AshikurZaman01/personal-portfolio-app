import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const SocialLinks = () => {
    // Array of social links with corresponding icons
    const links = [
        <Link key="github"><FaGithub className="text-xl" /></Link>,
        <Link key="linkedin"><FaLinkedin className="text-xl" /></Link>,
        <Link key="facebook"><FaFacebookSquare className="text-xl" /></Link>,
        <Link key="instagram"><FaInstagramSquare className="text-xl" /></Link>,
    ];

    // Variants for motion animation
    const variants = {
        visible: (i) => ({
            opacity: 1,
            transition: { delay: i * 0.3 },
        }),
        hidden: { opacity: 0 },
    };

    return (
        <div>
            {/* Motion animation applied to the list of social links */}
            <motion.ul variants={variants} initial="hidden" animate="visible" className="flex flex-row justify-center gap-4">
                {links.map((item, i) => (
                    <motion.li variants={variants} key={item.key} custom={i}>
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default SocialLinks;
