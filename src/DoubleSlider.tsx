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
        <Animated.View
          style={[
            styles.textContainer,
            { opacity: idleTextOpacity },
            styles.leftText,
          ]}
        >
          <Animated.Text style={[styles.text]}>{left.idleText}</Animated.Text>
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
          <Animated.Text style={[styles.text]}>
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
          <Animated.Text style={[styles.text]}>{right.idleText}</Animated.Text>
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
          <Animated.Text style={[styles.text]}>
            {right.transitioningText}
          </Animated.Text>
        </Animated.View>
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
              left: `${target.position}%`,
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
              right: `${target.position}%`,
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
