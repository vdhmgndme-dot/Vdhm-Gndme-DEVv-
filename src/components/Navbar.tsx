import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Edit3, 
  Smartphone, 
  Terminal, 
  ChevronRight,
  Code2,
  Languages
} from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenEditModal: () => void;
  onOpenPackagingModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  language,
  onToggleLanguage,
  onOpenEditModal,
  onOpenPackagingModal,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.nav.home, href: '#hero' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'skills', label: t.nav.skills, href: '#skills' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'capabilities', label: t.nav.capabilities, href: '#capabilities' },
    { id: 'journey', label: t.nav.journey, href: '#journey' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#090d16]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-brand-logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="font-mono font-bold text-sm tracking-wider text-cyan-400 group-hover:text-cyan-300">
                AM
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#090d16] animate-pulse" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-cyan-300 transition-colors leading-tight">
                {language === 'bn' ? 'আব্দুল্লাহ আল মোহিত' : 'Abdullah Al Mohit'}
              </span>
              <span className="font-mono text-[10px] text-cyan-400/80 tracking-wider">
                {t.nav.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Bilingual Language Switcher Button */}
            <button
              id="btn-language-toggle"
              onClick={onToggleLanguage}
              title={language === 'bn' ? "Switch to English" : "বাংলা ভাষায় পরিবর্তন করুন"}
              className="group flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.1)]"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="flex items-center text-xs font-mono font-medium">
                <span className={`px-1 rounded ${language === 'en' ? 'text-cyan-300 font-bold bg-cyan-500/20' : 'text-slate-400'}`}>
                  EN
                </span>
                <span className="text-slate-600 mx-0.5">/</span>
                <span className={`px-1 rounded ${language === 'bn' ? 'text-emerald-300 font-bold bg-emerald-500/20' : 'text-slate-400'}`}>
                  বাং
                </span>
              </div>
            </button>

            {/* Edit Mode Button */}
            <button
              id="btn-edit-profile-nav"
              onClick={onOpenEditModal}
              title="Edit Profile, Skills & Projects"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium font-mono rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.nav.editProfile}</span>
            </button>

            {/* Android / Windows Packaging Center */}
            <button
              id="btn-packaging-nav"
              onClick={onOpenPackagingModal}
              title="Android APK & Windows EXE Packaging Center"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium font-mono rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400 transition-all cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t.nav.packageApp}</span>
            </button>

            {/* Theme Toggle */}
            <button
              id="btn-theme-toggle-nav"
              onClick={onToggleTheme}
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Developer Theme"}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/70 transition-all cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Glass Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 pt-20 px-6 pb-8 bg-[#090d16]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center justify-between px-3 py-2 text-xs font-mono uppercase tracking-wider text-cyan-400/80 border-b border-slate-800">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  Navigation Menu
                </span>
                {/* Mobile Language Switch */}
                <button
                  onClick={onToggleLanguage}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-cyan-300"
                >
                  <Languages className="w-3 h-3" />
                  <span>{language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}</span>
                </button>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <button
                  id="mobile-edit-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEditModal();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-sm font-medium"
                >
                  <Edit3 className="w-4 h-4" />
                  {t.nav.editProfile}
                </button>
                <button
                  id="mobile-pack-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPackagingModal();
                  }}
                  className="flex items-center justify-center p-3 rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-500/30"
                  title="Packaging Center"
                >
                  <Smartphone className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <span>{language === 'bn' ? 'আব্দুল্লাহ আল মোহিত • ৮ম শ্রেণি' : 'Abdullah Al Mohit • Class 8'}</span>
                <span className="text-emerald-400">● Available to build</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

