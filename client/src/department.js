import React from 'react';
import './department.css'
import TopNav4dept from './components/TopNav/TopNav4dept';
import Card4dept from './components/MainSection/components/card4dept';

import Finance from './finance';
import Sales from './sales'
import Support from './support'
import Administration from './administration'



function Department() {
  return (
    <div className="dept-container">
      <TopNav4dept/>
      <h1 class="dept-text">Departments</h1>
      <div className="depts">

      <Card4dept deptname="Finance" email="finace@gmail.com" location="Kozhikode" logo="" deptid={<Finance/>} />
      <Card4dept deptname="Adminstration" email="adminstrate@gmail.com" location="Kozhikode" logo="" deptid={<Administration/>} />
      <Card4dept deptname="Sales" email="sales@gmail.com" location="Kozhikode" logo="" deptid={<Sales/>} />
      <Card4dept deptname="Support" email="support@gmail.com" location="Kozhikode" logo="" deptid={<Support/>} />

      </div>
    </div>
  );
}

export default Department;
