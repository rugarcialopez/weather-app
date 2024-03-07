import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchWeather } from "../util/http";
import WeatherCard from "./WeatherCard";
import LoadingIndicator from "./LoadingIndicator";

const MainContent = React.memo(() => {
  const {
    data,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
    refetchOnWindowFocus: true,
    refetchInterval: 30000,
  });

  if (isPending) {
    return (
      <LoadingIndicator />
    )
  }

  if (isError) {
    return (
      <div className="text-md text-red-500">{error?.message || 'Error fetching the weather'}</div>
    )
  }

  return (
    <main className="flex flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
      <WeatherCard
        city={data.name}
        main={data.weather[0].main}
        icon={data.weather[0].icon}
        temperature={data.main.temp}
        humidity={data.main.humidity}
      />
    </main>
  )
});

export default MainContent;
