import { useState } from 'react';
import LeftNav from './LeftNav';
import MainSection from './MainSection';
import TopNav from './TopNav';
function Home() {
  const [employeeId, setEmployeeId] = useState('')
  console.log(employeeId)
  return (
    <div className="home-container">
      <TopNav/>
      <LeftNav employeeId={employeeId}/>
      <MainSection setEmployeeId={setEmployeeId}/>
    </div>
  );
}
export default Home;