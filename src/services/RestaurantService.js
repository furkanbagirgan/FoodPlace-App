import React from "react";
import { firebase } from '@react-native-firebase/database';

const app=firebase.app().database("https://food-place-9985b-default-rtdb.europe-west1.firebasedatabase.app");

const addUser=async(userId,user)=>{
  await app.ref(`users/${userId}/`).set({...user});
}

const getRestaurants=async(activeFilter)=>{
  const snapshot=await app.ref("restaurants/").once('value');
  const data=snapshot.val();
  if(data !== null){
    const datas=data.filter((item)=>{
      return item.restauranttype === activeFilter;
    });
    return datas;
  }
  return [];
}

const getRestaurantDetail=async(restaurantId)=>{
  const snapshot=await app.ref("restaurants/").once('value');
  const data=snapshot.val();
  if(data !== null){
    const datas=data.filter((item)=>{
      return item.id === restaurantId;
    });
    return datas[0];
  }
  return {};
}

const getFavorites=async(userId)=>{
  const snapshot=await app.ref(`users/${userId}/favorites/`).once('value');
  const data=snapshot.val();
  if(data !== null){
    const datas=Object.keys(data).map((item)=>{
      return {
        key: item,
        ...data[item]
      }
    })
    return datas;
  }
  return [];
}

const getUser=async(userId)=>{
  const snapshot=await app.ref(`users/${userId}/`).once('value');
  const data=snapshot.val();
  if(data !== null){
    return data;
  }
  return [];
}

const getMenu=async(menuId)=>{
  const snapshot=await app.ref(`menus/`).once('value');
  const data=snapshot.val();
  if(data !== null){
    const menu=data.filter((item)=>{
      return item._id===menuId;
    });
    return menu[0];
  }
  return [];
}

const addFavorite=async(userId,restaurant)=>{
  await app.ref(`users/${userId}/favorites`).push({...restaurant});
}

const removeFavorite=async(userId,restaurantId)=>{
  const favorites=await getFavorites(userId);
  const favoriteKey=favorites.filter((item)=>item.id===restaurantId);
  await app.ref(`users/${userId}/favorites/${favoriteKey[0].key}`).remove();
}

const findFavorite=async(userId,restaurantId)=>{
  const favorites=await getFavorites(userId);
  const isFavorite=favorites.findIndex((item)=> {
    return item.id===restaurantId;
  });
  if(isFavorite!==-1){
    return true;
  }
  else{
    return false;
  }
}

export { addUser,getRestaurants,getRestaurantDetail,getFavorites,getUser,getMenu,addFavorite,findFavorite,removeFavorite };
