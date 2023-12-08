// screens/DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
  const { dayData } = route.params;
  // console.log(dayData);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.toDateString()} ${date.getHours()}:00`;
  };

  return (
    <ScrollView style={styles.container}>
      {dayData.map((weather, index) => (
        <View key={index} style={styles.weatherItem}>
          <Text style={styles.time}>{formatDate(weather.dt)}</Text>
          <Text>Temperature: {Math.round(weather.main.temp)}°C</Text>
          <Text>Humidity: {weather.main.humidity}%</Text>
          <Text>{weather.weather[0].description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  weatherItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    // ... 其他样式
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  }
  // ... 其他样式
});

export default DetailScreen;
