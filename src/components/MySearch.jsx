import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GeoCoord from "./GeoCord";
import CityWeather from "./CityWeather";
import { Col, Container, Row } from "react-bootstrap";
import CityDailyWeather from "./CityDailyWeather";
import CityFiveDaysWeather from "./CityFiveDaysWeather";

const MySearch = ({ metric }) => {
  const navigate = useNavigate();
  const [coord, setCoord] = useState({
    lat: "",
    lon: "",
  });
  const [name, setName] = useState("");

  const sendCoord = (lat, lon) => {
    setCoord({ lat: lat, lon: lon });
  };

  const params = useParams();
  console.log("paramsin", params);

  const fetchData = () => {
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        params.city +
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
        setName(data[0].name);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
        navigate("/notFoundPage");
      });
  };
  useEffect(() => {
    if (params.city !== " ") {
      fetchData();
    }
  }, [params.city]);
  //   <GeoCoord city={params.city} sendCoord={sendCoord} />;
  return (
    <Container fluid className="homebg">
      <Row className="mx-2">
        <Col>
          {coord.lat !== "" && coord.lon !== "" ? (
            <CityWeather coord={coord} name={name} metric={metric} />
          ) : null}
        </Col>
        <h4 className="text-white text-center third-color rounded mt-3">
          Forecast for the next 24 hours
        </h4>
        <Col xs={12} className="second-color rounded mt-3 opacity-50">
          <Row className="justify-content-around text-center">
            {coord.lat !== "" && coord.lon !== "" ? (
              <CityDailyWeather coord={coord} name={name} metric={metric} />
            ) : null}
          </Row>
        </Col>
        <h4 className="text-white text-center third-color rounded mt-3">
          Forecast for the next five days
        </h4>
        <Col xs={12} className="second-color rounded mt-3 opacity-50">
          <Row className="text-center">
            {coord.lat !== "" && coord.lon !== "" ? (
              <CityFiveDaysWeather coord={coord} name={name} metric={metric} />
            ) : null}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MySearch;
