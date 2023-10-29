import React from 'react';
import './department.css'
import TopNav4dept from './components/TopNav/TopNav4dept';
import Card4dept from './components/MainSection/components/card4dept';
function Department() {
  return (
    <div className="dept-container">
      <TopNav4dept/>
      <h1 class="dept-text">Departments</h1>
      <div className="depts">
      <Card4dept/>
      <Card4dept/>
      <Card4dept/>
      <Card4dept/>
      </div>
    </div>
  );
}

export default Department;
