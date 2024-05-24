import { Image, StyleSheet, View } from "react-native";
import React from "react";
import theme from "../theme";
import StyledText from "./StyledText";

const RepositoryItemHeader = ({
  description,
  language,
  name,
  ownerAvatarUrl,
  ...restOfProps
}) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText color={undefined}  style={undefined} align={undefined} fontWeight="bold" fontSize="subheading" {...restOfProps}>
          {name}
        </StyledText>
        <StyledText fontSize={undefined} fontWeight={undefined} style={undefined} align={undefined} color="secondary" {...restOfProps}>
          {description}
        </StyledText>
        <StyledText color={undefined} fontSize={undefined} fontWeight={undefined} align={undefined} style={styles.language} {...restOfProps}>
          {language}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 4,
    marginBottom: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    overflow: "hidden",
  },
});

export default RepositoryItemHeader;
