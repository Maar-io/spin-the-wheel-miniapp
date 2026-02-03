/**
 * Shared types and constants for the Wheel Miniapp
 */

// Chinese Zodiac animals in wheel order (0-11)
// MUST match the order in Wheel.tsx component!
export const ZODIAC_ANIMALS = [
  'horse',    // 0 - WINNING ANIMAL (at 12 o'clock position)
  'rat',      // 1
  'ox',       // 2
  'tiger',    // 3
  'rabbit',   // 4
  'dragon',   // 5
  'snake',    // 6
  'goat',     // 7
  'monkey',   // 8
  'rooster',  // 9
  'dog',      // 10
  'pig',      // 11
] as const;

export type ZodiacAnimal = typeof ZODIAC_ANIMALS[number];

export const HORSE_INDEX = 0;

/**
 * User game state interface
 */
export interface UserGame {
  userId: string;           // User identifier
  ticketsRemaining: number; // 0-10
  hasWon: boolean;          // true if landed on Horse
  spins: SpinResult[];      // History of spins
}

/**
 * Individual spin result
 */
export interface SpinResult {
  animal: ZodiacAnimal;
  animalIndex: number;      // 0-11
  timestamp: number;
  isWin: boolean;
}

/**
 * Game constants
 */
export const GAME_CONSTANTS = {
  TOTAL_ANIMALS: 12,
  DEGREES_PER_ANIMAL: 30,
  INITIAL_TICKETS: 10,
  SPIN_DURATION_MS: 3000,
  FULL_ROTATIONS: 5,
  TOTAL_SPIN_DEGREES: 1800, // 5 full rotations
} as const;
