import type React from 'react';
import type { ViewStyle } from 'react-native';

export interface DoubleSliderProps {
  triggers: Trigger[];
  barStyle?: ViewStyle;
  handleStyle?: ViewStyle;
  customHandle?: React.ReactNode;
  left?: Items;
  right?: Items;
  target?: Target;
}
export interface Trigger {
  predicate: (dx: number) => boolean;
  onTrigger: () => void;
}

export interface Texts {
  right?: string;
  left?: string;
}

export interface Items {
  idleText?: string;
  transitioningText?: string;
}

export interface Target {
  component: React.ReactNode;
  position: number;
}
