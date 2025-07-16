import React, { useEffect, useState } from 'react';

const MinecraftBackground = () => {
  const [clouds, setClouds] = useState([]);
  
  useEffect(() => {
    // Generate random clouds
    const generateClouds = () => {
      const newClouds = [];
      for (let i = 0; i < 8; i++) {
        newClouds.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 30 + 10,
          speed: Math.random() * 0.5 + 0.2,
          size: Math.random() * 0.5 + 0.5
        });
      }
      setClouds(newClouds);
    };
    
    generateClouds();
    
    // Animate clouds
    const interval = setInterval(() => {
      setClouds(prevClouds => 
        prevClouds.map(cloud => ({
          ...cloud,
          x: cloud.x + cloud.speed > 100 ? -10 : cloud.x + cloud.speed
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-green-300 overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-300"></div>
      
      {/* Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            width: `${cloud.size * 60}px`,
            height: `${cloud.size * 30}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.05s linear'
          }}
        />
      ))}
      
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600 to-green-400"></div>
      
      {/* Grass pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-green-500 opacity-50"></div>
      
      {/* Simple block-like pattern */}
      <div className="absolute bottom-4 left-0 right-0 h-8 bg-green-700 opacity-30"></div>
      
      {/* Pixelated effect overlay */}
      <div className="absolute inset-0 bg-transparent" style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '4px 4px, 8px 8px',
        backgroundPosition: '0 0, 4px 4px'
      }}></div>
    </div>
  );
};

export default MinecraftBackground;