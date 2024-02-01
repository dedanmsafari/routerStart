import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";

const Details = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Details ${id}`,
      headerTitleAlign: "center",
    });
  }, [id]);

  return (
    <View>
      <Text>{`Details for ${id}`}</Text>
    </View>
  );
};

export default Details;
