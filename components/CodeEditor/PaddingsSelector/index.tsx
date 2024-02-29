"use client";

// styles
import "./style.css"

interface PaddingsSelectorProps {
    paddings: string[];
    currentPadding: string;
    setCurrentPadding: (language: string) => void;
}

const PaddingsSelector = ({
paddings,
currentPadding,
setCurrentPadding,
}: PaddingsSelectorProps) => {
    const handlePaddingChange = (padding: string) => {
        setCurrentPadding(padding);
    };

    return (
        <div>
            <p className="py-[5px] text-sm font-medium">Отступы</p>
            <div className="flex gap-6">
                {paddings.map((padding) => {
                    return (
                        <button
                            className={`h-[37px] flex items-center justify-center text-sm px-2 rounded-md ${currentPadding === padding && "bg-[#3C3C3C] text-white"}
                                        hover:text-white ease-linear transition-all duration-300`}
                            key={padding}
                            onClick={() => handlePaddingChange(padding)}
                        >
                            {padding}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default PaddingsSelector;
