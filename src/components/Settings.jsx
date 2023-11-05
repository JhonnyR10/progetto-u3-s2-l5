import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Settings = ({ setMetric }) => {
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const selectedUnitValue = e.target.unit.value;
    const unitSymbols = {
      "&units=standard": "°K",
      "&units=metric": "°C",
      "&units=imperial": "°F",
    };
    setMetric({
      metric: selectedUnitValue,
      simbolo: unitSymbols[selectedUnitValue],
    });
    navigate(`/`);
  };

  return (
    <Container fluid className="homebg h-100">
      <div className="second-color text-white text-center rounded h-100 p-4 opacity-50">
        <h3>Set your favorite settings </h3>
        <div className="w-25">
          <Form onSubmit={handleFormSubmit}>
            <Form.Label>
              Choose the unit of measurement you prefer (Default: metric)
            </Form.Label>
            <Form.Select aria-label="Default select example" name="unit">
              <option>Open this select menu</option>
              <option value="&units=standard">Standard</option>
              <option value="&units=metric">Metric</option>
              <option value="&units=imperial">Imperial</option>
            </Form.Select>
            <Button
              className="third-color text-black btn-dark border-0 mt-3"
              type="submit"
            >
              Save
            </Button>
          </Form>
        </div>
        {/* e volovo fare anche il cambio lang ma è tardiiiiiii */}
      </div>
    </Container>
  );
};
export default Settings;
