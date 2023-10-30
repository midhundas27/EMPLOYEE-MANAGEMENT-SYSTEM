import { useState } from 'react';
import TopNav4dept from './TopNav4dept';
import MainSection from './MainSection';
import LeftNav from './LeftNav';
function Support() {
  const [employeeId, setEmployeeId] = useState('')
  console.log(employeeId)
  return (
    <div className="support-container">
      <TopNav4dept/>
      <LeftNav employeeId={employeeId}/>
      <MainSection setEmployeeId={setEmployeeId}/>
    </div>
  );
}
export default Support;