import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function SettingsScreen({navigation}) {
  const { reminderTime, saveReminderTime } = useAppContext();
  const [localReminderTime, setLocalReminderTime] = useState(reminderTime);
  // Update local state when context changes
  useEffect(() => {
    setLocalReminderTime(reminderTime);
  }, [reminderTime]);

  const handleSave = () => {
    saveReminderTime(localReminderTime);
    alert(`Reminder time saved: ${localReminderTime}`);
    navigation.navigate('CalendarScreen')
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TextInput
        style={styles.input}
        placeholder="Set Reminder Time (e.g., 09:00 AM)"
        value={localReminderTime}
        onChangeText={setLocalReminderTime}
      />
      <View style={styles.btnwrap}>
                <TouchableOpacity
                style={styles.customButton}
                onPress={handleSave}
                >
                <Text style={styles.buttonText}>Save Reminder Time</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 30,
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