import type React from 'react';
import horseWinImg from '../assets/design/horse-win.png';
import fireworksImg from '../assets/design/fireworks.png';
import { getNumberOfTickets } from '../services/gameService';

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
  fireworks: {
    position: 'absolute',
    right: -5,
    top: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    aspectRatio: '137/77',
    pointerEvents: 'none',
  },
  cardHeader: {
    display: 'flex',
    width: '100%',
    padding: 4,
    justifyContent: 'space-between',
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
    marginLeft: 'auto',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 24,
    width: '100%',
    padding: '0 24px',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
    width: '100%',
  },
  horseWinImage: {
    width: 130,
    height: 120,
    objectFit: 'contain',
  },
  youWin: {
    color: '#F43C3D',
    textAlign: 'center',
    fontFamily: 'var(--font-family-cinzel, Cinzel), serif',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '125%',
    letterSpacing: '0.396px',
    textTransform: 'uppercase',
  },
  itsAHorse: {
    color: '#A1A1AA',
    textAlign: 'center',
    fontFamily: 'var(--font-family-font-sans, Inter), sans-serif',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '150%',
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
    alignSelf: 'center',
  },
  rewardRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  tokenOuter: {
    width: 28,
    height: 28,
    borderRadius: 28,
    background: '#B6912D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tokenInner: {
    width: 23,
    height: 23,
    borderRadius: '50%',
    background: '#D7B146',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tokenSvg: {
    width: 18,
    height: 18,
  },
  starPoints: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '125%',
    letterSpacing: '0.07px',
    background: 'linear-gradient(90deg, #F7ECD8 0%, #E6B65C 50%, #F7ECD8 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  addedToAccount: {
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.15px',
  },
  spinAgainBtn: {
    display: 'flex',
    width: 280,
    minWidth: 80,
    padding: '12px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    borderRadius: 32,
    border: '1px solid #F6ECDA',
    background: '#C22C2D',
    color: '#FDDDA1',
    fontFamily: 'var(--font-family-cinzel, Cinzel), serif',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    paddingTop: 16,
  },
  ticketsNum: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    color: 'rgba(255,255,255,0.9)',
  },
  ticketsLabel: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
    color: 'rgba(255,255,255,0.8)',
  },
};

export function WinPage() {
  const ticketsRemaining = getNumberOfTickets();

  const handleClose = () => {
    window.history.back();
  };

  const handleSpinAgain = () => {
    window.location.reload();
  };

  return (
    <div style={styles.page}>
      <div style={styles.fireworks}>
        <img src={fireworksImg} alt="" style={{ height: 'auto', maxWidth: '100%' }} />
      </div>

      <div style={styles.cardHeader}>
        <button type="button" style={styles.closeBtn} onClick={handleClose} aria-label="Close">
          ×
        </button>
      </div>

      <div style={styles.main}>
        <div style={styles.hero}>
          <img src={horseWinImg} alt="Horse" style={styles.horseWinImage} />
          <h2 style={styles.youWin}>You Win!</h2>
          <p style={styles.itsAHorse}>It's Horse!</p>
        </div>

        <div style={styles.rewardCard}>
          <div style={styles.rewardRow}>
            <div style={styles.tokenOuter}>
              <div style={styles.tokenInner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  style={styles.tokenSvg}
                >
                  <path
                    d="M11.749 15.5293L9.08691 18.1914L6.4248 15.5293L9.08691 12.8672L11.749 15.5293ZM6.42383 15.5186H2.65918V11.7539H6.42383V15.5186ZM15.5059 15.5186H11.7412V11.7539H15.5059V15.5186ZM5.32422 9.08691L2.66211 11.749L0 9.08691L2.66211 6.4248L5.32422 9.08691ZM18.1738 9.08691L15.5117 11.749L12.8486 9.08691L15.5117 6.4248L18.1738 9.08691ZM6.42383 6.41895H2.65918V2.6543H6.42383V6.41895ZM11.7412 2.6543H15.5059V6.41895H11.7412V2.66992L9.08691 5.32422L6.4248 2.66211L9.08691 0L11.7412 2.6543Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <span style={styles.starPoints}>+100 STAR Points</span>
          </div>
          <p style={styles.addedToAccount}>Added to your account</p>
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
