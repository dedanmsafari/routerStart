import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Home", headerShown: true }}
      />
      <Stack.Screen
        name="profile"
        options={{ headerTitle: "Home", headerShown: true }}
      />
      <Stack.Screen
        name="feed"
        options={{ headerTitle: "Feed", headerShown: true }}
      />
      <Stack.Screen name="drawer" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", headerShown: true }}
      />
    </Stack>
  );
};

export default Layout;
