import { useState } from 'react'

import './App.css'
import forestPic from './assets/forestPic.jpg'

function App() {

  //const GoToBackground = () =>

  //const GoToProjects = () =>

  //const GoToContactInfo = () =>


  return (
    <>

      <div id="header">
        <img src={forestPic} alt="Deer drinking water by a river" />
      </div>


      <div>
        <h1>Hi, welcome to my website.</h1>
        <h2>I'm Benjamin Worton, a student at the Haaga-Helia University of Applied Sciences studying software development.</h2>
        <h2>On this page you can find:</h2>
        <button
        //</>onClick={GoToBackground}
        ><h3>My Background</h3></button>
        <button
        //onClick={GoToProjects}
        ><h3>Projects I've worked on</h3></button>
        <button
        //onClick={GoToContactInfo}
        ><h3>My contact information</h3></button>
        <a href="https://github.com/Lord-of-Waffles" target="_blank"><h3>My GitHub</h3></a>
      </div>
    </>
  )
}

export default App
