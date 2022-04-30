import React from "react";
import Main from "./Main";
import Tcc from "./Tcc";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />}/>
      <Route path="/mac0499/" element={<Tcc />}/>
    </Routes>
  )
}

export default App;
