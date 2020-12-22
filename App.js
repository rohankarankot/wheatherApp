import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Location from "expo-location";
import WetherInfo from "./components/WetherInfo";
import UnitPicker from "./components/UnitPicker";
import ReloadItem from "./components/ReloadItem";

import { Alert } from "react-native";

const WETHER_API_KEY = "a454786e757fe9425a64f8badf5dfba3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWether, setCurrentWether] = useState(null);
  const [unitSystem, setUnitSystem] = useState("metric");
  useEffect(() => {
    load();
  }, [unitSystem]);
  async function load() {
    setCurrentWether(null);
    setErrorMessage(null);
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status != "granted") {
        setErrorMessage("Location permission neede");
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
      const wetherUrl = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WETHER_API_KEY}`;
      const response = await fetch(wetherUrl);

      const result = await response.json();

      if (response.ok) {
        setCurrentWether(result);
      } else {
        setErrorMessage("Error: Something went Wrong!!");
      }
      // alert(`longitude is ${longitude} \n latitude is : ${latitude}`);
    } catch (error) {
      setErrorMessage("Error: Something went Wrong!!");
    }
  }

  if (currentWether) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <ReloadItem load={load} />
          <UnitPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <WetherInfo currentWether={currentWether} />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "#ed2828",
            width: "100%",
            alignItems: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => Alert.alert("Know Developer", "   Rohan Karankot")}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#fff",
              }}
            >
              Know Developer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="tomato" />
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
