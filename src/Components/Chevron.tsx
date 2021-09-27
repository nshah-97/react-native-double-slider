import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const Right: React.FC<{ opacity: Animated.AnimatedInterpolation }> = ({
  opacity,
}) => {
  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Icon name="chevron-right" color="white" size={25} />
    </Animated.View>
  );
};

const Left: React.FC<{ opacity: Animated.AnimatedInterpolation }> = ({
  opacity,
}) => {
  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Icon name="chevron-left" color="white" size={25} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Chevron = { Left: Left, Right: Right };

export default Chevron;
