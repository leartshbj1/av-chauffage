import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Lenis from 'lenis';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWidgets } from './FloatingWidgets';

const pageVariants = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  in: { opacity: 1, filter: 'blur(0px)' },
  out: { opacity: 0, filter: 'blur(10px)' },
};

const pageTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-pearl-100 relative">
      <FloatingWidgets />
      {/* Vertical Sidebar Accent */}
      <div className="fixed left-0 top-0 h-full w-[6px] bg-sienna-500 z-50"></div>
      
      <div className="pl-[6px] flex flex-col flex-grow">
        <Navbar />
        <motion.main
          key={location.pathname}
          className="flex-grow flex flex-col"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </motion.main>
        <Footer />
      </div>
    </div>
  );
}
