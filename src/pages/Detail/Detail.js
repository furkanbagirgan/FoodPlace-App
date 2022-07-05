import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator,Image } from "react-native";
import auth from '@react-native-firebase/auth';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { getRestaurantDetail,getMenu,addFavorite,findFavorite,removeFavorite } from "../../services/RestaurantService";
import Button from "../../components/Button";
import styles from "./Detail.style";

function Detail({route}){
  const [loading,setLoading]=useState(false);
  const [buttonLoading,setButtonLoading]=useState(false);
  const [isFavorite,setIsFavorite]=useState(false);
  const [restaurant,setRestaurant]=useState({});
  const [menu,setMenu]=useState({});
  const {restaurantId}=route.params;

  useEffect(()=>{
    getData();
  },[]);

  const getData=async()=>{
    setLoading(true);
    const detailData=await getRestaurantDetail(restaurantId);
    setRestaurant(detailData);
    const menuData=await getMenu(detailData.menu);
    setMenu(menuData);
    const isFavoriteData=await findFavorite(auth().currentUser.uid,restaurantId);
    setIsFavorite(isFavoriteData);
    setLoading(false)
  }

  const handleFavorite=async()=>{
    setButtonLoading(true);
    const userId=auth().currentUser.uid;
    if(isFavorite){
      await removeFavorite(userId,restaurant.id);
      setIsFavorite(false);
    }
    else{
      await addFavorite(userId,restaurant);
      setIsFavorite(true);
    }
    setButtonLoading(false);
  }

  return (
    <>
    {loading ?
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={25} color="#4caf50" />
      </View>
      :
      <ScrollView contentContainerStyle={styles.container} bounces={false} scrollEnabled={true} overScrollMode="never">
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:restaurant.image}}/>
            <View style={styles.titleBox}></View>
            <Text style={styles.title}>{restaurant.businessname}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Icon name="home-map-marker" size={20} color="#666" />
              <Text style={styles.info}>location: {restaurant.location}</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="phone" size={20} color="#666" />
              <Text style={styles.info}>phone: {restaurant.phone}</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="map-marker" size={20} color="#666" />
              <Text style={styles.info}>address: {restaurant.address}</Text>
            </View>
            <Button title={isFavorite ? "Remove From Favorite" : "Add To Favorite"} onClick={handleFavorite} theme="primaryGreen" loading={buttonLoading} />
            <View style={styles.divider}></View>
            <Text style={styles.menuName}>Menu Name: {menu.menuname}</Text>
            <Text style={styles.menuDesc}>Menu Description: {menu.description}</Text>
            { menu?.images && menu.images.map((item,index)=>{
              return <Image key={index} style={styles.menuImage} source={{uri:item}} />;
            })}
          </View>
        </View>
      </ScrollView>
    }
    </>
  );
};

export default Detail;
