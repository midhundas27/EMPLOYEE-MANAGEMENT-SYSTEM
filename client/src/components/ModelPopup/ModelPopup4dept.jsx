import React, { useState } from "react";
import "./ModelPopup4dept.css";
import { useFormik } from 'formik'
import { axiosPost } from "../../axiosServices";
// import ImageUpload from "./ImageUpload";

const ModelPopup4dept = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false)
  //const [imageURL, setImageURL] = useState('')
  //console.log(empById)

  const createDept = async (values) => {
    setLoading(true)
    try{
      const res = await axiosPost('/dept', values)
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
      deptname: '',
      deptemail: '',
      deptlocation: '',
      deptimage: ''
    },
    onSubmit: values => {
      createDept(values)

    },
  })
  return (
    <div className="modalContainer4dept">
<form action="" onSubmit={formik.handleSubmit}>
      <div className="modalBox4dept">
        <div className="modalHeader4dept">
          <h2>New Department Details</h2>
        </div>
        {/* <ImageUpload setImageURL={setImageURL}/> */}
        
          <div className="modalInner4dept"

          >
            <div className="input-container4dept">
              <div className="input-box4dept">
                <label htmlFor="">Department Name</label>
                <input type="text" name="deptname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.deptname}
                />
              </div>
            </div>
            <div className="input-box4dept">
                <label htmlFor="">Image</label>
                <input type="file" name="deptimage"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.deptimage}
                />
              </div>

            <div className="input-container4dept">
              <div className="input-box4dept">
                <label htmlFor="">Email Address</label>
                <input type="email" name="deptemail"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.deptemail}
                />
              </div>
              <div className="input-box4dept">
                <label htmlFor="">Location</label>
                <input type="text" name="deptlocation"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.deptlocation}
                />
              </div>
              
            </div>
            <div className="modalFooter4dept">
              <button className="add-btn" type="submit">{loading ? 'Saving...' : 'Save Details'}</button>
            </div>

          </div>
        

      </div>
      </form>
    </div>
  );
};

export default ModelPopup4dept;
