import { ListGroup } from "react-bootstrap";

export default function SkillsCard(props){
    return(
        <>
        <ListGroup>
        <ListGroup.Item variant="secondary" className="list-item">
        <div className="img">
        <img src={props.img} alt="img"  className="img-fluid"></img>
        </div>
        <p className="skill-title">{props.title}</p>
        <p style={{color:"rgb(161 161 170)",position:"absolute",top:"30px",left:"80px",fontSize:"14px"}}>{props.text}</p>
        </ListGroup.Item>
        </ListGroup>
    </>
    )
}