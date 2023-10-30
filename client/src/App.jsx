import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from './login';
import Department from './department';
import Home from './home';


function App () {
    return (
        <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/department' element={<Department/>} />
        <Route path='/home' element={<Home/>} />
        </Routes>
    </div>
  )
}

export default App