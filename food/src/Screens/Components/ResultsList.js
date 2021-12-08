import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.styleTitle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text> {item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  styleTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultList;
