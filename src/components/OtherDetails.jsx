import { fromUnixTime, format } from "date-fns";
import { Wind, Sunrise, Sunset } from "react-bootstrap-icons";

const getDateUnix = (date) => {
  return format(fromUnixTime(date), "HH:mm:ss");
};

const OtherDetails = ({ prev, name }) => {
  return (
    <div
      className="second-color text-white text-center rounded h-100 p-4 opacity-75"
      //   style={{ width: "100%", height: "450px" }}
      //   style={{ width: "18rem" }}
    >
      <p className="mb-4 third-color rounded">Other Details</p>
      <p>
        <Wind></Wind> Wind : {prev.wind.speed} m/s
      </p>
      <p>Visibility : {prev.visibility} m</p>
      <p>
        {" "}
        <Sunrise></Sunrise> Sunrise : {getDateUnix(prev.sys.sunrise)}{" "}
      </p>
      <p>
        {" "}
        <Sunset></Sunset> Sunset : {getDateUnix(prev.sys.sunset)}{" "}
      </p>
      <p>Humidity : {prev.main.humidity} %</p>
    </div>
  );
};
export default OtherDetails;
