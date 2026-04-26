import { RevealText } from '../components/RevealText';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

const servicesList = [
  {
    id: 'heating',
    title: 'Chauffage & Ventilation',
    subtitle: 'Installation de pointe',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    desc: 'Nous concevons et déployons des systèmes thermodynamiques sur-mesure. Des pompes à chaleur nouvelle génération aux systèmes de ventilation double flux, chaque paramètre est étudié pour maximiser le confort thermique tout en minimisant l\'empreinte écologique de vos espaces de vie ou de travail.',
    reverse: false,
  },
  {
    id: 'facility',
    title: 'Facility Management',
    subtitle: 'Maintenance globale de bâtiments',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Un bâtiment est un organisme vivant qui exige une attention constante. Notre équipe de facility management garantit le maintien en condition opérationnelle absolue de vos installations. Nous assurons une optimisation énergétique continue pour pérenniser vos actifs immobiliers.',
    reverse: true,
  },
  {
    id: 'renovation',
    title: 'Rénovation Complète',
    subtitle: 'Modernisation énergétique',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Redonnez vie à vos bâtisses et espaces professionnels. Nous pilotons l\'intégralité des travaux de modernisation énergétique, de l\'audit thermique initial aux finitions esthétiques premium, pour répondre aux normes suisses les plus strictes.',
    reverse: false,
  }
];

export function Services() {
  return (
    <div className="bg-pearl-100 w-full">
      <SEO 
        title="Nos Services" 
        description="Découvrez nos expertises en chauffage, ventilation, facility management et rénovation complète à Genève. Des solutions thermodynamiques d'exception."
      />
      <div className="pt-40 pb-20 px-6 lg:px-8 max-w-7xl mx-auto group">
        <span className="text-sienna-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Notre Expertise</span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-slate-900 mb-8 leading-[1.05] italic font-serif">
          L'ingénierie
          <br />
          <span className="font-sans font-bold not-italic">du </span><span className="text-sienna-500 italic font-serif">confort.</span>
        </h1>
        <motion.div 
          className="h-[1px] w-full bg-slate-300 mt-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32 space-y-32">
        {servicesList.map((service, index) => (
          <div 
            key={service.id} 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            <motion.div 
              className={`order-2 ${service.reverse ? 'lg:order-1' : 'lg:order-2'}`}
              initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden aspect-[4/3] shadow-2xl">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className={`order-1 ${service.reverse ? 'lg:order-2' : 'lg:order-1'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-sienna-500 font-mono text-[10px] tracking-widest uppercase mb-4 font-bold">{service.subtitle}</h4>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 italic">{service.title}</h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">{service.desc}</p>
              
              <button className="text-xs font-bold uppercase tracking-widest border-b-[2px] border-slate-900 pb-1 flex items-center gap-2 hover:text-sienna-500 hover:border-sienna-500 transition-colors">
                En savoir plus
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
