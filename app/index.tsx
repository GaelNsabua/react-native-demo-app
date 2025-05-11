import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemeView from "../components/ThemeView";
import Spacer from "../components/Spacer";
import ThemeText from "../components/ThemeText";

const index = () => {
  return (
    <ThemeView style={styles.container}>
      <Image
        source={require("../assets/book.png")}
        style={styles.img}
        resizeMode="cover"
      />

      <Spacer height={10} />

      <ThemeText style={styles.title} title={true}>
        The number 1
      </ThemeText>

      <Spacer height={10} />

      <ThemeText>Reading List App</ThemeText>

      <Spacer />

      <Link href="/login" style={styles.link}>
        <ThemeText>Login Page</ThemeText>
      </Link>

      <Spacer height={10} />

      <Link href="/register" style={styles.link}>
        <ThemeText>Register Page</ThemeText>
      </Link>

      <Link href="/profile" style={styles.link}>
        <ThemeText>Profile Page</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  img: {
    width: 180,
    height: 180,
  },
  link: {
    borderBottomWidth: 1,
  },
});
