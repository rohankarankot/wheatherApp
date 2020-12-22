import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";

// import Picker from "@react-native-community/picker";

export default function UnitPicker({ unitSystem, setUnitSystem }) {
  console.log(setUnitSystem);
  return (
    <View style={styles.unitsystem}>
      <Text
        style={{
          top: 10,
          left: 10,
          fontSize: 20,
        }}
      >
        Select Unit
      </Text>
      <Picker
        mode="dropdown"
        selectedValue={unitSystem}
        onValueChange={(item) => {
          setUnitSystem(item);
        }}
      >
        <Picker.Item label="Celsius" value="metric" />
        <Picker.Item label="Fahrenheit" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitsystem: {
    position: "absolute",
    height: 50,
    width: 130,
    top: 30,
    left: 15,
  },
});
