import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ReloadItem(load) {
  return (
    <View style={styles.reloadItem}>
      <TouchableOpacity onPress={() => load}>
        <Ionicons name="md-refresh" size={40} color="#ed2828" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  reloadItem: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
    right: 20,
  },
});
