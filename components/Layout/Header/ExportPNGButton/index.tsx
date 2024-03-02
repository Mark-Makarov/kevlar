"use client";

// react/next.js
import { MutableRefObject } from "react";

// libraries
import { Download } from "lucide-react";

// utilities
import { handleExportPNG } from "@/utilities/export-png";

const ExportPNGButton = ({ codeEditorRef } : { codeEditorRef: MutableRefObject<HTMLDivElement | null> }) => {
    return (
        <div className="export-button self-center ml-auto" onClick={() => handleExportPNG(codeEditorRef)}>
            <button className="flex items-center gap-3 py-2 px-3 rounded-md text-sm bg-blue-400 font-medium
              bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300">
                Экспортировать PNG
                <Download />
            </button>
        </div>
    );
};

export default ExportPNGButton;
