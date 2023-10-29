import React, { useEffect, useState } from 'react'
import './LeftNav4dept.css'
import { axiosGet } from '../../axiosServices'

const LeftNav4dept = ({ deptId }) => {
  const [deptById, setdeptById] = useState([])


  const getdeptById = async () => {
    try {
      const res = await axiosGet(`/deptloyee/${deptId}`)
      setdeptById(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getdeptById()
  }, [deptId])

  return (
    <nav className='leftNav4dept'>
      <div className="deptdetail">
        <h2>Full Details</h2>
        <img src={deptById.image}/>
        <h1>{deptById.firstname} {deptById.lastname}</h1>
        <p>{deptById.email}</p>
        <p>{deptById.phone}</p>
        <p>{deptById.job}</p>
        <p className='dept-date'>{deptById.dateofjoining}</p>
      </div>
    </nav>
  )
}

export default LeftNav4dept
