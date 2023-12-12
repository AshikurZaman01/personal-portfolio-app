import '../../../Sass/navbar.scss'
import Logo from './Logo';
import SocialLinks from './SocialLinks';

const Navbar = () => {
    return (
        <div>
            <div className='navbar w-[1200px]  mx-auto'>
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
