import ImageAnimation from "./ImageAnimation";

const Hero = () => {
    return (
        <div className="md:max-w-[1100px] h-[80vh] mx-auto">

            <div className="flex  items-center h-[80vh]">
                <div className="flex-1 order-2 md:order-1">
                    <h1>Ashik</h1>
                </div>

                <div className="flex-1 order-1 md:order-2 "><ImageAnimation></ImageAnimation></div>
            </div>

        </div>
    );
};

export default Hero;