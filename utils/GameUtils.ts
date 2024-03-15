// utils/GameUtils.ts
import Obstacle from '../entities/Obstacle';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './Constants';

export const generateObstacles = (numberOfObstacles: number) => {
  let obstacles = {};
  for (let i = 0; i < numberOfObstacles; i++) {
    const position = {
      x: Math.random() * (SCREEN_WIDTH - 50),
      y: Math.random() * SCREEN_HEIGHT,
    };
    obstacles[`obstacle_${i}`] = Obstacle(position, { width: 50, height: 50 }, 'red');
  }
  return obstacles;
};
