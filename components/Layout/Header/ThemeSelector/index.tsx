"use client";

// constants
import { THEMES } from "@/constants/styles";

// components
import Selector from "@/components/Selector";

interface ThemeSelectorProps {
    selectedTheme: string;
    setSelectedTheme: (theme: string) => void;
}

const ThemeSelector = ({
selectedTheme,
setSelectedTheme,
}: ThemeSelectorProps) => {

    const handleThemeChange = (theme: string) => {
        const selectedTheme = THEMES.find((item) => item.name === theme);

        if (selectedTheme) {
            setSelectedTheme(selectedTheme.alias);
        }
    };

    return (
        <Selector
            title="Тема"
            dropdownItems={THEMES}
            selectedItem={selectedTheme}
            onChangeHandler={handleThemeChange}
        />
    );
};

export default ThemeSelector;
