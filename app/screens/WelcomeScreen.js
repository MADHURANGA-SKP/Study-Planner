import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import Logo from '../components/logo'
export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Logo/>
      {/* Welcome Title */}
      <Text style={styles.title}>Welcome to Task Manager</Text>
      <Text style={styles.subtitle}>
        Organize your tasks effectively and stay productive!
      </Text>
        <View style={styles.btnwrap}>
            <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate("CalendarScreen")}  
            >
            <Text style={styles.buttonText}>Go to Calendar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
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
