import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restuarant-info-card.component";

export const RestaurantsScreen = () => {
  return (
    <>
      <View style={styles.searchBar}>
        <Searchbar />
      </View>
      <View style={styles.listView}>
        <RestaurantInfoCard />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
  },
  listView: {
    flex: 1,
    padding: 16,
  },
});
