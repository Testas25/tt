// components/InteractiveArtCanvas.js
import React, { useEffect, useRef } from 'react';

const InteractiveArtCanvas = ({ type }) => { // type could define which art to render
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Example: Simple particle system or generative pattern
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ... your drawing logic here based on 'type'
      // For p5.js, you'd initialize a p5 instance here and attach it to the ref.
      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 10, 0, Math.PI * 2);
      ctx.fill();
      animationFrameId = window.requestAnimationFrame(draw);
    };

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    draw(); // Start animation

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      // Cleanup for p5.js instance if used (instance.remove())
    };
  }, [type]);

  return <canvas ref={canvasRef} className="w-full h-[400px] md:h-[600px] bg-gray-200 dark:bg-gray-900 rounded-lg" />;
};

export default InteractiveArtCanvas;