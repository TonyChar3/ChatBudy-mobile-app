import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { theme } from "./src/infrastructure/theme/index";
import { AuthContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation/";

import {
  useFonts as useFira,
  FiraSans_400Regular,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans";

export default function App() {
  const [firaLoaded] = useFira({
    FiraSans_400Regular,
    FiraSans_700Bold,
  });

  if (!firaLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
