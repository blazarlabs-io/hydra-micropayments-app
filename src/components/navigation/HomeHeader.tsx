import { View } from "react-native";
import { Icons } from "../core";
import { SafeAreaView } from "react-native-safe-area-context";
import UserAvatar from "react-native-user-avatar";
import { useAuth } from "@/context/authContext";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export const HomeHeader = () => {
  const theme = useColorScheme() ?? "light";
  const { user } = useAuth();
  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between px-5 py-4">
        <Icons.Hamburger />
        <UserAvatar
          size={40}
          name={user?.displayName || user?.email}
          src={user?.photoURL}
          bgColor={Colors[theme].foreground}
          textColor={Colors[theme].background}
        />
      </View>
    </SafeAreaView>
  );
};
