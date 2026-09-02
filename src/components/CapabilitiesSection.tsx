import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  LayoutGrid, 
  Zap, 
  Flame, 
  Sparkles, 
  Wrench, 
  Layers, 
  Terminal,
  ArrowUpRight
} from 'lucide-react';
import { CapabilityItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface CapabilitiesSectionProps {
  capabilities: CapabilityItem[];
  language: Language;
  onOpenContact: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ 
  capabilities,
  language,
  onOpenContact 
}) => {
  const t = TRANSLATIONS[language];
  const isBn = language === 'bn';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-sky-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-orange-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-emerald-400" />;
      default: return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section 
      id="capabilities" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#080b13]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              {t.capabilities.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              {t.capabilities.title}
            </h2>
          </div>

          <p className="text-xs font-mono text-slate-400 max-w-md">
            {t.capabilities.subtitle}
          </p>
        </div>

        {/* Grid of 6 Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-3xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Corner accent glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/5 group-hover:bg-cyan-500/15 blur-xl rounded-full transition-all pointer-events-none" />

              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-inner flex items-center justify-center">
                    {getIcon(cap.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors font-display">
                  {isBn ? (cap.titleBn || cap.title) : cap.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400/80 mb-3">
                  {isBn ? (cap.subtitleBn || cap.subtitle) : cap.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                  {isBn ? (cap.descriptionBn || cap.description) : cap.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {cap.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              {t.capabilities.bannerTitle}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              {t.capabilities.bannerDesc}
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs font-mono shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer shrink-0"
          >
            <span>{t.capabilities.connectBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

