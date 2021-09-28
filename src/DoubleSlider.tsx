import React from 'react';
import { View, Animated } from 'react-native';
import { styles } from './DoubleSlider.styles';
import { useDoubleSlider } from './useDoubleSlider';
import type { DoubleSliderProps } from './types';
import Chevron from './Components/Chevron';

export const DoubleSlider: React.FC<DoubleSliderProps> = ({
  triggers,
  barStyle,
  handleStyle,
  customHandle,
  left,
  right,
  target,
  textStyle,
}) => {
  const {
    panResponder,
    setSliderWidth,
    constrainedDx,
    increasingInterpolatePositive,
    decreasingInterpolateNegative,
    idleTextOpacity,
    calculateTargetPosition,
  } = useDoubleSlider(triggers);

  return (
    <View
      style={[styles.beam, barStyle]}
      onLayout={(e) => {
        const { width } = e.nativeEvent.layout;
        setSliderWidth(width);
      }}
    >
      {left && left.idleText && (
        <Animated.View
          style={[
            styles.textContainer,
            { opacity: idleTextOpacity },
            styles.leftText,
          ]}
        >
          <Animated.Text style={[styles.text, textStyle]}>
            {left.idleText}
          </Animated.Text>
        </Animated.View>
      )}
      {left && left.transitioningText && (
        <Animated.View
          style={[
            styles.textContainer,
            { opacity: increasingInterpolatePositive },
            styles.leftText,
          ]}
        >
          <Animated.Text style={[styles.text, textStyle]}>
            {left.transitioningText}
          </Animated.Text>
        </Animated.View>
      )}
      {right && right.idleText && (
        <Animated.View
          style={[
            styles.textContainer,
            { opacity: idleTextOpacity },
            styles.rightText,
          ]}
        >
          <Animated.Text style={[styles.text, textStyle]}>
            {right.idleText}
          </Animated.Text>
        </Animated.View>
      )}
      {right && right.transitioningText && (
        <Animated.View
          style={[
            styles.textContainer,
            { opacity: decreasingInterpolateNegative },
            styles.rightText,
          ]}
        >
          <Animated.Text style={[styles.text, textStyle]}>
            {right.transitioningText}
          </Animated.Text>
        </Animated.View>
      )}
      {/* left target */}
      {target && (
        <Animated.View
          style={[
            styles.targetContainer,
            {
              left: calculateTargetPosition(target.position),
              opacity: decreasingInterpolateNegative,
            },
          ]}
        >
          {target.component}
        </Animated.View>
      )}
      {/* right target */}
      {target && (
        <Animated.View
          style={[
            styles.targetContainer,
            {
              right: calculateTargetPosition(target.position),
              opacity: increasingInterpolatePositive,
            },
          ]}
        >
          {target.component}
        </Animated.View>
      )}
      <Animated.View
        style={[
          { transform: [{ translateX: constrainedDx }] },
          styles.handleContainer,
        ]}
        {...panResponder.panHandlers}
      >
        <Chevron.Left opacity={idleTextOpacity} />
        {customHandle ?? <View style={[styles.handle, handleStyle]} />}
        <Chevron.Right opacity={idleTextOpacity} />
      </Animated.View>
    </View>
  );
};
