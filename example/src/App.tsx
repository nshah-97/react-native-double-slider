import * as React from 'react';

import { StyleSheet, Text, Vibration, View } from 'react-native';
import { DoubleSlider } from 'react-native-double-slider';

export default function App() {
  const [hello, setHello] = React.useState('hello');
  const triggerList = [
    {
      predicate: (dx: number) => dx > 0.5,
      onTrigger: () => setHello(`helloooooo ${Math.random()}`),
    },
    {
      predicate: (dx: number) => dx < -0.5,
      onTrigger: () => setHello(`goodbye ${Math.random()}`),
    },
    {
      predicate: (dx: number) => dx < 0.3 && dx > -0.3,
      onTrigger: () => Vibration.vibrate(25),
    },
  ];

  return (
    <View style={styles.container}>
      <DoubleSlider
        triggers={triggerList}
        barStyle={styles.customBarStyle}
        left={{ idleText: 'EDIT', transitioningText: 'Next exercise' }}
        right={{ idleText: 'NEXT', transitioningText: 'Edit exercise' }}
        target={{
          component: <View style={styles.targetStyle} />,
          position: 20,
        }}
        handleStyle={styles.handleStyle}
      />
      <Text>{hello}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  customBarStyle: {
    backgroundColor: 'crimson',
    borderRadius: 20,
    height: 40,
  },
  targetStyle: {
    height: 75,
    width: 75,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
  },
  handleStyle: { width: 70, height: 70, opacity: 0.65 },
});
