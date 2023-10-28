import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from './login';
import Home from './home';
import Department from './department';


function App () {
    return (
        <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/department' element={<Department/>} />
        </Routes>
    </div>
  )
}

export default App