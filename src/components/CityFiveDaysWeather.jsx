import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { format } from "date-fns";

const CityFiveDaysWeather = ({ coord, name, metric }) => {
  const [previsioneWeek, setPrevisioneWeek] = useState(null);

  console.log(name);

  const weatherFetchWeek = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        coord.lat +
        "&lon=" +
        coord.lon +
        "&appid=bc3ab04c8573805983bb1d7c5c66e8ae" +
        metric.metric
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        console.log(data.list);
        setPrevisioneWeek(data.list);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };

  useEffect(() => {
    if (coord) {
      weatherFetchWeek();
    }
  }, [coord]);

  const setDate = (date) => {
    const data = new Date(date);
    return format(data, "dd/MM HH:mm");
  };

  return (
    previsioneWeek &&
    previsioneWeek
      .filter((prev) => prev.dt_txt.includes("12:00:00"))
      .map((prev, index) => {
        return (
          <Col key={index}>
            <div className=" text-white text-center rounded h-100 p-4">
              <p>{setDate(prev.dt_txt)}</p>
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  prev.weather[0].icon +
                  ".png"
                }
                alt="icon"
              />
              <p>{prev.weather[0].description.toUpperCase()}</p>
              <p className="">
                {prev.main.temp} {metric.simbolo}
              </p>
            </div>
          </Col>
        );
      })
  );
};

export default CityFiveDaysWeather;
