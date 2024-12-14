import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
      <Text style={styles.title}>Edit Task</Text>
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
      <Button title="Save Changes" onPress={handleSave} />
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
  },
});