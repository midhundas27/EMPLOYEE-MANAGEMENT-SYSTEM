import { useState } from 'react';
import TopNav4dept from './components/TopNav/TopNav4dept';
import MainSection from './components/MainSection/MainSection';
import LeftNav from './components/LeftNav/LeftNav';
function Administration() {
  const [employeeId, setEmployeeId] = useState('')
  console.log(employeeId)
  return (
    <div className="administration-container">
      <TopNav4dept/>
      <LeftNav employeeId={employeeId}/>
      <MainSection setEmployeeId={setEmployeeId}/>
    </div>
  );
}
export default Administration;