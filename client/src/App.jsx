import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from './login';
import Home from './home';
import Department from './department';
import Finance from './finance';
import Administration from './administration';
import Sales from './sales';
import Support from './support';


function App () {
    return (
        <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/department' element={<Department/>} />
        <Route path='/administration' element={<Administration/>} />
        <Route path='/finance' element={<Finance/>} />
        <Route path='/sales' element={<Sales/>} />
        <Route path='/support' element={<Support/>} />
        </Routes>
    </div>
  )
}

export default App