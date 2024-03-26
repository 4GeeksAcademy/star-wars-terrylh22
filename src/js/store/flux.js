const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
      starships: [],
      favorites: [],
    },
    actions: {
      // fetching all star wars people
      fetchPeople: async () => {
        const response = await fetch(
          `https://www.swapi.tech/api/people/?page=1&limit=100000`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
          .catch((err) => {
            console.error(err);
          });
        setStore({ people: response.results });
      },
      fetchPlanets: async () => {
        const response = await fetch(
          `https://www.swapi.tech/api/planets/?page=1&limit=100000`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
          .catch((err) => {
            console.error(err);
          });
        setStore({ planets: response.results });
      },
      fetchVehicles: async () => {
        const response = await fetch(
          `https://www.swapi.tech/api/vehicles/?page=1&limit=100000`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
          .catch((err) => {
            console.error(err);
          });
        setStore({ vehicles: response.results });
      },
      fetchStarships: async () => {
        const response = await fetch(
          `https://www.swapi.tech/api/starships/?page=1&limit=100000`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
          .catch((err) => {
            console.error(err);
          });
        setStore({ starships: response.results });
      },
    },
  };
};

export default getState;
