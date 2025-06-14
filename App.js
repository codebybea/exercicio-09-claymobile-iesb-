import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import RecipeScreen from "./src/screens/ReceitaScreen";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#D94F2B" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Receitas" }}
          />
          <Stack.Screen
            name="Recipe"
            component={RecipeScreen}
            options={({ route }) => ({ title: route.params.receitas.nome })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
