import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAppContext } from "../context/AppContext";

export default function CreateTaskScreen({ route, navigation }) {
  const { addData } = useAppContext();
  const selectedDate = route.params?.selectedDate; // Get selected date from navigation params
  const [taskTitle, setTaskTitle] = useState("");
  const handleCreateTask = () => {
    if (taskTitle) {
      addData({ type: "task", date: selectedDate, title: taskTitle });
      navigation.goBack(); // Navigate back to CalendarScreen after task creation
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Task</Text>
      <Text style={styles.label}>Date: {selectedDate}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});