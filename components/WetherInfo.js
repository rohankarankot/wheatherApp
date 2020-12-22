import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function WetherInfo({ currentWether }) {
  const {
    weather: [details],
  } = currentWether;
  const { icon, description, main } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.wetherInfo}>
      <Text style={styles.wetherCity}>{currentWether.name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.wetherTemp}>{currentWether.main.temp}°</Text>
      <Text style={styles.wetherDesc}>{main}</Text>
      <Text style={styles.wetherDesc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wetherInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 150,
    height: 100,
  },
  wetherTemp: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ed2828",
  },
  wetherCity: {
    fontSize: 30,
    fontWeight: "bold",
  },
  wetherDesc: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
});
