import "../../../Sass/home.scss"
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <section id="Home">
                <Navbar></Navbar>
            </section>


            <section>Hero</section>
            <section id="About">Parallax</section>
            <section>Services</section>
            <section>Portfolio1</section>
            <section>Portfolio2</section>
            <section>Portfolio3</section>
            <section>Contact</section>

        </div>
    );
};

export default Home;