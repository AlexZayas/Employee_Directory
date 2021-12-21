/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react'; 
import '../stylesheets/App.css';
import axios from 'axios';
import NewHire from './NewHire';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Delete from './Delete';
import Update from './Update';
import ApiNewHire from './ApiNewHire';

function App() {

  return (
     <div className="App">
    <Update/>
     </div>
  )
  }
export default App;
// const [employeeData, setEmployeeData] = useState(null)
// axios.get('/api/employee')
// .then(res => {console.log('RES: ', res)});