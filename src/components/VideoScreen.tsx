import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

const VideoScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(formatTime(videoRef.current.currentTime));
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="border border-neutral-800 bg-black p-6 relative">
      {/* Screen Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none bg-white/5"></div>
      <div className="absolute inset-0 pointer-events-none animate-scan"></div>

      {/* Video Container */}
      <div className="relative aspect-video bg-black/50 overflow-hidden">
        <iframe
          src="https://go.screenpal.com/watch/cZXleTnVcK4?embed=1"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          title="AUTO_MATE Demo"
        ></iframe>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs opacity-70 tracking-wider">REC</span>
        </div>
        <div className="absolute top-4 right-4 text-lg cursor-pointer hover:text-white transition-colors">×</div>
      </div>
    </div>
  );
};

export default VideoScreen;