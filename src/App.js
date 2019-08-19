import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageGrid from "./components/ImageGrid";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <ImageGrid />
    </div>
  )
}

export default App;
