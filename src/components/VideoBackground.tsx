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
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Mobile background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`
        }}
      />
      
      {/* Desktop video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={mobileImage}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default VideoBackground;