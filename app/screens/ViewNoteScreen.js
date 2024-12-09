import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ViewNoteScreen({ route, navigation }) {
  const { note } = route.params;

  if (!note) {
    return (
      <View style={styles.container}>
        <Text>No note found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  content: { fontSize: 16, color: "#666", lineHeight: 22 },
});
