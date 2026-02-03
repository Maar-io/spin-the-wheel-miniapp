# Wheel Miniapp Specification

## Overview
A mini app featuring a Chinese Zodiac spinning wheel game for the Year of the Horse celebration. This is a standalone web application that uses the Farcaster SDK for authentication but is not designed to be posted or shared on Farcaster.

## Game Concept
- **Theme**: Chinese Zodiac Wheel (12 animals)
- **Goal**: Spin the wheel to land on the Horse
- **Tickets**: Each user gets 3 attempts (3 spins)
- **Prize**: Winning occurs when user lands on Horse zodiac

## Chinese Zodiac Animals (12 total)
1. Rat (鼠)
2. Ox (牛)
3. Tiger (虎)
4. Rabbit (兔)
5. Dragon (龙)
6. Snake (蛇)
7. Horse (马) ⭐ **WINNING SYMBOL**
8. Goat (羊)
9. Monkey (猴)
10. Rooster (鸡)
11. Dog (狗)
12. Pig (猪)

## User Flow States

### State 1: Landing Page / Initial Spin (`Spin.png`)
- User sees the wheel with all 12 zodiac animals
- Display tickets remaining: **3/3**
- "Spin" button enabled
- Message: "You have 3 chances to win!"

### State 2: Win State (`Win.png`)
- User landed on Horse
- Celebration UI/animation
- Message: "Congratulations! You won the Year of the Horse!"
- Tickets remaining: Display remaining count

### State 3: Lose with Tickets Remaining (`lose.png`)
- User landed on non-Horse animal
- Display which animal they got
- Tickets remaining: **2/3** or **1/3**
- Message: "Not quite! You have X tickets left. Try again!"
- "Spin Again" button enabled

### State 4: Lose with No Tickets (`lose-no-more-tickets.png`)
- User landed on non-Horse animal
- Tickets remaining: **0/3**
- Message: "Out of tickets! Better luck next time!"
- "Spin Again" button disabled

## Game Mechanics

### Ticket System
```typescript
interface UserGame {
  userId: string;           // User identifier
  ticketsRemaining: number; // 0-3
  hasWon: boolean;          // true if landed on Horse
  spins: SpinResult[];      // History of spins
}

interface SpinResult {
  animal: ZodiacAnimal;
  timestamp: number;
  isWin: boolean;
}
```

### Win Probability
- **Horse probability**: 1/12 (8.33%)
- **Other animals**: 11/12 (91.67%)
- Fair random selection on each spin

### Spin Logic
1. User clicks "Spin" button
2. Wheel animates spinning (2-3 seconds)
3. Wheel decelerates and lands on random animal
4. Check if result is Horse:
   - **If Horse**: Display Win state, set `hasWon = true`
   - **If not Horse**: Decrement tickets, check remaining
5. Update UI based on tickets remaining

## UI Components

### Main Components
1. **Wheel Component**
   - SVG/Canvas circular wheel
   - 12 equal segments (30° each)
   - Animal images in each segment
   - Rotation animation
   - Pointer/indicator at top

2. **Ticket Counter**
   - Visual representation: "🎟️ 3/3"
   - Updates after each spin

3. **Spin Button**
   - Enabled when tickets > 0 and not won
   - Disabled when tickets = 0 or hasWon = true
   - Loading state during spin animation

4. **Result Modal/Card**
   - Shows animal landed on
   - Win/lose message
   - Action buttons (Spin Again)

## Design Assets (in `/design` folder)

### Reference Screenshots
- `Spin.png` - Initial state with 3 tickets
- `Win.png` - Win celebration screen
- `lose.png` - Lose screen with tickets remaining
- `lose-no-more-tickets.png` - Final lose screen

### Design Elements
- `fireworks-frame.png` - Decorative frame element used in the UI (not on animal images)

### Animal Assets
- 12 PNG images for zodiac animals
- Format: `animal-name.png` (e.g., `horse.png`, `dragon.png`)

## Technical Architecture

### Frontend Stack
- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Authentication**: Farcaster SDK for user authentication
- **Animation**: CSS animations or Framer Motion
- **State**: React useState/useReducer

### Data Storage
- **Local Storage**: Store user's game state (tickets, spins)
- **Key**: `wheel-game-${userId}`
- **Reset**: Daily or per-session basis

### Authentication Integration
```typescript
import { sdk } from '@farcaster/miniapp-sdk'

// Authentication
const { fid } = await sdk.auth.getCurrentUser()
```

## User Stories

### Story 1: First Time User
1. User opens miniapp
2. Sees spinning wheel with 12 animals
3. Reads "3 tickets remaining"
4. Clicks "Spin"
5. Wheel spins and lands on Dragon
6. Message: "Not quite! 2 tickets left"
7. Can spin again

### Story 2: Winning User
1. User has 2 tickets remaining
2. Clicks "Spin"
3. Wheel lands on Horse
4. Celebration animation plays
5. Message: "Congratulations! Year of the Horse!"

### Story 3: Out of Tickets
1. User has 1 ticket remaining
2. Clicks "Spin"
3. Wheel lands on Monkey
4. Message: "Out of tickets! Better luck next time!"
5. Spin button disabled

## Animation Specifications

### Wheel Spin Animation
- **Duration**: 2-3 seconds
- **Easing**: ease-out (fast start, slow end)
- **Rotations**: 3-5 full rotations + final position
- **Visual feedback**: Pointer/marker at top shows winning position

### Celebration Animation (Win)
- Confetti or particles
- Horse image highlight/pulse
- Success sound (optional)

## Edge Cases

1. **Network Failure**: Save spin result locally, retry submission
2. **Page Reload**: Restore game state from localStorage
3. **Multiple Tabs**: Sync state across tabs using storage events
4. **Authentication Failure**: Require user login before playing

## Future Enhancements (V2)

- [ ] Daily ticket refresh (3 new tickets per day)
- [ ] NFT reward for winners
- [ ] Leaderboard of winners
- [ ] Smart contract integration for on-chain verification
- [ ] Multiple prize tiers (Horse = grand prize, others = smaller prizes)
- [ ] Sound effects and background music
- [ ] Multiplayer/social features (see friends' results)
- [ ] Seasonal themes (different zodiac years)

## Development Phases

### Phase 1: Core Wheel ✓ (In Progress)
- [x] Project scaffolding
- [ ] Wheel UI component with 12 segments
- [ ] Spin animation
- [ ] Random selection logic
- [ ] Ticket counter

### Phase 2: Game Logic
- [ ] Win/lose detection
- [ ] State management (tickets, results)
- [ ] Local storage integration
- [ ] Result screens (Win/Lose/No tickets)

### Phase 3: Authentication Integration
- [ ] User authentication
- [ ] User identification
- [ ] Manifest files

### Phase 4: Polish & Deploy
- [ ] Responsive design
- [ ] Animations and transitions
- [ ] Error handling
- [ ] Deploy to hosting platform
- [ ] Testing and QA

## Design Dimensions
- **Target size**: 424×695px (Farcaster Mini App frame per [miniapps.farcaster.xyz](https://miniapps.farcaster.xyz) — web Mini App sizes should be set to 424×695px)
- **Wheel diameter**: 358px (fits within 424px with padding)
- **Animal icons**: 60×60px per segment
- **No horizontal scroll**: Content constrained to max-width 424px; overflow-x hidden on html/body/#root

## Color Scheme
- **Primary**: Red (#D32F2F) - Traditional Chinese color
- **Secondary**: Gold (#FFD700) - Prosperity
- **Accent**: Green (#4CAF50) - Luck
- **Background**: Gradient from dark red to deep purple
- **Text**: White/Gold on dark backgrounds

## Copy/Messaging

### Initial
- "Spin the Zodiac Wheel!"
- "You have 3 chances to win the Year of the Horse!"

### During Spin
- "Spinning..."
- "Good luck!"

### Win
- "🐴 Congratulations!"
- "You won the Year of the Horse!"

### Lose (with tickets)
- "You got [Animal]!"
- "You have X tickets remaining. Try again!"

### Lose (no tickets)
- "You got [Animal]!"
- "Out of tickets! Better luck next time!"

## Success Metrics
- Total spins
- Win rate (should be ~8.33% if truly random)
- User engagement (average spins per user)

---

**Created**: February 2, 2026  
**Last Updated**: February 2, 2026  
**Version**: 1.0
