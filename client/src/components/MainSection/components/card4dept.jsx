import React from "react";
import {Link} from "react-router-dom"

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
          <p>{props.location}</p>
        </div>
      </div>
      <div className="job-dept">
        <Link to={props.deptid}>View</Link>
      </div>
    </div>
  );
};

export default Card4dept;
