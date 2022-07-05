import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./RestaurantItem.style";

function RestaurantItem({restaurant, onPress,}){
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:restaurant.image}}/>
        <View style={styles.bottomContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{restaurant.businessname}</Text>
            <Text style={styles.location}>location: {restaurant.location}</Text>
          </View>
          <Icon name="arrow-right-bold-circle-outline" size={35} color="#aaa" onPress={onPress} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantItem;
