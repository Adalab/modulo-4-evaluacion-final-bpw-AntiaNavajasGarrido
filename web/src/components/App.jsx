import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
// components


// services
import ApiRecetas from "../services/ApiRecetas";


function App() {
  return (
    <div>
      <ApiRecetas/>
    </div>
  )
}

export default App
