import { useAuth } from "@/context/authContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Input, SafeLayout, ThemedText } from "../../core";
import { db } from "@/lib/firebase/services/db";
import { DbResponse } from "@/types/db";

export const StepOne = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const handleValuchange = (value: string) => {
    console.log(value);
    setValue(value);
  };

  const handleNext = () => {
    // * Save wallet address to DB
    const wallet = {
      address: value,
      balance: 0,
    };
    db.user
      .update(user?.uid as string, { wallet: wallet })
      .then((response: DbResponse) => {
        console.log(response);
      })
      .catch((error: DbResponse) => {
        console.log(error);
      });
    router.push("/wallet-registration/deposit");
  };

  return (
    <SafeLayout className="flex-1">
      <View
        style={styles.container}
        className="mt-20 flex flex-col items-center justify-between px-5"
      >
        <View className="flex w-full flex-col items-center justify-center gap-y-8">
          <Image
            source={require("@/assets/images/wallet.png")}
            style={{
              width: 158,
              height: 140,
            }}
          />
          <View className="flex w-full flex-col items-center justify-center gap-y-2">
            <Text className="text-lg font-semibold">Register Wallet</Text>
            <ThemedText className="font-regular max-w-[80%] text-center text-lg opacity-50">
              Please type in your wallet address to continue
            </ThemedText>
            <Input
              placeholder="Wallet Address"
              type="text"
              value={value}
              className="mt-4 w-full"
              onValueChange={handleValuchange}
            />
          </View>
        </View>
        <View className="flex w-[100%] flex-1 flex-row items-end justify-between pb-12">
          <Button
            variant="primary"
            label="Next"
            fullWidth={true}
            className="min-w-[48%]"
            disabled={value.length < 1}
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
