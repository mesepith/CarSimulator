// components/GameEngine.tsx
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Car from '../entities/Car';
import MoveSystem from '../systems/MoveSystem';
import TouchControlSystem from '../systems/TouchControlSystem';
import CollisionSystem from '../systems/CollisionSystem';
import { SCREEN_WIDTH, SCREEN_HEIGHT, RIDE_DURATION, CAR_START_POSITION, CAR_VELOCITY } from '../utils/Constants';
import { generateObstacles } from '../utils/GameUtils';
import RoadBackground from './RoadBackground'; // Import RoadBackground
import { gameStyles } from '../styles/GameStyles'; // Import gameStyles

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
      setEntities(prevEntities => ({
        ...prevEntities,
        car: Car(CAR_START_POSITION, { width: 50, height: 100 }, 'blue'),
      }));
    }

    return () => clearInterval(timer);
  }, [timeElapsed]);

  return (
    <View style={gameStyles.gameContainer}>
      <RoadBackground />
      <GameEngine
        systems={[
          MoveSystem(generateObstacles),
          TouchControlSystem,
          CollisionSystem
        ]}
        entities={entities}>
        {/* Game view goes here */}
      </GameEngine>
    </View>
  );
};

export default GameEngineApp;
