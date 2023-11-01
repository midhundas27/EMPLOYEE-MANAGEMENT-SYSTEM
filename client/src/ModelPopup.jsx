import React, { useState } from "react";
import "./ModelPopup.css";
import { useFormik } from 'formik'
import { axiosPost } from "./axiosServices";
// import ImageUpload from "./ImageUpload";

const ModelPopup = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false)
  //const [imageURL, setImageURL] = useState('')
  //console.log(empById)

  const createEmployee = async (values) => {
    setLoading(true)
    try{
      const res = await axiosPost('/employee', values)
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
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      job: '',
      dateofjoining: '',
      image: '',
      yearsofexperience: '',
    },
    onSubmit: values => {
      createEmployee(values)

    },
  })
  return (
    <div className="modalContainer">
<form action="" onSubmit={formik.handleSubmit}>
      <div className="modalBox">
        <div className="modalHeader">
          <h2>New Employee Details</h2>
          <button id="close-button" class="close-button" onClick={() => setShowModal(false)}>X</button>
        </div>
        {/* <ImageUpload setImageURL={setImageURL}/> */}
        
          <div className="modalInner"

          >
            <div className="input-container">
            
              <div className="input-box">
                <label htmlFor="">First Name</label>
                <input type="text" name="firstname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.firstname}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.lastname}
                />
              </div>
            </div>
            <div className="input-box">
                <label htmlFor="">image</label>
                <input type="file" name="image"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.image}
                />
              </div>

            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">Email Address</label>
                <input type="email" name="email"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.email}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Phone</label>
                <input type="number" name="phone"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.phone}
                />
              </div>
              
            </div>
            <div className="input-box">
              <label htmlFor="">Job Position</label>
              <input type="text" name="job"
                required
                onChange={formik.handleChange}
                values={formik.values.job}
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Date of Joining</label>
              <input type="date" name="dateofjoining"
                required
                onChange={formik.handleChange}
                values={formik.values.dateofjoining}
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Years of Experience</label>
              <input type="number" name="yearsofexperience"
                required
                onChange={formik.handleChange}
                values={formik.values.yearsofexperience}
              />
            </div>
            <div className="modalFooter">
              <button className="add-btn" type="submit">{loading ? 'Saving...' : 'Save Details'}</button> //submit-button
            </div>

          </div>
        

      </div>
      </form>
    </div>
  );
};

export default ModelPopup;
