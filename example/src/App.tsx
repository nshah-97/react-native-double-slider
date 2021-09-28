import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DoubleSlider, Trigger } from 'react-native-double-slider';

export default function App() {
  const [colour, setColour] = useState('black');
  const [message, setMessage] = useState('');
  const [borderColour, setBorderColour] = useState('grey');
  const randomColour = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const triggerList: Trigger[] = [
    {
      predicate: (dx: number) => dx > 0.5,
      action: () => {
        setColour(`#${randomColour()}`);
        setMessage('');
      },
    },
    {
      predicate: (dx: number) => dx < -0.5,
      action: () => {
        setBorderColour(`#${randomColour()}`);
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
      <View
        style={[
          styles.box,
          { borderColor: borderColour, backgroundColor: colour },
        ]}
      />
      <View style={styles.sliderContainer}>
        <DoubleSlider
          triggers={triggerList}
          barStyle={styles.customBarStyle}
          handleStyle={styles.handleStyle}
          left={{
            idleText: 'Border Colour',
            transitioningText: 'Change Main Colour',
          }}
          right={{
            idleText: 'Main Colour',
            transitioningText: 'Change Border Colour',
          }}
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
  },
  customBarStyle: {
    backgroundColor: '#808080',
    borderRadius: 20,
    height: 40,
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
    width: 60,
    height: 60,
    backgroundColor: '#000000',
  },
});
