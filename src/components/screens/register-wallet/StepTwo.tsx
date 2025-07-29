import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button, Input, SafeLayout, ThemedText } from "../../core";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useWallet } from "@/context/walletContext";
import Clipboard from "@react-native-clipboard/clipboard";

export const StepTwo = () => {
  const router = useRouter();
  const { adminWalletAddress } = useWallet();
  const [value, setValue] = useState<string>("");

  const handleNext = () => {
    router.push("/home/nfc");
  };

  return (
    <SafeLayout className="flex-1">
      <View
        style={styles.container}
        className="mt-20 flex flex-col items-center justify-between px-5"
      >
        <View className="flex w-full flex-col items-center justify-center gap-y-8">
          <Image
            source={require("@/assets/images/qr-wallet.png")}
            style={{
              width: 220,
              height: 220,
            }}
          />
          {adminWalletAddress && (
            <TouchableOpacity
              className="truncate text-center"
              onPress={() => Clipboard.setString(adminWalletAddress)}
            >
              <Text>{adminWalletAddress}</Text>
            </TouchableOpacity>
          )}
          <View className="flex w-full flex-col items-center justify-center gap-y-2">
            <Text className="text-lg font-semibold">Register Wallet</Text>
            <ThemedText className="font-regular max-w-[80%] text-center text-lg opacity-50">
              Please type in your wallet address to continue
            </ThemedText>
          </View>
        </View>
        <View className="flex w-[100%] flex-1 flex-row items-end justify-between pb-12">
          <Button
            variant="primary"
            label="Finish"
            fullWidth={true}
            className="min-w-[48%]"
            onPress={handleNext}
          />
        </View>
      </View>
    </SafeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    // flex: 1,
    position: "relative",
    width: "90%",
    height: "44%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
    borderWidth: 1,
    borderColor: "white",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
