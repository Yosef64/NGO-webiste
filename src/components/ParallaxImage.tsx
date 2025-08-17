import React from "react";
import { useParallax } from "../hooks/useParallax";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  height?: string;
  objectPosition?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  speed = 0.5,
  className = "",
  overlay = false,
  overlayOpacity = 0.4,
  children,
  height = "h-96",
  objectPosition = "center",
}) => {
  const parallaxOffset = useParallax(speed);

  return (
    <div className={`relative overflow-hidden ${height} ${className}`}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: objectPosition,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
      </div>

      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default ParallaxImage;
