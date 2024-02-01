import { Stack } from "expo-router";

import { View, Text } from "react-native";
import React from "react";

const StackLayOut = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "NewsFeed" }} />
    </Stack>
  );
};

export default StackLayOut;
