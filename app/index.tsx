import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>This is the index page</Text>

      <Link href="/profile" asChild>
        <Button title="profile" />
      </Link>

      <Link href="/feed" asChild>
        <Button title="feed" />
      </Link>

      <Link href="/details/14" asChild>
        <Button title="Details 14" />
      </Link>

      <Link href="/details/15" asChild>
        <Button title="Details 15" />
      </Link>

      <Link href="/drawer" asChild replace>
        <Button title="Drawer" />
      </Link>
    </View>
  );
};

export default index;
