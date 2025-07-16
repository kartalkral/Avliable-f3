import React, { useState, useEffect } from 'react';
import { mockData } from '../utils/mockData';

const DebugScreen = ({ isVisible, onToggle }) => {
  const [debugInfo, setDebugInfo] = useState(mockData.getInitialData());

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setDebugInfo(mockData.updateData());
    }, 100); // Update every 100ms for smooth movement

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 text-white font-mono text-xs leading-relaxed pointer-events-none z-50">
      <div className="p-4 space-y-1">
        {/* Game Version */}
        <div className="text-white">Minecraft Bedrock 1.21.93.1</div>
        
        {/* FPS and Performance */}
        <div className="text-green-400">
          {debugInfo.fps} fps T: {debugInfo.temperature}°C
        </div>
        
        {/* Memory Usage */}
        <div className="text-yellow-400">
          Mem: {debugInfo.memoryUsed}% {debugInfo.memoryUsedMB}MB / {debugInfo.memoryTotal}MB
        </div>
        
        {/* Allocated Memory */}
        <div className="text-yellow-400">
          Allocated: {debugInfo.allocatedPercent}% {debugInfo.allocatedMB}MB
        </div>
        
        {/* Position */}
        <div className="text-white mt-2">
          XYZ: {debugInfo.position.x.toFixed(3)} / {debugInfo.position.y.toFixed(3)} / {debugInfo.position.z.toFixed(3)}
        </div>
        
        {/* Block Position */}
        <div className="text-white">
          Block: {debugInfo.blockPosition.x} {debugInfo.blockPosition.y} {debugInfo.blockPosition.z}
        </div>
        
        {/* Chunk Position */}
        <div className="text-white">
          Chunk: {debugInfo.chunkPosition.x} {debugInfo.chunkPosition.y} {debugInfo.chunkPosition.z} in {debugInfo.chunkPosition.chunkX} {debugInfo.chunkPosition.chunkZ}
        </div>
        
        {/* Facing Direction */}
        <div className="text-white">
          Facing: {debugInfo.facing.direction} ({debugInfo.facing.axis}) ({debugInfo.facing.degrees.toFixed(1)})
        </div>
        
        {/* Light Levels */}
        <div className="text-white">
          Client Light: {debugInfo.light.client} (sky {debugInfo.light.sky}, block {debugInfo.light.block})
        </div>
        
        {/* Biome Information */}
        <div className="text-white">
          Biome: minecraft:{debugInfo.biome.name}
        </div>
        
        {/* Local Difficulty */}
        <div className="text-white">
          Local Difficulty: {debugInfo.difficulty.local.toFixed(2)} (Day {debugInfo.difficulty.day})
        </div>
        
        {/* Server Information */}
        <div className="text-white mt-2">
          Server Brand: vanilla
        </div>
        
        {/* Dimension */}
        <div className="text-white">
          Dimension: minecraft:{debugInfo.dimension}
        </div>
        
        {/* Time Information */}
        <div className="text-white">
          Time: {debugInfo.time.current} Day {debugInfo.time.day}
        </div>
        
        {/* Weather */}
        <div className="text-white">
          Weather: {debugInfo.weather.current} ({debugInfo.weather.duration}s)
        </div>
        
        {/* Sounds */}
        <div className="text-white">
          Sounds: {debugInfo.sounds.playing}/{debugInfo.sounds.total} + {debugInfo.sounds.ambient}/8
        </div>
        
        {/* Debug Info Toggle */}
        <div className="text-gray-400 mt-4">
          Debug: Pie [shift]: hidden FPS [alt]: hidden
        </div>
        
        {/* Help Text */}
        <div className="text-gray-400 mt-2">
          For help: press F3 + Q
        </div>
      </div>
      
      {/* Right side additional info */}
      <div className="absolute top-4 right-4 space-y-1">
        <div className="text-white">Java: {debugInfo.java.version}</div>
        <div className="text-white">Mem: {debugInfo.memory.used}MB / {debugInfo.memory.total}MB</div>
        <div className="text-white">CPU: {debugInfo.cpu.name}</div>
        <div className="text-white">GPU: {debugInfo.gpu.name}</div>
        <div className="text-white">Display: {debugInfo.display.resolution}</div>
      </div>
    </div>
  );
};

export default DebugScreen;