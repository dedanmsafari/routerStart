import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const feed = () => {
  const router = useRouter();
  return (
    <View>
      <Text>feed</Text>

      <Button title="back" onPress={() => router.back()} />
    </View>
  );
};

export default feed;
