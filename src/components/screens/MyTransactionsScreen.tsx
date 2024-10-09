import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { SafeLayout, TransactionCard } from "../core";
import { transactions } from "@/data/transactionsTemplate";
import { dateOptions } from "@/utils/dateUtils";
import { LinearGradient } from "expo-linear-gradient";

export const MyTransactionsScreen = () => {
  return (
    <SafeAreaView
      className="flex-1 px-5 pt-20"
      style={{ marginTop: StatusBar.currentHeight ?? 0 }}
    >
      <LinearGradient
        className="absolute left-0 right-0 top-0 h-screen"
        colors={["#DEF9FE", "#FFFCE3"]}
      />

      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View className="mt-4">
            <TransactionCard
              label={item.label}
              date={item.date.toLocaleDateString("en-US", dateOptions as any)}
              value={item.value}
              icon={
                item.type === "income"
                  ? "CurrencyDecrease"
                  : item.type === "shop"
                    ? "ShoppingBag"
                    : "Exchange"
              }
              bgColor={
                item.type === "income"
                  ? "primary"
                  : item.type === "shop"
                    ? "secondary"
                    : "warning"
              }
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
