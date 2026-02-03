export const Wheel: React.FC<{ rotation?: number }> = ({ rotation = 0 }) => {
  // 12 zodiac animals in order starting from 12 o'clock
  const animals = [
    'horse', 'rat', 'ox', 'tiger', 'rabbit', 'dragon',
    'snake', 'goat', 'monkey', 'rooster', 'dog', 'pig'
  ];
  
  // Alternating segment colors, horse is red
  const getSegmentColor = (index: number) => {
    if (index === 0) return '#C22C2D'; // Horse is red
    return index % 2 === 0 ? '#161F2F' : '#243143';
  };
  
  // Helper to create segment path (30-degree slice centered on animal)
  const createSegmentPath = (index: number) => {
    const startAngle = (index * 30 - 15) * (Math.PI / 180);
    const endAngle = (index * 30 + 15) * (Math.PI / 180);
    const radius = 175;
    const cx = 175;
    const cy = 175;
    
    const x1 = cx + radius * Math.sin(startAngle);
    const y1 = cy - radius * Math.cos(startAngle);
    const x2 = cx + radius * Math.sin(endAngle);
    const y2 = cy - radius * Math.cos(endAngle);
    
    return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;
  };
  
  return (
    <div style={{ position: 'relative', width: '358px', height: '358px' }}>
      {/* Golden border circle */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="358" 
        height="358" 
        viewBox="0 0 358 358" 
        fill="none"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <path d="M179 358C277.859 358 358 277.859 358 179C358 80.141 277.859 0 179 0C80.141 0 0 80.141 0 179C0 277.859 80.141 358 179 358Z" fill="url(#paint0_linear_15447_16149)"/>
        <defs>
          <linearGradient id="paint0_linear_15447_16149" x1="42.5" y1="62.9174" x2="314.212" y2="293.261" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E6B65C"/>
            <stop offset="0.25" stopColor="#F7ECD8"/>
            <stop offset="0.5" stopColor="#E6B65C"/>
            <stop offset="0.75" stopColor="#F7ECD8"/>
            <stop offset="1" stopColor="#E6B65C"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Wheel with segments */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="350" 
        height="350" 
        viewBox="0 0 350 350" 
        fill="none"
        style={{
          position: 'absolute',
          top: '4px',
          left: '4px',
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      >
        {/* Draw 12 segments with alternating colors */}
        {animals.map((animal, index) => (
          <g key={animal}>
            {/* Segment background */}
            <path 
              d={createSegmentPath(index)} 
              fill={getSegmentColor(index)}
            />
            {/* Animal image centered in segment */}
            <image 
              href={`/design/${animal}.png`} 
              x="150" 
              y="15" 
              width="50" 
              height="50"
              transform={`rotate(${index * 30} 175 175)`}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
