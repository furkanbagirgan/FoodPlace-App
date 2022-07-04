import React,{ useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, FlatList } from "react-native";
import { firebase } from '@react-native-firebase/database';

import styles from "./Home.style";
import RestaurantItem from './../../components/RestaurantItem';

function Home({navigation}){
  const [loading,setLoading]=useState(false);
  const [activeFilter,setActiveFilter]=useState("eatery");
  const [restaurants,setRestaurants]=useState([]);
  const app=firebase.app().database("https://food-place-9985b-default-rtdb.europe-west1.firebasedatabase.app");

  useEffect(()=>{
    getData();
  },[activeFilter]);

  const getData=()=>{
    setLoading(true);
    app.ref("restaurants/").once('value').then(snapshot => {
      const data=snapshot.val();
      if(data !== null){
        const datas=data.filter((item)=>{
          return item.restauranttype === activeFilter;
        });
        setRestaurants(datas);
      }
      setLoading(false);
    });
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
      <Text style={styles.title}>Restaurants</Text>
      <ScrollView contentContainerStyle={styles.filterContainer} bounces={false} scrollEnabled={true} overScrollMode="never" horizontal={true}>
        <TouchableWithoutFeedback onPress={()=>setActiveFilter("eatery")}>
          <View style={activeFilter==="eatery" ? styles.activeFilter : styles.filterItem}>
            <Text style={activeFilter==="eatery" ? styles.activeTitle : styles.filterTitle}>Eatery</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>setActiveFilter("canteen")}>
          <View style={activeFilter==="canteen" ? styles.activeFilter : styles.filterItem}>
            <Text style={activeFilter==="canteen" ? styles.activeTitle : styles.filterTitle}>Canteen</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>setActiveFilter("bukka")}>
          <View style={activeFilter==="bukka" ? styles.activeFilter : styles.filterItem}>
            <Text style={activeFilter==="bukka" ? styles.activeTitle : styles.filterTitle}>Food Cart</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <FlatList keyExtractor={keyExtractor} refreshing={loading} onRefresh={getData} data={restaurants} renderItem={renderItem} overScrollMode="never" bounces={false} />
    </View>
  );
};

export default Home;
