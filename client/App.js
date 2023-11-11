import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./navigators/Authcontext";
import TabStacks from "./navigators/TabStack";
import { Provider } from 'react-redux'
import store from "./store/reducers/rootReducer";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
          "Lato-BlackItalic": require("./assets/fonts/Lato-BlackItalic.ttf"),
          "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
          "Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
          "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
          "Lato-Light": require("./assets/fonts/Lato-BoldItalic.ttf"),
          "Lato-LightItalic": require("./assets/fonts/Lato-LightItalic.ttf"),
          "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
          "Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
          "Lato-ThinItalic": require("./assets/fonts/Lato-ThinItalic.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts: ", error);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['email'],
  //     webClientId: '<YOUR_WEB_CLIENT_ID>',
  //   });
  // }, []);  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['email'],
  //     webClientId: '<YOUR_WEB_CLIENT_ID>',
  //   });
  // }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <TabStacks />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}
