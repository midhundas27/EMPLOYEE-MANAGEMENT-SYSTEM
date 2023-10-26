import { useState } from 'react';
import './App.css';
import LeftNav from './components/LeftNav/LeftNav';
import MainSection from './components/MainSection/MainSection';
import TopNav from './components/TopNav/TopNav';
//sdsdsd
function App() {
  const [employeeId, setEmployeeId] = useState('')
  console.log(employeeId)
  return (
    <div className="container">
      <TopNav/>
      <LeftNav employeeId={employeeId}/>
      <MainSection setEmployeeId={setEmployeeId}/>
    </div>
  );
}

export default App;