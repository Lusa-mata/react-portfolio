import React from 'react';
import './App.css';

import Home from './components/Home/home'
import About from './components/About/about'
import Work from './components/Work/work'
import Projects from './components/Projects/projects'
import Contact from './components/Contact/contact'
import Nav from './components/Navigation/nav'

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  

  );
}

export default App;
