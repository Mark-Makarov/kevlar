"use client";

// react/next.js
import { useState} from "react";

// libraries
import OutsideClickHandler from "react-outside-click-handler";

// components
import { ChevronDown } from "lucide-react"

// styles
import "./style.css"

type DropdownItem = {
    name: string;
}

interface SelectorProps {
    selectedItem: string;
    title: string;
    dropdownItems: DropdownItem[];
    onChangeHandler: (item: string) => void;
}

const Selector = ({
selectedItem,
title,
dropdownItems,
onChangeHandler,
}: SelectorProps) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev)
    };

    return (
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
            <div onClick={toggleDropdown}>
                <p className="py-[5px] text-sm font-medium">{title}</p>
                <div className="dropdown-title capitalize text-nowrap w-[120px] hover:border-white ease-linear transition-all duration-300">
                    {selectedItem}
                    <ChevronDown />
                </div>
                {showDropdown && (
                    <div className="dropdown-menu w-[120px]">
                        {dropdownItems.map(({name}) => {
                            return (
                                <div key={name}>
                                    <button
                                        className="dropdown-item text-left hover:text-white ease-linear transition-all duration-300"
                                        onClick={() => onChangeHandler(name)}
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

export default Selector;
