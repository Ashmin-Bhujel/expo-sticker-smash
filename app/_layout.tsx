import {
  SpaceGrotesk_400Regular,
  SpaceGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/dev";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loadedFont, error] = useFonts({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_700Bold,
  });

  useEffect(() => {
    if (loadedFont || error) {
      SplashScreen.hideAsync();
    }
  }, [loadedFont, error]);

  if (!loadedFont && !error) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar barStyle={"light-content"} backgroundColor={"#222222"} />
    </>
  );
}
