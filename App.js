import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/pages/Login";
import Pages from "./components/pages/Pages";


const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            title: "Tela de Login",
            headerShown: true
          }}
        />
        <Stack.Screen
          name="Pages"
          component={Pages}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}