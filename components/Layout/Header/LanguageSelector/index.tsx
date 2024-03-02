"use client";

// constants
import { LANGUAGES } from "@/constants/languages"

// components
import Selector from "@/components/Selector";

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
    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        const iconPath = LANGUAGES.find(({name}) => name === language)?.iconPath

        if (iconPath) {
            setLanguageIcon(iconPath)
        }
    };

    return (
       <Selector
           title="Язык"
           dropdownItems={LANGUAGES}
           selectedItem={selectedLanguage}
           onChangeHandler={handleLanguageChange}
       />
    );
};

export default LanguageSelector;
