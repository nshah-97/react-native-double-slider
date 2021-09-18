import { useRef, useState } from 'react';
import { Animated, PanResponder } from 'react-native';
import { constrainXBetweenMinAndMax } from './utils/number.utils';

interface Trigger {
  predicate: (dx: number) => boolean; // dx is between -1 and 1
  onTrigger: () => void;
}

export const useDoubleSlider = (triggers: Trigger[]) => {
  const slideValueRef = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const idleTextOpacity = useRef(new Animated.Value(1)).current;
  const [sliderWidth, setSliderWidth] = useState(0);

  const minDx = -sliderWidth / 2;
  const maxDx = sliderWidth / 2;

  const calculateTargetPosition = (percentPosition: number) => {
    return (
      (constrainXBetweenMinAndMax(Math.abs(percentPosition), 0, 100) / 100) *
      maxDx
    );
  };
  const constrainedDx = slideValueRef.x.interpolate({
    inputRange: [minDx, maxDx],
    outputRange: [minDx, maxDx],
    extrapolate: 'clamp',
  });

  const decreasingInterpolatePositive = slideValueRef.x.interpolate({
    inputRange: [0, maxDx * 0.5],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const increasingInterpolatePositive = slideValueRef.x.interpolate({
    inputRange: [0, maxDx * 0.5],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const decreasingInterpolateNegative = slideValueRef.x.interpolate({
    inputRange: [minDx * 0.5, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const increasingInterpolateNegative = slideValueRef.x.interpolate({
    inputRange: [minDx * 0.5, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const normaliseDx = (x: number) => {
    return x > 0 ? Math.min(maxDx, x) / maxDx : Math.max(x, minDx) / maxDx;
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      Animated.timing(idleTextOpacity, {
        toValue: 0,
        duration: 50,
        useNativeDriver: false,
      }).start();
    },
    onPanResponderMove: Animated.event(
      [null, { dx: slideValueRef.x, dy: slideValueRef.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      slideValueRef.x.addListener((panEvent) => {
        const normalisedDx = normaliseDx(panEvent.value);
        triggers.forEach((t) => {
          if (t.predicate(normalisedDx)) {
            t.onTrigger();
            return;
          }
        });
        slideValueRef.x.removeAllListeners();
      });
      Animated.spring(slideValueRef, {
        useNativeDriver: true,
        toValue: { x: 0, y: 0 },
      }).start();
      Animated.timing(idleTextOpacity, {
        toValue: 1,
        delay: 500,
        duration: 250,
        useNativeDriver: false,
      }).start();
    },
  });

  return {
    panResponder,
    sliderWidth,
    constrainedDx,
    increasingInterpolatePositive,
    decreasingInterpolatePositive,
    increasingInterpolateNegative,
    decreasingInterpolateNegative,
    idleTextOpacity,
    setSliderWidth,
    calculateTargetPosition,
  };
};
