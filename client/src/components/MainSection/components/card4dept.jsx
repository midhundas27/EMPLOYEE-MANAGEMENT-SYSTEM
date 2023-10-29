import React from "react";

const Card4dept = (props) => {

  return (
    <div className="card4dept-component">
      <div className="card4dept-inner">
        <div className="dropdownContainer">
        </div>
        {/* <div className="profileImage">
          <img
          src="/image"
            alt="firstname"
          /> 
        </div>*/}
        <div className="dept-detail">
          <h3>{props.deptname}</h3>
          <p>{props.email}</p>
        </div>
      </div>
      <div className="job-dept">
        <p>job</p>
      </div>
    </div>
  );
};

export default Card4dept;
