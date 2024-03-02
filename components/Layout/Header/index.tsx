"use client";

// react/next.js
import { MutableRefObject } from "react";

// components
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import BackgroundSelector from "./BackgroundSelector";
import PaddingsSelector from "./PaddingsSelector";
import ExportPNGButton from "@/components/Layout/Header/ExportPNGButton";

interface HeaderProps {
    setLanguageIcon: (iconPath: string) => void;
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
    selectedTheme: string;
    setSelectedTheme: (theme: string) => void;
    selectedBackground: string;
    setSelectedBackground: (background: string) => void;
    currentPadding: string;
    setCurrentPadding: (language: string) => void;
    codeEditorRef: MutableRefObject<HTMLDivElement | null>;
}

const Header = ({
currentPadding,
selectedBackground,
selectedLanguage,
setCurrentPadding,
selectedTheme,
setLanguageIcon,
setSelectedBackground,
setSelectedTheme,
setSelectedLanguage,
codeEditorRef,
}: HeaderProps) => {

    return (
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
                setCurrentPadding={setCurrentPadding}
            />
            <ExportPNGButton codeEditorRef={codeEditorRef} />
        </header>
    );
};

export default Header;
