import * as React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsScreen } from "./src/features/restuarants/screens/restuarants.screen";
import { RestaurantInfo } from "./src/features/restuarants/components/restuarant-info-card.component";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <>
      <SafeAreaView style={styles.container}>
        <RestaurantsScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
});
