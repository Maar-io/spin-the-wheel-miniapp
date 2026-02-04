import type React from 'react';
import { getNumberOfTickets } from '../services/gameService';
import type { ZodiacAnimal } from '../types/types';
import ratImg from '../assets/design/rat.png';
import oxImg from '../assets/design/ox.png';
import tigerImg from '../assets/design/tiger.png';
import rabbitImg from '../assets/design/rabbit.png';
import dragonImg from '../assets/design/dragon.png';
import snakeImg from '../assets/design/snake.png';
import goatImg from '../assets/design/goat.png';
import monkeyImg from '../assets/design/monkey.png';
import roosterImg from '../assets/design/rooster.png';
import dogImg from '../assets/design/dog.png';
import pigImg from '../assets/design/pig.png';

const ANIMAL_IMAGES: Record<ZodiacAnimal, string> = {
  horse: '', // lose page never shows horse (win)
  rat: ratImg,
  ox: oxImg,
  tiger: tigerImg,
  rabbit: rabbitImg,
  dragon: dragonImg,
  snake: snakeImg,
  goat: goatImg,
  monkey: monkeyImg,
  rooster: roosterImg,
  dog: dogImg,
  pig: pigImg,
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    display: 'flex',
    width: '100%',
    maxWidth: 390,
    paddingBottom: 48,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 0,
    borderRadius: '1rem',
    background: '#1E2939',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)',
    position: 'relative',
    margin: '0 auto',
    minHeight: '100%',
  },
  cardHeader: {
    display: 'flex',
    width: '100%',
    padding: 4,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  closeBtn: {
    display: 'flex',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: 'none',
    background: 'transparent',
    color: 'rgba(255,255,255,0.8)',
    cursor: 'pointer',
    fontSize: 20,
    lineHeight: 1,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
    width: '100%',
    padding: '0 24px',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    width: '100%',
  },
  animalImage: {
    width: 120,
    height: 120,
    objectFit: 'contain',
  },
  notThisTime: {
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    fontFamily: 'var(--font-family-cinzel, Cinzel), serif',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '125%',
    textTransform: 'uppercase',
  },
  rewardCard: {
    display: 'flex',
    width: 280,
    padding: '16px 20px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    borderRadius: '0.5rem',
    border: '1px solid rgba(193, 171, 124, 0.50)',
    background: 'rgba(255, 188, 44, 0.10)',
  },
  starPoints: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: 600,
    background: 'linear-gradient(90deg, #F7ECD8 0%, #E6B65C 50%, #F7ECD8 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  spinAgainBtn: {
    display: 'flex',
    width: 280,
    minWidth: 80,
    padding: '12px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    border: '1px solid #F6ECDA',
    background: '#C22C2D',
    color: '#FDDDA1',
    fontFamily: 'var(--font-family-cinzel, Cinzel), serif',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '24px',
    cursor: 'pointer',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    paddingTop: 8,
  },
  ticketsNum: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.9)',
  },
  ticketsLabel: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeight: 400,
    color: 'rgba(255,255,255,0.8)',
  },
};

export interface LosePageProps {
  animal: ZodiacAnimal;
  onClose?: () => void;
  onSpinAgain?: () => void;
}

export function LosePage({ animal, onClose, onSpinAgain }: LosePageProps) {
  const ticketsRemaining = getNumberOfTickets();
  const imgSrc = ANIMAL_IMAGES[animal] || snakeImg;

  const handleClose = () => {
    if (onClose) onClose();
    else window.history.back();
  };

  const handleSpinAgain = () => {
    if (onSpinAgain) onSpinAgain();
    else window.location.reload();
  };

  return (
    <div style={styles.page}>
      <div style={styles.cardHeader}>
        <button type="button" style={styles.closeBtn} onClick={handleClose} aria-label="Close">
          ×
        </button>
      </div>

      <div style={styles.main}>
        <div style={styles.hero}>
          <img src={imgSrc} alt={animal} style={styles.animalImage} />
          <h2 style={styles.notThisTime}>Not this time</h2>
        </div>

        <div style={styles.rewardCard}>
          <span style={styles.starPoints}>+1 STAR Points</span>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>Consolation reward</span>
        </div>

        <button type="button" style={styles.spinAgainBtn} onClick={handleSpinAgain}>
          Spin Again
        </button>

        <div style={styles.footer}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
            <path
              d="M10.8332 4.16797V5.83464M10.8332 14.168V15.8346M10.8332 9.16797V10.8346M1.6665 7.5013C2.32955 7.5013 2.96543 7.76469 3.43427 8.23354C3.90311 8.70238 4.1665 9.33826 4.1665 10.0013C4.1665 10.6643 3.90311 11.3002 3.43427 11.7691C2.96543 12.2379 2.32955 12.5013 1.6665 12.5013V14.168C1.6665 14.61 1.8421 15.0339 2.15466 15.3465C2.46722 15.659 2.89114 15.8346 3.33317 15.8346H16.6665C17.1085 15.8346 17.5325 15.659 17.845 15.3465C18.1576 15.0339 18.3332 14.61 18.3332 14.168V12.5013C17.6701 12.5013 17.0342 12.2379 16.5654 11.7691C16.0966 11.3002 15.8332 10.6643 15.8332 10.0013C15.8332 9.33826 16.0966 8.70238 16.5654 8.23354C17.0342 7.76469 17.6701 7.5013 18.3332 7.5013V5.83464C18.3332 5.39261 18.1576 4.96868 17.845 4.65612C17.5325 4.34356 17.1085 4.16797 16.6665 4.16797H3.33317C2.89114 4.16797 2.46722 4.34356 2.15466 4.65612C1.8421 4.96868 1.6665 5.39261 1.6665 5.83464V7.5013Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={styles.ticketsNum}>{ticketsRemaining}</span>
          <span style={styles.ticketsLabel}>tickets remaining</span>
        </div>
      </div>
    </div>
  );
}
