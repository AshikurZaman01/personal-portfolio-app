import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const SocialLinks = () => {
    // Array of social links with corresponding icons
    const links = [
        <a key="github" href="https://github.com/ashikurzaman01" target="_blank" rel="noopener noreferrer"><FaGithub className="text-xl" /></a>,
        <a key="linkedin" href="https://www.linkedin.com/in/md-ashikur-zaman-351769293" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-xl" /></a>,
        <a key="facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="text-xl" /></a>,
        <a key="instagram" href="https://www.instagram.com/mdashikurzaman001/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="text-xl" /></a>,
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
            <motion.ul variants={variants} initial="hidden" animate="visible" className="flex flex-col md:flex-row justify-center gap-4">
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
