"use client";

// react/next.js
import { useState } from "react";

// libraries
import OutsideClickHandler from "react-outside-click-handler";

// constants
import { BACKGROUND_COLORS } from "@/constants/background-colors";

// components
import { ChevronDown } from "lucide-react"

interface BackgroundSelectorProps {
    selectedBackground: string;
    setSelectedBackground: (theme: string) => void;
}

const BackgroundSelector = ({
selectedBackground,
setSelectedBackground,
}: BackgroundSelectorProps) => {
    const [ showDropdown, setShowDropdown ] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev)
    };

    const handleBackgroundChange = (background: string) => {
        setSelectedBackground(background);
    };

    return (
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
            <div className="background-selector" onClick={toggleDropdown}>
                <p className="py-[5px] text-sm font-medium">Фон</p>
                <div className="dropdown-title w-[62px] hover:border-white ease-linear transition-all duration-300">
                    <div className="rounded-full w-[20px] h-[20px]" style={{ background: selectedBackground }}/>
                    <ChevronDown />
                </div>
                {showDropdown && (
                    <div className="dropdown-menu w-[62px] flex flex-col rounded-full gap-2">
                        {BACKGROUND_COLORS.map((background) => {
                            return (
                                <div
                                    key={background}
                                    className="rounded-full w-[44px] h-[20px] hover: hover:brightness-150 ease-linear transition-all duration-300 cursor-pointer"
                                    style={{ background }}
                                    onClick={() => handleBackgroundChange(background)}
                                 />
                            )
                        })}
                    </div>
                )}
            </div>
        </OutsideClickHandler>
    )
};

export default BackgroundSelector;
