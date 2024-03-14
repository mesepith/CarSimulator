import React from 'react';
import { GameEngine } from 'react-native-game-engine';
import Car from '../entities/Car';
import Obstacle from '../entities/Obstacle';
import MoveSystem from '../systems/MoveSystem';
import TouchControlSystem from '../systems/TouchControlSystem';
import CollisionSystem from '../systems/CollisionSystem';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/Constants';

// Function to generate random obstacles
const generateObstacles = (numberOfObstacles: number) => {
  let obstacles = {};
  for (let i = 0; i < numberOfObstacles; i++) {
    // Random positions for the obstacles
    const position = {
      x: Math.random() * (SCREEN_WIDTH - 50), // Assuming obstacle width is 50
      y: Math.random() * SCREEN_HEIGHT,
    };

    // Add the obstacle entity to the obstacles object with random size and position
    obstacles[`obstacle_${i}`] = Obstacle(position, { width: 50, height: 50 }, 'red');
  }
  return obstacles;
};

const GameEngineApp: React.FC = () => {
  // Generate a set number of obstacles, e.g., 5
  const obstacles = generateObstacles(5);

  return (
    <GameEngine
      style={{ flex: 1, backgroundColor: '#fff' }}
      systems={[MoveSystem, TouchControlSystem, CollisionSystem]} // Include all the systems you want to use
      entities={{
        car: Car({ x: SCREEN_WIDTH / 2 - 25, y: SCREEN_HEIGHT - 110 }, { width: 50, height: 100 }, 'blue'), // Initialize the car entity with starting position, size, and color
        ...obstacles, // Spread the generated obstacles into the entities object
      }}>
      {/* Game view goes here */}
    </GameEngine>
  );
};

export default GameEngineApp;
