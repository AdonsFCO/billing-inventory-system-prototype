
import React, {useState,useEffect}from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./components/NavBar/Navbar";
import Button from './components/NavBar/CollapsibleButton/Button/Button';


const App = () =>
{


  return (<>
        <NavBar content={[<Button title="imAbutton"/>]}/>



  </>);
}



export default App;
