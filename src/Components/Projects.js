import { Container ,Col,Row, Nav, Tab} from "react-bootstrap";
import Projectcard from "./Projectcard";

export default function Projects(){
    const project=[{
        img: require("./../assests/Screenshot (63).png"),
        title:"Website to Provide Job Opportunities",
        desc:"A link between job seekers and business owners",
        lang: "React",
        link:"https://github.com/JoudyDev22/job"
    }
]
        return(
            <section className="projects" id="projects">
                <Container>
                    <Row>
                        <h1 style={{marginBottom:"25px"}}>My Projects</h1>
                        <Col>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center " id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">First Tab</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Second Tab</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Third Tab</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                        <Tab.Pane eventKey="first">{
                            <Row >
                                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"}}>{
                            project.map((pro,index)=>{
                                return (
                                    <Projectcard key={index} img={pro.img} title={pro.title} desc={pro.desc} link={pro.link} lang={pro.lang}></Projectcard>
                                )
                            })
                                }
                                </div>
                            </Row>
                            }</Tab.Pane>
                        <Tab.Pane eventKey="second">No results found</Tab.Pane>
                        <Tab.Pane eventKey="third">No results found</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                        </Col> 
                    </Row>
                </Container>
            </section>
        )
}