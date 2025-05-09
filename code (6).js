// components/SoundscapePlayer.js
import { useState, useRef, useEffect } from 'react';
// import { PlayIcon, PauseIcon, VolumeUpIcon, VolumeOffIcon } from '@heroicons/react/solid'; // Example icons

export default function SoundscapePlayer({ tracks }) { // tracks = [{ id, title, src, artist, artwork }]
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(error => console.error("Error playing audio:", error));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrackIndex]);


  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));
  const handleMuteToggle = () => setIsMuted(!isMuted);
  const handleNextTrack = () => setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  const handlePrevTrack = () => setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);

  if (!tracks || tracks.length === 0) return <p>No soundscapes available.</p>;

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-gray-800 dark:text-gray-200">
      <audio ref={audioRef} src={currentTrack.src} onEnded={handleNextTrack} />
      <div className="flex items-center space-x-4">
        <img src={currentTrack.artwork || '/images/default-artwork.png'} alt={currentTrack.title} className="w-16 h-16 rounded" />
        <div>
          <h3 className="text-lg font-semibold">{currentTrack.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{currentTrack.artist}</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3 mt-4">
        <button onClick={handlePrevTrack} className="p-2">{/* Prev Icon */}</button>
        <button onClick={handlePlayPause} className="p-3 bg-blue-500 text-white rounded-full">
          {isPlaying ? "Pause"/* PauseIcon */ : "Play"/* PlayIcon */}
        </button>
        <button onClick={handleNextTrack} className="p-2">{/* Next Icon */}</button>
      </div>
      <div className="flex items-center space-x-2 mt-3">
        <button onClick={handleMuteToggle}>{/* Volume Icon based on isMuted */}</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          disabled={isMuted}
          className="w-full"
        />
      </div>
      {/* Optional: Visualizer canvas here */}
    </div>
  );
}