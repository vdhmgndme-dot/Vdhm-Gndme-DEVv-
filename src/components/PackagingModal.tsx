import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Smartphone, 
  Monitor, 
  Copy, 
  Check, 
  Terminal, 
  FileCode, 
  Download, 
  Layers, 
  Cpu, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface PackagingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PackagingModal: React.FC<PackagingModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'android' | 'windows'>('android');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const androidCapacitorConfig = `{
  "appId": "com.abdullahalmohit.portfolio",
  "appName": "Abdullah Al Mohit - Developer Portfolio",
  "webDir": "dist",
  "bundledWebRuntime": false,
  "server": {
    "androidScheme": "https"
  }
}`;

  const androidCommands = `# Step 1: Build the optimized web application production assets
npm run build

# Step 2: Install Capacitor CLI & Android Core dependencies
npm install @capacitor/core @capacitor/cli @capacitor/android

# Step 3: Initialize Capacitor project
npx cap init "Abdullah Al Mohit" "com.abdullahalmohit.portfolio" --web-dir=dist

# Step 4: Add native Android platform
npx cap add android

# Step 5: Sync the web build (dist) into the native Android container
npx cap sync

# Step 6: Open Android Studio to build APK or AAB
npx cap open android

# Build Targets in Android Studio:
# For Testing / Direct Phone Install: Build -> Build APK(s) (Outputs .apk)
# For Google Play Store: Build -> Generate Signed Bundle / APK -> Android App Bundle (Outputs .aab)`;

  const windowsElectronMain = `const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 840,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#090d16',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Load the compiled web dist
  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});`;

  const windowsCommands = `# Step 1: Build the production web distribution
npm run build

# Step 2: Install Electron & electron-builder
npm install --save-dev electron electron-builder

# Step 3: Run the desktop app locally for testing
npx electron electron/main.js

# Step 4: Package into a standalone Windows .exe installer
npx electron-builder --win nsis --x64

# Output: Standalone executable (.exe) generated inside the /dist_electron folder!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0c111e] border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.25)] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Multi-Platform Packaging Hub
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Official configurations & steps for Android (APK/AAB) and Windows (.exe)
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

        {/* Platform Selector Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/70 px-6 gap-3">
          <button
            onClick={() => setActiveTab('android')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-mono font-medium border-b-2 transition-all cursor-pointer ${
              activeTab === 'android'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Android (APK & AAB via Capacitor)</span>
          </button>

          <button
            onClick={() => setActiveTab('windows')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-mono font-medium border-b-2 transition-all cursor-pointer ${
              activeTab === 'windows'
                ? 'border-indigo-400 text-indigo-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Windows PC Software (.exe via Electron)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'android' ? (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-3 text-xs font-mono text-cyan-300 leading-relaxed">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Architecture Note:</strong> We use <em>Capacitor</em> to bridge this exact HTML/CSS/JS frontend into native Android Studio projects. This ensures 100% of your animations, profile images, and interactive features run with full hardware acceleration on Android smartphones.
                </div>
              </div>

              {/* Build Commands */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>Terminal Commands (Build APK & AAB)</span>
                  </span>
                  <button
                    onClick={() => handleCopy(androidCommands, 'android-cmd')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                  >
                    {copiedKey === 'android-cmd' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'android-cmd' ? 'Copied' : 'Copy Commands'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre leading-relaxed">
                  {androidCommands}
                </pre>
              </div>

              {/* Capacitor Config */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-cyan-400" />
                    <span>capacitor.config.json</span>
                  </span>
                  <button
                    onClick={() => handleCopy(androidCapacitorConfig, 'cap-config')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                  >
                    {copiedKey === 'cap-config' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'cap-config' ? 'Copied' : 'Copy JSON'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre leading-relaxed">
                  {androidCapacitorConfig}
                </pre>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-start gap-3 text-xs font-mono text-indigo-300 leading-relaxed">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Architecture Note:</strong> We use <em>Electron</em> to package the exact same web source into a native Windows 64-bit desktop executable (<code>.exe</code> or NSIS installer). As requested, Android APK is NOT claimed to directly convert to EXE; rather, the identical HTML/JS core is packaged with Electron.
                </div>
              </div>

              {/* Windows Build Commands */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    <span>Terminal Commands (Build Windows .exe)</span>
                  </span>
                  <button
                    onClick={() => handleCopy(windowsCommands, 'win-cmd')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300"
                  >
                    {copiedKey === 'win-cmd' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'win-cmd' ? 'Copied' : 'Copy Commands'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre leading-relaxed">
                  {windowsCommands}
                </pre>
              </div>

              {/* electron/main.js */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-indigo-400" />
                    <span>electron/main.js</span>
                  </span>
                  <button
                    onClick={() => handleCopy(windowsElectronMain, 'win-main')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300"
                  >
                    {copiedKey === 'win-main' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'win-main' ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre leading-relaxed">
                  {windowsElectronMain}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Target Outputs: APK, AAB, and Windows .exe</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold cursor-pointer"
          >
            Done
          </button>
        </div>

      </motion.div>
    </div>
  );
};
