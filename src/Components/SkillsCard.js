// import { ListGroup } from "react-bootstrap";

// export default function SkillsCard(props){
//     return(
//         <>
//         <ListGroup >
//         <ListGroup.Item variant="secondary" className="list-item "  data-aos-easing="linear" data-aos="fade-down" data-aos-duration="3000" >
//         <div className="img">
//         <img src={props.img} alt="img"  className="img-fluid"></img>
//         </div>
//         <p className="skill-title">{props.title}</p>
//         <p style={{color:"rgb(161 161 170)",position:"absolute",top:"30px",left:"80px",fontSize:"14px"}}>{props.text}</p>
//         </ListGroup.Item>
//         </ListGroup>
//     </>
//     )
// }
export default function SkillsCard(props) {
    return (
        <div className="skill-chip" data-aos="fade-up" data-aos-duration="600">
            <img src={props.img} alt={props.title} />
            <p className="skill-title">{props.title}</p>
            <span className="skill-text">{props.text}</span>
        </div>
    )
}
