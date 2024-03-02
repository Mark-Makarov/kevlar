"use client";

// react/next.js
import { useEffect, useState, forwardRef, Ref } from "react";

// libraries
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// components
import Header from "@/components/CodeEditor/Header";

// styles
import "./style.css"

// themes
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-ambiance"
import "ace-builds/src-noconflict/theme-cloud9_night"
import "ace-builds/src-noconflict/theme-cobalt"
import "ace-builds/src-noconflict/theme-github_dark"
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

interface CodeEditorProps {
    selectedLanguage: string;
    selectedTheme: string;
    languageIcon: string;
    selectedBackground?: string;
    currentPadding?: string;
}

const CodeEditor = forwardRef(({
selectedLanguage,
selectedTheme,
languageIcon,
selectedBackground,
currentPadding,
}: CodeEditorProps , ref: Ref<HTMLDivElement>) => {
    const [ height, setHeight ] = useState<number | null>(500);
    const [ width, setWidth ] = useState(900);
    const [ code, setCode  ] = useState("function() { console.log(\"Hi\") }")

    const handleCodeChange = (nextCode: string) => {
        setCode(nextCode)
    }

    const resizeHandler = (ref: HTMLElement) => {
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
        <div className="code-editor mt-[14rem]" ref={ref}>
            <Resizable
                minHeight={450}
                maxHeight={2000}
                minWidth={550}
                maxWidth={1200}
                defaultSize={{
                    height: height || 500,
                    width
                }}
                onResize={(evt, direction, ref) => resizeHandler(ref)}
                className="resizable-container relative"
                style={{ background: selectedBackground}}
            >
                <div className="editor-container" style={{ padding: currentPadding}}>
                    <Header languageIcon={languageIcon}/>
                    <AceEditor
                        value={code}
                        editorProps={{ $blockScrolling: true }}
                        fontSize={16}
                        theme={selectedTheme}
                        height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
                        mode={selectedLanguage.toLowerCase()}
                        wrapEnabled
                        showPrintMargin={false}
                        showGutter={false}
                        highlightActiveLine={false}
                        className="ace-editor-wrapper"
                        onChange={handleCodeChange}
                    />
                </div>
            </Resizable>
        </div>
    );
});

export default CodeEditor;
