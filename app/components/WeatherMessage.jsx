var React = require('react');

var WeatherMessage = ({temp, city}) => {
  //var {temp, city} = props;

  return (
    <div>
      <h3>Current Temperature is {temp} in {city}</h3>
    </div>
  )
};

module.exports = WeatherMessage;
