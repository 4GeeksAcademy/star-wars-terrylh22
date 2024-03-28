import React from "react";
import "../../styles/dataCard.css";
import { useNavigate } from "react-router-dom";

const placeholderImageUrl = "https://fakeimg.pl/600x400";

const photoUrls = {
  people: "https://starwars-visualguide.com/assets/img/characters/",
  planets: "https://starwars-visualguide.com/assets/img/planets/",
  starships: "https://starwars-visualguide.com/assets/img/starships/",
  vehicles: "https://starwars-visualguide.com/assets/img/vehicles/",
};

const photoStyle = {
  people: { height: "500px", width: "100%" },
  planets: { height: "400px", width: "100%" },
  starships: { height: "250px", width: "100%" },
  vehicles: { height: "250px", width: "100%" },
};

const DataCard = ({ type, data, addFavoriteAction }) => {
  const imageUrl = `${photoUrls[type]}${data.uid}.jpg`;
  const navigate = useNavigate();

  return (
    <div className="p-2 col-6 col-md-4 col-lg-3 col-xl-2">
      <a
        className="card bg-dark d-block text-decoration-none card-link"
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
        onClick={() => navigate(`/${type}/${data.uid}`)}
      >
        <img
          src={imageUrl}
          onError={(e) => {
            e.target.src = placeholderImageUrl;
          }}
          className="card-img-top img-fluid"
          alt="datacard"
          style={photoStyle[type]}
        />
        <div
          className="card-body d-flex flex-column justify-content-between"
          style={{ flex: 1 }}
        >
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="card-title text-white">{data.name}</h5>
            </div>
            <a className="btn btn-danger ms-2">
              <i
                className="far fa-heart"
                onClick={() => addFavoriteAction(data.name, type)}
              ></i>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DataCard;
