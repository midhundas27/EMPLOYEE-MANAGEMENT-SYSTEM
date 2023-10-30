import { useState } from 'react';
import TopNav4dept from './TopNav4dept';
import MainSection from './MainSection';
import LeftNav from './LeftNav';
function Sales() {
  const [employeeId, setEmployeeId] = useState('')
  console.log(employeeId)
  return (
    <div className="sales-container">
      <TopNav4dept/>
      <LeftNav employeeId={employeeId}/>
      <MainSection setEmployeeId={setEmployeeId}/>
    </div>
  );
}
export default Sales;