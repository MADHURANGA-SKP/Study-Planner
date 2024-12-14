import React, {useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function TaskManagementScreen({navigation}) {
  const {data, addData, editData, deleteData } = useAppContext();
  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const addTask = () => {
    if (newTask && selectedDate) {
      addData({ type: 'task', date: selectedDate, title: newTask });
      setNewTask('');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Date (YYYY-MM-DD)"
        value={selectedDate}
        onChangeText={setSelectedDate}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={data.filter((item) => item.type === 'task')}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text>{item.date}: {item.title}</Text>
            <Button 
              title="Edit" 
              onPress={() => navigation.navigate('EditTaskScreen', { task: item })} 
            />
            <Button title="Delete" onPress={() => deleteData(item.id)} color="red" />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
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
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});