import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function EditTaskScreen({ route, navigation }) {
  const { editData } = useAppContext();
  const { task } = route.params; // Task passed as a parameter
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const handleSave = () => {
    editData(task.id, { title, date }); // Update the task
    navigation.goBack(); // Navigate back after saving
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => navigation.navigate('TaskManagementScreen')}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Edit Task</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <View style={styles.btnwrap}>
            <TouchableOpacity
                style={styles.customButton}
                onPress={handleSave}
            >
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 30
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
  headerContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Align vertically in the center
    justifyContent: 'space-between', // Space between Back button and title
    paddingVertical: 5, // Add padding
  },
  BackButton: {
    backgroundColor: '#9A82F6', // Button color
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});