import { Container } from "react-bootstrap";
import { timeline } from "./ExperienceInfo";

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <Container>
                <div className="section-head">
                    <h2>Education & Experience</h2>
                    <p>A short timeline of my academic background and hands-on work.</p>
                </div>
                <div className="timeline">
                    {timeline.map((item, index) => (
                        <div className="timeline-item" data-aos="fade-up" data-aos-duration="800" key={index}>
                            <span className="timeline-dot"></span>
                            <div className="timeline-card">
                                <div className="timeline-meta">
                                    <span className={`timeline-badge ${item.type === "Education" ? "edu" : "exp"}`}>
                                        {item.type}
                                    </span>
                                    <span className="timeline-date">{item.date}</span>
                                </div>
                                <h4>{item.title}</h4>
                                <p className="timeline-org">{item.org}</p>
                                <ul>
                                    {item.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
