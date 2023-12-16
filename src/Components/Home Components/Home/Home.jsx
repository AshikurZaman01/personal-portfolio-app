import "../../../Sass/home.scss"
import Parallax from "../../Parallax/Parallax";
import Navbar from "../Navbar/Navbar";
import Links from "../Navbar/Sidebar/Links/Links";
import Hero from "./HeroSection/Hero";

const Home = () => {

    <Links></Links>

    return (
        <div >
            <section className="md:min-h-screen" id="Home">
                <Navbar />
                <Hero></Hero>
            </section>

            <section id="About"><Parallax type={'About'}></Parallax></section>
            <section id="Services"><Parallax type={'Services'}></Parallax></section>
            <section id="Portfolio">Portfolio</section>
            <section id="Contact">Contact</section>

        </div>
    );
};

export default Home;