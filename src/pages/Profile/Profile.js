import React, { useState,useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import auth from '@react-native-firebase/auth';

import styles from "./Profile.style";
import { getUser } from "../../services/RestaurantService";
import Button from './../../components/Button';

function Profile(){
  const [loading,setLoading]=useState(false);
  const [buttonLoading,setButtonLoading]=useState(false);
  const [user,setUser]=useState({});

  useEffect(()=>{
    getData();
  },[]);

  const getData=async()=>{
    setLoading(true);
    let userInfo={email:auth().currentUser.email};
    const userData=await getUser(auth().currentUser.uid);
    userInfo={...userInfo,...userData};
    setUser(userInfo);
    setLoading(false);
  }

  const signOut=async()=>{
    setButtonLoading(true);
    await auth().signOut();
    setButtonLoading(false);
  }

  return (
    <>
    {loading ?
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={25} color="#4caf50" />
      </View>
      :
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>İsim:</Text>
          <Text style={styles.infoValue}>{user.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Soyisim:</Text>
          <Text style={styles.infoValue}>{user.surname}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Email:</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
        <Button title="Çıkış Yap" onClick={signOut} theme="primaryGreen" loading={buttonLoading}/>
      </View>
    }
    </>
  );
};

export default Profile;
