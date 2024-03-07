export const fetchWeather = async () => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${import.meta.env.VITE_APPID}&units=metric`);

  if (!response.ok) {
    const error: Error = new Error('An error ocurred while fetching the weather');
    error.message = await response.json()
    throw error;
  }
  const data = response.json();
  return data;
}
