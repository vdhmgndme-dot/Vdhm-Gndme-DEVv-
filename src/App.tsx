/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { 
  loadProfileData, 
  saveProfileData, 
  loadSkillsData, 
  saveSkillsData, 
  loadProjectsData, 
  saveProjectsData,
  loadLanguage,
  saveLanguage,
  DEFAULT_CAPABILITIES,
  DEFAULT_TIMELINE,
  DEFAULT_STATS,
  resetAllToDefaults
} from './data/portfolioData';
import { ProfileData, SkillItem, ProjectItem, ThemeMode, Language } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EditProfileModal } from './components/EditProfileModal';
import { PackagingModal } from './components/PackagingModal';
import { InteractiveCursor } from './components/InteractiveCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<Language>(loadLanguage);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('abdullah_portfolio_theme_v1');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {
      // fallback
    }
    return 'dark';
  });

  const [profile, setProfile] = useState<ProfileData>(loadProfileData);
  const [skills, setSkills] = useState<SkillItem[]>(loadSkillsData);
  const [projects, setProjects] = useState<ProjectItem[]>(loadProjectsData);
  const [stats] = useState(DEFAULT_STATS);
  const [capabilities] = useState(DEFAULT_CAPABILITIES);
  const [timeline] = useState(DEFAULT_TIMELINE);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPackagingModalOpen, setIsPackagingModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'capabilities', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('abdullah_portfolio_theme_v1', next);
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'en' ? 'bn' : 'en';
      saveLanguage(next);
      return next;
    });
  };

  const handleSaveProfile = (updatedProfile: ProfileData) => {
    setProfile(updatedProfile);
    saveProfileData(updatedProfile);
  };

  const handleUpdateAvatar = (newAvatarUrl: string) => {
    const updated = { ...profile, avatarUrl: newAvatarUrl };
    setProfile(updated);
    saveProfileData(updated);
  };

  const handleSaveSkills = (updatedSkills: SkillItem[]) => {
    setSkills(updatedSkills);
    saveSkillsData(updatedSkills);
  };

  const handleSaveProjects = (updatedProjects: ProjectItem[]) => {
    setProjects(updatedProjects);
    saveProjectsData(updatedProjects);
  };

  const handleResetDefaults = () => {
    resetAllToDefaults();
    setProfile(loadProfileData());
    setSkills(loadSkillsData());
    setProjects(loadProjectsData());
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isLight ? 'bg-slate-50 text-slate-900' : 'bg-[#070a12] text-slate-100'
    }`}>
      {/* Custom Desktop Cursor */}
      <InteractiveCursor />

      {/* Cinematic Developer Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Navigation Bar with Bilingual Switcher */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenPackagingModal={() => setIsPackagingModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="relative">
        <HeroSection
          profile={profile}
          language={language}
          onOpenEditModal={() => setIsEditModalOpen(true)}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AboutSection
          profile={profile}
          stats={stats}
          language={language}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        <SkillsSection
          skills={skills}
          language={language}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        <ProjectsSection
          projects={projects}
          language={language}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        <CapabilitiesSection
          capabilities={capabilities}
          language={language}
          onOpenContact={scrollToContact}
        />

        <JourneySection
          timeline={timeline}
          language={language}
        />

        <ContactSection
          profile={profile}
          language={language}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        language={language}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenPackagingModal={() => setIsPackagingModalOpen(true)}
      />

      {/* Edit Profile & Projects Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        skills={skills}
        projects={projects}
        onSaveProfile={handleSaveProfile}
        onSaveSkills={handleSaveSkills}
        onSaveProjects={handleSaveProjects}
        onResetDefaults={handleResetDefaults}
      />

      {/* Multi-Platform Android & Windows Packaging Modal */}
      <PackagingModal
        isOpen={isPackagingModalOpen}
        onClose={() => setIsPackagingModalOpen(false)}
      />
    </div>
  );
}
