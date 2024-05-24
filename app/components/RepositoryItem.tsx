import { StyleSheet, Text, View, FlatList } from "react-native"; // Ensure this import is correct
import React from "react";
import { repositories } from "../data/repositories";
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryStats from "./RepositoryStats";

const RepositoryItem = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <View key={repo.url} style={styles.viewRenderItem}>
          <RepositoryItemHeader
            description={repo.description}
            language={repo.language}
            name={repo.name}
            ownerAvatarUrl={repo.ownerAvatarUrl}
          />
          <RepositoryStats
            stars={repo.stars}
            forks={repo.forks}
            reviews={repo.reviews}
            rating={repo.rating}
          />
        </View>
      )}
      keyExtractor={(item) => item.url}
    />
  );
};

const styles = StyleSheet.create({
  viewRenderItem: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
