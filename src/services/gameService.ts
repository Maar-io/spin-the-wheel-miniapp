/**
 * Game Service
 * Handles game logic and will later be connected to backend API
 */

import { GAME_CONSTANTS, HORSE_INDEX } from '../types/types';

// In-memory ticket count (source of truth). Replace with backend when available.
let ticketCount = GAME_CONSTANTS.INITIAL_TICKETS;

/**
 * Get the number of tickets available for the user
 * @returns Current ticket count from game state
 */
export const getNumberOfTickets = (): number => {
  return ticketCount;
};

/**
 * Use one ticket (e.g. after a spin). Decrements the count in the service.
 * @returns The new ticket count after decrement (minimum 0)
 */
export const useTicket = (): number => {
  if (ticketCount > 0) {
    ticketCount -= 1;
  }
  return ticketCount;
};

/**
 * Get which animal the spin should land on
 * Uses probability of 50% for Horse (for testing), otherwise returns a random non-Horse animal
 * @returns Index of the animal (0-11) that the spin should land on
 */
export const getWinningAnimal = (): number => {
  // TODO: Replace with actual API call to backend that determines which animal to land on
  
  // 50% chance to win (for testing purposes - change to 1/12 for production)
  const winProbability = 0.5;
  const randomValue = Math.random();
  
  if (randomValue < winProbability) {
    // Winning spin - return Horse
    return HORSE_INDEX;
  } else {
    // Losing spin - return any animal EXCEPT Horse
    const nonHorseAnimals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // All except index 0 (Horse)
    const randomIndex = Math.floor(Math.random() * nonHorseAnimals.length);
    return nonHorseAnimals[randomIndex];
  }
};
