import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./RestaurantItem.style";

function RestaurantItem({restaurant, onPress, isFavorite, onFavorite, isHomeItem}){
  return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:restaurant.image}}/>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{restaurant.title}</Text>
          <Text style={styles.price}>{restaurant.price}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name={isFavorite ? (isHomeItem ? "bookmark-check" : "bookmark-remove") : ("bookmark-outline")} size={28} color={isFavorite ? "#ba68c8" : "#000"} onPress={onFavorite} />
          <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.detailButton}>
              <Text style={styles.detailTitle}>Detail</Text>
              <Icon name="arrow-right-bold-circle" size={18} color="#fff" />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
  );
};

export default RestaurantItem;
