import "../../../Sass/home.scss"
import Navbar from "../Navbar/Navbar";
import Links from "../Navbar/Sidebar/Links/Links";
import Hero from "./HeroSection/Hero";

const Home = () => {

    <Links></Links>

    return (
        <div >
            <section id="Home">
                <Navbar />
                <Hero></Hero>
            </section>

            <section id="About">About</section>
            <section id="Services">Services</section>
            <section id="Portfolio">Portfolio</section>
            <section id="Contact">Contact</section>

        </div>
    );
};

export default Home;