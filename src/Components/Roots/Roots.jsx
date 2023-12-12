import { Outlet } from "react-router-dom";
import Navbar from "../Home Components/Navbar/Navbar";

const Roots = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div><Outlet></Outlet></div>
        </div>
    );
};

export default Roots;