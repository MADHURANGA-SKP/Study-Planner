import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./core/theme";
import { AppProvider } from "./context/AppContext";
import { CalendarScreen,CreateTaskScreen,TaskManagementScreen,WelcomeScreen,EditTaskScreen,SettingsScreen} from "./screens";
const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <Provider theme={theme}> 
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          options={{ headerShown: false}}
          
        >
        <Stack.Screen name="CalendarScreen" component={CalendarScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="EditTaskScreen" component={EditTaskScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="TaskManagementScreen" component={TaskManagementScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
      </Provider>
    </AppProvider>
  );
}