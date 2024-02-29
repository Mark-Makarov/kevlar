"use client";

// react/next.js
import { useState} from "react";

// libraries
import OutsideClickHandler from "react-outside-click-handler";

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
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
            <div onClick={toggleDropdown}>
                <p className="py-[5px] text-sm font-medium">Язык</p>
                <div className="dropdown-title capitalize w-[120px] hover:border-white ease-linear transition-all duration-300">
                    {selectedLanguage}
                    <ChevronDown />
                </div>
                {showDropdown && (
                    <div className="dropdown-menu w-[120px]">
                        {LANGUAGES.map(({name}) => {
                            return (
                                <div key={name}>
                                    <button
                                        className="dropdown-item text-left hover:text-white ease-linear transition-all duration-300"
                                        onClick={() => handleLanguageChange(name)}
                                    >
                                        {name}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </OutsideClickHandler>
    );
};

export default LanguageSelector;
