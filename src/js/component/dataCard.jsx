import React from "react";
import "../../styles/dataCard.css";

const DataCard = ({ type, data }) => {
  return (
    <div className="p-2 col-6 col-md-4 col-lg-3 col-xl-2">
      <a
        href="#"
        className="card bg-light d-block text-decoration-none card-link"
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <img
          src="https://placehold.co/20"
          className="card-img-top"
          alt="datacard"
        />
        <div
          className="card-body d-flex flex-column justify-content-between"
          style={{ flex: 1 }}
        >
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="card-title">{data.name}</h5>
            </div>
            <a href="#" className="btn btn-danger ms-2">
              <i className="far fa-heart"></i>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DataCard;
