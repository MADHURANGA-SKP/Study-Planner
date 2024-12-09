import React from "react";
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useAppContext } from "../context/AppContext";
import { navigate } from "expo-router/build/global-state/routing";

export default function HomeScreen({ navigation }) {
  const { notes, removeNote, user, logout} = useAppContext();

  const renderNote = ({ item }) => (
    <TouchableOpacity
      style={styles.noteCard}
      onPress={() => navigation.navigate("ViewNoteScreen", { note: item })}
    >
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteContent} numberOfLines={2}>
        {item.content}
      </Text>
      <Button title="Delete" color="red" onPress={() => removeNote(item.id)} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {user?.username || "Guest"}!</Text>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNote}
        ListEmptyComponent={<Text style={styles.emptyText}>No notes available. Add some!</Text>}
      />

      <View style={styles.btnwrap}>
        <Button title="Add Note" onPress={() => navigation.navigate("AddNoteScreen")} />
      </View>

      <View style={styles.btnwrap}>
        <Button title="Log Out" color="gray" onPress={() => {logout(); navigation.navigate("LoginScreen")}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  noteCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  noteTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  noteContent: { fontSize: 14, color: "#666" },
  emptyText: { textAlign: "center", color: "#666", marginTop: 20 },
  btnwrap: {marginBottom: 10}
});
