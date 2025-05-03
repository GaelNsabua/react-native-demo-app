import { StyleSheet, Text } from "react-native";
import React from "react";
import ThemeView from "../../components/ThemeView";
import { Link } from "expo-router";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import ThemeButton from "../../components/ThemeButton";

const Register = () => {

  const handleSubmit = () => {
    console.log("Login form submitted");
  };

  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Register for an Account
      </ThemeText>

      <Spacer height={15} />

      <ThemeButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </ThemeButton>

      <Spacer height={100} />
      <Link href="/login">
        <ThemeText style={{ textAlign: "center" }}>Login instead</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default Register;

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
