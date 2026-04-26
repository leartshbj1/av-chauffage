import { motion, useScroll, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';
import { cn } from '../lib/utils';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  children?: ReactNode;
}

export function ParallaxHero({ src, alt, className, overlay = true, children }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div 
      ref={ref} 
      className={cn('relative h-screen w-full overflow-hidden bg-slate-900', className)}
    >
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover scale-110 origin-center"
        />
      </motion.div>
      
      {overlay && (
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
      )}
      
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
