import * as React from 'react';

import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import SayHi from './components/SayHi';
function Welcome(){
  return(
    <h1>Welcome to Router Page</h1>
  )
}
function App() {
  return (
    <>
    
      <Navbar/>
      
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      
      <Routes>
        <Route exact path='/' element={<Welcome/>} />
          
        <Route path='/contact' element={<Contact/>}/>
          
        <Route path='/about' element={<About/>}/>
        <Route path='/welcome/:name' element={<SayHi/>}/>
      </Routes>
    </>
  );
}

export default App;
