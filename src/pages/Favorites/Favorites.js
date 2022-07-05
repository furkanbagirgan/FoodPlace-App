import React,{ useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import auth from '@react-native-firebase/auth';

import styles from "./Favorites.style";
import RestaurantItem from './../../components/RestaurantItem';
import {getFavorites} from './../../services/RestaurantService'

function Favorites({navigation}){
  const [loading,setLoading]=useState(false);
  const [favorites,setFavorites]=useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData=async()=>{
    setLoading(true);
    const userId=auth().currentUser.uid;
    const favoritesData=await getFavorites(userId);
    setFavorites(favoritesData);
    setLoading(false);
  }

  const keyExtractor=(item)=>{
    return item.id;
  }

  const renderItem=({item})=>{
    return (
      <RestaurantItem restaurant={item} onPress={()=>handlePress(item.id)} />
    );
  }

  const handlePress=(restaurantId)=>{
    navigation.push("Detail",{restaurantId});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList keyExtractor={keyExtractor} refreshing={loading} onRefresh={getData} data={favorites} renderItem={renderItem} overScrollMode="never" bounces={false} />
    </View>
  );
};

export default Favorites;
