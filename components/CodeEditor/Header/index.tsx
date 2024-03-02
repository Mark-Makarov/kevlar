"use client";

// react/next.js
import { useState } from "react";
import Image from "next/image";

interface CodeEditorProps {
    languageIcon: string;
}

const Header = ({
languageIcon,
}: CodeEditorProps) => {
    const [ title, setTitle  ] = useState("Заголовок")

    return (
        <>
            <div className="resize-dots absolute left-1/2 top-[-5px] translate-x-[-50%] w-3 h-3 rounded-full bg-slate-300" />
            <div className="resize-dots absolute left-1/2 bottom-[-5px] w-3 h-3 rounded-full bg-slate-300" />
            <div className="resize-dots absolute top-1/2 left-[-5px] w-3 h-3 rounded-full bg-slate-300" />
            <div className="resize-dots absolute top-1/2 right-[-5px] w-3 h-3 rounded-full bg-slate-300" />
            <div className="editor-title h-[52px] px-4 bg-black bg-opacity-80">
                <div className="dots flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#ff5656]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbc6a]" />
                    <div className="w-3 h-3 rounded-full bg-[#67f772]" />
                </div>
                <div className="input-control w-full">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent px-5 truncate leading-7"
                    />
                </div>
                <div className="language-icon p-1 bg-black bg-opacity-30 rounded-md w-[36px] h-[36px]">
                    <Image
                        objectFit="contain"
                        width={34}
                        height={34}
                        src={languageIcon}
                        alt="language-icon"
                        style={{ borderRadius: "0.25rem" }}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
