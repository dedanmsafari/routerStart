import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Link href="/(tabs)/news/12" asChild>
        <Button title="Details for 12" />
      </Link>
      <Link href="/(tabs)/news/24" asChild>
        <Button title="Details for 24" />
      </Link>

      <Link href="/" asChild replace>
        <Button title="Home" />
      </Link>
    </View>
  );
};

export default index;
