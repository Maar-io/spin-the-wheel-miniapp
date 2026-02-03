import { GradientTitle } from './GradientTitle';
import { WheelPointer } from './WheelPointer';
import { Wheel } from './Wheel';
import { useState } from 'react';

export const SpinToWin: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [tickets, setTickets] = useState(10);

  const handleSpin = () => {
    if (isSpinning || tickets === 0) return;
    
    setIsSpinning(true);
    
    // Each animal is 30 degrees (360/12)
    // Pick random animal (0-11)
    const randomAnimal = Math.floor(Math.random() * 12);
    const targetAngle = randomAnimal * 30;
    
    // Always spin 5 full rotations (1800 degrees) + target angle
    // This ensures consistent speed every time
    const newRotation = rotation + 1800 + targetAngle;
    setRotation(newRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      setTickets(prev => prev - 1);
    }, 3000);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 16px',
      gap: '20px',
      minHeight: '695px',
      justifyContent: 'space-between',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <GradientTitle size="small">Lunar New Year</GradientTitle>
        <GradientTitle size="large">Spin to Win</GradientTitle>
        <div style={{
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '20px',
          letterSpacing: '-0.15px',
          marginTop: '8px',
        }}>
          +100 STAR Points
        </div>
      </div>

      {/* Wheel Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
      }}>
        <WheelPointer />
        <Wheel rotation={rotation} />
      </div>

      {/* Bottom Section */}
      <div style={{
        display: 'flex',
        width: '280px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}>
        <div style={{
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          letterSpacing: '-0.15px',
        }}>
          This year's sign: 🐴 Horse
        </div>

        <button
          onClick={handleSpin}
          disabled={isSpinning || tickets === 0}
          style={{
            display: 'flex',
            minWidth: '80px',
            padding: '12px 16px',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderRadius: '32px',
            border: '1px solid #F6ECDA',
            background: tickets === 0 ? '#666' : '#C22C2D',
            color: '#FFF',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
            cursor: tickets === 0 || isSpinning ? 'not-allowed' : 'pointer',
            opacity: tickets === 0 || isSpinning ? 0.6 : 1,
          }}
        >
          {isSpinning ? 'Spinning...' : tickets === 0 ? 'No tickets left' : `Spin (${tickets} tickets left)`}
        </button>

        <button
          style={{
            display: 'flex',
            padding: '0',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: '#60A5FA',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
            cursor: 'pointer',
          }}
        >
          Rules & details
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
