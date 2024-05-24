import { StyleSheet, Text, View } from "react-native"; // Ensure this import is correct
import React from "react";
import Constants from "expo-constants";
import theme from "../theme";
import StyledText from "./StyledText";
import { Link } from "expo-router";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const AppBarTab = ({ active, children, to }) => {
  return (
    <TouchableWithoutFeedback>
      <Link href={to}>
        <StyledText
          fontWeight="bold"
          style={styles.text}
          color={undefined}
          fontSize={undefined}
          align={undefined}
        >
          {children}
        </StyledText>
      </Link>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <AppBarTab active={true} to={"/home"}>
        Home
      </AppBarTab>
      <AppBarTab active={true} to={"/list"}>
        List
      </AppBarTab>
      <AppBarTab active={true} to={"/signin"}>
        Signin
      </AppBarTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    gap: 10,
  },
  text: {
    color: theme.appBar.primaryText,
  },
});

export default AppBar;
