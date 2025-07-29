import { useEffect } from "react";
import { Image, View } from "react-native";
import { Button, SafeLayout, ThemedText } from "../core";
import { useRouter } from "expo-router";

export const PaymentSuccessScreen = () => {
  const router = useRouter();

  return (
    <SafeLayout>
      <View className="flex-1 flex-col items-center justify-between">
        <View className="mt-20 flex items-center justify-center">
          <Image
            source={require("@/assets/images/pay.png")}
            style={{
              width: 220,
              height: 220,
            }}
          />
          <ThemedText type="subtitle" className="">
            Payment
          </ThemedText>
          <ThemedText type="default" className="mt-8 text-center">
            Congratulations. Your payment was successful. The amount has been
            transferred.
          </ThemedText>
        </View>
        <View className="w-full pb-8">
          <Button
            label="Done"
            variant="primary"
            onPress={() => router.push("/(private)/home")}
          />
        </View>
      </View>
    </SafeLayout>
  );
};
