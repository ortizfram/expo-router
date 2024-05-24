import { StyleSheet, Text } from "react-native";
import React from "react";
import theme from "../theme";
theme
const StyledText = ({
  color,
  children,
  fontSize,
  fontWeight,
  style,
  align,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    align === "center" && styles.textCenter,
    style, // Apply any additional styles passed via props
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "normal",
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
  bold: {
    fontWeight: "bold",
  },
  subheading: {
    fontSize: theme.fontSizes.subHeading,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  textCenter: {
    textAlign: "center",
  },
});

export default StyledText;
