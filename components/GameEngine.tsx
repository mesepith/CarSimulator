import React from 'react';
import { GameEngine } from 'react-native-game-engine';
import Car from '../entities/Car';
import { updatePosition } from '../systems/Physics';
import TouchControlSystem from '../systems/TouchControlSystem';

// A simple game loop system that updates the position of entities with a velocity
const MoveSystem = (entities, { time }) => {
  const { delta } = time; // Time since last update in milliseconds

  Object.keys(entities).forEach(key => {
    const entity = entities[key];

    if (entity.position && entity.velocity) {
      entity.position = updatePosition(entity.position, entity.velocity, delta);
    }
  });

  return entities;
};

const GameEngineApp: React.FC = () => {
    return (
      <GameEngine
        systems={[MoveSystem, TouchControlSystem]} // Add TouchControlSystem here
        entities={{
          car: Car(),
        }}>
        {/* Game view goes here */}
      </GameEngine>
    );
  };

export default GameEngineApp;
