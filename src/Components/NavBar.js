import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
    const [scrolled,setscrolled]=useState(false);
    const [activelink,setactivelink]=useState('');
    //to handle window scroll 
    useEffect(()=>{
    function onscroll(){
        if(window.scrollY>50){
            setscrolled(true);
        }else{
            setscrolled(false);
        }
    }
    window.addEventListener("scroll",onscroll);
    return window.removeEventListener("scroll",onscroll)
    },[])
    //to update activelink state to current link name
    function onupdateactivelink(value){
        setactivelink(value);
    }
    return (
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
    <Container>
        <h2>{`<>`}JD</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home" className={activelink ==="home"?"active navbar-link":'navbar-link'} onClick={()=>onupdateactivelink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activelink==="skills"?"active navbar-link":'navbar-link'} onClick={()=>onupdateactivelink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Aboutme" className={activelink==="Aboutme"?"active navbar-link":'navbar-link'} onClick={()=>onupdateactivelink('Aboutme')}>About</Nav.Link>
            <Nav.Link href='#projects' className={activelink==="projects"?"active navbar-link":'navbar-link'} onClick={()=>onupdateactivelink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'style={{display:"flex"}}>
            <Nav.Link href="#connect">
            <button className='vvd'><span>Let’s Connect</span></button>
            </Nav.Link>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

