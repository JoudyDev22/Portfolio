import './App.css';
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Experience from './Components/Experience';



function App() {
  return (
    <>
    <div className='App'>
    <NavBar></NavBar>
    <Banner></Banner>
    <Experience></Experience>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact> 
    
    </div>
  </>
  );
}

export default App;
