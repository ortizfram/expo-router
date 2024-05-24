import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import RepositoryItem from "../components/RepositoryItem";

const RepositoryList = () => {
  return (
    <ScrollView>
      <RepositoryItem />
    </ScrollView>
  );
};

export default RepositoryList;
