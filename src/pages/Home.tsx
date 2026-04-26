import { Link } from 'react-router-dom';
import { ParallaxHero } from '../components/ParallaxHero';
import { RevealText } from '../components/RevealText';
import { motion } from 'motion/react';
import { ArrowRight, Thermometer, Building2, Wrench } from 'lucide-react';
import { SEO } from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function Home() {
  return (
    <>
      <SEO 
        title="Accueil" 
        description="AVCHAUFFAGE: L'excellence thermique au cœur de Genève. Installation, maintenance et rénovation énergétique sur mesure pour les pompes à chaleur et systèmes de ventilation." 
      />
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-pearl-100 pt-20">
        {/* Background Decorative Element */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-slate-850 z-0">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <div className="text-[200px] font-bold text-white transform -rotate-90 select-none tracking-widest">GENÈVE</div>
          </div>
        </div>
        
        <div className="relative z-10 w-full px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mt-8 lg:mt-0">
          <div className="lg:pr-12 pt-8 lg:pt-0">
            <span className="text-sienna-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Maison Fondée à Genève
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif leading-[1.05] italic mb-8 text-slate-900">
              L'excellence <br className="hidden md:block" />
              <span className="text-sienna-500 not-italic font-sans font-bold">Thermique</span><br />
              au cœur de la ville.
            </h1>
            <p className="text-slate-600 max-w-sm mb-10 leading-relaxed">
              Fusion de l’ingénierie suisse et du confort domestique haut de gamme. Installation, maintenance et rénovation énergétique sur mesure.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link 
                to="/services" 
                className="inline-flex items-center gap-4 bg-slate-850 text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-sienna-500 transition-all font-semibold"
              >
                Nos Réalisations <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
          
          <div className="flex flex-col gap-6 lg:pl-4">
            {/* Primary Image/Card */}
            <div className="relative h-[300px] lg:h-[350px] w-full bg-slate-200 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <span className="text-[10px] uppercase tracking-widest opacity-90 drop-shadow-md">01 / Installation</span>
                <h3 className="text-2xl lg:text-3xl font-serif italic mt-2 drop-shadow-md">Chauffage & Ventilation</h3>
              </div>
            </div>
            
            {/* Secondary Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:h-48">
              <div className="bg-white p-6 shadow-xl border-l-4 border-sienna-500 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition-transform">
                <div className="text-xs text-slate-400 font-mono">02</div>
                <div className="mt-8 lg:mt-0">
                  <h4 className="font-bold text-sm uppercase mb-2 text-slate-900 group-hover:text-sienna-500 transition-colors">Facility Management</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Maintenance globale et pilotage technique de bâtiments.</p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl border-l-4 border-slate-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition-transform">
                 <div className="text-xs text-slate-400 font-mono">03</div>
                 <div className="mt-8 lg:mt-0">
                   <h4 className="font-bold text-sm uppercase mb-2 text-slate-900 group-hover:text-sienna-500 transition-colors">Rénovation Complète</h4>
                   <p className="text-[11px] text-slate-500 leading-snug">Modernisation énergétique et isolation thermique.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 lg:py-32 bg-white relative z-10 border-t border-pearl-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-8 leading-tight font-serif italic">
              Une vision <br/><span className="text-sienna-600 font-sans font-bold not-italic tracking-tight">architecturale</span> du confort.
            </h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
              Chez AVCHAUFFAGE, nous abordons chaque projet avec la rigueur d'un horloger et la vision d'un architecte. Implantés à l'Avenue d'Aïre 7, notre ancrage genevois symbolise notre attachement à la qualité et au perfectionnisme.
            </p>
            <p className="text-slate-600 font-light leading-relaxed text-lg">
              De l'installation thermodynamique de pointe à la gestion complète de votre patrimoine immobilier, nous créons des environnements où l'énergie est optimisée et le confort sublimé.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
              alt="Design d'intérieur" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Pillars */}
      <section className="py-24 bg-pearl-100 border-t border-pearl-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 flex flex-col items-center">
             <span className="text-sienna-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Excellence Suisse</span>
             <h2 className="text-4xl md:text-5xl text-slate-900 font-serif mb-6 italic">Nos Piliers d'Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Thermometer size={32} strokeWidth={2} />,
                title: 'Chauffage & Ventilation',
                desc: 'Pompes à chaleur, systèmes CVC et régulations thermiques de pointe pour les bâtiments les plus exigeants.',
              },
              {
                icon: <Building2 size={32} strokeWidth={2} />,
                title: 'Facility Management',
                desc: 'Maintenance globale, optimisation énergétique continue et valorisation de votre patrimoine immobilier sur le long terme.',
              },
              {
                icon: <Wrench size={32} strokeWidth={2} />,
                title: 'Rénovation Complète',
                desc: 'Modernisation énergétique des bâtiments existants pour répondre aux normes suisses Minergie et CECE.',
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-10 shadow-xl border-l-[4px] border-pearl-200 transition-all hover:border-sienna-500 flex flex-col group cursor-pointer"
              >
                <div className="text-slate-900 mb-8 group-hover:text-sienna-500 transition-colors">{service.icon}</div>
                <h3 className="text-xl mb-4 text-slate-900 uppercase font-bold tracking-tight">{service.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
