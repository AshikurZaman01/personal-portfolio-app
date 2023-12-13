import { Link } from "react-router-dom";

const Links = () => {
    const items = ["Home", "About", "Services", "Portfolio", "Contact"];

    return (
        <div>
            <nav>
                <ul className="text-2xl flex flex-col justify-start items-center w-full gap-5 capitalize">
                    {items.map((item) => (
                        <Link to={`#${item}`} key={item}>
                            {item}
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Links;
