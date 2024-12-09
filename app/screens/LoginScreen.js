import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAppContext } from "../context/AppContext";
import { validateLogin } from  "../helpers/validation";

export default function LoginScreen({ navigation }) {
  const { login } = useAppContext();
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = validateLogin(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (login(form.username, form.password)){
      navigation.navigate("HomeScreen");
    } else {
      setErrors({ general: "Invalid username or password." });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={form.username}
        onChangeText={(text) => setForm({ ...form, username: text })}
      />
      {errors.username && <Text style={styles.error}>{errors.username}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      {errors.general && <Text style={styles.error}>{errors.general}</Text>}

      <View style={styles.btnwrap}>
        <Button title="Login" onPress={handleSubmit} />
      </View>

      <View style={styles.btnwrap}>  
        <Button title="Register" onPress={() => navigation.navigate("RegisterScreen")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: "red", marginBottom: 10 },
  btnwrap: {marginBottom: 10}
});
