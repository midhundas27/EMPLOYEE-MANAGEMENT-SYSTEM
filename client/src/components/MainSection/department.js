import React, { useEffect, useState } from "react";
import './department.css'
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import TopNav4dept from '../TopNav/TopNav4dept';
import Card4dept from "./components/card4dept";
import ModelPopup4dept from "../ModelPopup/ModelPopup4dept";
import { axiosGet } from "../../axiosServices";
import EditDetailsModal4dept from "../ModelPopup/EditDetailsModal4dept";
import LeftNav4dept from "../LeftNav/LeftNav4dept";

const Department = ({ setdeptId }) => {
  const [showModal, setShowModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [dept, setdept] = useState([])
  const [deptById, setdeptById] = useState([])
  const [reRender, setReRender] = useState(false)

  const getAlldept = async () => {
    try {
      const res = await axiosGet('/dept')
      setdept(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  const getdeptById = async (id) => {
    try {
      const res = await axiosGet(`/dept/${id}`)
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
  } //jhugugug
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
            ><IoMdAdd size="20" color="#fffff" />Create Department</button>
          </div>
          <div className="dept">
            {
              dept && dept.map((emp) => {
                return <div key={emp._id} onClick={() => setdeptId(emp._id)}>
                  <Card4dept
                  empData={emp}
                  handleEdit={handleEdit}
                  handleReRender={handleReRender}/>
                  <Card4dept
                  empData={emp}
                  handleEdit={handleEdit}
                  handleReRender={handleReRender}/>
                  <Card4dept
                  empData={emp}
                  handleEdit={handleEdit}
                  handleReRender={handleReRender}/>
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
