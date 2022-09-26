import React from 'react';
// import AppRouter from "./Router";
import './App.css';
import Intro from './components/Intro/Intro'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Intro />
      <Project />
      <Contact />
    </div>
  );
}

export default App;