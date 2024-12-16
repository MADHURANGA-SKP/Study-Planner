import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from "react-native";
import { useAppContext } from "../context/AppContext";

export default function CreateTaskScreen({ route, navigation }) {
  const { addData } = useAppContext();
  const selectedDate = route.params?.selectedDate; // Get selected date from navigation params
  const [taskTitle, setTaskTitle] = useState("");
  const handleCreateTask = () => {
    if (taskTitle) {
      addData({ type: "task", date: selectedDate, title: taskTitle });
      navigation.navigate('CalendarScreen') 
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Task</Text>
      <Text style={styles.label}>Date:<Text style={styles.date}>  {selectedDate}</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <View style={styles.btnwrap}>
                <TouchableOpacity
                style={styles.customButton}
                onPress={handleCreateTask}
                >
                <Text style={styles.buttonText}>Create Task</Text>
            </TouchableOpacity>
      </View>
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
  date: {
    color: "#9A82F6",
    fontSize: 16,
    fontWeight: "bold",
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
  btnwrap: {marginBottom: 10,marginTop: 10,},
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  customButton: {
    backgroundColor: "#9A82F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
  },
});