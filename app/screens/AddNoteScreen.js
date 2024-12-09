import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAppContext } from "../context/AppContext";
import { validateNote } from "../helpers/validation";

export default function AddNoteScreen({ navigation }) {
  const { addNote } = useAppContext() || {};  // Provide fallback if context is undefined
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

        <Button title="Save Note" onPress={handleSubmit} color='green' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  textArea: { height: 100, textAlignVertical: "top" },
  error: { color: "red", marginBottom: 10 },
});
