import { ScrollView, View } from "react-native";
import { SafeLayout, TransactionCard } from "../core";
import { transactions } from "@/data/transactionsTemplate";
import { dateOptions } from "@/utils/dateUtils";

export const MyTransactionsScreen = () => {
  return (
    <SafeLayout className="pt-16">
      <ScrollView className="pb-14">
        {transactions.map((transaction) => (
          <View key={transaction.id} className="mt-4">
            <TransactionCard
              label={transaction.label}
              date={transaction.date.toLocaleDateString(
                "en-US",
                dateOptions as any
              )}
              value={transaction.value}
              icon={
                transaction.type === "income"
                  ? "CurrencyDecrease"
                  : transaction.type === "shop"
                    ? "ShoppingBag"
                    : "Exchange"
              }
              bgColor={
                transaction.type === "income"
                  ? "primary"
                  : transaction.type === "shop"
                    ? "secondary"
                    : "warning"
              }
            />
          </View>
        ))}
      </ScrollView>
    </SafeLayout>
  );
};
