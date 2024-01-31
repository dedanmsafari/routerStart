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
      <Stack.Screen name="profile"  options={{ headerTitle: "Home", headerShown: true }} />
      <Stack.Screen name="feed" />
    </Stack>
  );
};

export default Layout;
