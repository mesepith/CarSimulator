// systems/Physics.ts

interface Position {
    x: number;
    y: number;
  }
  
  interface Velocity {
    x: number;
    y: number;
  }
  
  // This function updates the position of an object based on its velocity
  export const updatePosition = (position: Position, velocity: Velocity, deltaTime: number): Position => {
    return {
      x: position.x + velocity.x * deltaTime,
      y: position.y + velocity.y * deltaTime,
    };
  };
  
  // You can expand this file with more physics-related functions as needed
  