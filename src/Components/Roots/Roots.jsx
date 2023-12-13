import { Outlet } from "react-router-dom";

const Roots = () => {

    return (
        <div>
            <div><Outlet></Outlet></div>
        </div>
    );
};

export default Roots;