import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Edit3, 
  Sparkles, 
  Layers, 
  Cpu, 
  GitBranch, 
  Flame, 
  FileCode2, 
  Palette, 
  Smartphone, 
  Layout, 
  Globe, 
  Zap, 
  Lightbulb
} from 'lucide-react';
import { SkillItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface SkillsSectionProps {
  skills: SkillItem[];
  language: Language;
  onOpenEditModal: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, language, onOpenEditModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'tools' | 'logic'>('all');
  const t = TRANSLATIONS[language];
  const isBn = language === 'bn';

  const filteredSkills = skills.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2': return <FileCode2 className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Terminal': return <Terminal className="w-6 h-6" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  const filterTabs = [
    { id: 'all', label: t.skills.all },
    { id: 'frontend', label: t.skills.frontend },
    { id: 'tools', label: t.skills.tools },
    { id: 'logic', label: t.skills.logic }
  ];

  return (
    <section 
      id="skills" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#080b13]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Code2 className="w-3.5 h-3.5" />
              {t.skills.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              {t.skills.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="btn-edit-skills"
              onClick={onOpenEditModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-lg border border-cyan-500/30 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{t.skills.customize}</span>
            </button>
            <p className="text-xs font-mono text-slate-400">
              {t.skills.subtitle}
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              id={`skill-filter-${tab.id}`}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative p-6 rounded-3xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Glowing subtle gradient background */}
                <div 
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors shadow-inner flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 duration-200"
                      style={{ color: skill.color }}
                    >
                      {getSkillIcon(skill.icon)}
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/70 text-slate-300 border border-slate-700/60">
                      {isBn ? (skill.badgeBn || skill.badge) : skill.badge}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-display">
                    {isBn ? (skill.nameBn || skill.name) : skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {isBn ? (skill.descriptionBn || skill.description) : skill.description}
                  </p>
                </div>

                {/* Bottom Status Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500 capitalize">
                    {isBn ? 'ক্যাটেগরি' : 'Category'}: {skill.category}
                  </span>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.skills.activePractice}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

