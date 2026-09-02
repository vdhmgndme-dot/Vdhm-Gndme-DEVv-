import React from 'react';
import { motion } from 'motion/react';
import { 
  School, 
  Target, 
  Code2, 
  BookOpen, 
  Cpu, 
  Compass, 
  CheckCircle2,
  Terminal,
  Edit3
} from 'lucide-react';
import { ProfileData, DeveloperStat, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  profile: ProfileData;
  stats: DeveloperStat[];
  language: Language;
  onOpenEditModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, stats, language, onOpenEditModal }) => {
  const t = TRANSLATIONS[language];
  const isBn = language === 'bn';

  const coreValues = isBn ? [
    "১০০% সত্য ও বাস্তবসম্মত তথ্য, কোনো অসত্য দাবি নেই",
    "এইচটিএমএল৫ ও আধুনিক সিএসএস৩ লেআউট",
    "ভ্যানিলা জাভাস্ক্রিপ্ট এবং আধুনিক ES6+ সিনট্যাক্স",
    "রেসপনসিভ মোবাইল-ফার্স্ট ওয়েব ইন্টারফেস",
    "প্রতিদিনের কোডিং ও অ্যালগরিদম অনুশীলন",
    "দীর্ঘমেয়াদী সফটওয়্যার ইঞ্জিনিয়ার হওয়ার স্বপ্ন"
  ] : [
    "100% Genuine, Zero Fake Claims",
    "HTML5 & Modern CSS3 Layouts",
    "Vanilla JavaScript & Modern ES6+",
    "Responsive Mobile-First Interfaces",
    "Daily Coding & Algorithmic Practice",
    "Long-term Software Engineering Goal"
  ];

  const displayName = isBn ? (profile.nameBn || profile.name) : profile.name;
  const displaySchool = isBn ? (profile.schoolBn || profile.school) : profile.school;
  const displayGrade = isBn ? (profile.classGradeBn || profile.classGrade) : profile.classGrade;
  const displayMission = isBn ? (profile.missionBn || profile.mission) : profile.mission;
  const displayLocation = isBn ? (profile.locationBn || profile.location) : profile.location;

  return (
    <section 
      id="about" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#090d16]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              {t.about.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              {t.about.title}
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t.about.storyTitle}</h3>
                    <p className="text-xs font-mono text-cyan-400">{displaySchool} • {displayGrade}</p>
                  </div>
                </div>

                <button
                  id="btn-edit-about"
                  onClick={onOpenEditModal}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                  title="Edit bio & details"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isBn ? 'সম্পাদনা' : 'Edit'}</span>
                </button>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
                {isBn ? (
                  <>
                    <p>
                      আমি <strong className="text-white font-medium">{displayName}</strong>, বেগম রাবেয়া আহমেদ হাই স্কুলের ৮ম শ্রেণির একজন নিয়মিত শিক্ষার্থী। প্রাতিষ্ঠানিক পড়াশোনার পাশাপাশি আমার প্রধান আগ্রহ ও ভালোবাসা হলো <span className="text-cyan-300 font-normal">কম্পিউটার প্রোগ্রামিং এবং আধুনিক ওয়েব ডেভেলপমেন্ট</span>।
                    </p>
                    <p>
                      আমি <strong className="text-white font-medium">এইচটিএমএল (HTML), সিএসএস (CSS), জাভাস্ক্রিপ্ট (JavaScript)</strong>, রেসপনসিভ ইউজার ইন্টারফেস এবং আধুনিক টুলস নিয়ে কাজ করি। মিথ্যা বা বাড়িয়ে বলা কোনো তথ্যের পেছনে না ছুটে, আমার মূল উদ্দেশ্য হলো ওয়েব আর্কিটেকচার ভালোভাবে বোঝা এবং পরিচ্ছন্ন, মানসম্মত কোড লেখা।
                    </p>
                    <p>
                      প্রতিদিন আমি কোডিং প্রবলেম সমাধান করি এবং নতুন নতুন ডিজিটাল প্রজেক্ট তৈরি করে আমার যুক্তিশক্তি ও প্রোগ্রামিং দক্ষতাকে ধারালো করছি।
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      I am <strong className="text-white font-medium">{displayName}</strong>, an eighth-grade student studying at Begum Rabeya Ahmed High School. Beyond academic curriculum, my primary focus and passion lies in <span className="text-cyan-300">coding, computer programming, and web development</span>.
                    </p>
                    <p>
                      I work with essential web technologies including <strong className="text-white font-medium">HTML, CSS, JavaScript</strong>, responsive user interfaces, and modern developer tools. Rather than chasing superficial vanity metrics, my approach is grounded in continuous practice, understanding how web architecture works, and writing clean, structured code.
                    </p>
                    <p>
                      Every day, I solve coding challenges and construct digital projects to strengthen my logical thinking and software creation abilities.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Core Values Checklist */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreValues.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Vision & Focus Box (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-slate-900/90 border border-indigo-500/30 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{t.about.visionTitle}</h3>
                  <span className="text-xs font-mono text-indigo-400">{t.about.visionSubtitle}</span>
                </div>
              </div>

              <blockquote className="text-slate-200 italic text-sm leading-relaxed border-l-2 border-indigo-500 pl-4 py-1 mb-4">
                "{displayMission}"
              </blockquote>

              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {isBn 
                  ? "বাস্তব জীবনের উপযোগী সফটওয়্যার তৈরি করা, ওপেন-সোর্স কমিউনিটিতে অবদান রাখা এবং কোডিংয়ের মাধ্যমে বাস্তব সমস্যার সমাধান করাই আমার প্রধান লক্ষ্য।"
                  : "Aiming to build real-world, production-ready software solutions, contribute meaningfully to open-source developer communities, and solve practical challenges through code."
                }
              </p>
            </div>

            {/* Academic & Study Profile Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">{t.about.academicAnchor}</h4>
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">{t.about.institution}:</span>
                  <span className="text-white text-right">{displaySchool}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">{t.about.grade}:</span>
                  <span className="text-cyan-300">{displayGrade}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">{t.about.location}:</span>
                  <span className="text-white">{displayLocation}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">{t.about.status}:</span>
                  <span className="text-emerald-400">{t.about.statusValue}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Authentic Developer Stats Dashboard (No fake metrics) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>{t.about.metricsTitle}</span>
            </h3>
            <span className="text-[11px] font-mono text-slate-500">
              {t.about.metricsSubtitle}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors shadow-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 group-hover:bg-cyan-500/10 blur-xl rounded-full transition-colors pointer-events-none" />
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {isBn ? (stat.labelBn || stat.label) : stat.label}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400/80" />
                </div>

                <div className="text-3xl font-bold font-mono text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {isBn ? (stat.valueBn || stat.value) : stat.value}
                </div>

                <p className="text-xs text-slate-400">
                  {isBn ? (stat.descriptionBn || stat.description) : stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

