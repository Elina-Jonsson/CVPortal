import selfPic from "../assets/self-pic.png";
import "../index.css";
import "./AboutMe.css";

function AboutMe({toggleEaster}) {
    return (
        <>

            <main>
                <section className="about-me">
                    <h2>Get to know me a little better</h2>
                    <p className="intro">
                        Check out my different about me cards down below.
                    </p>

                    <div className="about-grid">
                        <article className="about-card">
                            <h3>Who am I?</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Dolorum pariatur quis maxime
                                eveniet eos quo aut sit ducimus amet velit
                                suscipit necessitatibus e xpedita modi quibusdam
                                repudiandae reprehenderit explicabo, quasi
                                minima!
                            </p>
                        </article>
                        <article className="about-card">
                            <img
                                src={selfPic}
                                id="self-pic"
                                alt="A picture of me"
                                onClick={toggleEaster}
                            />
                        </article>
                        <article className="about-card">
                            <h3>Hobbies</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Dolorum pariatur quis maxime
                                eveniet eos quo aut sit ducimus amet velit
                                suscipit necessitatibus e xpedita modi quibusdam
                                repudiandae reprehenderit explicabo, quasi
                                minima!
                            </p>
                        </article>
                        <article className="about-card">
                            <h3>Fun facts</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Dolorum pariatur quis maxime
                                eveniet eos quo aut sit ducimus amet velit
                                suscipit necessitatibus e xpedita modi quibusdam
                                repudiandae reprehenderit explicabo, quasi
                                minima!
                            </p>
                        </article>
                    </div>
                </section>
            </main>

        </>
    );
}

export default AboutMe;
