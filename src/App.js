import { useContext, useState } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import { ThemeContext } from './Components/Context/Context';
import ContractMe from './Components/ContractMe/ContractMe';
import Intro from './Components/Intro/Intro';
import ProjectList from './Components/ProjectList/ProjectList';
// import Toggle from './Components/Toggle/Toggle';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div  style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      {/* <Toggle></Toggle> */}
     <Intro></Intro>
     <AboutMe></AboutMe>
     <ProjectList></ProjectList>
     <ContractMe></ContractMe>
    </div>
  );
}

export default App;
