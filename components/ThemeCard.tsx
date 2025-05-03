import { StyleSheet, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ThemeCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[{ backgroundColor: theme.uibackground }, styles.card, style]}
      {...props}
    />
  );
};

export default ThemeCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
