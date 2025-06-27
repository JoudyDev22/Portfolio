import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import star from './../assests/undraw_stars_re_6je7.svg';
export default function Aboutme(){
    return (
        <section className='Aboutme' id='Aboutme'>
            <Container>
                <Row>
                    <h1>About me</h1>
                    <Col  xs={12} md={6} xl={7}>
                    <div >
                    <Card style={{ width: '20rem',padding:"10px",marginTop:"50px", background:" linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}>
            <Card.Body>
            <Card.Title style={{fontWeight:"bold",color:"#fff"}}>Personal Info</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush" data-aos="fade-right" data-aos-duration="1500"  >
            <ListGroup.Item style={{border:"none",backgroundColor:"transparent",color:"#fff"}}><span className='title'>Full Name :</span> Joudy Dawalibi</ListGroup.Item>
            <ListGroup.Item style={{border:"none",backgroundColor:"transparent",color:"#fff"}}><span className='title'>Current Address :</span> Aleppo / Syria</ListGroup.Item>
            <ListGroup.Item style={{border:"none",backgroundColor:"transparent",color:"#fff"}}><span className='title'>Primary language :</span> Arabic(Native)</ListGroup.Item>
            <ListGroup.Item style={{border:"none",backgroundColor:"transparent",color:"#fff"}}><span className='title'>Secondary language :</span> English (Intermediate)</ListGroup.Item>
            <ListGroup.Item style={{border:"none",backgroundColor:"transparent",color:"#fff"}}><span className='title'>Nationality :</span> Syrian</ListGroup.Item>
            <ListGroup.Item style={{border:"none",backgroundColor:"transparent",color:"#fff"}}><span className='title'>Email :</span> joudydawalibi9@gmail.com</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <Card.Link href="https://www.facebook.com/joudy.dawalibi.5?mibextid=ZbWKwL"><i className="fa-brands fa-facebook-f"></i></Card.Link>
            <Card.Link href="https://www.instagram.com/joudydawalibi?igsh=cmFyeWgxNjBqdWMy"><i className="fa-brands fa-instagram"></i></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/joudy-dawalibi-bb3994350/"><i className="fa-brands fa-linkedin-in"></i></Card.Link>
            <Card.Link href="https://t.me/JoudyDawalibi"><i className="fa-brands fa-telegram"></i></Card.Link>
            </Card.Body>
        </Card>
        </div>
                    </Col>
        <Col xs={12} md={6} lg={5}>
        <img src={star} style={{width:"100% "}} alt='img' className="img-fluid"></img>
        </Col>           
                </Row>
            </Container>
        </section>
);
}