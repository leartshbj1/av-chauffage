import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { title: 'Accueil', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'À Propos', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const navClasses = cn(
    'fixed top-0 left-[6px] right-0 z-40 transition-all duration-500 ease-out border-b',
    isScrolled || (!isHome && !mobileOpen) || mobileOpen
      ? 'bg-white/90 backdrop-blur-md border-pearl-200 py-6 text-slate-900 shadow-sm'
      : 'bg-transparent border-transparent py-8 text-slate-900 lg:text-white'
  );

  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-sienna-500 flex items-center justify-center rounded-sm rotate-45 transition-transform group-hover:rotate-0">
            <div className="text-white -rotate-45 font-bold text-xl group-hover:rotate-0 transition-transform font-sans">AV</div>
          </div>
          <span className={cn("text-xl font-semibold tracking-widest transition-colors", 
            isHome && !isScrolled && !mobileOpen ? "text-slate-900 lg:text-white" : "text-slate-900")}>CHAUFFAGE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-tight uppercase transition-colors hover:text-sienna-500',
                location.pathname === link.path && !isHome ? 'text-sienna-600' : '',
                isHome && !isScrolled ? 'text-white/80 hover:text-white' : 'text-slate-600'
              )}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "ml-4 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all",
              isHome && !isScrolled 
                ? "bg-white text-slate-900 hover:bg-sienna-500 hover:text-white" 
                : "bg-slate-850 text-white hover:bg-sienna-500"
            )}
          >
            Estimation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-pearl-200 shadow-lg md:hidden flex flex-col"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-6 py-4 text-slate-900 border-b border-pearl-100 font-medium font-serif uppercase tracking-wider"
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
