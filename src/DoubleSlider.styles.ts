import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  beam: {
    width: '95%',
    backgroundColor: 'white',
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },
  beamFixedStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  handle: {
    height: 60,
    width: 60,
    backgroundColor: 'lightgrey',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  handleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
  },
  textContainer: {
    position: 'absolute',
  },
  text: {
    color: '#000000',
    alignSelf: 'center',
  },
  leftText: { left: '10%' },
  rightText: { right: '10%' },
  targetContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});
