import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const ListPage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Link href="/list/1">News 1</Link>
      <Link href="/list/2">News 2</Link>
      <Link href="/list/3">News 3</Link>
    </View>
  );
};

export default ListPage;
