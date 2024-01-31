import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const profile = () => {
  return (
    <View>
      <Text>This is the profile page</Text>
      <Link href="/" asChild>
        <Button title="home" />
      </Link>
      <Link href="/feed" asChild>
        <Button title="feed" />
      </Link>
    </View>
  );
};

export default profile;
