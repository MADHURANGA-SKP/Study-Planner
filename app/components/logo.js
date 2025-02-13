import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image
      source={require("../../assets/images/task-logo.png")}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 30,
  },
});