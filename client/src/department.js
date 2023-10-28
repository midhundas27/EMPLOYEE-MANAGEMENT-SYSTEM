import React from 'react';
import './department.css'
import TopNav4dept from './components/TopNav/TopNav4dept';
function Department() {
  return (
    <div className="dept-container">
      <TopNav4dept/>
      <h1 class="dept-text">Departments</h1>
    </div>
  );
}

export default Department;
