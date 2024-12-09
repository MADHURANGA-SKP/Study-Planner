import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
  content: { fontSize: 16, color: "#666", lineHeight: 22 },
  btnwrap: {marginTop: 10},
  customButton2: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    flex: 1, 
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
