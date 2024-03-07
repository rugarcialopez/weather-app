import React from "react";

interface IProps {
  city: string;
  main: string;
  icon: string;
  temperature: number;
  humidity: number;
}

const WeatherCard: React.FC<IProps> = React.memo((props) => {
  const {
    city,
    main,
    icon,
    temperature,
    humidity,
  } = props;

  return (
    <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4 flex-1" style={{'height': '5%'}}>
      <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
        <div className="flex items-start justify-between">
          <div className="flex flex-col space-y-2">
            <span className="text-gray-400">{city} Weather</span>
            <div className="flex flex-row items-center space-x-2">
              <span className="text-md font-semibold">{main}</span>
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                alt=""
              />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <span className="inline-block text-md font-semibold">Temperature</span>
              <span className="inline-block text-sm text-white bg-green-300 rounded p-1">{temperature} degrees</span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <span className="inline-block text-md font-semibold">Humidity</span>
              <span className="inline-block text-sm text-white bg-green-300 rounded p-1">{humidity}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default WeatherCard;
