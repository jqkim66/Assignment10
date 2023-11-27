// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import WeatherCard from '../components/WeatherCard';

const API_KEY = '98b31ba0a871fa0710488918018600a0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const HomeScreen = ({ navigation }) => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const city = 'Boston'; 
            const url = `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                const processedData = processForecastData(data.list);
                setForecast(processedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeatherData();
    }, []);

    const processForecastData = (data) => {
        // 创建一个对象来存储每天的最高和最低温度
        const dailyTemperatures = {};

        data.forEach(point => {
            const date = new Date(point.dt * 1000).toDateString();
            if (!dailyTemperatures[date]) {
                dailyTemperatures[date] = {
                    ...point,
                    temp_max: point.main.temp_max,
                    temp_min: point.main.temp_min,
                };
            } else {
                dailyTemperatures[date].temp_max = Math.max(dailyTemperatures[date].temp_max, point.main.temp_max);
                dailyTemperatures[date].temp_min = Math.min(dailyTemperatures[date].temp_min, point.main.temp_min);
            }
        });

        // 转换对象回数组
        return Object.values(dailyTemperatures);
    };

    const handleCardPress = (day) => {
        navigation.navigate('Detail', { day });
    };

    return (
        <ScrollView style={styles.container}>
            {forecast.map((day, index) => (
                <WeatherCard key={index} day={day} onCardPress={handleCardPress} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        paddingTop: 20,
    },
});

export default HomeScreen;


