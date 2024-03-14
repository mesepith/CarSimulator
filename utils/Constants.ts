// utils/Constants.ts

// Example screen dimensions, adjust according to your game's design
export const SCREEN_WIDTH: number = 800;
export const SCREEN_HEIGHT: number = 600;

// Car settings, adjust as needed
// Adjust the car's start position to be at the bottom center of the screen
export const CAR_START_POSITION: {x: number, y: number} = {
    x: SCREEN_WIDTH / 2 - 250, // Assuming the car's width is 50, adjust as needed
    y: SCREEN_HEIGHT - 100, // Assuming the car's height is 100, adjust as needed
  };
// Set the car's velocity to move upwards. Adjust the value as needed for speed.
export const CAR_VELOCITY: {x: number, y: number} = { x: 0, y: -0.1 };

// You can add more constants here as your game develops
