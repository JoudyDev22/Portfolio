import { Container, Row ,Col} from "react-bootstrap";
import SkillsCard from "./SkillsCard";
import { list } from "./SkillsList";


export default function Skills(){

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