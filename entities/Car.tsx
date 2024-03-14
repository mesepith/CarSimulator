import React from 'react';
import { View } from 'react-native';
import { CAR_START_POSITION, CAR_VELOCITY } from '../utils/Constants';

interface BodyProps {
  position: { x: number; y: number };
  size: { width: number; height: number };
  color: string;
}

const Car = () => {
  return {
    position: CAR_START_POSITION,
    velocity: CAR_VELOCITY,
    renderer: <Rectangle />,
  };
};

const Rectangle: React.FC<BodyProps> = ({ position, size = { width: 50, height: 100 }, color = 'blue' }) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundColor: color,
      }}
    />
  );
};

export default Car;
