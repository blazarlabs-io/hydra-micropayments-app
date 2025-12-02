import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { Icons } from "../core";
import { useWallet } from "@/context/walletContext";
import { useEffect } from "react";

export const BalanceInfo = () => {
  const {
    adaBalance,
    usdmBalance,
    wbtcBalance,
    adaConversionRate,
    usdmConversionRate,
    wbtcConversionRate,
  } = useWallet();

  useEffect(() => {
    console.log("adaBalance", adaBalance);
    console.log("usdmBalance", usdmBalance);
    console.log("wbtcBalance", wbtcBalance);
    console.log("adaConversionRate", adaConversionRate);
    console.log("usdmConversionRate", usdmConversionRate);
    console.log("wbtcConversionRate", wbtcConversionRate);
    console.log("usdFromWbtc", (wbtcBalance / 100000000) * wbtcConversionRate);
  }, [
    adaBalance,
    usdmBalance,
    wbtcBalance,
    adaConversionRate,
    usdmConversionRate,
    wbtcConversionRate,
  ]);
  return (
    <View className="relative h-[200px] rounded-[32px]">
      <LinearGradient
        className="absolute left-0 right-0 top-0 h-[200px] rounded-[32px] border"
        colors={["#FFD5E9", "#8CE4F3"]}
      />
      <View className="flex flex-row items-center justify-start gap-x-2 px-6 pt-6">
        <Text className="text-5xl font-black">{`$${(adaBalance * adaConversionRate + usdmBalance * usdmConversionRate + (wbtcBalance / 100000000) * wbtcConversionRate).toFixed(2)}`}</Text>
        <Text className="text-base font-black opacity-50">USD</Text>
      </View>
      <View className="px-6">
        <Text className="text-base">Current Balance</Text>
      </View>
      <View
        style={{ flex: 1 }}
        className="flex flex-row items-center justify-between px-6"
      >
        {/* * ADA */}
        <View className="flex max-w-fit flex-col items-start justify-center">
          <View className="flex flex-row items-center justify-start gap-x-1 pt-6">
            <Icons.AdaIcon />
            <Text className="text-base font-bold">{adaBalance.toFixed(2)}</Text>
            {/* <Text className="pl-1 text-xs font-black opacity-50">ADA</Text> */}
          </View>
          <View className="flex flex-row items-center justify-start gap-x-1 opacity-50">
            <Text className="text-xs font-normal">
              ${(adaBalance * adaConversionRate).toFixed(2)}
            </Text>
            <Text className="text-xs font-bold">USD</Text>
          </View>
        </View>
        {/* * USDM */}
        <View className="flex flex-col items-end justify-center">
          <View className="flex flex-row items-center justify-start gap-x-1 pt-6">
            <Icons.UsdmIcon />
            <Text className="text-base font-bold">
              {usdmBalance.toFixed(2)}
            </Text>
            {/* <Text className="pl-1 text-xs font-black opacity-50">USDM</Text> */}
          </View>
          <View className="flex flex-row items-center justify-end gap-x-1 opacity-50">
            <Text className="text-xs font-normal">
              ${(usdmBalance * usdmConversionRate).toFixed(2)}
            </Text>
            <Text className="text-xs font-bold">USD</Text>
          </View>
        </View>
        {/* * WBTC */}
        <View className="flex flex-col items-end justify-center">
          <View className="flex flex-row items-center justify-start gap-x-1 pt-6">
            <Icons.Wbtc />
            <Text className="text-base font-bold">
              {(wbtcBalance / 100000000).toFixed(6)}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-end gap-x-1 opacity-50">
            <Text className="text-xs font-normal">
              ${((wbtcBalance / 100000000) * wbtcConversionRate).toFixed(2)}
            </Text>
            <Text className="text-xs font-bold">USD</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
