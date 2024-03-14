// systems/TouchControlSystem.ts
import { SCREEN_WIDTH } from '../utils/Constants';
const TouchControlSystem = (entities, { touches }) => {
    touches.filter(t => t.type === "press").forEach(t => {
      const { pageX } = t.event; // Get the X coordinate of the touch event
  
      // Change car's horizontal velocity based on the touch position
      // Assuming the center of the screen as the reference point
      const center = SCREEN_WIDTH / 2;
      const direction = pageX < center ? -0.05 : 0.05; // Move left if touch is on the left side, right otherwise
        console.log('directionz: ', direction);
      // Update the car's velocity
      entities.car.velocity.x = direction;
    });
  
    return entities;
  };
  
  export default TouchControlSystem;
  