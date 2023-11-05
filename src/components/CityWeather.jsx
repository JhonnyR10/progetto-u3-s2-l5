import { useEffect, useState } from "react";
import CardWeather from "./CardWeather";
import CardWeatherHome from "./CardWeatherHome";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import WeatherTips from "./WeatherTips";
import OtherDetails from "./OtherDetails";

const CityWeather = ({ coord, name, metric }) => {
  const location = useLocation();
  const [previsione, setPrevisione] = useState(null);

  console.log(name);

  const weatherFetch = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
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
        setPrevisione(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };

  useEffect(() => {
    weatherFetch();
  }, [coord]);

  // return previsione && name && <CardWeather prev={previsione} name={name} />;
  return previsione && name ? (
    location.pathname === "/" ? (
      <CardWeatherHome prev={previsione} name={name} metric={metric} />
    ) : (
      <Row className="gy-2">
        <Col xs={6} md={4}>
          <WeatherTips prev={previsione} name={name} />
        </Col>
        <Col xs={6} md={4}>
          <CardWeather prev={previsione} name={name} metric={metric} />
        </Col>
        <Col>
          <OtherDetails prev={previsione} name={name} />
        </Col>
      </Row>
    )
  ) : null;
};
export default CityWeather;
//bc3ab04c8573805983bb1d7c5c66e8ae
