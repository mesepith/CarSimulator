// systems/CollisionSystem.ts

const CollisionSystem = (entities) => {
    const { car } = entities;
  
    Object.keys(entities).forEach(key => {
      const entity = entities[key];
  
      if (key.startsWith('obstacle_')) {
        // Using optional chaining (?.) and nullish coalescing operator (??) for safety
        const carWidth = car.size?.width ?? 0;
        const carHeight = car.size?.height ?? 0;
        const entityWidth = entity.size?.width ?? 0;
        const entityHeight = entity.size?.height ?? 0;
  
        // Updated AABB collision detection with safety checks
        if (car.position.x < entity.position.x + entityWidth &&
            car.position.x + carWidth > entity.position.x &&
            car.position.y < entity.position.y + entityHeight &&
            car.position.y + carHeight > entity.position.y) {
          // Collision detected
          console.log('Collision with obstacle!');
        }
      }
    });
  
    return entities;
  };
  
  export default CollisionSystem;
  