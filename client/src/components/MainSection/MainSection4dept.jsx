import React, { useEffect, useState } from "react";
import "./MainSection4dept.css";
import { BiSearch } from "react-icons/bi";
import Card from "./components/Card";
import ModelPopup from "../ModelPopup/ModelPopup";
import { axiosGet } from "../../axiosServices";
import EditDetailsModal from "../ModelPopup/EditDetailsModal";

const MainSection4dept = ({ setdeptId }) => {
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
        showModal && <ModelPopup setShowModal={setShowModal} />
      }
      {
        editModal && <EditDetailsModal setEditModal={setEditModal} deptById={deptById} />
      }

      <main className="main4dept-Container">
        <div className="main4dept-Wrapper">
          <h1>
            People <span className="dept-count">{dept.length}</span>
          </h1>
          <div className="deptHeader">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search by name, email, designation etc"
                onChange={handleSearch}
              />
              <BiSearch size={20} />
            </div>
          </div>
          <div className="depts">
            {
              dept && dept.map((dept) => {
                return <div key={dept._id} onClick={() => setdeptId(dept._id)}>
                  <Card
                    deptData={dept}
                    handleEdit={handleEdit}
                    handleReRender={handleReRender} />
                </div>
              })
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection4dept;
