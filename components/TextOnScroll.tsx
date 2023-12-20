"use client";
import { useEffect, useRef, useState } from 'react';
interface TextOnScrollProps {
    children: React.ReactNode;
    animation:string ;
  }
const TextOnScroll:React.FC<TextOnScrollProps> = ( {children ,animation}) => {
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
        isVisible ? animation: 'opacity-0 translate-y-10'
      } transition-all duration-1000 ease-in-out`}
    >
  
  {children}
    </div>
  );
};

export default TextOnScroll;
