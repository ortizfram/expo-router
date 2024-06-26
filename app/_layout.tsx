// app/_layout.tsx
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import AppBar from "./components/AppBar";
import { View, StyleSheet } from "react-native";
import theme from "./theme";

const StackLayout = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <AppBar />
          <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="list" options={{ headerShown: false }} />
            <Stack.Screen name="signin" options={{ headerShown: false }} />
          </Stack>
        </View>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

export default StackLayout;
