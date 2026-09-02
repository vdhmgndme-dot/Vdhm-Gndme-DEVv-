import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Upload, 
  Plus, 
  Trash2, 
  Check, 
  User, 
  Code2, 
  FolderGit2, 
  Camera,
  Layers,
  AlertCircle,
  ClipboardPaste
} from 'lucide-react';
import { ProfileData, SkillItem, ProjectItem } from '../types';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  skills: SkillItem[];
  projects: ProjectItem[];
  onSaveProfile: (profile: ProfileData) => void;
  onSaveSkills: (skills: SkillItem[]) => void;
  onSaveProjects: (projects: ProjectItem[]) => void;
  onResetDefaults: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  skills,
  projects,
  onSaveProfile,
  onSaveSkills,
  onSaveProjects,
  onResetDefaults
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'photo' | 'skills' | 'projects'>('profile');

  // Local working state
  const [tempProfile, setTempProfile] = useState<ProfileData>({ ...profile });
  const [tempSkills, setTempSkills] = useState<SkillItem[]>([...skills]);
  const [tempProjects, setTempProjects] = useState<ProjectItem[]>([...projects]);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync state if props change when opening
  React.useEffect(() => {
    setTempProfile({ ...profile });
    setTempSkills([...skills]);
    setTempProjects([...projects]);
  }, [profile, skills, projects, isOpen]);

  if (!isOpen) return null;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setTempProfile({ ...tempProfile, avatarUrl: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveAll = () => {
    onSaveProfile(tempProfile);
    onSaveSkills(tempSkills);
    onSaveProjects(tempProjects);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1200);
  };

  // Skill management
  const handleAddSkill = () => {
    const newSkill: SkillItem = {
      id: `custom-skill-${Date.now()}`,
      name: "New Skill",
      category: "frontend",
      icon: "Code2",
      badge: "Actively Learning",
      description: "Description of your skill or experience.",
      color: "#06b6d4"
    };
    setTempSkills([...tempSkills, newSkill]);
  };

  const handleRemoveSkill = (id: string) => {
    setTempSkills(tempSkills.filter(s => s.id !== id));
  };

  const handleSkillChange = (id: string, field: keyof SkillItem, value: any) => {
    setTempSkills(tempSkills.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  // Project management
  const handleProjectChange = (id: string, field: keyof ProjectItem, value: any) => {
    setTempProjects(tempProjects.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0d1220] border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.2)] overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/70">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Edit Developer Identity & Content
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Persistent local storage • Update info, photo, skills, and projects
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 gap-2 overflow-x-auto">
          {[
            { id: 'profile', label: 'Personal & Bio', icon: <User className="w-4 h-4" /> },
            { id: 'photo', label: 'Profile Photo', icon: <Camera className="w-4 h-4" /> },
            { id: 'skills', label: 'Technical Skills', icon: <Code2 className="w-4 h-4" /> },
            { id: 'projects', label: 'Project Cards', icon: <FolderGit2 className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 py-3 px-4 text-xs font-mono font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: Profile & Contact */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Full Name (English)</label>
                  <input
                    type="text"
                    value={tempProfile.name}
                    onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-400 mb-1">পূর্ণ নাম (বাংলায়)</label>
                  <input
                    type="text"
                    value={tempProfile.nameBn || ''}
                    onChange={(e) => setTempProfile({ ...tempProfile, nameBn: e.target.value })}
                    placeholder="আব্দুল্লাহ আল মোহিত"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-cyan-500/40 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={tempProfile.email}
                    onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={tempProfile.phone}
                    onChange={(e) => setTempProfile({ ...tempProfile, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">School Name (English)</label>
                  <input
                    type="text"
                    value={tempProfile.school}
                    onChange={(e) => setTempProfile({ ...tempProfile, school: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-400 mb-1">স্কুলের নাম (বাংলায়)</label>
                  <input
                    type="text"
                    value={tempProfile.schoolBn || ''}
                    onChange={(e) => setTempProfile({ ...tempProfile, schoolBn: e.target.value })}
                    placeholder="বেগম রাবেয়া আহমেদ হাই স্কুল"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-cyan-500/40 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Class / Grade (English)</label>
                  <input
                    type="text"
                    value={tempProfile.classGrade}
                    onChange={(e) => setTempProfile({ ...tempProfile, classGrade: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-400 mb-1">শ্রেণি (বাংলায়)</label>
                  <input
                    type="text"
                    value={tempProfile.classGradeBn || ''}
                    onChange={(e) => setTempProfile({ ...tempProfile, classGradeBn: e.target.value })}
                    placeholder="৮ম শ্রেণি"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-cyan-500/40 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono text-slate-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={tempProfile.location}
                    onChange={(e) => setTempProfile({ ...tempProfile, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Rotating Professional Titles (English - Comma separated)
                </label>
                <input
                  type="text"
                  value={tempProfile.titles.join(', ')}
                  onChange={(e) => setTempProfile({
                    ...tempProfile,
                    titles: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                  })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-cyan-400 mb-1">
                  রোটেটিং টাইটেলসমূহ (বাংলায় - কমা দিয়ে আলাদা করুন)
                </label>
                <input
                  type="text"
                  value={(tempProfile.titlesBn || []).join(', ')}
                  onChange={(e) => setTempProfile({
                    ...tempProfile,
                    titlesBn: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                  })}
                  placeholder="ওয়েব ডেভেলপার, কোডার, তরুণ সফটওয়্যার ডেভেলপার, প্রবলেম সলভার"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-cyan-500/40 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Professional Bio (English)</label>
                <textarea
                  rows={3}
                  value={tempProfile.bio}
                  onChange={(e) => setTempProfile({ ...tempProfile, bio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-cyan-400 mb-1">প্রফেশনাল বায়ো (বাংলায়)</label>
                <textarea
                  rows={3}
                  value={tempProfile.bioBn || ''}
                  onChange={(e) => setTempProfile({ ...tempProfile, bioBn: e.target.value })}
                  placeholder="বেগম রাবেয়া আহমেদ হাই স্কুলের ৮ম শ্রেণির শিক্ষার্থী..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-cyan-500/40 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Long-Term Mission (English)</label>
                <textarea
                  rows={2}
                  value={tempProfile.mission}
                  onChange={(e) => setTempProfile({ ...tempProfile, mission: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-cyan-400 mb-1">ভবিষ্যৎ লক্ষ্য ও মিশন (বাংলায়)</label>
                <textarea
                  rows={2}
                  value={tempProfile.missionBn || ''}
                  onChange={(e) => setTempProfile({ ...tempProfile, missionBn: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-cyan-500/40 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Photo Management */}
          {activeTab === 'photo' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                {/* Full, natural portrait preview */}
                <div className="relative w-48 sm:w-56 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-xl shrink-0 bg-slate-900 flex items-center justify-center p-1.5">
                  <img
                    src={tempProfile.avatarUrl}
                    alt="Preview"
                    className="w-full h-auto max-h-72 object-contain rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('profile.jpg')) {
                        target.src = "/profile.jpg";
                      }
                    }}
                  />
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      অফিশিয়াল আসল ছবি (Official Authentic Photo)
                    </h4>
                    <p className="text-xs font-mono text-cyan-400 mt-1">
                      ছবিতে কোনো কৃত্রিম পরিবর্তন বা ফিল্টার প্রয়োগ করা হবে না — সরাসরি আপনার আসল ছবিটি প্রদর্শিত হবে।
                    </p>
                    <p className="text-xs font-mono text-slate-400 mt-2 leading-relaxed">
                      Upload or paste your official photo directly. It will be rendered naturally without any distortion or crop.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                    <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono cursor-pointer transition-colors shadow-lg">
                      <Upload className="w-4 h-4" />
                      <span>ফাইল থেকে ছবি আপলোড (Upload)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>

                    <button
                      type="button"
                      onClick={async () => {
                        if (navigator.clipboard && navigator.clipboard.read) {
                          try {
                            const items = await navigator.clipboard.read();
                            for (const item of items) {
                              const imageType = item.types.find(t => t.startsWith('image/'));
                              if (imageType) {
                                const blob = await item.getType(imageType);
                                const file = new File([blob], 'pasted-photo.png', { type: imageType });
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  if (typeof reader.result === 'string') {
                                    setTempProfile({ ...tempProfile, avatarUrl: reader.result });
                                  }
                                };
                                reader.readAsDataURL(file);
                                return;
                              }
                            }
                            alert('ক্লিপবোর্ডে কোনো ছবি পাওয়া যায়নি। অনুগ্রহ করে ছবি কপি করে আবার চেষ্টা করুন অথবা ফাইল আপলোড করুন।');
                          } catch {
                            alert('ক্লিপবোর্ড অ্যাক্সেস অনুমোদিত নয়। অনুগ্রহ করে ফাইল আপলোড বা কীবোর্ডে Ctrl+V ব্যবহার করুন।');
                          }
                        }
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-mono border border-cyan-500/40 transition-colors cursor-pointer"
                    >
                      <ClipboardPaste className="w-4 h-4" />
                      <span>ক্লিপবোর্ড থেকে পেস্ট (Ctrl+V)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTempProfile({ ...tempProfile, avatarUrl: "/profile.jpg" })}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>আসল ছবিতে রিসেট</span>
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                    💡 টিপ: আপনি ওয়েবসাইটের হোমপেজে যেকোনো জায়গায় থাকাকালীন সরাসরি কীবোর্ডে <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-bold">Ctrl + V</kbd> চেপে ছবি পেস্ট করতে পারেন অথবা ছবির ওপর ড্র্যাগ-এন্ড-ড্রপ করতে পারেন।
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Skills Management */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Total Skills: {tempSkills.length}
                </span>
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-mono cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Skill</span>
                </button>
              </div>

              <div className="space-y-3">
                {tempSkills.map((skill) => (
                  <div 
                    key={skill.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 w-full">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => handleSkillChange(skill.id, 'name', e.target.value)}
                        placeholder="Skill Name"
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono"
                      />

                      <select
                        value={skill.category}
                        onChange={(e) => handleSkillChange(skill.id, 'category', e.target.value)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                      >
                        <option value="frontend">Frontend Core</option>
                        <option value="tools">Tools & Cloud</option>
                        <option value="logic">Python & Logic</option>
                      </select>

                      <input
                        type="text"
                        value={skill.badge}
                        onChange={(e) => handleSkillChange(skill.id, 'badge', e.target.value)}
                        placeholder="Proficiency Tag (e.g. Daily Practice)"
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill.id)}
                      className="p-2 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="Delete Skill"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Projects Management */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <p className="text-xs font-mono text-slate-400">
                Edit titles, descriptions, categories, and GitHub links for the 6 showcase cards:
              </p>

              <div className="space-y-4">
                {tempProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 font-bold">
                        {project.codeName}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {project.category}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Title</label>
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Category</label>
                        <input
                          type="text"
                          value={project.category}
                          onChange={(e) => handleProjectChange(project.id, 'category', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={project.description}
                        onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">GitHub URL</label>
                        <input
                          type="text"
                          value={project.githubUrl}
                          onChange={(e) => handleProjectChange(project.id, 'githubUrl', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Live Demo URL</label>
                        <input
                          type="text"
                          value={project.liveUrl}
                          onChange={(e) => handleProjectChange(project.id, 'liveUrl', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-slate-900/80">
          <button
            type="button"
            onClick={() => {
              if (confirm("Reset all profile, skills, and project fields to original defaults?")) {
                onResetDefaults();
                onClose();
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-rose-400 hover:text-rose-300 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All to Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSaveAll}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono shadow-[0_0_20px_rgba(6,182,212,0.35)] cursor-pointer"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
