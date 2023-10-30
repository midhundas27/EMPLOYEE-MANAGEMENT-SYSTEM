import React, { useState } from "react";
import "./ModelPopup4dept.css";
import { useFormik } from 'formik'
import { axiosPost } from "./axiosServices";
// import ImageUpload from "./ImageUpload";

const ModelPopup4dept = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false)
  //const [imageURL, setImageURL] = useState('')
  //console.log(empById)

  const createdept = async (values) => {
    setLoading(true)
    try{
      const res = await axiosPost('/department', values)
      console.log(res)
      setLoading(false)
      setShowModal(false)
    }
    catch(err){
      console.log(err)
    }
  }

  const formik = useFormik({
    initialValues: {
      departmentname: '',
      managerid: '',
      departmentemail: '',
      location: '',
      image: ''
    },
    onSubmit: values => {
      createdept(values)

    },
  })
  return (
    <div className="modal4deptContainer">
<form action="" onSubmit={formik.handleSubmit}>
      <div className="modal4deptBox">
        <div className="modal4deptHeader">
          <h2>New Department Details</h2>
          <button id="close-button" class="close-button" onClick={() => setShowModal(false)}>X</button>
        </div>
        {/* <ImageUpload setImageURL={setImageURL}/> */}
        
          <div className="modal4deptInner"

          >
            <div className="input-container">
            
              <div className="input-box">
                <label htmlFor="">Department Name</label>
                <input type="text" name="departmentname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.departmentname}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Manager Id</label>
                <input type="number" name="managerid"
                  onChange={formik.handleChange}
                  values={formik.values.managerid}
                />
              </div>
            </div>
            <div className="input-box">
                <label htmlFor="">Image</label>
                <input type="file" name="image"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.image}
                />
              </div>

            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">Email Address</label>
                <input type="email" name="departmentemail"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.departmentemail}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Location</label>
                <input type="text" name="location"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.location}
                />
              </div>
              
            </div>
            <div className="modal4deptFooter">
              <button className="add-btn" type="submit">{loading ? 'Saving...' : 'Save Details'}</button>
            </div>

          </div>
        

      </div>
      </form>
    </div>
  );
};

export default ModelPopup4dept;
