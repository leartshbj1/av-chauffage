import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative z-10 w-full px-6 lg:px-12 py-10 lg:py-16 border-t border-slate-200 bg-white text-slate-900 flex flex-col md:flex-row justify-between lg:items-end gap-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div>
          <span className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-mono">Contact Technique</span>
          <a href="tel:+41783391722" className="text-lg lg:text-xl font-medium tracking-tight hover:text-sienna-500 transition-colors">+41 78 339 17 22</a>
        </div>
        <div>
          <span className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-mono">Adresse Suisse</span>
          <span className="text-lg lg:text-xl font-serif italic">Avenue d'Aïre 7, 1203 Genève</span>
        </div>
      </div>
      
      <div className="text-xs lg:text-[10px] text-slate-400 lg:text-right uppercase tracking-[0.2em] leading-relaxed">
        Ingénierie Thermique de Précision <br className="hidden md:block" />
        Genève, Suisse
      </div>
    </footer>
  );
}
