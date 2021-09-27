import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Right: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="rocket" size={30} color="#900" />
      <Text style={styles.text}>›</Text>
    </View>
  );
};

const Left: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>›</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
  },
  text: {
    fontSize: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'green',
    textAlignVertical: 'top',
    margin: 0,
  },
});

export const Chevron = { Left: Left, Right: Right };

export default Chevron;
