import { Link } from "react-router-dom";

const Links = () => {
    const items = ["Homepage", "About", "Services", "Portfolio", "Contact"];

    return (
        <div>
            <nav>
                <ul className="text-2xl flex flex-col justify-start items-center w-full gap-5 capitalize">
                    {items.map((item) => (
                        <a href={`#${item}`} key={item}>
                            {item}
                        </a>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Links;
