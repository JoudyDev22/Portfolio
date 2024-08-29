import { Col, Container,Row } from "react-bootstrap";
import coo from './../assests/undraw_personal_information_re_vw8a.svg'
import { Github } from "react-bootstrap-icons";


export default function Contact(){
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <h2 style={{display:"flex"}}>Contact Me</h2>
                    <p>If you want to work together, or ask for something ... send a message or use social media links below</p>
                    <h5 style={{display:"flex"}}>Contact info</h5>
                    <hr></hr>
                    <p style={{display:"flex"}}> <a style={{color:"#fff"}} href="http://joudydawalibi9@gmail.com">joudydawalibi9@gmail.com</a></p>
                    <hr></hr>
                    <h5 style={{display:"flex"}}>Social Media</h5>
                    <div className='social-icon'>
            <a href='https://www.facebook.com/joudy.dawalibi.5?mibextid=ZbWKwL' className='link'><i className="fa-brands fa-facebook-f"></i></a>
            <a href='https://www.instagram.com/joudydawalibi?igsh=cmFyeWgxNjBqdWMy'className='link' ><i className="fa-brands fa-instagram"></i></a>
            <a href='#'className='link'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href='https://github.com/JoudyDev22'className='link'><Github></Github></a>
            <a href="https://t.me/JoudyDawalibi" className='link'><i className="fa-brands fa-telegram"></i></a>
            </div>
                    </Col>
                    <Col md={6}>
                    <img src={coo} alt="ff"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}