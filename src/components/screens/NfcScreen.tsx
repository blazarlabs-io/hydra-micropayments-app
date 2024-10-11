import { Image, View } from "react-native";
import { Button, SafeLayout, ThemedText } from "../core";

export const NfcScreen = () => {
  return (
    <SafeLayout>
      <View className="items-center justify-center py-4">
        <ThemedText type="subtitle" className="text-center">
          NFC Payments
        </ThemedText>
      </View>
      <View className="flex-1 items-center justify-center">
        <Image
          source={require("@/assets/images/nfc-illustration.png")}
          className="h-[30%] w-[55%]"
          resizeMode="contain"
        />
        <ThemedText type="subtitle" className="max-w-[70%] text-center">
          Buy fast and safely NFC technology.
        </ThemedText>
        <ThemedText type="default" className="mt-6 max-w-[90%] text-center">
          Activating NFC technology allows you to pay with your phone in any
          hydrapay compatible terminal.
        </ThemedText>
        <Button
          className="mt-8"
          variant="primary"
          label="Activate NFC Payments"
        />
      </View>
    </SafeLayout>
  );
};
