import Logo from './Logo';
import Sidebar from './Sidebar/Sidebar';
import SocialLinks from './SocialLinks';

const Navbar = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <div className='navbar  md:max-w-[1000px]  mx-auto sm:pt-10 pb-5'>
                <div className='wrapper w-[100%] flex justify-between '>
                    {/* Logo  */}
                    <div><Logo></Logo></div>
                    {/* Social links  */}
                    <SocialLinks></SocialLinks>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
