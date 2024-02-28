"use client";

// react/next.js imports
import { useState } from "react";

// constants
import { LANGUAGES } from "@/constants/languages"

// components
import { ChevronDown } from "lucide-react"

// styles
import "./style.css"

interface LanguageSelectorProps {
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
    setLanguageIcon: (icon: string) => void;
}

const LanguageSelector = ({
selectedLanguage,
setSelectedLanguage,
setLanguageIcon,
}: LanguageSelectorProps) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(prev => !prev)
    };

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        const iconPath = LANGUAGES.find(({name}) => name === language)?.iconPath

        if (iconPath) {
            setLanguageIcon(iconPath)
        }
    };

    return (
        <div onClick={toggleDropdown}>
            <p className="py-[5px] text-sm font-medium">Lang</p>
            <div className="dropdown-title capitalize w-[120px]">
                {selectedLanguage}
                <ChevronDown />
            </div>
            {showDropdown && (
                <div>
                    asdwd
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
