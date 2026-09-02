import React from 'react';
import { 
  Terminal, 
  Heart, 
  ArrowUp, 
  Mail, 
  Phone, 
  Smartphone, 
  Edit3,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { ProfileData, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  profile: ProfileData;
  language: Language;
  onOpenEditModal: () => void;
  onOpenPackagingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  language,
  onOpenEditModal,
  onOpenPackagingModal
}) => {
  const t = TRANSLATIONS[language];
  const isBn = language === 'bn';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#06080e] text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold font-mono">
            AM
          </div>
          <div>
            <div className="text-white font-bold font-display text-sm">
              {isBn ? (profile.nameBn || profile.name) : profile.name}
            </div>
            <div className="text-slate-500 text-[11px]">
              {isBn ? (profile.schoolBn || profile.school) : profile.school} • {isBn ? (profile.classGradeBn || profile.classGrade) : profile.classGrade}
            </div>
          </div>
        </div>

        {/* Quick Hub Controls */}
        <div className="flex items-center gap-4 text-[11px]">
          <button
            onClick={onOpenEditModal}
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{t.nav.editMode}</span>
          </button>

          <button
            onClick={onOpenPackagingModal}
            className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors cursor-pointer"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.nav.packageExport}</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isBn ? "উপরে যান" : "Back to Top"}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 text-center">
        <div>
          {isBn 
            ? 'অফিসিয়াল ডেভেলপার পোর্টফোলিও ও আইডেন্টিটি • সমস্ত তথ্য শতভাগ খাঁটি ও যাচাইযোগ্য' 
            : 'Official Developer Portfolio & Identity • All Information Verifiable & Authentic'}
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <span>{isBn ? 'আন্তরিকভাবে নির্মিত —' : 'Crafted with precision for'}</span>
          <span className="text-cyan-400 font-semibold">
            {isBn ? (profile.nameBn || profile.name) : profile.name}
          </span>
        </div>
      </div>
    </footer>
  );
};

