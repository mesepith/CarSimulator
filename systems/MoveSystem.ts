// A simple game loop system that updates the position of entities with a velocity
import { updatePosition } from '../systems/Physics';
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

  export default MoveSystem;