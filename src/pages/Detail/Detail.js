import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./Detail.style";

function Detail({route}){
  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false} scrollEnabled={true} overScrollMode="never">
      <View>
          <Text style={styles.title}>Detail</Text>
      </View>
    </ScrollView>
  );
};

export default Detail;
