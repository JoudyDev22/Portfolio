import { Card, Col ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Github } from "react-bootstrap-icons";

export default function Projectcard(props){
    return(
        <Col sm={6} md={4}>
        <div >
        <Card className="project-card" style={{ width: '20rem',height:"25rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
        <Card.Title style={{textAlign:"start",fontWeight:"bold"}}>{props.title}</Card.Title>
        <Card.Text style={{textAlign:"start",fontSize:"18px"}}>{props.desc}.</Card.Text>
        <Card.Text style={{textAlign:"start",fontWeight:"bold"}}><span style={{color:"rgb(13 110 253)"}}>Built With :</span> {props.lang}</Card.Text>
        <Button variant="dark"  ><Link to={props.link} style={{textDecoration:"none",color:"white"}}>< Github ></Github>  Github</Link></Button>
        </Card.Body>
        </Card>
    </div>
        </Col>
    )
    
}