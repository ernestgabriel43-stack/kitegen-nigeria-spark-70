import { useState, useEffect } from "react";

interface VideoBackgroundProps {
  fallbackImage: string;
  className?: string;
  children?: React.ReactNode;
}

const VideoBackground = ({ fallbackImage, className = "", children }: VideoBackgroundProps) => {
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    // Check if device supports autoplay and is desktop/tablet sized
    const checkVideoSupport = () => {
      const isLargeScreen = window.innerWidth >= 768; // md breakpoint
      const canAutoplay = !(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
      
      // Create a test video element to check autoplay capability
      const video = document.createElement('video');
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      
      const canPlayVideo = isLargeScreen && canAutoplay;
      setUseVideo(canPlayVideo);
    };

    checkVideoSupport();
    
    // Re-check on resize
    const handleResize = () => checkVideoSupport();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Background Video for Desktop/Autoplay-capable devices */}
      {useVideo ? (
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="http://127.0.0.1/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-06-at-2.43.18-PM.mp4" type="video/mp4" />
        </video>
      ) : (
        /* Fallback Image for Mobile/Non-autoplay devices */
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${fallbackImage})`
          }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default VideoBackground;