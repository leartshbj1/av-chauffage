import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 80,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(12px)',
    },
  };

  return (
    <motion.span
      style={{ display: 'inline-block' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn('inline-block', className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
