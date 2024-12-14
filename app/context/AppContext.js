import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([
    // Sample data structure
    { id: 1, type: 'class', date: '2024-12-13', title: 'Math Lecture' },
    { id: 2, type: 'exam', date: '2024-12-15', title: 'Physics Exam' },
    { id: 3, type: 'task', date: '2024-12-13', title: 'Complete Homework' },
  ]);

  // Add new item to data
  const addData = (newItem) => {
    setData((prevData) => [...prevData, { id: Date.now(), ...newItem }]);
  };

  // Edit an existing item
  const editData = (id, updatedItem) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  // Delete an item
  const deleteData = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const [reminderTime, setReminderTime] = useState('09:00 AM');
  const loadReminderTime = async () => {
    try {
      const savedTime = await AsyncStorage.getItem('reminderTime');
      if (savedTime) setReminderTime(savedTime);
    } catch (error) {
      console.error('Error loading reminder time:', error);
    }
  };

  const saveReminderTime = async (time) => {
    try {
      await AsyncStorage.setItem('reminderTime', time);
      setReminderTime(time);
    } catch (error) {
      console.error('Error saving reminder time:', error);
    }
  };

  useEffect(() => {
    loadReminderTime();
  }, []);

  return (
  <AppContext.Provider value={{ data, addData, editData, deleteData, reminderTime, saveReminderTime }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);