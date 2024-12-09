import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useAppContext } from "../context/AppContext";
import { validateNote } from "../helpers/validation";

export default function AddNoteScreen({ navigation }) {
  const { addNote } = useAppContext() || {};  
  if (!addNote) {
    console.log("addNote function is not available");
  }

  console.log("addNote:", addNote); 
  const [form, setForm] = useState({ title: "", content: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = validateNote(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addNote({
      id: Date.now(),
      ...form,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Note</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={form.title}
        onChangeText={(text) => setForm({ ...form, title: text })}
      />
      {errors.title && <Text style={styles.error}>{errors.title}</Text>}

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Content"
        value={form.content}
        multiline
        numberOfLines={5}
        onChangeText={(text) => setForm({ ...form, content: text })}
      />
      {errors.content && <Text style={styles.error}>{errors.content}</Text>}

      <View style={styles.btnwrap}>
        <TouchableOpacity
          style={styles.customButton1}
          onPress={handleSubmit} 
        >
          <Text style={styles.buttonText}>Save Note</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnwrap}>
        <TouchableOpacity
          style={styles.customButton2}
          onPress={() => navigation.navigate("HomeScreen")}  
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  textArea: { height: 100, textAlignVertical: "top" },
  error: { color: "red", marginBottom: 10 },
  btnwrap: {marginBottom: 10,marginTop: 10,},
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
