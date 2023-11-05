const WeatherTips = ({ prev, name }) => {
  const weatherCondition = prev.weather[0].main.toLowerCase();

  let advice = "";

  switch (weatherCondition) {
    case "clear":
      advice = `In the enchanting realm of ${name}, the sky is as clear as your forecast. Don't forget your sunglasses and let the sun shine through!`;
      break;
    case "clouds":
      advice = `Even when clouds gather in ${name}, remember that every cloud has a silver lining. Keep your spirits high and carry a sense of adventure with you!`;
      break;
    case "thunderstorm":
      advice = `Batten down the hatches in ${name}! Our mystical Weather Wizard senses a thunderstorm brewing. Stay indoors, stay safe, and enjoy the electrifying show!`;
      break;
    case "drizzle":
      advice = `In ${name}, a gentle drizzle is nature's way of whispering sweet nothings. Embrace it with a cozy sweater and a hot drink!`;
      break;
    case "rain":
      advice = `Raindrops are nature's lullaby in ${name}. Grab your umbrella, snuggle up, and let the soothing rhythm serenade your senses!`;
      break;
    case "snow":
      advice = `A winter wonderland awaits you in ${name} as snowflakes twirl gracefully from the sky. It's the perfect time for snowball fights and snowman building!`;
      break;
    case "atmosphere":
      advice = `In the ever-changing atmosphere of ${name}, be prepared for the unexpected. Keep your senses sharp, and stay tuned to our mystical forecasts for guidance!`;
      break;
    default:
      advice = `For all other weather conditions in ${name}, our Weather Wizard suggests staying tuned for our unique insights. In the magical world of JohnnyWxWizard, surprises are always just a forecast away!`;
  }

  return (
    <div className="second-color text-white text-center rounded h-100 p-4 opacity-75 d-flex flex-column">
      <p className="third-color rounded">JWW Tips</p>
      <p className="mt-4 px-4">{advice}</p>
    </div>
  );
};
export default WeatherTips;
