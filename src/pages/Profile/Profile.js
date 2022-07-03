import React from "react";
import { View, Text } from "react-native";

import styles from "./Profile.style";

function Profile({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

export default Profile;
