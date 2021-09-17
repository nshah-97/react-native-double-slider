import React from 'react';
import { Animated, StyleProp, TextStyle, ViewStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  opacity: Animated.AnimatedInterpolation;
  textStyle?: Animated.WithAnimatedValue<StyleProp<TextStyle>>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const AnimatedText: React.FC<Props> = ({
  children,
  opacity,
  textStyle,
  containerStyle,
}) => {
  return (
    <Animated.View style={[containerStyle, { opacity: opacity }]}>
      <Animated.Text style={textStyle}>{children}</Animated.Text>
    </Animated.View>
  );
};
