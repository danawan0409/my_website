import React from "react";
import HeroBanner from "./components/HomePage/HeroBanner/heroBanner";
import About from './components/HomePage/About/about';
import Latest from './components/HomePage/Latest/latest';
import Skills from './components/HomePage/Skills/skills';
import Portfolio from './components/HomePage/Portfolio/portfolio';
import Contact from './components/HomePage/Contact/contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
    return (
        <>
        <HeroBanner/>
        <About/>
        <Latest/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        </>
    )
}
 export default App; 