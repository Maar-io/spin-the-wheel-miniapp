import type React from 'react';
import { useState } from 'react';
import { GradientTitle } from './GradientTitle';
import { WheelPointer } from './WheelPointer';
import { Wheel } from './Wheel';
import { getNumberOfTickets, getWinningAnimal, useTicket } from '../services/gameService';
import { GAME_CONSTANTS, HORSE_INDEX, ZODIAC_ANIMALS } from '../types/types';
import type { ZodiacAnimal } from '../types/types';
import { calculateWheelRotation, getRotationForAnimalAtTop } from '../utils/wheelRotation';

export interface SpinToWinProps {
  /** Called when the wheel stops with the result (win = horse at 12 o'clock, lose = other animal) */
  onSpinResult?: (result: 'win' | 'lose', animal?: ZodiacAnimal, landedAnimalIndex?: number) => void;
  /** When returning from Win/Lose, the animal index that last landed at 12 o'clock (wheel shows this at top) */
  initialLandedAnimalIndex?: number | null;
}

export const SpinToWin: React.FC<SpinToWinProps> = ({ onSpinResult, initialLandedAnimalIndex }) => {
  const [rotation, setRotation] = useState(() =>
    initialLandedAnimalIndex != null ? getRotationForAnimalAtTop(initialLandedAnimalIndex) : 0
  );
  const [isSpinning, setIsSpinning] = useState(false);
  const [tickets, setTickets] = useState(getNumberOfTickets());

  const handleSpin = () => {
    if (isSpinning || tickets === 0) return;

    setIsSpinning(true);

    const targetAnimal = getWinningAnimal();
    const resultAnimal = ZODIAC_ANIMALS[targetAnimal];
    console.log('[Spin to Win] Result at 12 o\'clock (game service):', resultAnimal, `(index: ${targetAnimal})`);

    const newRotation = calculateWheelRotation(targetAnimal, rotation);
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const remaining = useTicket();
      setTickets(remaining);
      const isWin = targetAnimal === HORSE_INDEX;
      onSpinResult?.(isWin ? 'win' : 'lose', isWin ? undefined : (resultAnimal as ZodiacAnimal), targetAnimal);
    }, GAME_CONSTANTS.SPIN_DURATION_MS);
  };

  const styles: Record<string, React.CSSProperties> = {
    page: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 390,
      minHeight: 695,
      padding: '24px 20px 32px',
      gap: 0,
      margin: '0 auto',
      background: 'linear-gradient(180deg, #1A1A2E 0%, #0F0F1E 100%)',
    },
    header: {
      display: 'flex',
      width: '100%',
      maxWidth: 390,
      padding: '8px 0 16px',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0,
    },
    headerTitle: {
      color: '#FFFFFF',
      fontFamily: 'var(--font-family-cinzel, Cinzel), serif',
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '120%',
    },
    headerBtn: {
      display: 'flex',
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,0.9)',
      cursor: 'pointer',
      fontSize: 20,
      lineHeight: 1,
    },
    eventDateRow: {
      display: 'flex',
      width: '100%',
      maxWidth: 390,
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 6,
      marginBottom: 8,
    },
    eventDate: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
    },
    eventDateText: {
      color: 'rgba(255,255,255,0.9)',
      fontFamily: 'Inter, sans-serif',
      fontSize: 13,
      fontWeight: 400,
      lineHeight: '18px',
      letterSpacing: '-0.15px',
    },
    titleBlock: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      marginBottom: 4,
    },
    rewardText: {
      color: '#FFF',
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '18px',
      letterSpacing: '-0.15px',
      marginBottom: 12,
    },
    ticketPill: {
      display: 'flex',
      padding: '6px 14px',
      alignItems: 'center',
      gap: 8,
      borderRadius: 8,
      border: '1px solid #E9D8BA',
      background: 'linear-gradient(94deg, rgba(230, 182, 92, 0.73) 1.4%, #F7ECD8 49.58%, #E6B65C 97.76%)',
      boxShadow: 'inset 1px 1px 4px 0 rgba(0, 0, 0, 0.25)',
      marginBottom: 8,
    },
    ticketPillText: {
      color: '#0A0B1D',
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px',
    },
    ticketPillNum: {
      color: '#0A0B1D',
      fontFamily: 'Inter, sans-serif',
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '24px',
    },
    wheelSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0,
      flexShrink: 0,
      marginBottom: 8,
    },
    pointerWrap: {
      marginBottom: -20,
      zIndex: 1,
    },
    signText: {
      color: '#FFF',
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      fontSize: 13,
      fontWeight: 400,
      lineHeight: '18px',
      letterSpacing: '-0.15px',
      marginBottom: 12,
    },
    spinBtn: {
      display: 'flex',
      minWidth: 80,
      padding: '12px 24px',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      maxWidth: 280,
      borderRadius: 32,
      border: '1px solid #F6ECDA',
      background: '#C22C2D',
      color: '#FDDDA1',
      fontFamily: 'var(--font-family-cinzel, Cinzel), serif',
      fontSize: 20,
      fontWeight: 600,
      lineHeight: '24px',
      cursor: 'pointer',
      marginBottom: 8,
    },
    spinBtnDisabled: {
      background: '#666',
      cursor: 'not-allowed',
      opacity: 0.6,
    },
    rulesLink: {
      display: 'flex',
      padding: '4px 0',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      background: 'transparent',
      border: 'none',
      color: '#60A5FA',
      fontFamily: 'Inter, sans-serif',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: '20px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.page}>
      {/* Header: X | Spin to Win | Share */}
      <header style={styles.header}>
        <button type="button" style={styles.headerBtn} aria-label="Close">
          ×
        </button>
        <span style={styles.headerTitle}>Spin to Win</span>
        <button type="button" style={styles.headerBtn} aria-label="Share">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16V12M4 12L10 6M4 12H8M16 4V8M16 8L10 14M16 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </header>

      {/* Event date: own row, aligned top right */}
      <div style={styles.eventDateRow}>
        <div style={styles.eventDate}>
          <span style={styles.eventDateText}>Feb 10 – 24, 2026</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Lunar New Year + Spin to Win (gradient) */}
      <div style={styles.titleBlock}>
        <GradientTitle size="small">Lunar New Year</GradientTitle>
        <GradientTitle size="large">Spin to Win</GradientTitle>
      </div>

      <div style={styles.rewardText}>+100 STAR Points</div>

      {/* Ticket counter */}
      <div style={styles.ticketPill}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
          <path
            d="M10.8332 4.16797V5.83464M10.8332 14.168V15.8346M10.8332 9.16797V10.8346M1.6665 7.5013C2.32955 7.5013 2.96543 7.76469 3.43427 8.23354C3.90311 8.70238 4.1665 9.33826 4.1665 10.0013C4.1665 10.6643 3.90311 11.3002 3.43427 11.7691C2.96543 12.2379 2.32955 12.5013 1.6665 12.5013V14.168C1.6665 14.61 1.8421 15.0339 2.15466 15.3465C2.46722 15.659 2.89114 15.8346 3.33317 15.8346H16.6665C17.1085 15.8346 17.5325 15.659 17.845 15.3465C18.1576 15.0339 18.3332 14.61 18.3332 14.168V12.5013C17.6701 12.5013 17.0342 12.2379 16.5654 11.7691C16.0966 11.3002 15.8332 10.6643 15.8332 10.0013C15.8332 9.33826 16.0966 8.70238 16.5654 8.23354C17.0342 7.76469 17.6701 7.5013 18.3332 7.5013V5.83464C18.3332 5.39261 18.1576 4.96868 17.845 4.65612C17.5325 4.34356 17.1085 4.16797 16.6665 4.16797H3.33317C2.89114 4.16797 2.46722 4.34356 2.15466 4.65612C1.8421 4.96868 1.6665 5.39261 1.6665 5.83464V7.5013Z"
            stroke="#0A0B1D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span style={styles.ticketPillText}>Tickets:</span>
        <span style={styles.ticketPillNum}>{tickets}</span>
      </div>

      {/* Wheel: pointer + wheel */}
      <div style={styles.wheelSection}>
        <div style={styles.pointerWrap}>
          <WheelPointer />
        </div>
        <Wheel rotation={rotation} />
      </div>

      {/* Bottom: sign, Spin, Rules */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 280 }}>
        <div style={styles.signText}>This year's sign: 🐴 Horse</div>

        <button
          type="button"
          onClick={handleSpin}
          disabled={isSpinning || tickets === 0}
          style={{
            ...styles.spinBtn,
            ...(tickets === 0 || isSpinning ? styles.spinBtnDisabled : {}),
          }}
        >
          {isSpinning ? 'Spinning...' : tickets === 0 ? 'No tickets left' : 'Spin'}
        </button>

        <button type="button" style={styles.rulesLink}>
          Rules & details
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
