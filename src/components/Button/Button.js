import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.style';

function Button({title, onPress, iconName, iconSize, iconColor}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Button;
