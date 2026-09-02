# Abdullah Al Mohit — High-Power Premium Developer Portfolio App

Welcome to the official developer portfolio application of **Abdullah Al Mohit** — Web Developer, Coder, and Young Software Developer at **Begum Rabeya Ahmed High School (Class 8)**.

This application is built with a **futuristic, ultra-polished, high-performance developer identity interface**. It features cinematic loading transitions, interactive 3D profile tilt, dynamic role typewriting, verified student background, authentic skill matrix, modular project blueprints, an interactive developer journey, direct contact channels, and a built-in multi-platform packaging center.

---

## 👤 Profile & Authenticity Guarantee

- **Name:** Abdullah Al Mohit
- **Titles:** Web Developer • Coder • Young Software Developer • Problem Solver • Technology Enthusiast
- **Institution:** Begum Rabeya Ahmed High School
- **Class / Grade:** Class 8
- **Email:** [mouhithgaming@gmail.com](mailto:mouhithgaming@gmail.com)
- **Phone:** [+8801819490588](tel:+8801819490588)
- **Ethical Architecture:** 100% genuine information. Zero fake awards, fake companies, fake client statistics, or fake job histories.

---

## 🚀 Key Features

1. **Cinematic Loading Experience:** Animated "AM" logo reveal, progress bar, and status ticker before revealing the main interface.
2. **Hero Section & Profile Visual:** 3D tilt card interaction, rotating cybernetic halo, light sweep shimmer, and the official portrait of Abdullah Al Mohit.
3. **Interactive Typing System:** Smooth typewriter rotating through his core developer titles.
4. **Authentic Skill Grid:** Categorized cards covering HTML, CSS, JavaScript, Responsive Web Design, UI/UX, Web Dev, Git/GitHub, API Integration, Firebase, Python, and Problem Solving (without fake percentages).
5. **6 Editable Project Showcase:** Modular project cards with live demo triggers, GitHub links, technology tags, and detailed inspection modals.
6. **Interactive Journey Timeline:** 6-stage roadmap (Student → Learning Coding → Building Websites → Creating Projects → Improving Skills → Future Professional Developer).
7. **Contact Engine:** Direct email (`mailto:`) and phone (`tel:`) buttons, one-click copy buttons, and an interactive message form.
8. **Persistent Edit Profile Mode:** In-app customization center allowing Abdullah to update personal info, upload new photos from his device, edit skills, and customize project details into `localStorage`.
9. **Dark & Light Developer Themes:** Seamless switching between Deep Cyber Dark and Clean Light themes.
10. **Interactive Desktop Cursor:** Glowing pointer follower with magnetic feedback on interactive elements (automatically disabled on mobile/touch screens).

---

## 🛠️ Technology Stack

- **Core Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS + Custom Futuristic Cyber Grid & Glassmorphic Utilities
- **Animations:** Motion (`motion/react`)
- **Icons:** Lucide React
- **Persistence:** LocalStorage Engine

---

## 📱 Android App Packaging (APK & AAB via Capacitor)

This application can be packaged into native Android binaries using **Capacitor**:

### Prerequisites
- Node.js (v18+)
- Android Studio with Android SDK installed

### Step-by-Step Instructions:

```bash
# 1. Build the production web distribution
npm run build

# 2. Install Capacitor dependencies
npm install @capacitor/core @capacitor/cli @capacitor/android

# 3. Initialize Capacitor project (already configured in capacitor.config.json)
npx cap init "Abdullah Al Mohit" "com.abdullahalmohit.portfolio" --web-dir=dist

# 4. Add the Android platform
npx cap add android

# 5. Sync the compiled dist assets into the Android container
npx cap sync

# 6. Launch the project in Android Studio
npx cap open android
```

### Generating APK and AAB inside Android Studio:
- **For Testing / Direct Phone Installation (.apk):**
  Go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**.
  The `.apk` file will be generated in `android/app/build/outputs/apk/debug/app-debug.apk`.
- **For Google Play Store Release (.aab):**
  Go to **Build** → **Generate Signed Bundle / APK** → Choose **Android App Bundle (.aab)**.
  Follow the signing keystore prompts to output the `.aab` file.

---

## 🖥️ Windows PC Desktop Software (.exe via Electron)

The exact same HTML, CSS, and JavaScript source is packaged into a native Windows 64-bit desktop application using **Electron**:

### Prerequisites
- Windows 10/11 or a Linux/macOS environment with wine for cross-compilation

### Step-by-Step Instructions:

```bash
# 1. Build the production web assets
npm run build

# 2. Navigate to the electron directory and install dependencies
cd electron
npm install

# 3. Test the desktop app locally
npm start

# 4. Build the standalone Windows installer (.exe)
npm run build:win
```

### Output:
The setup installer (`.exe`) and portable executable will be generated inside the `dist_electron/` directory.

*Note: Android APK and Windows EXE are two distinct native platform targets built cleanly from the shared HTML/JS web codebase.*

---

## 📂 Project Structure

```
abdullah-portfolio/
├── capacitor.config.json       # Android Capacitor packaging config
├── electron/
│   ├── main.js                 # Electron main background process
│   └── package.json            # Electron packaging scripts & builder config
├── public/
│   └── profile.jpg             # Official profile image asset
├── src/
│   ├── assets/                 # High-resolution media assets
│   ├── components/
│   │   ├── AboutSection.tsx    # Academic background & verified metrics
│   │   ├── CapabilitiesSection.tsx # "What I Can Build" services
│   │   ├── ContactSection.tsx  # Direct communication & interactive form
│   │   ├── DynamicIcon.tsx     # Safe Lucide icon resolver
│   │   ├── EditProfileModal.tsx # Full local storage customization suite
│   │   ├── Footer.tsx          # Identity footer & back-to-top
│   │   ├── HeroSection.tsx     # Display typography & 3D tilt profile
│   │   ├── InteractiveCursor.tsx # Desktop cursor physics
│   │   ├── JourneySection.tsx  # 6-stage interactive developer timeline
│   │   ├── LoadingScreen.tsx   # Cinematic opening sequence
│   │   ├── Navbar.tsx          # Floating glassmorphic header & mobile drawer
│   │   ├── PackagingModal.tsx  # In-app Android APK & Windows EXE documentation
│   │   ├── ProjectsSection.tsx # 6 modular showcase cards & modal
│   │   └── SkillsSection.tsx   # Categorized interactive technical skills
│   ├── data/
│   │   └── portfolioData.ts    # Authentic profile initial state & storage engine
│   ├── types.ts                # TypeScript data interfaces
│   ├── App.tsx                 # Main application controller
│   ├── index.css               # Cyber grid, glassmorphism, theme styling
│   └── main.tsx                # React root entry point
├── index.html                  # HTML5 document & Google Fonts
├── metadata.json               # Application metadata
└── package.json                # Web build dependencies & scripts
```

---

## ⚖️ License
Created for Abdullah Al Mohit. Free to use, adapt, and build upon.
