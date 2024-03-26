import React from "react";
import "../../styles/dataCard.css";

const placeholderImageUrl = "https://placehold.co/50"

const photoUrls = {
  people: "https://starwars-visualguide.com/assets/img/characters/",
  planets: "https://starwars-visualguide.com/assets/img/planets/",
  starships: "https://starwars-visualguide.com/assets/img/starships/",
  vehicles: "https://starwars-visualguide.com/assets/img/vehicles/"
  // Add more types and their corresponding URLs here
};

const photoStyle = {
  people: { height: "500px", width: "100%"},
  planets: { height: "400px", width: "100%" },
  starships: { height: "300px", width: "100%" },
  vehicles: { height: "300px", width: "100%"}
}

const DataCard = ({ type, data }) => {
  const imageUrl = `${photoUrls[type]}${data.uid}.jpg`;

  return (
    <div className="p-2 col-6 col-md-4 col-lg-3 col-xl-2">
      <a
        href="#"
        className="card bg-light d-block text-decoration-none card-link"
        style={{ display: "flex", flexDirection: "column"}}
      >
        <img
          src={imageUrl}
          onError={(e) => {
            e.target.src = placeholderImageUrl;
            e.target.style.height = photoStyle[type].height;
            e.target.style.width = "100%";
          }}
          className="card-img-top img-fluid"
          alt="datacard"
          style={photoStyle.type}
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
