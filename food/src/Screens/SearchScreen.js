import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useResults from "./Hooks/useResults";
import ResultsList from "./Components/ResultsList";
import SearchBar from "./Components/SearchBar";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    if (results.length) {
      return results.filter((result) => {
        return result.price === price;
      });
    } else {
      return results.length;
    }
  };

  return (
    <View style={{ marginLeft: 10 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
