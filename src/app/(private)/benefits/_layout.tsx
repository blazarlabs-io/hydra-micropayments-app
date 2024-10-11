import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function BenefitsLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="ada-staking"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "ADA Staking",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="exchange"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "Exchange",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
