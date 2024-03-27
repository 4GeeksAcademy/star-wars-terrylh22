import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const specificPerson = () => {
  const [personData, setPersonData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  //   useEffect(() => {

  //   })
};

// {
//     "message": "ok",
//     "result": {
//         "properties": {
//             "height": "172",
//             "mass": "77",
//             "hair_color": "blond",
//             "skin_color": "fair",
//             "eye_color": "blue",
//             "birth_year": "19BBY",
//             "gender": "male",
//             "created": "2024-03-24T14:28:54.493Z",
//             "edited": "2024-03-24T14:28:54.493Z",
//             "name": "Luke Skywalker",
//             "homeworld": "https://www.swapi.tech/api/planets/1",
//             "url": "https://www.swapi.tech/api/people/1"
//         },
//         "description": "A person within the Star Wars universe",
//         "_id": "5f63a36eee9fd7000499be42",
//         "uid": "1",
//         "__v": 0
//     }
// }

export default specificPerson;
