import React from 'react';
import { View,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./Input.style";

function Input(props) {
  return (
    <View style={styles.container}>
      <Icon name={props.iconName} size={20} color="#fff"/>
      <TextInput {...props} style={styles.input} />
    </View>
  );
}

export default Input;