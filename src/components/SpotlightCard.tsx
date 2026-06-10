import { useRef, ReactNode, MouseEvent, HTMLAttributes } from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  spotlightColor?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  key?: any;
}

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)', onClick, ...props }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  const hasRounding = className.includes('rounded-') || className.includes('rounded ');
  return (
    <div 
      {...props}
      ref={divRef} 
      onMouseMove={handleMouseMove} 
      className={`card-spotlight ${hasRounding ? '' : 'rounded-[4px]'} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
