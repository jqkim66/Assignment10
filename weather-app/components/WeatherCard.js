// components/WeatherCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WeatherCard = ({ day, onCardPress }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

  return (
    <TouchableOpacity onPress={() => onCardPress(day)}>
      <View style={styles.card}>
        <Text style={styles.dayName}>{new Date(day.dt * 1000).toDateString()}</Text>
        <Image style={styles.image} source={{ uri: iconUrl }} />
        <Text style={styles.temperatures}>
          Max: {Math.round(day.temp_max)}°C / Min: {Math.round(day.temp_min)}°C
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  dayName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  temperatures: {
    fontSize: 16,
  },
});

export default WeatherCard;
