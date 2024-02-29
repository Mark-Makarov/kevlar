"use client";

// react/next.js
import { useState } from "react";

// libraries
import { Download } from "lucide-react";

// constants
import { LANGUAGES } from "@/constants/languages"
import { THEMES } from "@/constants/themes";
import { BACKGROUND_COLORS } from "@/constants/background-colors";

// components
import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/CodeEditor/LanguageSelector";
import ThemeSelector from "@/components/CodeEditor/ThemeSelector";
import BackgroundSelector from "@/components/CodeEditor/BackgroundSelector";
import PaddingsSelector from "@/components/CodeEditor/PaddingsSelector";

export default function Home() {
    const [ selectedLanguage, setSelectedLanguage ] = useState(LANGUAGES[0].name);
    const [ languageIcon, setLanguageIcon ] = useState(LANGUAGES[0].iconPath);
    const [ selectedTheme, setSelectedTheme ] = useState(THEMES[0].alias);
    const [ selectedBackground, setSelectedBackground ] = useState(BACKGROUND_COLORS[0]);
    const [ paddings, _ ] = useState(["1rem", "2rem", "3rem", "4rem"]);
    const [ currentPadding, setCurrentPadding ] = useState(paddings[2]);

  return (
      <main className="main-container">
          <header className="header mt-6 p-5 gap-6 left-1/2 translate-x-[-50%] rounded border shadow-md">
              <LanguageSelector
                  setLanguageIcon={setLanguageIcon}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
              />
              <ThemeSelector
                  selectedTheme={selectedTheme}
                  setSelectedTheme={setSelectedTheme}
              />
              <BackgroundSelector
                  selectedBackground={selectedBackground}
                  setSelectedBackground={setSelectedBackground}
              />
              <PaddingsSelector
                  currentPadding={currentPadding}
                  paddings={paddings}
                  setCurrentPadding={setCurrentPadding}
              />
              <div className="export-button self-center ml-auto">
                  <button className="flex items-center gap-3 py-2 px-3 rounded-md text-sm bg-blue-400 font-medium
                  bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300">
                      Экспортировать PNG
                      <Download />
                  </button>
              </div>
          </header>
        <div className="code-editor mt-[14rem]">
            <CodeEditor
                selectedBackground={selectedBackground}
                languageIcon={languageIcon}
                selectedLanguage={selectedLanguage}
                selectedTheme={selectedTheme}
                currentPadding={currentPadding}
            />
        </div>
      </main>
  );
};
