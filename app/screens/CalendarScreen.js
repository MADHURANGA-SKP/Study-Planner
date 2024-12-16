import React, {useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet,TouchableOpacity } from 'react-native';
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
        theme={{
          backgroundColor: '#F9F4DC', // Overall calendar background
          calendarBackground: '#FAE6A2',
          textSectionTitleColor: '#9A82F6', // Month header text
          selectedDayBackgroundColor: '#000000', // Selected day's background
          selectedDayTextColor: 'white', // Selected day text
          todayTextColor: '#000000', // Today's text color
          dayTextColor: '#000000', // Default day text color
          textDisabledColor: '#000000', // Disabled days (e.g., past days) text
          dotColor: '#9A82F6', // Dots for marked dates
          selectedDotColor: '#000000', // Dot color on selected day
          arrowColor: '#9A82F6', // Calendar navigation arrow color
          monthTextColor: '#000000', // Month name text color
         
        }}
        style={{
          borderRadius: 15,
          marginVertical: 10,
          padding: 5,
          elevation: 3, // Shadow effect
        }}
      />
      {selectedDate && (
        <View style={styles.btnwrap}>
            <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate("CreateTaskScreen", { selectedDate })}  
            >
            <Text style={styles.buttonText}>Create Task</Text>
            </TouchableOpacity>
        </View>
      )}
      <View style={styles.btnwrap}>
            <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate('SettingsScreen')}  
            >
            <Text style={styles.buttonText}>Go to Settings</Text>
            </TouchableOpacity>
      </View>
      
      <View style={styles.btnwrap}>
            <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate('TaskManagementScreen')}  
            >
            <Text style={styles.buttonText}>Manage Tasks</Text>
            </TouchableOpacity>
      </View>

      <Text style={styles.dateTitle}>
        Events for <Text style={styles.date}> {selectedDate || 'Select a Date'}</Text>
      </Text>
      <FlatList
        data={eventsForSelectedDate}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <Text style={styles.eventType}>{item.type}</Text>
            <Text style={styles.eventTitle}>{item.title}</Text>
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
    fontSize: 16,
    textTransform: 'uppercase',
  },
  eventTitle: {
    fontSize: 16,
  },
  btnwrap: {marginBottom: 10,marginTop: 10,},
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: "#9A82F6",
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