import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { cn } from "@/utils/cn";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

export interface SafeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const SafeLayout = ({ children, className }: SafeLayoutProps) => {
  const theme = useColorScheme() ?? "light";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // flexGrow: 1,
        // overflow: "scroll",
        backgroundColor:
          theme === "dark" ? Colors.dark.background : "transparent",
        // borderWidth: 2,
        // borderColor: Colors[theme].secondary,
      }}
      className={cn("flex-1 px-5", className)}
    >
      <StatusBar style="dark" />
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
