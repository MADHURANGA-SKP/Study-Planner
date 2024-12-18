import React, {useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
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
      <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => navigation.navigate('CalendarScreen')}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Task Management</Text>
      </View>
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

      <View style={styles.btnwrap}>
                <TouchableOpacity
                  style={styles.CommonButton}
                  onPress={addTask}
                  >
                <Text style={styles.buttonText}>Add Task</Text>
                </TouchableOpacity>
     </View>

      <FlatList
        style={styles.flatlist}
        data={data.filter((item) => item.type === 'task')}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text><Text style={styles.date}>{item.date}</Text>: {item.title}</Text>

            <View style={styles.btnwrap}>
                <TouchableOpacity
                  style={styles.EditButton}
                  onPress={() => navigation.navigate('EditTaskScreen', { task: item })}
                  >
                <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btnwrap}>
                <TouchableOpacity
                  style={styles.DeleteButton}
                  onPress={() => deleteData(item.id)}
                  >
                <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
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
    borderRadius: 30
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  date: {
    color: "#9A82F6",
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  EditButton: {
    backgroundColor: "#9A82F6",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  DeleteButton: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  flatlist: {
    paddingVertical: 10
  },
  CommonButton: {
    backgroundColor: "#9A82F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10, 
  },
  BackButton: {
    backgroundColor: '#9A82F6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
});