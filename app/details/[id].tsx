import { View, Text, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";

const Details = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Details ${id}`,
      headerTitleAlign: "left",
    });
  }, [id]);

  return (
    <View>
      <Text>{`Details for : ${id} `}</Text>

      <Button title="Update" onPress={() => router.setParams({ id: "999" })} />
    </View>
  );
};

export default Details;
