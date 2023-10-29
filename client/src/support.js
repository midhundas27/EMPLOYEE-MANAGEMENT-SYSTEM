import { useState } from 'react';
import LeftNav from './components/LeftNav/LeftNav';
import TopNav4dept from './components/TopNav/TopNav4dept';
import MainSection from './components/MainSection/MainSection';
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