import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import AccountScreen from "../screen/AccountScreen";
import PDFScreen from "../screen/PDFScreen";
import { useAuth } from "./Authcontext";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Profile"
            component={AccountScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="PDFScreen" component={PDFScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
