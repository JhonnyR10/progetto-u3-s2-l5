import { useEffect } from "react";

const GeoCoord = ({ city, sendCoord }) => {
  const fetchData = () => {
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=1&appid=bc3ab04c8573805983bb1d7c5c66e8ae"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        console.log(data);
        sendCoord(data[0].lat, data[0].lon);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [city, sendCoord]);
  return null;
};

export default GeoCoord;
//bc3ab04c8573805983bb1d7c5c66e8ae
