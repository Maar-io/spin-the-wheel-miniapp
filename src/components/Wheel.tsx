export const Wheel: React.FC<{ rotation?: number }> = ({ rotation = 0 }) => {
  return (
    <div style={{ position: 'relative', width: '350px', height: '350px' }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="350" 
        height="350" 
        viewBox="0 0 350 350" 
        fill="none"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      >
        <circle cx="175" cy="175" r="175" fill="#243143"/>
        
        {/* Horse segment - top (0 degrees, 12 o'clock) */}
        <g>
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#C22C2D"
          />
          <image 
            href="/design/horse.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Ox segment - 30 degrees */}
        <g transform="rotate(30 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#2C4A3E"
          />
          <image 
            href="/design/ox.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Tiger segment - 60 degrees */}
        <g transform="rotate(60 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#3D2C4A"
          />
          <image 
            href="/design/tiger.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Rabbit segment - 90 degrees */}
        <g transform="rotate(90 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#4A3D2C"
          />
          <image 
            href="/design/rabbit.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Dragon segment - 120 degrees */}
        <g transform="rotate(120 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#2C3D4A"
          />
          <image 
            href="/design/dragon.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Snake segment - 150 degrees */}
        <g transform="rotate(150 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#3E4A2C"
          />
          <image 
            href="/design/snake.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Goat segment - 180 degrees */}
        <g transform="rotate(180 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#4A2C3D"
          />
          <image 
            href="/design/goat.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Monkey segment - 210 degrees */}
        <g transform="rotate(210 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#2C4A4A"
          />
          <image 
            href="/design/monkey.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Rooster segment - 240 degrees */}
        <g transform="rotate(240 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#4A3E2C"
          />
          <image 
            href="/design/rooster.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Dog segment - 270 degrees */}
        <g transform="rotate(270 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#2C2E4A"
          />
          <image 
            href="/design/dog.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Pig segment - 300 degrees */}
        <g transform="rotate(300 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#4A2C2E"
          />
          <image 
            href="/design/pig.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>

        {/* Rat segment - 330 degrees */}
        <g transform="rotate(330 175 175)">
          <path 
            d="M175 175 L175 0 A175 175 0 0 1 226.5 6 Z" 
            fill="#3D4A2C"
          />
          <image 
            href="/design/rat.png" 
            x="150" 
            y="20" 
            width="50" 
            height="50"
          />
        </g>
      </svg>
    </div>
  );
};
