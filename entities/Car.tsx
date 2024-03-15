import React from 'react';
import { View } from 'react-native';
import { CAR_START_POSITION, CAR_VELOCITY } from '../utils/Constants';
import { carStyles } from '../styles/GameStyles';

const Car = () => {
  // Properties for the car
  const carProps = {
    position: CAR_START_POSITION,
    velocity: CAR_VELOCITY,
    size: { width: 50, height: 100 }, // Define the size of the car
  };

  return {
    ...carProps,
    renderer: <CarDesign {...carProps} />, // Pass carProps to CarDesign
  };
};

// Adjusted CarDesign component to use position
const CarDesign: React.FC<BodyProps> = ({ position }) => {
  return (
    <View style={[carStyles.carBody, { left: position.x, top: position.y }]}>
      <View style={carStyles.carTop} />
      <View style={carStyles.wheelContainer}>
        <View style={carStyles.wheel} />
        <View style={carStyles.wheel} />
      </View>
      <View style={carStyles.carBottom} />
      <View style={[carStyles.wheelContainer, { top: 0 }]}>
        <View style={carStyles.wheel} />
        <View style={carStyles.wheel} />
      </View>
    </View>
  );
};

export default Car;
