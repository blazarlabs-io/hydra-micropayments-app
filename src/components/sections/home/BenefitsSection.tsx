import { BenefitCard, ThemedText } from "@/components/core";
import { View, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export const BenefitsSection = () => {
  const theme = useColorScheme() ?? "light";
  return (
    <View>
      <View className="flex flex-row items-center justify-between">
        <ThemedText className="font-bold">Benefits</ThemedText>
        <TouchableOpacity>
          <ThemedText
            className="text-sm font-bold"
            style={{ color: Colors[theme]["muted-foreground"] }}
          >
            See All
          </ThemedText>
        </TouchableOpacity>
      </View>
      <View className="w-full">
        <View className="mt-8 flex w-full flex-row items-center justify-between">
          <BenefitCard
            icon="ShoppingBag"
            label="Shop"
            title="Rewards"
            bgColor="warning"
          />
          <BenefitCard
            icon="MoneyBag"
            label="Shop"
            title="Rewards"
            bgColor="primary"
          />
          <BenefitCard
            icon="Coins"
            label="Shop"
            title="Rewards"
            bgColor="secondary"
          />
          <BenefitCard
            icon="Exchange"
            label="Shop"
            title="Rewards"
            bgColor="tertiary"
          />
        </View>
      </View>
    </View>
  );
};
