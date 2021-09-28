import React, { useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { DoubleSlider, Trigger } from 'react-native-double-slider';

export default function App() {
  const [message, setMessage] = useState('');
  const displacement = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const bounce = () => {
    Animated.timing(displacement, {
      duration: 300,
      toValue: -200,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() =>
      Animated.timing(displacement, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start()
    );
  };

  const spin = () => {
    Animated.timing(rotation, {
      duration: 1000,
      toValue: 2,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      Animated.spring(rotation, {
        toValue: 0,
        useNativeDriver: true,
        stiffness: 50,
      }).start();
    });
  };

  const interpolateRotating = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `${180}deg`],
  });

  const triggerList: Trigger[] = [
    {
      predicate: (dx: number) => dx > 0.5,
      action: () => {
        bounce();
        setMessage('');
      },
    },
    {
      predicate: (dx: number) => dx < -0.5,
      action: () => {
        spin();
        setMessage('');
      },
    },
    {
      predicate: (dx: number) => dx < 0.3 && dx > -0.3,
      action: () =>
        setMessage('Move the slider further out to trigger an action!'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              { translateY: displacement },
              { rotateZ: interpolateRotating },
            ],
          },
        ]}
      />
      <View style={styles.sliderContainer}>
        <DoubleSlider
          triggers={triggerList}
          barStyle={styles.customBarStyle}
          handleStyle={styles.handleStyle}
          left={{
            idleText: 'spin',
            transitioningText: 'release to jump',
          }}
          right={{
            idleText: 'jump',
            transitioningText: 'release to spin',
          }}
          textStyle={styles.textStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5552FF',
  },
  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  box: {
    width: 200,
    height: 200,
    borderWidth: 35,
    borderRadius: 15,
    marginVertical: 50,
    backgroundColor: 'white',
    borderColor: '#a9a8ff',
  },
  customBarStyle: {
    backgroundColor: '#A9A8FF',
    borderRadius: 50,
    height: 53,
    marginVertical: 25,
  },
  targetStyle: {
    height: 75,
    width: 75,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
  },
  handleStyle: {
    width: 65,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 8,
    borderColor: '#5552FF',
  },
  textStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
});
