import React, {useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useAppContext } from '../context/AppContext';

export default function CalendarScreen({navigation}) {
  const { data} = useAppContext();
  const [selectedDate, setSelectedDate] = useState('');
  // Filter data for the selected date
  const eventsForSelectedDate = data.filter((item) => item.date === selectedDate);
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'blue' },
          ...data.reduce((acc, item) => {
            acc[item.date] = { marked: true, dotColor: 'red' };
            return acc;
          }, {}),
        }}
      />
      {selectedDate && (
        <Button
          title="Create Task"
          onPress={() =>
            navigation.navigate("CreateTaskScreen", { selectedDate })
          }
        />
      )}
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Button 
        title="Manage Tasks" 
        onPress={() => navigation.navigate('TaskManagementScreen')} 
      />
      <Text style={styles.dateTitle}>
        Events for {selectedDate || 'Select a Date'}
      </Text>
      <FlatList
        data={eventsForSelectedDate}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <Text style={styles.eventType}>[{item.type}]</Text>
            <Text style={styles.eventTitle}>{item.title}</Text>
            {/* <Button 
              title="View" 
              onPress={() => navigation.navigate('CalendarScreen', { task: item })} 
            />
            <Button 
              title="Edit" 
              onPress={() => editData(item.id, { title: 'Updated Task' })} 
            />
            <Button 
              title="Delete" 
              onPress={() => deleteData(item.id)} 
              color="red" 
            /> */}
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
  dateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  eventType: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  eventTitle: {
    fontSize: 16,
  },
});