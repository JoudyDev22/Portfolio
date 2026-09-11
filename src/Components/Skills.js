// import { Container, Row, Col } from "react-bootstrap";
// import SkillsCard from "./SkillsCard";
// import { list } from "./SkillsList";

// export default function Skills() {
//     const showlist = list.map((item, index) =>
//         <SkillsCard key={index} img={item.img} title={item.title} text={item.text}></SkillsCard>
//     );
//     return (
//         <section className="skill" id="skills">
//             <Container>
//                 <div className="section-head">
//                     <span className="eyebrow">&lt;Skills /&gt;</span>
//                     <h2>Tools & technologies I use</h2>
//                     <p>The stack I rely on to build fast, maintainable and responsive web applications.</p>
//                 </div>
//                 <Row>
//                     <Col>
//                         <div className="skills-grid">
//                             {showlist}
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     )
// }
import { Container, Row, Col } from "react-bootstrap";
import SkillsCard from "./SkillsCard";
import { list } from "./SkillsList";

export default function Skills() {
    const showlist = list.map((item, index) =>
        <SkillsCard key={index} img={item.img} title={item.title} text={item.text}></SkillsCard>
    );
    return (
        <section className="skill" id="skills">
            <Container>
                <div className="section-head">
                    <h2>Tools & technologies I use</h2>
                    <p>The stack I rely on to build fast, maintainable and responsive web applications.</p>
                </div>
                <Row>
                    <Col>
                        <div className="skills-grid">
                            {showlist}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
