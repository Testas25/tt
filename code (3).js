// components/HeroSection.js
export default function HeroSection({ videoSrc, imageSrc, title, subtitle }) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline // Important for mobile
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {imageSrc && !videoSrc && (
        <img src={imageSrc} alt="Hero background" className="absolute top-0 left-0 w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 animate-fadeIn">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light animate-fadeInUp delay-500">
          {subtitle}
        </p>
        {/* Optional: "Discover Your Aura" Button */}
      </div>
    </div>
  );
}
// Add keyframes for fadeIn, fadeInUp in globals.css with Tailwind