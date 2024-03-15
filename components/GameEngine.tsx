// components/GameEngine.tsx
import React, { useState, useEffect } from 'react';
import { GameEngine } from 'react-native-game-engine';
import Car from '../entities/Car';
import MoveSystem from '../systems/MoveSystem';
import TouchControlSystem from '../systems/TouchControlSystem';
import CollisionSystem from '../systems/CollisionSystem';
import { SCREEN_WIDTH, SCREEN_HEIGHT, RIDE_DURATION, CAR_START_POSITION, CAR_VELOCITY } from '../utils/Constants';
import { generateObstacles } from '../utils/GameUtils';

const GameEngineApp: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [entities, setEntities] = useState({
    car: Car(CAR_START_POSITION, { width: 50, height: 100 }, 'blue'),
    ...generateObstacles(5),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1000); // Update time every second
    }, 1000);

    if (timeElapsed >= RIDE_DURATION) {
      setTimeElapsed(0);
      // Reset the car's position and update the entities state
      setEntities(prevEntities => ({
        ...prevEntities,
        car: Car(CAR_START_POSITION, { width: 50, height: 100 }, 'blue'),
      }));
    }

    return () => clearInterval(timer);
  }, [timeElapsed]);

  return (
    <GameEngine
      systems={[
        MoveSystem(generateObstacles), // Pass generateObstacles as an argument
        TouchControlSystem,
        CollisionSystem
      ]}
      entities={{
        car: Car(CAR_START_POSITION, { width: 50, height: 100 }, 'blue'),
        ...generateObstacles(5),
      }}>
      {/* Game view goes here */}
    </GameEngine>
  );
};

export default GameEngineApp;
