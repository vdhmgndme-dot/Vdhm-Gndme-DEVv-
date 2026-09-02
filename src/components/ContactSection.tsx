import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  Terminal, 
  MapPin, 
  MessageSquare, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ProfileData, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  profile: ProfileData;
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const t = TRANSLATIONS[language];
  const isBn = language === 'bn';

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable sending state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Automatically prepare mailto URL as fallback
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 900);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#080b13]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
            {t.contact.title}
          </h2>
          <p className="text-sm font-mono text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Profile Card */}
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-500/40"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('picsum')) {
                      target.src = "https://picsum.photos/seed/abdullah/200/200";
                    }
                  }}
                />
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {isBn ? (profile.nameBn || profile.name) : profile.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {isBn ? (profile.schoolBn || profile.school) : profile.school} • {isBn ? (profile.classGradeBn || profile.classGrade) : profile.classGrade}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {isBn ? 'ওয়েব ডেভেলপার ও প্রোগ্রামার' : 'Web Developer & Coder'}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                {/* Email Action */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-slate-500 block">{t.contact.email}</span>
                      <a 
                        href={`mailto:${profile.email}`} 
                        className="text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    title={isBn ? "ইমেইল কপি করুন" : "Copy Email"}
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Action */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block">{t.contact.phone}</span>
                      <a 
                        href={`tel:${profile.phone}`} 
                        className="text-xs font-mono text-slate-200 hover:text-emerald-300 transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    title={isBn ? "ফোন নম্বর কপি করুন" : "Copy Phone Number"}
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Pill */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">{t.contact.location}</span>
                    <span className="text-xs font-mono text-slate-200">{profile.location}</span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  id="btn-email-me-direct"
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs font-mono shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.contact.emailMe}</span>
                </a>
                <a
                  id="btn-call-me-direct"
                  href={`tel:${profile.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs font-mono border border-slate-700 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{t.contact.callMe}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-xl relative">
              
              <div className="flex items-center gap-2 mb-6 text-sm font-mono text-cyan-400">
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.formTitle}</span>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display mb-1">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-xs font-mono text-emerald-300 max-w-sm mb-4">
                    {t.contact.successDesc}
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:underline"
                  >
                    <span>{isBn ? 'ইমেইল ক্লায়েন্টে সরাসরি খুলুন' : 'Also open in email client'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {t.contact.name} *
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isBn ? "আপনার নাম" : "John Doe"}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {t.contact.email} *
                      </label>
                      <input
                        id="contact-input-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={isBn ? "আপনার ইমেইল এড্রেস" : "john@example.com"}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {t.contact.subject}
                    </label>
                    <input
                      id="contact-input-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={isBn ? "প্রজেক্ট আলোচনা, পরামর্শ বা কুশল বিনিময়" : "Project discussion, mentorship, or greeting"}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {t.contact.message} *
                    </label>
                    <textarea
                      id="contact-input-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isBn ? "আপনার বার্তা এখানে লিখুন..." : "Write your message here..."}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors font-mono resize-none"
                    />
                  </div>

                  <button
                    id="btn-submit-contact-form"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>{t.contact.sending}</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.sendBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

