// import logo from './logo.svg';
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



// let name="Tanu";
function App() {
  // eslint-disable-next-line
let [mode, setMode]=useState('light');
const [alert, setAlert]= useState(null);

// eslint-disable-next-line
const showAlert=(message, type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 1500);
}

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has been enabled", "success");
  document.title='Textutils-Dark Mode';
  setInterval(()=>{
    document.title='Textutils is an amazing app';
  }, 2000);
  setInterval(()=>{
    document.title='Install Textutils Now!';
  },1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success");
    document.title='Textutils-Light Mode';
  }
}
  return (
    // <>
    // <h1>This is heading.</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Me
    //     </a>
    //   </header>
    // </div>
    // </>

<>
<Router>
<Navbar title="Textutils" mode={mode} About="About" toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
          
        </Routes>
  {/* <About/> */}
</div>
</Router>
</>
    
  );
}

export default App;
