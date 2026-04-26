import { RevealText } from '../components/RevealText';
import { motion } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/site';

function ContactForm() {
  // If you don't have a VITE_FORMSPREE_ID, users will need to add it to .env
  // Formspree sometimes supports using the email address directly.
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID || siteConfig.email;
  const [state, handleSubmit] = useForm(formspreeId);

  if (state.succeeded) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-12">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="font-serif text-3xl mb-4 italic text-slate-900">Message envoyé.</h3>
        <p className="text-slate-600 font-light text-lg">
          Merci pour votre message. Notre équipe d'ingénierie vous contactera dans les plus brefs délais au sujet de votre projet.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3">Nom complet</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          required
          className="w-full border-b border-slate-300 py-3 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sienna-500 transition-colors"
          placeholder="Jean Dupont"
        />
        <ValidationError prefix="Nom" field="name" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required
          className="w-full border-b border-slate-300 py-3 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sienna-500 transition-colors"
          placeholder="votre@email.ch"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3">Votre projet</label>
        <textarea 
          id="message" 
          name="message"
          rows={4}
          required
          className="w-full border-b border-slate-300 py-3 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sienna-500 transition-colors resize-none"
          placeholder="Décrivez brièvement vos besoins..."
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full bg-slate-850 text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-sienna-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>
      {state.errors && state.errors.length > 0 && (
        <p className="text-red-500 text-xs mt-2">Veuillez configurer votre ID Formspree dans les variables d'environnement.</p>
      )}
    </form>
  );
}

export function Contact() {
  return (
    <div className="bg-pearl-100 min-h-screen">
      <SEO 
        title="Contact" 
        description="Contactez AVCHAUFFAGE pour vos projets de chauffage ou ventilation à Genève. Notre équipe d'ingénierie technique est à votre disposition."
      />
      <div className="pt-40 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <span className="text-sienna-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Nous Contacter</span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-slate-900 mb-8 leading-[1.05] italic font-serif">
          Parlons de votre <br />
          <span className="text-sienna-500 not-italic font-sans font-bold">Projet.</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white p-10 md:p-14 shadow-2xl border-l-[4px] border-slate-300"
        >
            <ContactForm />
        </motion.div>

        {/* Map & Info */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col h-full"
        >
          <div className="mb-10 text-slate-900 mt-12 lg:mt-0">
            <h3 className="font-serif text-2xl mb-2 italic">Contact Direct</h3>
            <p className="text-slate-600 font-light text-lg mb-4">{siteConfig.addressLine1}<br/>{siteConfig.addressLine2}</p>
            <p className="text-slate-600 font-light text-lg mb-1">
              <a href={`tel:${siteConfig.phone}`} className="hover:text-sienna-500 transition-colors">{siteConfig.phoneDisplay}</a>
            </p>
            <p className="text-slate-600 font-light text-lg">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-sienna-500 transition-colors">{siteConfig.email}</a>
            </p>
          </div>

          <div className="flex-grow w-full overflow-hidden shadow-2xl min-h-[300px] lg:min-h-[400px] bg-slate-850 flex flex-col items-center justify-center p-10 text-center relative group">
             <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
             
             <div className="relative z-10 flex flex-col items-center">
               <h4 className="text-white font-serif text-3xl mb-4 italic">Discutons sur WhatsApp</h4>
               <p className="text-slate-400 font-light max-w-sm mb-8">
                 Une question technique ? Un projet de rénovation ? Notre équipe technique est réactive et à votre disposition.
               </p>
               <a 
                 href={`https://wa.me/${siteConfig.phone.replace('+', '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-4 bg-[#25D366] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#20bd5a] transition-all hover:scale-105"
               >
                 Démarrer la discussion
               </a>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
