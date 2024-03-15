// styles/GameStyles.ts
import { StyleSheet } from 'react-native';

export const gameStyles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  road: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#333', // Dark gray for the road
    justifyContent: 'center',
    alignItems: 'center',
  },
  lane: {
    height: '100%',
    width: 5,
    backgroundColor: '#fff', // White for lane markings
    opacity: 0.5,
  }
});

// styles/GameStyles.ts
export const carStyles = StyleSheet.create({
    carBody: {
      width: 50,
      height: 100,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'space-between', // Spacing for the car's design elements
    },
    carTop: {
      width: 35,
      height: 25,
      backgroundColor: 'darkblue',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    carBottom: {
      width: 50,
      height: 50,
      backgroundColor: 'blue',
    },
    wheel: {
      width: 15,
      height: 15,
      borderRadius: 7.5,
      backgroundColor: 'black',
    },
    wheelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 5,
    },
  });
  
