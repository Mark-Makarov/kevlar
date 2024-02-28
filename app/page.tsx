"use client";

// react/next.js imports
import { useState } from "react";

// constants
import { LANGUAGES } from "@/constants/languages"

// components
import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/CodeEditor/LanguageSelector";

export default function Home() {
    const [ selectedLanguage, setSelectedLanguage ] = useState(LANGUAGES[0].name)
    const [ languageIcon, setLanguageIcon ] = useState(LANGUAGES[0].iconPath)

  return (
      <main className="main-container">
          <header className="mt-6 p-5 w-[940px] fixed top-0 left-1/2 translate-x-[-50%] z-10
                            bg-[#191919] rounded border border-[#3C3C3C] shadow-md">
              <LanguageSelector
                  setLanguageIcon={setLanguageIcon}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
              />
          </header>
        <div className="code-editor mt-[14rem]">
            <CodeEditor
                languageIcon={languageIcon}
                selectedLanguage={selectedLanguage}
                onCodeChange={() => {}}
                theme={""}
            />
        </div>
      </main>
  );
}
