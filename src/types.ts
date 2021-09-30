import type React from 'react';
import type { TextStyle, ViewStyle } from 'react-native';

export interface DoubleSliderProps {
  triggers: Trigger[];
  barStyle?: ViewStyle;
  handleStyle?: ViewStyle;
  textStyle?: TextStyle;
  customHandle?: React.ReactNode;
  arrowStyle?: TextStyle;
  left?: Items;
  right?: Items;
  target?: Target;
}
export interface Trigger {
  predicate: (dx: number) => boolean;
  action: () => void;
}

export interface Items {
  idleText?: string;
  transitioningText?: string;
  position?: string | number;
}

export interface Target {
  component: React.ReactNode;
  position: number;
}
