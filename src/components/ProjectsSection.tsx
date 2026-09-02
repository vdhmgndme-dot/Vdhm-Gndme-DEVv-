import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Edit3, 
  Layers, 
  Check, 
  Eye, 
  X,
  Code2
} from 'lucide-react';
import { ProjectItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  language: Language;
  onOpenEditModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, language, onOpenEditModal }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const t = TRANSLATIONS[language];
  const isBn = language === 'bn';

  return (
    <section 
      id="projects" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#090d16]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              {t.projects.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              {t.projects.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="btn-edit-projects-section"
              onClick={onOpenEditModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-xl border border-cyan-500/30 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{t.projects.editCards}</span>
            </button>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              {projects.length} {isBn ? 'টি প্রজেক্ট' : 'Modular Cards'}
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const projectTitle = isBn ? (project.titleBn || project.title) : project.title;
            const projectDesc = isBn ? (project.descriptionBn || project.description) : project.description;
            const projectCategory = isBn ? (project.categoryBn || project.category) : project.category;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-xl"
              >
                {/* Top Banner / Code Identifier Visual */}
                <div className="relative h-48 w-full bg-gradient-to-br from-slate-950 via-slate-900 to-[#0c1222] border-b border-slate-800 overflow-hidden flex items-center justify-center p-6">
                  
                  {/* Background Tech Grid and Ambient Orb */}
                  <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
                  <div 
                    className="absolute w-36 h-36 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                    style={{ backgroundColor: project.accentColor }}
                  />

                  {/* Project Badge / Placeholder Identifier */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-2">
                      {project.codeName}
                    </span>
                    <div className="text-base font-mono font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {projectCategory}
                    </div>
                  </div>

                  {/* Hover Quick Overlay Actions */}
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:scale-105 transition-transform flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                      title="View Detailed Blueprint"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{t.projects.inspect}</span>
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                      title="Source Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-display line-clamp-2">
                      {projectTitle}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light mb-5 line-clamp-3">
                      {projectDesc}
                    </p>
                  </div>

                  <div>
                    {/* Technology Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{t.projects.exploreDetails}</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
                          title="GitHub Link"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                          title="Live Demo Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Blueprint Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#0e1424] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Code2 className="w-4 h-4" />
                <span>
                  {selectedProject.codeName} • {isBn ? (selectedProject.categoryBn || selectedProject.category) : selectedProject.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                {isBn ? (selectedProject.titleBn || selectedProject.title) : selectedProject.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                {isBn ? (selectedProject.descriptionBn || selectedProject.description) : selectedProject.description}
              </p>

              {/* Highlight Features */}
              <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  {t.projects.keyCapabilities}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {((isBn && selectedProject.featuresBn) ? selectedProject.featuresBn : selectedProject.features).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {t.projects.builtWith}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenEditModal();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isBn ? 'এডিট মোডে পরিবর্তন করুন' : 'Customize in Edit Mode'}</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono border border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{t.projects.sourceCode}</span>
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    onClick={(e) => {
                      if (selectedProject.liveUrl === '#') {
                        e.preventDefault();
                      }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs font-mono transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t.projects.liveDemo}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

