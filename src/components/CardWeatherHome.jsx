const CardWeatherHome = ({ prev, name, metric }) => {
  console.log(prev);
  return (
    <div
      className="second-color text-white text-center rounded h-100 p-4"
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
    </div>
  );
};
export default CardWeatherHome;
