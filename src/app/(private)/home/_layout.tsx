import { Icons } from "@/components/core";
import { HomeHeader } from "@/components/navigation";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
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
          tabBarIcon: ({ color }) => <Icons.Home />,
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
          tabBarIcon: ({ color }) => <Icons.Nfc />,
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
          tabBarIcon: ({ color }) => <Icons.UserProfile />,
          tabBarStyle: {
            paddingTop: 10,
            height: 60,
          },
        }}
      />
    </Tabs>
  );
}
