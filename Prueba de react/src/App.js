import React from "react";
import "./App.css";
import {Calculator} from "./components/Calculator"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (


      <div>
        <BrowserRouter>
          <Routes>  
            <Route path="/" element={<Calculator></Calculator>}/>
          </Routes>
        </BrowserRouter> 
    </div>

  );
}

export default App;
