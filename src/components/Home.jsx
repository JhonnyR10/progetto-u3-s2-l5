import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CityWeather from "./CityWeather";
import logo from "../data/default_transparent_765x625.png";
import romaImg from "../data/roma3.jpg";
import newYorkImg from "../data/newYork.jpg";
import londonImg from "../data/london.jpg";
import milanoImg from "../data/milano.jpg";
import CaroselloHome from "./CaroselloHome";

const Home = ({ metric }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const roma = {
    lat: "41.8933",
    lon: "12.4829",
  };
  const londra = {
    lat: "51.5073",
    lon: "-0.1276",
  };
  const newYork = {
    lat: "40.7127",
    lon: "-74.006",
  };
  const milano = {
    lat: "45.4643",
    lon: "9.1895",
  };

  return (
    <Container fluid className="homebg">
      <Row className="mb-3 align-items-center">
        <Col xs={12} lg={6}>
          <div className="text-center">
            <img alt="logo" src={logo} className="logo"></img>
          </div>
        </Col>
        <Col>
          <div className="text-center mb-2 divCarosello mx-5 opacity-75">
            <CaroselloHome />
          </div>
        </Col>
      </Row>

      <div className="formSearch second-color rounded mx-5 opacity-75">
        <Form
          className="d-flex"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/mysearch/${search}`);
          }}
        >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            required
          />

          <Button
            className="third-color text-black btn-dark border-0"
            type="submit"
            // onClick={() => navigate(`/mysearch/${search}`)}
          >
            Search
          </Button>
        </Form>
      </div>
      <div className="containerCard mx-3">
        <Row className="maxWidthHome">
          <Col xs={12} className="mt-3 cardHome">
            <Row className="h-100">
              <Col xs={4} md={3} lg={2} className="pe-0">
                <CityWeather
                  coord={newYork}
                  name={"new york"}
                  metric={metric}
                />
              </Col>
              <Col className="ps-0">
                <img
                  alt="roma"
                  src={newYorkImg}
                  className="img-fluid h-100 rounded roma"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="mt-3 cardHome">
            <Row className="h-100">
              <Col className="pe-0">
                <img
                  alt="roma"
                  src={milanoImg}
                  className="img-fluid h-100 rounded roma"
                />
              </Col>
              <Col xs={4} md={3} lg={2} className="ps-0">
                <CityWeather coord={milano} name={"milan"} metric={metric} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="mt-3 cardHome">
            <Row className="h-100">
              <Col xs={4} md={3} lg={2} className="pe-0">
                <CityWeather coord={roma} name={"rome"} metric={metric} />
              </Col>
              <Col className="ps-0">
                <img
                  alt="roma"
                  src={romaImg}
                  className="img-fluid h-100 rounded roma"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="mt-3 cardHome">
            <Row className="h-100">
              <Col className="pe-0">
                <img
                  alt="roma"
                  src={londonImg}
                  className="img-fluid h-100 rounded roma"
                />
              </Col>
              <Col xs={4} md={3} lg={2} className="ps-0">
                <CityWeather coord={londra} name={"london"} metric={metric} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Home;
