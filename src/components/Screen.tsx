import React, { useState } from 'react';

interface ScreenProps {
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
}

const Screen: React.FC<ScreenProps> = ({ title, icon, image, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-neutral-800 bg-black p-4 relative overflow-visible group">
      {/* Screen Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none bg-white/5"></div>
      <div className="absolute inset-0 pointer-events-none animate-scan"></div>

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-xs tracking-wider">{title}</h3>
      </div>

      {/* Image Container */}
      <div 
        className="relative h-48 mb-3 overflow-hidden border border-neutral-800 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
        />
      </div>

      {/* Expanded Image */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-2xl text-white hover:text-neutral-400"
              onClick={() => setIsExpanded(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Description */}
      <p className="text-xs leading-relaxed opacity-70 tracking-wide">{description}</p>

      {/* Decorative Elements */}
      <div className="absolute top-2 right-2 text-xs">×</div>
      <div className="absolute bottom-2 right-2 text-[10px] opacity-50 tracking-wider">
        {Math.floor(Math.random() * 999).toString().padStart(3, '0')}
      </div>
    </div>
  );
};

export default Screen;