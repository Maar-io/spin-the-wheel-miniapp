/**
 * Wheel Rotation Logic
 * Handles the calculation for spinning the wheel to land on a specific animal
 */

import { GAME_CONSTANTS } from '../types/types';

/**
 * Calculate the rotation needed to land on a specific animal
 * 
 * HOW THE WHEEL WORKS:
 * - The wheel has 12 animals arranged in a circle
 * - Each animal is at position: index * 30° (horse=0°, rat=30°, ox=60°, etc.)
 * - Horse (index 0) starts at the TOP (0°/12 o'clock position) 
 * - Animals are arranged clockwise: horse(0), rat(1), ox(2), tiger(3), rabbit(4), dragon(5), 
 *   snake(6), goat(7), monkey(8), rooster(9), dog(10), pig(11)
 * - Each animal occupies 30 degrees (360° / 12 = 30°)
 * - The pointer/marker is fixed at the TOP (0° position)
 * 
 * ROTATION BEHAVIOR:
 * - The wheel rotates as: transform: rotate(${rotation}deg)
 * - Positive rotation = clockwise
 * - When wheel rotates clockwise, animals that were behind (counter-clockwise) move to the top
 * - Example with horse at top initially:
 *   * Rotate +30°: pig (at -30° = 330°) moves to 0° (top)
 *   * Rotate +60°: dog (at -60° = 300°) moves to 0° (top)
 * 
 * FORMULA EXPLANATION:
 * - Each animal is initially at angle: index * 30°
 * - After rotating by R degrees, animal ends up at: (index * 30 + R) mod 360
 * - For animal to be at top (0°), we need: (index * 30 + R) mod 360 = 0
 * - Therefore: R = -index * 30 (or equivalently: (12 - index) * 30)
 * - But we want to add extra rotations for effect: R = 1800 + (360 - index * 30)
 * 
 * EXAMPLES:
 * - targetAnimalIndex = 0 (horse at 0°): rotate by (360 - 0) = 360° = 0° mod 360 ✓
 * - targetAnimalIndex = 11 (pig at 330°): rotate by (360 - 330) = 30° ✓
 * - targetAnimalIndex = 10 (dog at 300°): rotate by (360 - 300) = 60° ✓
 * - targetAnimalIndex = 3 (tiger at 90°): rotate by (360 - 90) = 270° ✓
 * 
 * @param targetAnimalIndex - The index (0-11) of the animal to land on
 * @param currentRotation - The current rotation value of the wheel
 * @returns The new rotation value that will land on the target animal
 */
export const calculateWheelRotation = (
  targetAnimalIndex: number,
  currentRotation: number
): number => {
  // Calculate where the animal is positioned on the wheel (in degrees)
  const animalPosition = targetAnimalIndex * GAME_CONSTANTS.DEGREES_PER_ANIMAL;
  
  // Calculate the current effective rotation (where the wheel actually is, mod 360)
  const currentEffectiveRotation = currentRotation % 360;
  
  // Calculate where we need to be (the final effective position)
  // To bring an animal at position X to the top, we need to rotate by (360 - X)
  const targetEffectiveRotation = (360 - animalPosition) % 360;
  
  // Calculate the shortest rotation needed from current position to target
  // We need to handle wrap-around (e.g., from 350° to 10° should be +20°, not -340°)
  let rotationNeeded = targetEffectiveRotation - currentEffectiveRotation;
  if (rotationNeeded < 0) {
    rotationNeeded += 360;
  }
  
  // Add multiple full rotations (for visual effect) plus the rotation needed
  // GAME_CONSTANTS.TOTAL_SPIN_DEGREES = 1800° (5 full rotations)
  const newRotation = currentRotation + GAME_CONSTANTS.TOTAL_SPIN_DEGREES + rotationNeeded;
  
  return newRotation;
};

/**
 * Get the rotation (in degrees) that displays a given animal at the top (12 o'clock).
 * Use this to show the wheel with the last result when returning from Win/Lose.
 */
export const getRotationForAnimalAtTop = (animalIndex: number): number =>
  (360 - animalIndex * GAME_CONSTANTS.DEGREES_PER_ANIMAL) % 360;
