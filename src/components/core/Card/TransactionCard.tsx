import { TouchableOpacity, useColorScheme, View } from "react-native";
import { ThemedText } from "../Text/ThemedText";
import { Icons } from "../Icon";
import { Colors } from "@/constants/Colors";
import { Transaction } from "@/types/db";
import { ASSET_UNITS } from "@/constants/assetUnits";

type ColorKey = keyof typeof Colors.light; // or keyof typeof Colors.dark

export interface TransactionCardProps {
  // label: string;
  // date?: string;
  // value: number;
  // icon: any;
  // bgColor: ColorKey;
  data: Transaction;
  onPress?: () => void;
}

export const TransactionCard = ({
  // label,
  // date,
  // value,
  // icon,
  // bgColor,
  data,
  onPress,
}: TransactionCardProps) => {
  const theme = useColorScheme() ?? "light";

  // const Icon: any = Icons[icon as keyof typeof Icons];

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex w-full flex-row items-center justify-between rounded-[48px] border p-2"
    >
      <View className="flex flex-row items-center justify-start gap-x-2">
        <View
          style={{
            backgroundColor: Colors[theme]["tertiary" as ColorKey],
          }}
          className="flex h-14 w-14 items-center justify-center rounded-[32px] border"
        >
          <Icons.MoneyBillFly size="24" />
        </View>
        <View className="flex-1 flex-row items-center justify-center">
          <View className="flex-1 justify-center">
            <View className="flex flex-row items-center justify-start">
              <ThemedText
                numberOfLines={1}
                className="truncate text-xs font-medium"
              >
                {data.address}
              </ThemedText>
            </View>
            <ThemedText className="text-xs opacity-50" numberOfLines={1}>
              {data.txHash}
            </ThemedText>
          </View>

          <View className="flex-1 flex-col items-end justify-center pr-2">
            {data.assets[ASSET_UNITS.ada] && (
              <View className="flex-0 shrink flex-row items-center gap-x-1">
                {/* <Icons.UsdmIcon /> */}
                <ThemedText
                  numberOfLines={1}
                  className="flex max-w-fit text-[8px] font-bold opacity-50"
                >
                  ADA
                </ThemedText>
                <ThemedText
                  numberOfLines={1}
                  className="flex max-w-fit text-xs font-medium"
                >
                  ₳{data.assets[ASSET_UNITS.ada] / 1000000}
                </ThemedText>
              </View>
            )}
            {data.assets[ASSET_UNITS.usdm] && (
              <View className="flex-0 shrink flex-row items-center gap-x-1">
                {/* <Icons.UsdmIcon /> */}
                <ThemedText
                  numberOfLines={1}
                  className="flex max-w-fit text-[8px] font-bold opacity-50"
                >
                  USDM
                </ThemedText>
                <ThemedText
                  numberOfLines={1}
                  className="flex max-w-fit text-xs font-medium"
                >
                  ${data.assets[ASSET_UNITS.usdm]}
                </ThemedText>
              </View>
            )}
          </View>
        </View>
      </View>
      <View className="mr-2">{/* <ThemedText>${value}</ThemedText> */}</View>
    </TouchableOpacity>
  );
};
