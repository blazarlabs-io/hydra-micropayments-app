import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { cn } from "@/utils/cn";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

export interface SafeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const SafeLayout = ({ children, className }: SafeLayoutProps) => {
  const theme = useColorScheme() ?? "light";

  return (
    <SafeAreaView
      style={{
        backgroundColor:
          theme === "dark" ? Colors.dark.background : "transparent",
      }}
      className={cn("flex-1 px-5", className)}
    >
      {theme === "light" && (
        <LinearGradient
          className="absolute left-0 right-0 top-0 h-screen"
          colors={["#DEF9FE", "#FFFCE3"]}
        />
      )}

      {children}
    </SafeAreaView>
  );
};
