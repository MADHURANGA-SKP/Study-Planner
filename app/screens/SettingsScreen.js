import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function SettingsScreen() {
  const { reminderTime, saveReminderTime } = useAppContext();
  const [localReminderTime, setLocalReminderTime] = useState(reminderTime);
  // Update local state when context changes
  useEffect(() => {
    setLocalReminderTime(reminderTime);
  }, [reminderTime]);
  const handleSave = () => {
    saveReminderTime(localReminderTime);
    alert(`Reminder time saved: ${localReminderTime}`);
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
      <Button title="Save Reminder Time" onPress={handleSave} />
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
    borderRadius: 5,
  },
});