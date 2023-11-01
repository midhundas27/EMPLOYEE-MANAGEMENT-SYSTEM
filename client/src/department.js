import React, { useEffect, useState } from "react";
import './department.css'
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import TopNav4dept from './TopNav4dept.jsx';
import Card4dept from "./card4dept.jsx";
import ModelPopup4dept from "./ModelPopup4dept.jsx";
import { axiosGet } from "./axiosServices.js";
import EditDetailsModal4dept from "./EditDetailsModal4dept.jsx";
import LeftNav4dept from "./LeftNav4dept.jsx";

const Department = ({ setdeptId }) => {
  const [showModal, setShowModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [dept, setdept] = useState([])
  const [deptById, setdeptById] = useState([])
  const [reRender, setReRender] = useState(false)

  const getAlldept = async () => {
    try {
      const res = await axiosGet('/department')
      setdept(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  const getdeptById = async (id) => {
    try {
      const res = await axiosGet(`/department/${id}`)
      setdeptById(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  const handleSearch = async (e) => {
    try {
      const res = await axiosGet(`/searchdept/${e.target.value}`)
      setdept(res.data)
    }
    catch (err) {
      console.log(err.message)
    }
  } 
  const handleEdit = async (id) => {
    getdeptById(id)
    setEditModal(true)
  }
  const handleReRender = () => {
    setReRender(true)
  }

  useEffect(() => {
    getAlldept()
  }, [showModal, editModal, reRender])
  return (
    <>
      {
        showModal && <ModelPopup4dept setShowModal={setShowModal} />
      }
      {
        editModal && <EditDetailsModal4dept setEditModal={setEditModal} deptById={deptById} />
      }
    <main className="dept-container">
    <TopNav4dept/>
    <LeftNav4dept deptById={deptById}/>
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
            <button className="add-btn"
              onClick={() => setShowModal(true)}
            ><IoMdAdd size="20" color="#fffff" />Create Department</button> //dept button
          </div>
          <div className="dept">
            {
              dept && dept.map((emp) => {
                console.log(emp)
                return <div key={emp._id} onClick={() => setdeptId(emp._id)}>
                  <Card4dept
                  empData={emp}
                  handleEdit={handleEdit}
                  handleReRender={handleReRender}/>
                </div>
              })
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default Department;
