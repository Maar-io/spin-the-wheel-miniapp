import { GradientTitle } from './GradientTitle';
import { WheelPointer } from './WheelPointer';
import { Wheel } from './Wheel';
import { useState } from 'react';
import { getNumberOfTickets, getWinningAnimal } from '../services/gameService';
import { GAME_CONSTANTS, ZODIAC_ANIMALS } from '../types/types';
import { calculateWheelRotation } from '../utils/wheelRotation';

export const SpinToWin: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [tickets, setTickets] = useState(getNumberOfTickets());
  const [targetAnimalIndex, setTargetAnimalIndex] = useState<number | null>(null);

  const handleSpin = () => {
    if (isSpinning || tickets === 0) return;
    
    setIsSpinning(true);
    
    // Get which animal to land on from the service
    const targetAnimal = getWinningAnimal();
    setTargetAnimalIndex(targetAnimal);
    
    // Calculate the new rotation to land on the target animal
    const newRotation = calculateWheelRotation(targetAnimal, rotation);
    setRotation(newRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      setTickets(prev => prev - 1);
    }, GAME_CONSTANTS.SPIN_DURATION_MS);
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
        {/* Ticket counter */}
        <div style={{
          display: 'flex',
          padding: '4px 16px',
          alignItems: 'center',
          gap: '4px',
          borderRadius: '6px',
          border: '1px solid #E9D8BA',
          background: 'linear-gradient(94deg, rgba(230, 182, 92, 0.73) 1.4%, #F7ECD8 49.58%, #E6B65C 97.76%)',
          boxShadow: 'inset 1px 1px 4px 0 rgba(0, 0, 0, 0.25)',
          marginBottom: '8px',
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.8332 4.16797V5.83464M10.8332 14.168V15.8346M10.8332 9.16797V10.8346M1.6665 7.5013C2.32955 7.5013 2.96543 7.76469 3.43427 8.23354C3.90311 8.70238 4.1665 9.33826 4.1665 10.0013C4.1665 10.6643 3.90311 11.3002 3.43427 11.7691C2.96543 12.2379 2.32955 12.5013 1.6665 12.5013V14.168C1.6665 14.61 1.8421 15.0339 2.15466 15.3465C2.46722 15.659 2.89114 15.8346 3.33317 15.8346H16.6665C17.1085 15.8346 17.5325 15.659 17.845 15.3465C18.1576 15.0339 18.3332 14.61 18.3332 14.168V12.5013C17.6701 12.5013 17.0342 12.2379 16.5654 11.7691C16.0966 11.3002 15.8332 10.6643 15.8332 10.0013C15.8332 9.33826 16.0966 8.70238 16.5654 8.23354C17.0342 7.76469 17.6701 7.5013 18.3332 7.5013V5.83464C18.3332 5.39261 18.1576 4.96868 17.845 4.65612C17.5325 4.34356 17.1085 4.16797 16.6665 4.16797H3.33317C2.89114 4.16797 2.46722 4.34356 2.15466 4.65612C1.8421 4.96868 1.6665 5.39261 1.6665 5.83464V7.5013Z" stroke="#0A0B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{
            color: '#0A0B1D',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
          }}>tickets</span>
          <span style={{
            color: '#0A0B1D',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
          }}>{tickets}</span>
        </div>
        
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
            color: '#FDDDA1',
            fontFamily: 'Cinzel',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '24px',
            cursor: tickets === 0 || isSpinning ? 'not-allowed' : 'pointer',
            opacity: tickets === 0 || isSpinning ? 0.6 : 1,
          }}
        >
          {isSpinning ? 'Spinning...' : tickets === 0 ? 'No tickets left' : 'Spin'}
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

        {/* Testing: Show expected winning animal */}
        {targetAnimalIndex !== null && (
          <div style={{
            marginTop: '16px',
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: '#FFF',
            fontFamily: 'Inter',
            fontSize: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontWeight: 600, marginBottom: '4px' }}>
              🧪 TEST MODE
            </div>
            <div>
              Expected: {ZODIAC_ANIMALS[targetAnimalIndex]} (index: {targetAnimalIndex})
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
