export type Language = 'en' | 'bn';

export interface ProfileData {
  name: string;
  nameBn?: string;
  titles: string[];
  titlesBn?: string[];
  school: string;
  schoolBn?: string;
  classGrade: string;
  classGradeBn?: string;
  email: string;
  phone: string;
  bio: string;
  bioBn?: string;
  mission: string;
  missionBn?: string;
  avatarUrl: string;
  location: string;
  locationBn?: string;
  statusText: string;
  statusTextBn?: string;
  githubUrl: string;
}

export interface SkillItem {
  id: string;
  name: string;
  nameBn?: string;
  category: 'frontend' | 'tools' | 'logic';
  icon: string;
  badge: string;
  badgeBn?: string;
  description: string;
  descriptionBn?: string;
  color: string;
}

export interface ProjectItem {
  id: string;
  codeName: string;
  title: string;
  titleBn?: string;
  description: string;
  descriptionBn?: string;
  category: string;
  categoryBn?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  accentColor: string;
  features: string[];
  featuresBn?: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  titleBn?: string;
  subtitle: string;
  subtitleBn?: string;
  description: string;
  descriptionBn?: string;
  technologies: string[];
  icon: string;
}

export interface TimelineItem {
  id: string;
  stage: string;
  stageBn?: string;
  title: string;
  titleBn?: string;
  subtitle: string;
  subtitleBn?: string;
  description: string;
  descriptionBn?: string;
  status: 'completed' | 'active' | 'future';
  icon: string;
}

export interface DeveloperStat {
  id: string;
  label: string;
  labelBn?: string;
  value: string;
  valueBn?: string;
  description: string;
  descriptionBn?: string;
  icon: string;
}

export type ThemeMode = 'dark' | 'light';

