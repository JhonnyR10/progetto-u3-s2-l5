import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="homebg h-100">
      <div className="second-color text-white text-center rounded h-100 p-4 opacity-50">
        <img src={"https://openweathermap.org/img/wn/11d@4x.png"} alt="icon" />
        <h3>City not found, please try again!</h3>
        <Button
          className="third-color text-black btn-dark border-0 mt-3"
          onClick={() => {
            navigate("/");
          }}
        >
          Back Home
        </Button>
      </div>
    </Container>
  );
};
export default NotFoundPage;
