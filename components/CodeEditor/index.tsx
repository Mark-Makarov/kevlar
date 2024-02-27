"use client";

// libraries
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// components


// style
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

const CodeEditor = () => {
    return (
        <Resizable
            minHeight={450}
            maxHeight={700}
            minWidth={550}
            maxWidth={1000}
        >
            <div>
                <AceEditor
                    value={"function() { console.log(\"Hi\") }"}
                    editorProps={{ $blockScrolling: true }}
                    fontSize={16}
                    theme="monokai"
                    mode="javascript"
                    wrapEnabled
                    showPrintMargin={false}
                    showGutter={false}
                    highlightActiveLine={false}
                    className="ace-editor-block"
                />
            </div>
        </Resizable>
    );
};

export default CodeEditor;
