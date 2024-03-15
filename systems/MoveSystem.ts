// systems/MoveSystem.ts
import { updatePosition } from './Physics';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/Constants';
// Import in the files where you need to generate obstacles
import { generateObstacles } from '../utils/GameUtils';

// const MoveSystem = (entities, { time }) => {
  const MoveSystem = (generateObstacles) => (entities, { time }) => {
  const { delta } = time; // Time since last update in milliseconds

  Object.keys(entities).forEach(key => {
    const entity = entities[key];

    if (entity.position && entity.velocity) {
      const newPosition = updatePosition(entity.position, entity.velocity, delta);

      if (key === 'car') {
        // If the car reaches the top, reset its position and regenerate obstacles
        if (newPosition.y <= 0) {
          entity.position.y = SCREEN_HEIGHT - entity.size.height;

          // Regenerate obstacles
          const newObstacles = generateObstacles(5); // Adjust the number of obstacles as needed
          Object.keys(newObstacles).forEach(obstacleKey => {
            entities[obstacleKey] = newObstacles[obstacleKey];
          });
        } else {
          entity.position.y = newPosition.y;
        }

        // Boundary check for left and right edges
        if (newPosition.x >= 0 && newPosition.x <= SCREEN_WIDTH - entity.size.width) {
          entity.position.x = newPosition.x;
        }
      }
    }
  });

  return entities;
};

export default MoveSystem;
