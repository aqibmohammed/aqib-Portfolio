import './App.css';
import styled,{ThemeProvider} from 'styled-components';
import { useState, useEffect } from "react";
import { darkTheme  } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from "./components/ProjectDetails";
import { BrowserRouter as Router } from 'react-router-dom';
// import Experience from './components/Experience';

const Body=styled.div`
  background-color:${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;

 
`;
const Wrapper=styled.div`
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,185,208,1) 42%, rgba(92,202,238,0.41) 93.6% );
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);

`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body>
        <Hero/>
        <Wrapper>
        <Skills/>
        {/* <Experience/> */}
        </Wrapper>
        <Project openModal={openModal} setOpenModal={setOpenModal}/>
        <Wrapper>
        <Education/>
        <Contact/>
        </Wrapper>
    <Footer/>
    {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
