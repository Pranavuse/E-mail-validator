import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Validate from './components/Validate';

export default function App() {
  return (
    <div>
      <Navbar title="E-mail Validater"/>
      <Validate/>
    </div>
  )
}
