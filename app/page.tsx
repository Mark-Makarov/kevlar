"use client";

// react/next.js
import { useRef, useState } from "react";

// constants
import { LANGUAGES } from "@/constants/languages"
import { THEMES, BACKGROUND_COLORS } from "@/constants/styles";

// components
import Header from "@/components/Layout/Header";
import CodeEditor from "@/components/CodeEditor";
import Footer from "@/components/Layout/Footer";

export default function Home() {
    const [ selectedLanguage, setSelectedLanguage ] = useState(LANGUAGES[0].name);
    const [ languageIcon, setLanguageIcon ] = useState(LANGUAGES[0].iconPath);
    const [ selectedTheme, setSelectedTheme ] = useState(THEMES[0].alias);
    const [ selectedBackground, setSelectedBackground ] = useState(BACKGROUND_COLORS[0]);
    const [ currentPadding, setCurrentPadding ] = useState("3rem");
    const codeEditorRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="main-container">
        <Header
            setLanguageIcon={setLanguageIcon}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
            selectedBackground={selectedBackground}
            setSelectedBackground={setSelectedBackground}
            currentPadding={currentPadding}
            setCurrentPadding={setCurrentPadding}
            codeEditorRef={codeEditorRef}
        />
        <CodeEditor
            selectedBackground={selectedBackground}
            languageIcon={languageIcon}
            selectedLanguage={selectedLanguage}
            selectedTheme={selectedTheme}
            currentPadding={currentPadding}
            ref={codeEditorRef}
        />
        <Footer />
    </main>
  );
};
