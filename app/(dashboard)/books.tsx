import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";

const Books = () => {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.heading}>
        Your Reading List
      </ThemeText>
    </ThemeView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
