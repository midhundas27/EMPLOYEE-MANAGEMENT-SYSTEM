import React, { useState } from 'react'
import { useFormik } from 'formik'
import "./ModelPopup4dept.css";
import { axiosPut } from "../../axiosServices";

const EditDetailsModal4dept = ({ deptById, setEditModal }) => {
    const { deptname, deptemail, deptlocation, deptimage } = deptById
    const [loading, setLoading] = useState(false)
    const handleEdit = async (values) => {
        setLoading(true)
        try {
            const res = await axiosPut(`/dept/${deptById._id}`, values)
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
            deptname,
            deptemail,
            deptlocation,
            deptimage,
        },
        onSubmit: values => {
            handleEdit(values)

        }
    })
    console.log(formik.initialValues)


    return (
        <div className="modalContainer4dept">
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="modalBox4dept">
                    <div className="modalHeader4dept">
                        <h2>Department Details</h2>
                    </div>
                    <div className="modalInner4dept"

                    >
                        <div className="input-container4dept">
                            <div className="input-box4dept">
                                <label htmlFor="">Department Name</label>
                                <input type="text" name="deptname"
                                    required
                                    defaultValue={deptname}
                                    onChange={formik.handleChange}
                                    values={formik.values.deptname}
                                />
                            </div>
                        </div>
                        <div className="input-box">
                                <label htmlFor="">Image</label>
                                <input type="text" name="deptimage"
                                    required
                                    defaultValue={deptimage}
                                    onChange={formik.handleChange}
                                    values={formik.values.deptimage}
                                />
                            </div>

                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">Email Address</label>
                                <input type="deptemail" name="deptemail"
                                    required
                                    defaultValue={deptemail}
                                    onChange={formik.handleChange}
                                    values={formik.values.deptemail}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Location</label>
                                <input type="text" name="deptlocation"
                                    required
                                    defaultValue={deptlocation}
                                    onChange={formik.handleChange}
                                    values={formik.values.deptlocation}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modalFooter4dept">
                        <button className="add-btn" type="submit">{loading ? 'Editing' : 'Edit and Save'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditDetailsModal4dept