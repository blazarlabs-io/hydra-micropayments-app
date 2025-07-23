import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { Icons } from "../core";
import { useWallet } from "@/context/walletContext";

export const BalanceInfo = () => {
  const { adaBalance, usdmBalance, adaConversionRate, usdmConversionRate } =
    useWallet();
  return (
    <View className="relative h-[200px] rounded-[32px]">
      <LinearGradient
        className="absolute left-0 right-0 top-0 h-[200px] rounded-[32px] border"
        colors={["#FFD5E9", "#8CE4F3"]}
      />
      <View className="flex flex-row items-center justify-start gap-x-2 px-6 pt-8">
        <Text className="text-5xl font-black">{`$${(adaBalance * adaConversionRate + usdmBalance * usdmConversionRate).toFixed(2)}`}</Text>
        <Text className="text-base font-black opacity-50">USD</Text>
      </View>
      <View className="px-6">
        <Text className="text-base">Current Balance</Text>
      </View>
      <View className="flex w-full flex-row items-center justify-between">
        <View className="flex flex-col items-start justify-center">
          <View className="flex flex-row items-center justify-start gap-x-1 px-6 pt-8">
            <Icons.AdaIcon />
            <Text className="text-lg font-bold">{adaBalance.toFixed(2)}</Text>
            {/* <Text className="pl-1 text-xs font-black opacity-50">ADA</Text> */}
          </View>
          <View className="flex flex-row items-center justify-start gap-x-1 px-6 opacity-50">
            <Text className="text-sm font-normal">
              ${(adaBalance * adaConversionRate).toFixed(2)}
            </Text>
            <Text className="text-sm font-bold">USD</Text>
          </View>
        </View>
        <View className="flex flex-col items-end justify-center">
          <View className="flex flex-row items-center justify-start gap-x-1 px-6 pt-8">
            <Icons.UsdmIcon />
            <Text className="text-lg font-bold">{usdmBalance.toFixed(2)}</Text>
            {/* <Text className="pl-1 text-xs font-black opacity-50">USDM</Text> */}
          </View>
          <View className="flex flex-row items-center justify-end gap-x-1 px-6 opacity-50">
            <Text className="text-sm font-normal">
              ${(usdmBalance * usdmConversionRate).toFixed(2)}
            </Text>
            <Text className="text-sm font-bold">USD</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
