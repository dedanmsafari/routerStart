import { Tabs } from "expo-router/tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
export default function Tab() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="news"
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Home"
        options={{
          headerShown: true,
          headerTitle: "Work",
          tabBarLabel: "Work",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="briefcase"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
