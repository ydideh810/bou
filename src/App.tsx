import React from 'react';
import { Terminal, Bot, Cpu, Workflow } from 'lucide-react';
import Screen from './components/Screen';
import VideoScreen from './components/VideoScreen';

function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 p-8 font-mono relative">
      {/* Cross Markers */}
      <div className="fixed top-4 right-4 text-2xl">×</div>
      <div className="fixed bottom-4 left-4 text-2xl">+</div>
      <div className="fixed bottom-4 right-4 text-2xl">+</div>

      {/* Header */}
      <header className="mb-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-6xl tracking-widest font-light mb-2">AUTO_MATE</h1>
            <div className="text-xs tracking-wider opacity-70">
              <div>SYSTEM VERSION: 1970.23</div>
              <div>LOCATION: SECTOR 7G</div>
            </div>
          </div>
          <div className="text-right text-xs tracking-wider opacity-70">
            <div>VISUAL × DESIGN</div>
            <div>EXPLORATION</div>
            <div>SEQUENCE 003</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-xs tracking-wider opacity-70">
          <div>
            <p>OBSERVE THE SYSTEM.</p>
            <p>WITNESS THE AUTOMATION.</p>
            <p>EMBRACE THE FUTURE.</p>
          </div>
          <div className="text-right">
            <p>THIS DIGITAL CONSTRUCT,</p>
            <p>BRINGING TOGETHER</p>
            <p>THE WHOLE OF MACHINE NATURE.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-12">
        <VideoScreen />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Screen
            title="WHAT IS AUTO_MATE"
            icon={<Bot className="w-5 h-5" />}
            image="https://i.postimg.cc/3xWfqgHK/Auto-Mate-11-11-2024-08-19-PM.png"
            description="An automation Code Script Generator, skilled in creating scripts based on user prompts."
          />
          <Screen
            title="GUIDED GENERATION"
            icon={<Cpu className="w-5 h-5" />}
            image="https://i.postimg.cc/t4xW750v/Auto-Mate-11-11-2024-08-22-PM.png"
            description="Provide detailed instructions about the task they want to automate, including any specific programming language preferences."
          />
          <Screen
            title="USAGE INSTRUCTIONS"
            icon={<Workflow className="w-5 h-5" />}
            image="https://i.postimg.cc/q7GtCD1w/Auto-Mate-11-11-2024-08-46-PM.png"
            description="Offer clear instructions on how to execute the script, including any setup or configuration steps needed."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-neutral-800 grid grid-cols-2 text-xs tracking-wider">
        <div className="opacity-70">
          BIN# 00 03 1970
        </div>
        <div className="text-right opacity-70">
          ADVENTURE AWAITS NOW
        </div>
      </footer>
    </div>
  );
}

export default App;