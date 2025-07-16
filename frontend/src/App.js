import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DebugScreen from "./components/DebugScreen";
import FloatingButton from "./components/FloatingButton";
import MinecraftBackground from "./components/MinecraftBackground";

const Home = () => {
  const [isDebugVisible, setIsDebugVisible] = useState(false);

  // Handle F3 key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'F3' || (event.ctrlKey && event.key === 'F3')) {
        event.preventDefault();
        setIsDebugVisible(!isDebugVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isDebugVisible]);

  const toggleDebug = () => {
    setIsDebugVisible(!isDebugVisible);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Minecraft-style background */}
      <MinecraftBackground />
      
      {/* Debug Screen Overlay */}
      <DebugScreen isVisible={isDebugVisible} onToggle={toggleDebug} />
      
      {/* Floating F3 Button */}
      <FloatingButton isDebugVisible={isDebugVisible} onToggle={toggleDebug} />
      
      {/* Welcome Message */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg border-2 border-gray-600">
          <h1 className="text-3xl font-bold mb-4 text-green-400">Minecraft Bedrock 1.21.93.1</h1>
          <p className="text-lg mb-4">F3 Debug Screen</p>
          <p className="text-sm mb-2">Press F3 or tap the button to toggle debug info</p>
          <p className="text-xs text-gray-300">Mobile-optimized debug screen for Minecraft Bedrock</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;