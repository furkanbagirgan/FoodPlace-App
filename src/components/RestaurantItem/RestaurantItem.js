import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";

import styles from "./RestaurantItem.style";

function RestaurantItem({restaurant, onPress,}){
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:restaurant.image}}/>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{restaurant._id}</Text>
          <Text style={styles.price}>{restaurant.location}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantItem;
