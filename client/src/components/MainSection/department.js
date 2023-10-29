import React, {useState} from "react";
import './department.css'
import { BiSearch } from "react-icons/bi";
import TopNav4dept from '../TopNav/TopNav4dept';
import Card4dept from "./components/card4dept";
import { axiosGet } from "../../axiosServices";
import LeftNav4dept from "../LeftNav/LeftNav4dept";

const Department = ({ setdeptId }) => {
  const [dept, setdept] = useState([])
  const handleSearch = async (e) => {
    try {
      const res = await axiosGet(`/searchdept/${e.target.value}`)
      setdept(res.data)
    }
    catch (err) {
      console.log(err.message)
    }
  } 

  return (
    <main className="dept-container">
    <TopNav4dept/>
    <LeftNav4dept/>
        <div className="dept-wrapper">
          <h1>
            Departments  <span className="dept-count">{dept.length}</span>
          </h1>
          <div className="dept-header">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search by name, email, location, etc"
                onChange={handleSearch}
              />
              <BiSearch size={20} />
            </div>
          </div>
          <div className="dept">
            {/* onClick={() => setdeptId()} */}
                  <Card4dept/>
                  <Card4dept/>
                  <Card4dept/>
                  <Card4dept/>
                </div>
          </div>
      </main>
  );
}

export default Department;
