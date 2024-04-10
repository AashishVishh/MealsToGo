import React from "react";
import styled from "styled-components/native";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16;
`;

export const RestaurantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restuarant;
  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Title>{name}</Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: { padding: 10, backgroundColor: "white" },
});
