// screens/DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { day } = route.params;

  // 将 UNIX 时间戳（秒）转换为本地时间字符串
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.toDateString()} ${date.getHours()}:00`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{formatDate(day.dt)}</Text>
      {/* 在这里显示更多天气详情 */}
      <Text>Temperature: {Math.round(day.main.temp)}°C</Text>
      <Text>Humidity: {day.main.humidity}%</Text>
      <Text>{day.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // ... 其他样式
});

export default DetailScreen;
