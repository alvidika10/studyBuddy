import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "../screen/LandingPageScreen";
import DetailScreen from "../screen/DetailScreen";
import ProjectScreen from "../screen/ProjectScreen";

const Stack = createNativeStackNavigator();

export default function LandingPageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={LandingPageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Project"
        component={ProjectScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
