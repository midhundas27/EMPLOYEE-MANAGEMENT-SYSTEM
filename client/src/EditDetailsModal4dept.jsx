import React, { useState } from 'react'
import { useFormik } from 'formik'
import "./ModelPopup4dept.css";
import { axiosPut } from "./axiosServices";

const EditDetailsModal4dept = ({ deptById, setEditModal }) => {
    const { departmentname, departmentemail, location, managerid, image } = deptById
    //const date = new Date(dateofjoining)
    const [loading, setLoading] = useState(false)
    const handleEdit = async (values) => {
        setLoading(true)
        try {
            const res = await axiosPut(`/department/${deptById._id}`, values)
            setLoading(false)
            setEditModal(false)
            console.log(res)

        }
        catch (err) {
            console.log(err)
        }
    }
    const formik = useFormik({
        initialValues: {
            departmentname,
            departmentemail,
            location,
            managerid,
            image
        },
        onSubmit: values => {
            handleEdit(values)

        }
    })
    console.log(formik.initialValues)


    return (
        <div className="modal4deptContainer">
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="modal4deptBox">
                    <div className="modal4deptHeader">
                        <h2>New employee Details</h2>
                    </div>
                    <div className="modal4deptInner"

                    >
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">Department Name</label>
                                <input type="text" name="departmentname"
                                    required
                                    defaultValue={departmentname}
                                    onChange={formik.handleChange}
                                    values={formik.values.departmentname}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Manager Id</label>
                                <input type="number" name="managerid"
                                    required
                                    defaultValue={managerid}
                                    onChange={formik.handleChange}
                                    values={formik.values.managerid}
                                />
                            </div>
                        </div>
                        <div className="input-box">
                                <label htmlFor="">Image</label>
                                <input type="file" name="lastname"
                                    required
                                    defaultValue={image}
                                    onChange={formik.handleChange}
                                    values={formik.values.image}
                                />
                            </div>

                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">Email Address</label>
                                <input type="email" name="departmentemail"
                                    required
                                    defaultValue={departmentemail}
                                    onChange={formik.handleChange}
                                    values={formik.values.departmentemail}
                                />
                            </div>
                        </div>
                        <div className="input-box">
                            <label htmlFor="">Location</label>
                            <input type="text" name="location"
                                required
                                defaultValue={location}
                                onChange={formik.handleChange}
                                values={formik.values.location}
                            />
                        </div>
                    </div>
                    <div className="modal4deptFooter">
                        <button className="add-btn" type="submit">{loading ? 'Editing' : 'Edit and Save'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditDetailsModal4dept