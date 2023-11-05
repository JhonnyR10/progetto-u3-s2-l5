import { Card, Carousel } from "react-bootstrap";

const CaroselloHome = () => {
  return (
    <Carousel>
      <Carousel.Item className="item">
        <Card className="carouselCard">
          <Card.Body>
            <Card.Title>Explore the World of Weather Wonders:</Card.Title>
            <Card.Text>
              Step into the magical realm of JohnnyWxWizard (JWW), where weather
              becomes a whimsical wonderland! Our mystical weather sorcery will
              have you exclaiming, 'Just Wow, Weather!' as you embark on an
              extraordinary meteorological adventure filled with surprises.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item className="item">
        <Card className="carouselCard">
          <Card.Body>
            <Card.Title>Follow the Unpredictable Predictions:</Card.Title>
            <Card.Text>
              At JWW, we've conjured a world of 'Unpredictable Predictions' ,
              turning the everyday weather forecast into a delightful journey.
              Join our 'Weather Wizard' Johnny as he playfully guides you
              through city forecasts with a touch of quirky humor, promising
              more than just a mundane report.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item className="item">
        <Card className="carouselCard">
          <Card.Body>
            <Card.Title>Ride the Weather Adventure:</Card.Title>
            <Card.Text>
              Expect the unexpected, and savor 'Weather Eureka!' moments that
              will leave you smiling. With an 'Outlook with a Wink' , checking
              the weather becomes an exciting escapade.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item className="item">
        <Card className="item2">
          <Card.Body>
            <Card.Title>How the Site Works:</Card.Title>
            <Card.Text>
              Discover the inner workings of JWW! Use the intuitive search below
              to summon weather details for any city instantly. Explore daily
              forecasts on the 'Details' page and tailor your experience in
              'Settings' by selecting preferred units and your location. 'My
              List' allows you to track your favorite cities.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
};
export default CaroselloHome;
