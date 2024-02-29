"use client";

// react/next.js
import { useState } from "react";

// libraries
import OutsideClickHandler from "react-outside-click-handler";

// constants
import { THEMES } from "@/constants/themes";

// components
import { ChevronDown } from "lucide-react"

interface ThemeSelectorProps {
    selectedTheme: string;
    setSelectedTheme: (theme: string) => void;
}

const ThemeSelector = ({
selectedTheme,
setSelectedTheme,
}: ThemeSelectorProps) => {
    const [ showDropdown, setShowDropdown ] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev)
    };

    const handleThemeChange = (theme: string) => {
        setSelectedTheme(theme);
    };

    return (
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
            <div onClick={toggleDropdown}>
                <p className="py-[5px] text-sm font-medium">Тема</p>
                <div className="dropdown-title capitalize w-[120px] hover:border-white ease-linear transition-all duration-300">
                    {selectedTheme}
                    <ChevronDown />
                </div>
                {showDropdown && (
                    <div className="dropdown-menu w-[120px]">
                        {THEMES.map(({name, alias}) => {
                            return (
                                <div key={name}>
                                    <button
                                        className="dropdown-item text-left hover:text-white ease-linear transition-all duration-300"
                                        onClick={() => handleThemeChange(alias)}
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

export default ThemeSelector;
