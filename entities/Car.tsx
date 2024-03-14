import React from 'react';
import { View } from 'react-native';
import { CAR_START_POSITION, CAR_VELOCITY } from '../utils/Constants';

// Define the props expected by the Rectangle component
interface BodyProps {
  position: { x: number; y: number };
  size: { width: number; height: number };
  color: string;
}

// The Car function returns an object representing the car entity, including its renderer
const Car = () => {
  // Properties for the car, including position, velocity, size, and color
  const carProps = {
    position: CAR_START_POSITION,
    velocity: CAR_VELOCITY,
    size: { width: 50, height: 100 }, // Define the size of the car
    color: 'blue', // Color of the car
  };

  // Return the car entity object, spreading carProps to include all properties, and pass carProps to the renderer
  return {
    ...carProps,
    renderer: <Rectangle {...carProps} />, // Pass carProps to the Rectangle renderer
  };
};

// Rectangle component that renders the car (or an obstacle) based on the provided props
const Rectangle: React.FC<BodyProps> = ({ position, size, color }) => {
  // Check if the size prop is provided to avoid errors
  if (!size) {
    console.error('Size prop is missing in Rectangle component');
    return null; // Return null or some fallback UI if size is not provided
  }

  // Render the View component styled to represent the car or an obstacle
  return (
    <View
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width, // Use the width from the size prop
        height: size.height, // Use the height from the size prop
        backgroundColor: color, // Use the provided color
      }}
    />
  );
};

export default Car;
