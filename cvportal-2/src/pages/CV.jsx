import "../index.css";
import "./CV.css";
import cvData from "../data/cv.json";

function CVsection() {
    return (
        <>
            <div className="cv-page">
                {/* PROFILE */}
                <section className="cv-section">
                    <h2>Profile</h2>
                    <article className="cv-item">
                        <h3>{cvData.profile.name}</h3>
                        <p>{cvData.profile.description}</p>
                    </article>
                </section>

                {/* TECHNICAL SKILLS */}
                <section className="cv-section">
                    <h2>Technical Skills</h2>
                    <ul>
                        {cvData.skills.core.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>

                    <h3>Upcoming</h3>
                    <ul>
                        {cvData.skills.upcoming.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section>

                {/* SOFT SKILLS */}
                <section className="cv-section cv-softskills">
                    <h2>Soft Skills</h2>
                    <ul>
                        {cvData.softskills.core.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section>

                <section className="cv-section">
                    <h2>Education</h2>

                    {cvData.education.items.map((edu, index) => (
                        <article key={index} className="cv-item">
                            <h3>{edu.title}</h3>
                            <p className="cv-date">{edu.date}</p>
                            <p className="cv-description">{edu.description}</p>
                        </article>
                    ))}
                </section>

                <section className="cv-section cv-job">
                    <h2 className="cv-work">Work Experience</h2>
                    {cvData.workexperience.items.map((work, index) => (
                        <article key={index} className="cv-work">
                            <h3> {work.title}</h3>
                            <p>{work.date}</p>
                            <p>{work.location}</p>
                            <p>{work.responsibilities}</p>
                        </article>
                    ))}
                </section>
            </div>
        </>
    );
}

export default CVsection;
