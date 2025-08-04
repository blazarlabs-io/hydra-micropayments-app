import { ScrollView, useColorScheme, View } from "react-native";
import { SafeLayout } from "../core";
import {
  ActionsSection,
  BenefitsSection,
  MyTransactionsSection,
} from "../sections";
import { BalanceInfo } from "../widgets";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";

export const HomeScreen = () => {
  const theme = useColorScheme() ?? "light";
  return (
    <SafeLayout>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <View className="mt-20">
          <BalanceInfo />
        </View>
        <View className="mt-6">
          <ActionsSection />
        </View>
        <View className="mt-6">
          <MyTransactionsSection />
        </View>
        <ScrollView className="mt-6 flex-1">
          <BenefitsSection />
        </ScrollView>
      </ScrollView>
    </SafeLayout>
  );
};
