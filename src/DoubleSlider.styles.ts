import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  beam: {
    width: '95%',
    backgroundColor: 'red',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  handle: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    borderRadius: 100,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  handleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  text: {
    color: '#ffffff',
    position: 'absolute',
    alignSelf: 'center',
  },
  leftText: {
    left: 50,
  },
  rightText: {
    right: 50,
  },
  targetContainer: {
    position: 'absolute',
    // alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
