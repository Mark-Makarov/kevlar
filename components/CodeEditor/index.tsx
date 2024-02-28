"use client";

// libraries
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// styles
import "./style.css"

// themes
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-ambiance"
import "ace-builds/src-noconflict/theme-cloud9_night"
import "ace-builds/src-noconflict/theme-cobalt"
import "ace-builds/src-noconflict/theme-github_dark"
import "ace-builds/src-noconflict/theme-chrome"
import "ace-builds/src-noconflict/theme-clouds_midnight"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-xcode"
import "ace-builds/src-noconflict/theme-one_dark"

// languages highlights
import "ace-builds/src-noconflict/mode-typescript"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-golang"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-rust"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-c_cpp"
import {useEffect, useState} from "react";

interface CodeEditorProps {
    onCodeChange: (code: string) => void;
    selectedLanguage: string;
    theme: string;
    languageIcon: string;
    background?: string;
    currentPadding?: string;
}

const CodeEditor = ({
onCodeChange,
selectedLanguage,
theme,
languageIcon,
background,
currentPadding,
}: CodeEditorProps) => {
    const [height, setHeight] = useState<number | null>(500);
    const [width, setWidth] = useState(800);

    // @ts-ignore
    const resizeHandler = (evt, direction, ref, pos) => {
        const currentHeight = parseInt(ref.style.height);
        setHeight(currentHeight)
    }

    useEffect(() => {
        const updateInnerWidth = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", updateInnerWidth)

        return () => window.removeEventListener("resize", updateInnerWidth)
    }, [])

    return (
        <Resizable
            minHeight={450}
            maxHeight={700}
            minWidth={550}
            maxWidth={1000}
            defaultSize={{
                height: height || 500,
                width
            }}
            onResize={resizeHandler}
            className="resizable-container relative"
        >
            <div className="editor-container">
                <div className="editor-title h-[52px] px-4 bg-black bg-opacity-80">
                    <div className="dots flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-[#ff5656]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbc6a]" />
                        <div className="w-3 h-3 rounded-full bg-[#67f772]" />
                    </div>
                    <div className="input-control w-full">
                        <input type="text" className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent" />
                    </div>
                    <div className="language-icon p-1 bg-black bg-opacity-30 rounded-sm w-full">
                        <img className="w-[35px]" src={languageIcon} alt="language-icon"/>
                    </div>
                </div>
                <AceEditor
                    value={"function() { console.log(\"Hi\") }"}
                    editorProps={{ $blockScrolling: true }}
                    fontSize={16}
                    theme="monokai"
                    mode={selectedLanguage.toLowerCase()}
                    wrapEnabled
                    showPrintMargin={false}
                    showGutter={false}
                    highlightActiveLine={false}
                    className="ace-editor-wrapper"
                />

            </div>
        </Resizable>
    );
};

export default CodeEditor;
