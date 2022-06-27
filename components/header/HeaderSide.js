import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderSide = ({ counter }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>TODO'S </Text>
      <Text style={styles.header_text2}>{counter}</Text>
    </View>
  );
};

export default HeaderSide;

const styles = StyleSheet.create({
  header_text: {
    color: "#fd7e14",
    fontSize: 30,
    fontWeight: "bold",
    flex: 1,
  },
  header_text2: {
    color: "#fd7e14",
    fontSize: 30,
    fontWeight: "bold",
    paddingRight: 5,
  },
  header: {
    flexDirection: "row",
    padding: 10,
  },
});
