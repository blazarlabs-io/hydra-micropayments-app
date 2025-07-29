import { ScanButton, ThemedText } from "@/components/core";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function DeposistLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => (
            <View className="flex-col items-center">
              <Text className="text-lg font-semibold">Step 2</Text>
              <Text>Deposit Funds</Text>
            </View>
          ),
          headerTitleAlign: "center",
          headerTintColor: Colors["light"].foreground,
        }}
      />
    </Stack>
  );
}
