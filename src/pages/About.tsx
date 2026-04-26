import { RevealText } from '../components/RevealText';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <SEO 
        title="Notre Vision" 
        description="Découvrez l'ADN de la société AVCHAUFFAGE à Genève. Notre ambition : redéfinir les standards de l'ingénierie et du confort thermique en Suisse romande."
      />
      <div className="pt-40 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <span className="text-sienna-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Notre Société</span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-slate-900 mb-8 leading-[1.05] italic">
          Notre <br />
          <span className="text-sienna-500 not-italic font-sans font-bold">Vision.</span>
        </h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-3xl font-light text-slate-600 leading-relaxed font-serif"
          >
            "Notre ambition est de redéfinir les standards de l'ingénierie et du confort thermique à Genève et dans toute la Suisse romande."
          </motion.p>
        </div>
        
        <div className="lg:col-span-1" />
        
        <div className="lg:col-span-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-slate-900 font-bold text-sm tracking-widest uppercase mb-4">L'ADN Suisse</h3>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Fondée à Genève, AVCHAUFFAGE puise son inspiration dans la tradition d'excellence suisse : la ponctualité, la fiabilité et le souci du détail. Notre approche de l'ingénierie thermique allie ces valeurs intemporelles aux dernières avancées de la transition énergétique.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h3 className="text-slate-900 font-bold text-sm tracking-widest uppercase mb-4">Innovation & Durabilité</h3>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Dans un marché en constante évolution, notre stratégie repose sur l'innovation technique et la transition écologique. La vision d'AVCHAUFFAGE s'axe autour de l'intégration de solutions thermodynamiques d'exception au niveau romand. Nous bâtissons une entreprise experte, capable de répondre aux défis climatiques majeurs de l'immobilier de demain.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-96 md:h-[600px] mt-16 relative overflow-hidden">
         <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Corporate Buildings"
            className="w-full h-full object-cover opacity-60"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    </div>
  );
}
