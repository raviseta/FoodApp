import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.styleTitle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item}></ResultsDetail>;
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
