import { RiMenu2Line } from "react-icons/ri";

const ToggleButton = ({ setOpen }) => {
    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div>
            <button onClick={handleClick} className='w-[30px] h-[30px] m-3 text-2xl fixed bg-transparent rounded-full cursor-pointer z-40'><RiMenu2Line /></button>
        </div>
    );
};

export default ToggleButton;