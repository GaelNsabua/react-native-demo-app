import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import ThemeView from "../../components/ThemeView";
import { Link } from "expo-router";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import ThemeButton from "../../components/ThemeButton";
import ThemeTextInput from "../../components/ThemeTextInput";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constants/Colors";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { register } = useUser();

  const handleSubmit = async () => {
    setError(null);
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemeView style={styles.container}>
        <Spacer />
        <ThemeText title={true} style={styles.title}>
          Register for an Account
        </ThemeText>

        <Spacer height={15} />

        <ThemeTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemeTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <Spacer height={15} />

        <ThemeButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemeButton>

        <Spacer height={15} />

        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <Link href="/login">
          <ThemeText style={{ textAlign: "center" }}>Login instead</ThemeText>
        </Link>
      </ThemeView>
    </TouchableWithoutFeedback>
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
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});
