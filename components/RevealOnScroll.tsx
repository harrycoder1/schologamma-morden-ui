"use client";
import { useEffect, useRef, useState } from 'react';
interface RevealOnScrollProps {
    children: React.ReactNode;
  }
const RevealOnScroll:React.FC<RevealOnScrollProps> = ( {children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = () => {
    const revealTop = revealRef.current?.getBoundingClientRect().top || 0;
    const windowHeight = window.innerHeight;
    const revealVisible = revealTop < windowHeight - 150;

    if (revealVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={revealRef}
      className={`${
        isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-10'
      } transition-all duration-1000 ease-in-out`}
    >
  
  {children}
    </div>
  );
};

export default RevealOnScroll;
