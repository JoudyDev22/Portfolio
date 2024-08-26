import './App.css';
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import Aboutme from './Components/Aboutme';
import Projects from './Components/Projects';
import Contact from './Components/Contact';




function App() {
  return (
    <>
    <div className='App'>
    <NavBar></NavBar>
    <Banner></Banner>
    <Skills></Skills>
    <Aboutme></Aboutme>
    <Projects></Projects>
    <Contact></Contact> 
    
    </div>
  </>
  );
}

export default App;
