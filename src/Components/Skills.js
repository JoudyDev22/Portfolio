import { Container, Row ,Col} from "react-bootstrap";

export default function Skills(){
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx ">
                    <h1>Skills</h1>
                    <div  className="owl-carousel owl-theme skill-slider">
                        <div className="parent">
                        <div className="item">HTML</div>
                        <div className="item">CSS</div>
                        <div className="item">JavaScript</div>
                        <div className="item">React</div>
                        <div className="item">Bootstrap</div>
                        <div className="item">React Bootstrap</div>
                        </div>
                        
                    </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    
}