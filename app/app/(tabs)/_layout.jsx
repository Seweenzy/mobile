import { Tabs } from "expo-router";
import { View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarInactiveColor: "#49454f",
          tabBarActiveColor: "#004ea3",
          tabBarStyle: {
            borderRadius: 30,
            position: "absolute",
            marginBottom: 8,
            marginHorizontal: 20,
          },
          tabBarIconStyle: { marginTop: 10 },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ name, size, focused, color }) => (
              <Ionicons
                name={name ? "home" : "home-outline"}
                size={!focused ? 18 : size + 5}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ name, size, focused, color }) => (
              <Feather
                name={name ? "search" : "search"}
                size={!focused ? 18 : size + 5}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ name, focused, size, color }) => (
              <Ionicons
                name={name ? "settings" : "settings-outline"}
                size={!focused ? 18 : size + 5}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ name, focused, size, color }) => (
              <Ionicons
                name={name ? "people" : "people-outline"}
                size={!focused ? 18 : size + 5}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
