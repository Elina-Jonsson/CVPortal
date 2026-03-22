import codePic from "../assets/code.png";
import chasLogo from "../assets/chas-academy-emblem.png";
import gearPic from "../assets/ex-pic.png";
import "../index.css";

function Home() {
    return (
        <>
            <main>
                <section className="welcome-text">
                    <h2>Welcome to my corner of the web!</h2>
                    <p>
                        Dive in to discover what I create, what I love, and a
                        bit of who I am.
                    </p>
                </section>

                <section className="inspiration">
                    <div className="quote">
                        <h3>"Where creativity meets logic."</h3>
                        <p>– My journey into development</p>
                    </div>

                    <img src={codePic} alt="Person coding" />
                </section>

                <div className="explore-container">
                    <section className="explore1">
                        <h2>Quick overview</h2>

                        <article>
                            <p>
                                Currently studying at Chas Academy. Want to know
                                more about the school?
                            </p>

                            <img src={chasLogo} alt="Chas Academy Logo" />

                            <a href="https://chasacademy.se/" target="_blank">
                                <strong>Read more here!</strong>
                            </a>
                        </article>
                    </section>

                    <section className="explore2">
                        <h2>About this portal</h2>

                        <p>
                            Here you can view my CV, see my portfolio projects,
                            and learn more about me.
                        </p>

                        <img src={gearPic} alt="People working on a gear" />
                    </section>
                </div>
            </main>
        </>
    );
}

export default Home;
