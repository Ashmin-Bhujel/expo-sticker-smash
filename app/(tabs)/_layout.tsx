import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#f0f0f0",
          headerStyle: {
            backgroundColor: "#222222",
          },
          headerShadowVisible: false,
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontFamily: "SpaceGrotesk_400Regular",
          },
          tabBarStyle: {
            backgroundColor: "#222222",
          },
          tabBarLabelStyle: {
            fontFamily: "SpaceGrotesk_400Regular",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
