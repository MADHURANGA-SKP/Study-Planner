import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./core/theme";
import { AppProvider } from "./context/AppContext";
import { CalendarScreen,CreateTaskScreen,TaskManagementScreen,EditTaskScreen,SettingsScreen} from "./screens";
const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <Provider theme={theme}> 
        <Stack.Navigator
          initialRouteName="CalendarScreen"
          options={{ headerShown: false}}
          
        >
        <Stack.Screen name="CalendarScreen" component={CalendarScreen}/>
        <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen}/>
        <Stack.Screen name="EditTaskScreen" component={EditTaskScreen}/>
        <Stack.Screen name="TaskManagementScreen" component={TaskManagementScreen}/>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
      </Stack.Navigator>
      </Provider>
    </AppProvider>
  );
}