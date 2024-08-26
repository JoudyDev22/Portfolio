import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerimg from '../assests/header-img.svg';
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
export default function Banner(){
    //array contain words
    let Rotate=['Front-End Developer'];
    //time between showing letter 
    let period=2000;
    //loop on array
    const [loopnum,setloopnum]=useState(0);
    //variable stores current word
    const [text,settext]=useState('');
    //test deleting or not
    const [isdeleting,setisdeleting]=useState(false);
    const [delta,setdelta]=useState(300 - Math.random() * 100)
    //handle animations
    useEffect(()=>{
    let ticker=setInterval(() => {
        tick();
    }, delta);
    return ()=>{clearInterval(ticker)};
    },[text])
    
    function tick(){
        //index of array start from first word
        let i=loopnum % Rotate.length;
        //variable contain current word 
        let fulltext=Rotate[i];
        let updatedtext= isdeleting?fulltext.substring(0,text.length -1):fulltext.substring(0,text.length+1);
        settext(updatedtext);
        if(isdeleting){
            setdelta(prev=>prev /2)
        }
        if(!isdeleting && updatedtext===fulltext){
            setisdeleting(true);
            setdelta(period)
        }else if(isdeleting && updatedtext===''){
            setisdeleting(false);
            setloopnum(loopnum +1)
            setdelta(500)    
        }
    }
    return(
        <section className="Banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible?"animate__animated animate__fadeIn":""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>Hi! I'm Joudy Dawalibi <span className="wrap">{text}</span> </h1>
                    <p>I am a Front-End Developer with a passion for building dynamic and responsive web applications . Graduated from the Faculty of informatics  Engineering University of Aleppo, I have been immersed in the field for over a year. My projects reflect my commitment to creating user-friendly interfaces and enhancing user experiences. I am eager to continue growing my skills and contributing to innovative projects.</p>
                    <button>Let’s Connect <ArrowRightCircle style={{marginLeft:"12px"}} size={"25px"}></ArrowRightCircle></button>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible?"animate__animated animate__zoomIn":""}>
                    <img src={headerimg} style={{width:"100%"}} alt="img"></img>
                    </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}