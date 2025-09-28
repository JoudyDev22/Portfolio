import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerimg from '../assests/header-img.svg';
import { useEffect, useState } from "react";

export default function Banner() {
    let Rotate = ['Front-End Developer'];
    let period = 2000;
    const [loopnum, setloopnum] = useState(0);
    const [text, settext] = useState('');
    const [isdeleting, setisdeleting] = useState(false);
    const [delta, setdelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
    }, [text]);

    function tick() {
        let i = loopnum % Rotate.length;
        let fulltext = Rotate[i];
        let updatedtext = isdeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);
        settext(updatedtext);
        if (isdeleting) {
            setdelta(prev => prev / 2)
        }
        if (!isdeleting && updatedtext === fulltext) {
            setisdeleting(true);
            setdelta(period)
        } else if (isdeleting && updatedtext === '') {
            setisdeleting(false);
            setloopnum(loopnum + 1)
            setdelta(500)
        }
    }

    return (
        <section className="Banner py-10" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="mb-4 mb-md-0">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <span className="tagline d-block mb-4 " style={{width:"object-fit"}}>Welcome to my Portfolio</span>
                            <h1 className="mb-3" style={{ fontSize: "2rem" }}>
                                Hi! I'm Joudy Dawalibi <span className="wrap">{text}</span>
                            </h1>
                            <p className="mb-4" style={{ fontSize: "1rem" }}>
                                I am a Front-End Developer with a passion for building dynamic and responsive web applications. Graduated from the Faculty of Informatics Engineering University of Aleppo, I have been immersed in the field for over a year. My projects reflect my commitment to creating user-friendly interfaces and enhancing user experiences. I am eager to continue growing my skills and contributing to innovative projects.
                            </p>
                            <button className="btn btn-primary d-flex align-items-center">
                                Let’s Connect <ArrowRightCircle style={{ marginLeft: "12px" }} size={"25px"} />
                            </button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={5} className="text-center">
                        <div>
                            <img
                                src={headerimg}
                                style={{ width: "100%", maxWidth: "350px", height: "auto" }}
                                alt="img"
                                className="img-fluid mx-auto d-block"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
