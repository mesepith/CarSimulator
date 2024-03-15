// entities/Obstacle.tsx
import React from 'react';
import { View } from 'react-native';

interface ObstacleProps {
  position: { x: number; y: number };
  size: { width: number; height: number };
  color: string;
}

const Obstacle = (position: { x: number; y: number }, size: { width: number, height: number } = { width: 50, height: 50 }, color: string = 'red') => {
  return {
    position,
    size,
    color,
    renderer: <Rectangle />,
  };
};

const Rectangle: React.FC<ObstacleProps> = ({ position, size, color }) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundColor: color, // This should now reflect the updated color
      }}
    />
  );
};

export default Obstacle;
