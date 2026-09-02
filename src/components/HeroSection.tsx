import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  School, 
  Code2, 
  Copy, 
  Check, 
  Camera,
  Terminal,
  ExternalLink,
  Upload,
  ClipboardPaste,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { ProfileData, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroSectionProps {
  profile: ProfileData;
  language: Language;
  onOpenEditModal: () => void;
  onUpdateAvatar?: (url: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  profile, 
  language, 
  onOpenEditModal,
  onUpdateAvatar 
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = TRANSLATIONS[language];

  // Dynamic titles depending on language
  const titlesList = (language === 'bn' && profile.titlesBn && profile.titlesBn.length > 0)
    ? profile.titlesBn
    : profile.titles;

  // Typewriter effect for rotating roles
  useEffect(() => {
    const currentRole = titlesList[roleIndex] || titlesList[0] || "Web Developer";
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % titlesList.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, titlesList]);

  // Reset typewriter when language changes
  useEffect(() => {
    setDisplayText('');
  }, [language]);

  // Handle image file reading and setting directly
  const handleImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      showToast(language === 'bn' ? 'অনুগ্রহ করে একটি ছবি ফাইল সিলেক্ট করুন।' : 'Please select an image file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        if (onUpdateAvatar) {
          onUpdateAvatar(e.target.result);
        }
        showToast(language === 'bn' ? 'আপনার আসল ছবি সফলভাবে যুক্ত হয়েছে!' : 'Original photo pasted directly!');
      }
    };
    reader.readAsDataURL(file);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Clipboard paste listener (Ctrl+V anywhere on the page)
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            handleImageFile(file);
            break;
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [language, onUpdateAvatar]);

  const handlePasteClick = async () => {
    if (navigator.clipboard && navigator.clipboard.read) {
      try {
        const clipboardItems = await navigator.clipboard.read();
        for (const item of clipboardItems) {
          const imageType = item.types.find(type => type.startsWith('image/'));
          if (imageType) {
            const blob = await item.getType(imageType);
            const file = new File([blob], 'pasted-photo.png', { type: imageType });
            handleImageFile(file);
            return;
          }
        }
        showToast(language === 'bn' ? 'ক্লিপবোর্ডে কোনো ছবি পাওয়া যায়নি। ফাইল সিলেক্ট করুন।' : 'No image on clipboard. Please choose a file.');
        fileInputRef.current?.click();
      } catch (err) {
        fileInputRef.current?.click();
      }
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageFile(file);
    }
  };

  const handleResetToDefault = () => {
    if (onUpdateAvatar) {
      onUpdateAvatar("/profile.jpg");
      showToast(language === 'bn' ? 'ডিফল্ট আসল ছবিতে রিসেট করা হয়েছে।' : 'Reset to default official photo.');
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const displayName = language === 'bn' ? (profile.nameBn || profile.name) : profile.name;
  const displaySchool = language === 'bn' ? (profile.schoolBn || profile.school) : profile.school;
  const displayGrade = language === 'bn' ? (profile.classGradeBn || profile.classGrade) : profile.classGrade;
  const displayBio = language === 'bn' ? (profile.bioBn || profile.bio) : profile.bio;

  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background light orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[520px] h-[520px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Futuristic cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typography, Identity, Bios & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-slate-200">{t.hero.activeBadge}</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-400">{t.hero.classGrade}</span>
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            id="hero-name-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-3 font-display"
          >
            {displayName}
          </motion.h1>

          {/* Animated Typing Role */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-6 min-h-[36px]"
          >
            <span className="text-slate-400 font-mono text-sm sm:text-lg">{t.hero.iam}</span>
            <span className="font-mono text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              {displayText}
            </span>
            <span className="w-2 sm:w-2.5 h-6 bg-cyan-400 animate-pulse" />
          </motion.div>

          {/* Academic Affiliation Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/40 border border-slate-700/60 rounded-lg px-3.5 py-2 mb-6"
          >
            <School className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              {t.hero.studentAt} <strong className="text-white font-medium">{displaySchool}</strong> • <span className="text-cyan-300">{displayGrade}</span>
            </span>
          </motion.div>

          {/* Authentic Professional Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-light"
          >
            {displayBio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10"
          >
            {/* View My Work Button */}
            <button
              id="btn-view-work"
              onClick={() => scrollToSection('#projects')}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 font-mono tracking-wide">{t.hero.viewWork}</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* About Me Button */}
            <button
              id="btn-about-me"
              onClick={() => scrollToSection('#about')}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 text-sm font-medium transition-all duration-200 cursor-pointer"
            >
              <User className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>{t.hero.aboutMe}</span>
            </button>

            {/* Contact Me Button */}
            <button
              id="btn-contact-me"
              onClick={() => scrollToSection('#contact')}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-300 hover:text-indigo-200 border border-indigo-500/30 hover:border-indigo-400/60 text-sm font-medium transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>{t.hero.contactMe}</span>
            </button>
          </motion.div>

          {/* Quick Direct Communication Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 w-full"
          >
            {/* Email quick copy */}
            <button
              id="hero-quick-email"
              onClick={() => copyToClipboard(profile.email, 'email')}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 bg-slate-900/60 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors cursor-pointer group"
              title={t.hero.copyEmail}
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profile.email}</span>
              {copiedField === 'email' ? (
                <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                  <Check className="w-3.5 h-3.5" />
                  <span>{t.hero.copied}</span>
                </span>
              ) : (
                <Copy className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 opacity-60" />
              )}
            </button>

            {/* Phone quick call / copy */}
            <a
              id="hero-quick-phone"
              href={`tel:${profile.phone}`}
              title={t.hero.callPhone}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 bg-slate-900/60 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{profile.phone}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Clean, Authentic Profile Image (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          {/* Hidden File Input for Direct Upload */}
          <input 
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileInputChange}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center"
          >
            {/* Toast Notification for Direct Photo Update */}
            <AnimatePresence>
              {toastMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.95 }}
                  className="absolute -top-12 z-30 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-xs font-mono shadow-2xl flex items-center gap-2 border border-emerald-400"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{toastMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Direct Photo Container with Drag-and-Drop and Paste Support */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                const file = e.dataTransfer.files?.[0];
                if (file) handleImageFile(file);
              }}
              className={`relative w-full rounded-2xl p-2.5 sm:p-3 bg-slate-900/80 border transition-all duration-300 backdrop-blur-md shadow-2xl ${
                isDragging 
                  ? 'border-cyan-400 ring-4 ring-cyan-500/30 scale-[1.01]' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Image Frame - Complete, natural, uncropped view of the beach photograph */}
              <div className="relative w-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
                <img
                  id="hero-official-profile-img"
                  src={profile.avatarUrl}
                  alt={displayName}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[560px] object-contain rounded-xl block"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('profile.jpg')) {
                      target.src = "/profile.jpg";
                    }
                  }}
                />

                {/* Drag-over overlay */}
                {isDragging && (
                  <div className="absolute inset-0 bg-cyan-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20">
                    <Upload className="w-12 h-12 text-cyan-400 animate-bounce mb-2" />
                    <p className="text-sm font-semibold text-cyan-200">
                      {language === 'bn' ? 'এখানে ছবি ড্রপ করুন' : 'Drop photo here to apply directly'}
                    </p>
                  </div>
                )}
              </div>

              {/* Photo Caption & Identity Bar (Below Image, never covering it) */}
              <div className="mt-3 px-2 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {displayName}
                  </h4>
                  <p className="text-[11px] font-mono text-cyan-400">
                    {language === 'bn' ? 'আসল ছবি (Original Photo)' : 'Official Photograph'}
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {displayGrade}
                </span>
              </div>

              {/* Direct Paste & Upload Controls */}
              <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <button
                  id="btn-direct-paste-photo"
                  type="button"
                  onClick={handlePasteClick}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs font-mono transition-colors cursor-pointer shadow-sm"
                  title={language === 'bn' ? 'ক্লিপবোর্ড থেকে পেস্ট বা ফাইল আপলোড করুন' : 'Paste from clipboard or choose file'}
                >
                  <ClipboardPaste className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'ছবি পেস্ট / আপলোড' : 'Paste / Upload Photo'}</span>
                </button>

                <button
                  id="btn-edit-photo-modal"
                  type="button"
                  onClick={onOpenEditModal}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-colors cursor-pointer"
                  title={language === 'bn' ? 'সম্পূর্ণ প্রোফাইল ও তথ্য পরিবর্তন' : 'Edit full profile'}
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{language === 'bn' ? 'সম্পাদনা' : 'Edit'}</span>
                </button>

                <button
                  id="btn-reset-default-photo"
                  type="button"
                  onClick={handleResetToDefault}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs border border-slate-800 transition-colors cursor-pointer"
                  title={language === 'bn' ? 'ডিফল্ট আসল ছবিতে রিসেট' : 'Reset to default'}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Helper Micro-text */}
              <p className="mt-2 text-center text-[10px] font-mono text-slate-500">
                {language === 'bn' 
                  ? 'কীবোর্ডে Ctrl + V চেপে সরাসরি যেকোনো ছবি পেস্ট করতে পারেন' 
                  : 'Press Ctrl + V to paste any photo directly from clipboard'}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

