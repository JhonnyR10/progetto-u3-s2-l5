const CardWeather = ({ prev, name, metric }) => {
  console.log(prev);
  return (
    //     <Card style={{ width: "18rem" }}>
    //       <Card.Img variant="top" src="holder.js/100px180" />
    //       <Card.Body>
    //         <Card.Title>{prev.name}</Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //         <Button variant="primary">Go somewhere</Button>
    //       </Card.Body>
    //     </Card>
    <div
      className="second-color text-white text-center rounded h-100 p-4 opacity-75"
      //   style={{ width: "100%", height: "450px" }}
      //   style={{ width: "18rem" }}
    >
      <p className="mb-0 third-color rounded">{name.toUpperCase()}</p>
      <img
        src={
          "https://openweathermap.org/img/wn/" +
          prev.weather[0].icon +
          "@2x.png"
        }
        alt="icon"
      />
      <p>{prev.weather[0].description.toUpperCase()}</p>
      <p className="">
        {prev.main.temp} {metric.simbolo}
      </p>
      <p className="">
        MIN: {prev.main.temp_min} {metric.simbolo} MAX: {prev.main.temp_max}{" "}
        {metric.simbolo}{" "}
      </p>
      <p className="m-0">Last updated 3 mins ago</p>
    </div>
  );
};
export default CardWeather;
