import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import video from './Video';

function MyApp() {
  return (
      <button>
          <Link to="/" >About</Link>
   </button>
  );
}

export default MyApp;