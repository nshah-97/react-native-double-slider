# react-native-double-slider

A simple and customisable double slider component for react native.
![double-slider](https://user-images.githubusercontent.com/53956539/135172506-d7caa294-5142-4dd7-b636-27f32477207e.gif)

## Installation

```sh
npm install react-native-double-slider
```
or
```sh
yarn add react-native-double-slider
```


## Usage

```jsx
import React from 'react';
import { DoubleSlider, Trigger } from 'react-native-double-slider';

export const App = () => {
  const triggers: Trigger[] = [
    { predicate: (x) => x > 0.5, action: () => console.log('right action') },
    { predicate: (x) => x < -0.5, action: () => console.log('left action') },
  ];

  return <DoubleSlider triggers={triggers} />;
};

```

## Props
| Prop         | Type                                                                            | Description                                                                                                                                                                                                                                                                                         |     |
| ------------ | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| triggers     | `{ predicate: (x: number) => boolean, action: () => void }[]`                   | A list of `Trigger` objects. `x` is a number between -1 and 1 corresponding to the left and right ends of the bar, respectively. The `action` is executed when the `predicate` evaluates to `true`. If more than one predicate evaluates to true during one gesture event, only the first executes. |     |
| barStyle     | `ViewStyle`                                                                     | Style for the bar.                                                                                                                                                                                                                                                                                  |     |
| handleStyle  | `ViewStyle`                                                                     | Style for the handle.                                                                                                                                                                                                                                                                               |     |
| textStyle    | `TextStyle`                                                                     | Style for all the text.                                                                                                                                                                                                                                                                             |     |
| arrowStyle   | `TextStyle`                                                                     | Style for the chevrons.                                                                                                                                                                                                                                                                             |     |
| customHandle | `React.ReactNode`                                                               | A optional custom handle that will be used instead of the default.                                                                                                                                                                                                                                  |     |
| left         | `{ idleText?: string, transitioningText?: string, position: number \| string }` | Text displayed on the left side. `idleText` is shown before interaction and `transitioningText` is shown whilst the user is moving the handle. `position` is the absolute position of the text from the end.                                                                                        |
| right        | `{ idleText?: string, transitioningText?: string, postion: number \| string }`  | Text displayed on the right side. `idleText` is shown before interaction and `transitioningText` is shown whilst the user is moving the handle.  `position` is the absolute position of the text from the end.                                                                                      |
| target       | `{ component: React.ReactNode, position: number }`                              | A optional component that is shown on both sides to inform the user where to release the handle to trigger the action. `position` is the absolute position of the target component from either end.                                                                                                 |     |

## Default styles
![default-double-slider](https://user-images.githubusercontent.com/53956539/135500043-b6192102-9192-4f77-82ee-7236a4eeda67.jpg)
### barStyle
```ts
{
    width: '95%',
    backgroundColor: 'white',
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
}
```
### handleStyle
```ts
{
    height: 60,
    width: 60,
    backgroundColor: 'lightgrey',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
}
```
### textStyle
```ts
{
    color: '#000000',
}
```
## License

MIT
