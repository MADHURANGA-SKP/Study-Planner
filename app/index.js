import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./core/theme";
import { AppProvider } from "./context/AppContext";
import { LoginScreen, AddNoteScreen,HomeScreen ,RegisterScreen,ViewNoteScreen} from "./screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <Provider theme={theme}> 
        <Stack.Navigator
          initialRouteName="LoginScreen"
          options={{ headerShown: false }}
        >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ViewNoteScreen" component={ViewNoteScreen} />
      </Stack.Navigator>
      </Provider>
    </AppProvider>
  );
}