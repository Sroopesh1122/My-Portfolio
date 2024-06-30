import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
const ExpInfoBox = ({title,type}) => {
  return (
    <div className="d-flex justify-content-start align-items-start gap-5 info-box ">
      <div >
        <HiBadgeCheck className="info-icon" />
      </div>
      <div className="info">
        <h1 className="mb-0 no-wrap">{title}</h1>
        <h6>{type}</h6>
      </div>
    </div>
  );
};

export default ExpInfoBox;
