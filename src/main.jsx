import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import MyApp from "./App";

ReactDOM.render(
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>,
  document.getElementById('root')
)