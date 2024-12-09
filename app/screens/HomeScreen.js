import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useAppContext } from "../context/AppContext";

export default function HomeScreen({ navigation }) {
  const { notes, removeNote, user, logout } = useAppContext();

  const renderNote = ({ item }) => (
    <TouchableOpacity
      style={styles.noteCard}
      onPress={() => navigation.navigate("ViewNoteScreen", { note: item })}
    >
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteContent} numberOfLines={2}>
        {item.content}
      </Text>
      <View style={styles.btnwrap}>
        <TouchableOpacity
          style={styles.customButton3}
          onPress={() => removeNote(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, <Text style={styles.username}>{user?.name || "Guest"}!</Text></Text>

      {/* Make FlatList scrollable */}
      <FlatList
        style={styles.notesList}
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNote}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes available. Add some!</Text>
        }
      />

      {/* Buttons fixed at the bottom */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.customButton2}
          onPress={() => navigation.navigate("AddNoteScreen")}
        >
          <Text style={styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customButton1}
          onPress={() => {
            logout();
            navigation.navigate("LoginScreen");
          }}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  notesList: {
    flex: 1, 
  },
  noteCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    overflow: "hidden",
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  noteContent: {
    fontSize: 14,
    color: "#666",
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    marginTop: 20,
  },
  btnwrap: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  customButton1: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    flex: 1, 
    marginHorizontal: 5,
  },
  customButton2: {
    backgroundColor: "#83ab6c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    flex: 1, 
    marginHorizontal: 5, 
  },
  customButton3: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#83ab6c",
  },
});
