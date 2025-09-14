import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  mobileImage: string;
  videoSrc?: string;
  className?: string;
}

const VideoBackground = ({ 
  mobileImage, 
  videoSrc = "http://127.0.0.1/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-06-at-2.43.18-PM.mp4",
  className = ""
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop on mount
    const checkDesktop = () => window.innerWidth >= 768;
    setIsDesktop(checkDesktop());

    // Only load video on desktop
    if (checkDesktop() && videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.load(); // Start loading

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Mobile background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`
        }}
      />
      
      {/* Desktop fallback image while video loads */}
      {isDesktop && !isVideoLoaded && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${mobileImage})`
          }}
        />
      )}
      
      {/* Desktop video */}
      {isDesktop && (
        <video 
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={mobileImage}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default VideoBackground;