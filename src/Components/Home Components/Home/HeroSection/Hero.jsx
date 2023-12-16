import HeroInfo from "./HeroInfo";
import ImageAnimation from "./ImageAnimation";

const Hero = () => {
    return (
        <div className="md:max-w-[1100px] mx-auto ">

            <div className="flex md:flex-row flex-col items-center h-[80vh] gap-4">
                <div className="w-[70%] order-2 md:order-1">
                    <HeroInfo></HeroInfo>
                </div>

                <div className="shrink-0 order-1 md:order-2 ml-3 "><ImageAnimation></ImageAnimation></div>
            </div>

        </div>
    );
};

export default Hero;