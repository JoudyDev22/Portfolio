import { Container, Col, Row } from "react-bootstrap";
import Projectcard from "./Projectcard";
import Cart from "./Cart";
import { project } from "./ProjectsInfo";
import { project2 } from "./ProjectsInfo";

export default function Projects(){
        const pro1= project2.map((pro,index)=>{
        return (
             <div className="project-card">
               <Cart key={index} img={pro.img} title={pro.title} desc={pro.desc} link={pro.link} pre={pro.pre} lang={pro.lang}></Cart>
             </div>
             )
       });
        const pro2=project.map((pro,index)=>{
           return (
               <div className="project-card">
                  <Projectcard key={index} img={pro.img} title={pro.title} desc={pro.desc} link={pro.link} lang={pro.lang}></Projectcard>
                 </div>
                )
                 })
        ;
        return(
            <section className="projects" id="projects">
                <Container>
                    <Row>
                        <h1 style={{marginBottom:"25px"}}>My Projects</h1>
                        <Col>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    gap: "30px"
                                }}
                                className="projects-cards-wrapper"
                            >
                                {pro2}
                                {pro1}
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
        )
}


    


                           