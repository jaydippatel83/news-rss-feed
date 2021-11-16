import React from "react"
import logo from './logo.svg';
import './App.css'; 
import News from "./news";


function App() {


  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg box-shadow bg-dark ">
        <a className=" navbar-brand logo-container" to="/">
          <div className="d-flex justify-content-start">
            <img width="100" height="70" alt="logo" className="App-logo" src={logo} />
            <h2 className=" text-light header-text" style={{lineHeight:"2.5"}}>Crypto News</h2>
          </div>
        </a> 
      </nav> 
      <div className="container">
        <div className="row">
          <News/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
