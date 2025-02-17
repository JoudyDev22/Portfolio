import { Container, Row ,Col} from "react-bootstrap";
import html from './../assests/html.svg';
import css from './../assests/css3.svg';
import js from './../assests/javascript.svg';
import react from './/../assests/react.svg';
import bootstrap from './../assests/bootstrap.svg';
import axios from './../assests/Axios.png';
import git from './../assests/git.svg';
import SkillsCard from "./SkillsCard";


export default function Skills(){
    const list=[
        {
        img:(`${html}`),
        title:"HTML",
        text:"Structure web content"
        },
        {
        img:(`${css}`),
        title:"CSS",
        text:"User Interface"
        },
        {
        img:(`${js}`),
        title:"JavaScript",
        text:"Interaction"
        },
        {
        img:(`${react}`),
        title:"React",
        text:"JavaScript library"
        },
        {
        img:(`${bootstrap}`),
        title:"Bootstrap",
        text:"CSS library "
        },
        {
        img:(`${axios}`),
        title:"Axios",
        text:"Simplifies API requests "
        },
        {
        img:(`${git}`),
        title:"Git/GitHub",
        text:"Version Control System"
        },
    ]
    const showlist=list.map((list,index)=> 
        <div  >
    <SkillsCard img={list.img} title={list.title} text={list.text} ></SkillsCard>
    </div>
);
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <h1>Essential Tools I use</h1>
                    <p style={{fontSize:"18px"}}>Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
                    <div >
                    <div  className="owl-carousel owl-theme skill-slider" >
                        {showlist}
                    </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    
}