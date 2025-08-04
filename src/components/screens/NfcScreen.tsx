import { useCallback, useEffect, useState } from "react";
import { Image, Modal, useColorScheme, View, Text } from "react-native";
import { BleClient } from "../../services/ble-client";
import { Button, Icons, SafeLayout, ThemedText, ThemedView } from "../core";
import { useWalletRegistration } from "@/hooks/useWalletRegistration";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useWallet } from "@/context/walletContext";
import { ASSET_UNITS } from "@/constants/assetUnits";

const DEVICE_NAME = "Hydra TERM";
const SERVICE_UUID = "1d4ddcb2-279d-42e2-a95a-274352a25248";
const VALUE1_CHARACTERISTIC_UUID = "a781af9a-9a04-4422-9d78-9014497ccdc0";
const VALUE2_CHARACTERISTIC_UUID = "61b64163-35fa-438a-810c-018d1a719667";
const VALUE3_CHARACTERISTIC_UUID = "52f34145-0363-4f4e-9fab-a133e8e5b0b1";
const WRITE1_CHARACTERISTIC_UUID = "9b16159d-7c3e-4ae6-990b-0d34f22389bb";

export const NfcScreen = () => {
  const { isWalletRegistered, adaAddress } = useWallet();
  const router = useRouter();
  const [modalVisible, setModalVisible] =
    useState<boolean>(!isWalletRegistered);
  const theme = useColorScheme() ?? "light";
  const [paymentRequest, setPaymentRequest] = useState<{
    address: string;
    amount: number;
    assetUnit: string;
  } | null>(null);
  const [device, setDevice] = useState<any>(null);
  const [bleClient, setBleClient] = useState<BleClient | null>(null);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleStartWalletRegistration = () => {
    setModalVisible(false);
    router.push("/wallet-registration/register");
  };

  const handleSendPayment = useCallback(async () => {
    console.log(
      "[SENDING PAMENT...]",
      SERVICE_UUID,
      VALUE1_CHARACTERISTIC_UUID,
      device,
      bleClient
    );

    bleClient?.writeToCharacteristic(
      device,
      SERVICE_UUID,
      WRITE1_CHARACTERISTIC_UUID,
      adaAddress as string
    );

    router.push("/payment-success");

    // try {
    //   const url = `${process.env.EXPO_PUBLIC_TXPIPE_API_URL?.toString()}/query-funds?address=${paymentRequest?.address.toString()}`;
    //   console.log("[URL]", url);
    //   const getFundsRes = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   console.log("[getFundsRes]", getFundsRes);
    //   const hash = "";
    //   const index = 0;
    //   const payload = {
    //     merchant_address: paymentRequest?.address,
    //     funds_utxo_ref: {
    //       // The output reference of the user's funds UTxO within the Hydra Head.
    //       hash: hash,
    //       index: index,
    //     },
    //     amount: (paymentRequest?.amount as number) * 1000000, // The amount of ADA (in Lovelace) to pay the merchant
    //     signature: "",
    //   };
    // } catch (error) {
    //   console.log(error);
    // }
  }, [paymentRequest, device, bleClient, adaAddress]);

  useEffect(() => {
    const ble = new BleClient();
    setBleClient(ble);
    ble
      .requestPermissions()
      .then((granted) => {
        console.log("granted:", granted);
        if (granted) {
          ble
            .scan(DEVICE_NAME, {
              SERVICE_UUID,
              VALUE1_CHARACTERISTIC_UUID,
              VALUE2_CHARACTERISTIC_UUID,
              VALUE3_CHARACTERISTIC_UUID,
            })
            .then((response) => {
              console.log("\n [CHARACTERISTICS VALUES]", response);
              const pr = {
                address: response.value1,
                amount: response.value2,
                assetUnit: response.value3,
              };
              setPaymentRequest(() => pr);
              setDevice(() => response.device);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SafeLayout>
      {/* * MODAL START */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View className="flex h-full w-full items-center justify-center bg-black/60">
          <ThemedView className="flex max-w-[75%] flex-col items-center justify-center rounded-[32px] border p-8">
            <View className="flex w-full flex-row items-center justify-center gap-x-4">
              <View
                style={{
                  backgroundColor: Colors[theme]?.primary,
                  borderColor: Colors[theme]?.foreground,
                  borderWidth: 1,
                }}
                className="rounded-[16px] p-4"
              >
                <Icons.Wallet />
              </View>
              <ThemedText className="max-w-[75%]">
                Please register your wallet address to continue.
              </ThemedText>
            </View>
            <View className="mt-8 flex w-full flex-row items-center justify-end">
              <Button
                variant="link"
                label="Ok"
                fullWidth={false}
                onPress={handleStartWalletRegistration}
              />
            </View>
          </ThemedView>
        </View>
      </Modal>
      {/* * MODAL END */}
      <View className="items-center justify-center py-4">
        <ThemedText type="subtitle" className="text-center">
          Contactless Payments
        </ThemedText>
      </View>
      <View className="flex-1 items-center justify-center">
        <Image
          source={require("@/assets/images/nfc-illustration.png")}
          className="h-[30%] w-[55%]"
          resizeMode="contain"
        />
        {!paymentRequest ? (
          <>
            <ThemedText type="subtitle" className="max-w-[70%] text-center">
              Buy fast and safely with our contactless payments.
            </ThemedText>
            <ThemedText type="default" className="mt-6 max-w-[90%] text-center">
              Activating our contactless system allows you to pay with your
              phone in any hydrapay compatible terminal.
            </ThemedText>
          </>
        ) : (
          <>
            <View className="flex flex-col items-center justify-center gap-y-4">
              <ThemedText type="subtitle" className="max-w-[90%] text-center">
                Payment requested from
              </ThemedText>
              <ThemedText
                type="default"
                className="max-w-[80%] text-center opacity-50"
              >
                {paymentRequest.address}
              </ThemedText>
              {paymentRequest && paymentRequest.assetUnit !== undefined && (
                <>
                  {paymentRequest.assetUnit === ASSET_UNITS.ada && (
                    <ThemedText
                      type="title"
                      className="mt-8 max-w-[70%] text-center"
                    >
                      ₳{paymentRequest.amount / 1000000}
                    </ThemedText>
                  )}
                  {paymentRequest.assetUnit === ASSET_UNITS.usdm && (
                    <View className="flex flex-row items-start justify-center">
                      <ThemedText
                        type="title"
                        className="mt-8 max-w-[70%] text-center"
                      >
                        ${paymentRequest.amount}
                      </ThemedText>
                      <Text className="ml-2 mt-8 max-w-[70%] text-center text-[10px] font-bold opacity-50">
                        USDM
                      </Text>
                    </View>
                  )}
                </>
              )}
            </View>
            <Button
              variant="primary"
              label="Pay"
              fullWidth
              icon={null}
              className="mt-8"
              onPress={handleSendPayment}
            />
          </>
        )}
      </View>
    </SafeLayout>
  );
};
