import { Icons } from "@/components/core";
import { HomeHeader } from "@/components/navigation";
import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: Colors.light.foreground,
        header: ({ route }) => {
          if (route.name !== "index") {
            return null;
          }

          return <HomeHeader />;
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "",
          headerTransparent: true,
          headerStyle: {},
          tabBarIcon: ({ color }) => <Icons.Home color={color} />,
          tabBarStyle: {
            paddingTop: 10,
            height: 60,
          },
        }}
      />
      <Tabs.Screen
        name="nfc"
        options={{
          title: "Nfc",
          tabBarLabel: "",
          headerTransparent: true,
          headerStyle: {},
          tabBarIcon: ({ color }) => <Icons.Nfc color={color} />,
          tabBarStyle: {
            paddingTop: 10,
            height: 60,
          },
        }}
      />
      <Tabs.Screen
        name="user-profile"
        options={{
          title: "User Profile",
          tabBarLabel: "",
          headerTransparent: true,
          headerStyle: {},
          tabBarIcon: ({ color }) => <Icons.UserProfile color={color} />,
          tabBarStyle: {
            paddingTop: 10,
            height: 60,
          },
        }}
      />
    </Tabs>
  );
}
