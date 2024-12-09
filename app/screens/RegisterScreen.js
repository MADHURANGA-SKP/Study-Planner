import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useAppContext } from "../context/AppContext";
import { validateRegister } from "../helpers/validation";

export default function RegisterScreen({ navigation }) {
  const { register } = useAppContext() || {};
  if (!register) {
    console.log("register function is not available");
  }

  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = validateRegister(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (register(form)) {
      navigation.navigate("LoginScreen");
    } else {
      setErrors({ general: "Username or email already exists." });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={form.username}
        onChangeText={(text) => setForm({ ...form, username: text })}
      />
      {errors.username && <Text style={styles.error}>{errors.username}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
      />
      {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

      {errors.general && <Text style={styles.error}>{errors.general}</Text>}

      <View style={styles.btnwrap}>
          <TouchableOpacity
            style={styles.customButton1}
            onPress={handleSubmit} 
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
      </View>

        <View style={styles.btnwrap}>
          <TouchableOpacity
            style={styles.customButton2}
            onPress={() => navigation.navigate("LoginScreen")}  
          >
            <Text style={styles.buttonText}>Back to Login</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 30, },
  error: { color: "red", marginBottom: 10 },
  btnwrap: {marginBottom: 10},
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  customButton1: {
    backgroundColor: "#83ab6c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
  },
  customButton2: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    flex: 1, 
    marginHorizontal: 5,
  },
});
