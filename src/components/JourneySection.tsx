import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Layers, 
  Rocket, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { TimelineItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface JourneySectionProps {
  timeline: TimelineItem[];
  language: Language;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ timeline, language }) => {
  const t = TRANSLATIONS[language];
  const isBn = language === 'bn';

  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-sky-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Award': return <Award className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getStatusBadge = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            <span>{t.journey.completed}</span>
          </span>
        );
      case 'active':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/40">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>{t.journey.inProgress}</span>
          </span>
        );
      case 'future':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
            <Sparkles className="w-3 h-3" />
            <span>{t.journey.planned}</span>
          </span>
        );
    }
  };

  return (
    <section 
      id="journey" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#090d16]"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            {t.journey.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
            {t.journey.title}
          </h2>
          <p className="text-sm font-mono text-slate-400">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical Connecting Neon Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 -translate-x-1/2 opacity-30 pointer-events-none" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-950 border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] z-10">
                    {getTimelineIcon(item.icon)}
                  </div>

                  {/* Spacer for Desktop Alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/30 backdrop-blur-md shadow-xl transition-all duration-300 relative group">
                      
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-cyan-400">
                          {isBn ? `পর্যায় 0${item.stage}` : `STAGE 0${item.stage}`}
                        </span>
                        {getStatusBadge(item.status)}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors font-display">
                        {isBn ? (item.titleBn || item.title) : item.title}
                      </h3>

                      <p className="text-xs font-mono text-slate-400 mb-3">
                        {isBn ? (item.subtitleBn || item.subtitle) : item.subtitle}
                      </p>

                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        {isBn ? (item.descriptionBn || item.description) : item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

