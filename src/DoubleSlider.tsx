import React from 'react';
import { View, Animated, LayoutChangeEvent } from 'react-native';
import { styles } from './DoubleSlider.styles';
import { useDoubleSlider } from './useDoubleSlider';
import type { DoubleSliderProps } from './types';

export const DoubleSlider: React.FC<DoubleSliderProps> = ({
  triggers,
  barStyle,
  handleStyle,
  customHandle,
  left,
  right,
  target,
}) => {
  const {
    panResponder,
    setSliderWidth,
    constrainedDx,
    increasingInterpolatePositive,
    decreasingInterpolateNegative,
    idleTextOpacity,
    calculateTargetPositionFromNormalised,
    setTargetContainerWidth,
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
        <Animated.Text
          style={[styles.text, styles.leftText, { opacity: idleTextOpacity }]}
        >
          {left.idleText}
        </Animated.Text>
      )}
      {left && left.transitioningText && (
        <Animated.Text
          style={[
            styles.text,
            styles.leftText,
            { opacity: increasingInterpolatePositive },
          ]}
        >
          {left.transitioningText}
        </Animated.Text>
      )}
      {right && right.idleText && (
        <Animated.Text
          style={[styles.text, styles.rightText, { opacity: idleTextOpacity }]}
        >
          {right.idleText}
        </Animated.Text>
      )}
      {right && right.transitioningText && (
        <Animated.Text
          style={[
            styles.text,
            styles.rightText,
            { opacity: decreasingInterpolateNegative },
          ]}
        >
          {right.transitioningText}
        </Animated.Text>
      )}
      {/* left target */}
      {target && (
        <Animated.View
          onLayout={(e: LayoutChangeEvent) => {
            const { width } = e.nativeEvent.layout;
            setTargetContainerWidth(width);
          }}
          style={[
            styles.targetContainer,
            {
              right: calculateTargetPositionFromNormalised(target.position),
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
              left: calculateTargetPositionFromNormalised(target.position),
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
        {customHandle ?? <View style={[styles.handle, handleStyle]} />}
      </Animated.View>
    </View>
  );
};
