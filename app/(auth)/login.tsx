import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import ThemeView from "../../components/ThemeView";
import { Link } from "expo-router";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";
import ThemeButton from "../../components/ThemeButton";

const Login = () => {
  const handleSubmit = () => {
    console.log("Login form submitted");
  };

  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Login to Your Account
      </ThemeText>

      <Spacer height={15} />

      <ThemeButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemeButton>

      <Spacer height={100} />
      <Link href="/register">
        <ThemeText style={{ textAlign: "center" }}>Register instead</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
