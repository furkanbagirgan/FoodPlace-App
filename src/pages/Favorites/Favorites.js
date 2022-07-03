import React from "react";
import { View, Text } from "react-native";

import styles from "./Favorites.style";

function Favorites({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
    </View>
  );
};

export default Favorites;
