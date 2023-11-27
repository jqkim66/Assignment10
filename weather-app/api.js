// api.js
const API_KEY = '98b31ba0a871fa0710488918018600a0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchThreeHourlyWeatherData = async (city) => {
  const url = `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.list; // 返回的数据包含每三个小时的预报
  } catch (error) {
    console.error(error);
  }
};
