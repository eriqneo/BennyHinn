import React from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Resourse } from './components/Resourse';
import Keynote from './components/Keynote';
import Speak from './components/Speak';
import Shop from './components/Shop';
import Book from './components/Book';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Keynote />
      <Resourse />
      <Speak />
      <Shop />
      <Book />
      <Footer />
    
    </div>
  );
}

export default App;
