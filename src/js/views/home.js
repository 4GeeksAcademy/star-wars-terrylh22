import React from "react";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="heading-border p-4" style={{ marginTop: "100px" }}>
        <h1 className="text-white">
          Terry's Star Wars Databank
          <i class="fab fa-jedi-order" style={{ marginLeft: "10px" }}></i>
        </h1>
      </div>
    </div>
  );
};
