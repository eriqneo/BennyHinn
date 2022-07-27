import React from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Resourse } from './components/Resourse';
import Keynote from './components/Keynote';
import Speak from './components/Speak';
import Shop from './components/Shop';


function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Keynote />
      <Resourse />
      <Speak />
      <Shop />
    </div>
  );
}

export default App;
