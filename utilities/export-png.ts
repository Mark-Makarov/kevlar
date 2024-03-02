// react/next.js
import { MutableRefObject } from "react";

// libraries
import html2canvas from "html2canvas";


const _hideElementsBeforeExport = (codeEditorElement: HTMLDivElement) => {
    const resizeDots = codeEditorElement.querySelectorAll(".resize-dots");
    resizeDots.forEach((elem) => {
        const htmlElement = elem as HTMLElement;
        htmlElement.style.display = "none";
        setTimeout(() => htmlElement.style.display = "block", 0);
    });

    const editorCaret = codeEditorElement.querySelector(".ace_cursor") as HTMLElement;
    editorCaret.style.display = "none";
    setTimeout(() => editorCaret.style.display = "block", 0);

    const editorBrackets = codeEditorElement.querySelectorAll(".ace_bracket");
    editorBrackets.forEach((elem) => {
        const htmlElement = elem as HTMLElement;
        htmlElement.style.display = "none";
        setTimeout(() => htmlElement.style.display = "block", 0);
    });
};

const _downloadPNG = (png: string) => {
    const downloadLink = document.createElement("a");
    downloadLink.download = "code.png";
    downloadLink.href = png;
    downloadLink.click();
};

const _convertHtmlToPNG = async (codeEditorElement: HTMLDivElement): Promise<string> => {
    const canvas = await html2canvas(codeEditorElement);
    return canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
};

export const handleExportPNG = async (codeEditorRef: MutableRefObject<HTMLDivElement | null>) => {
    const codeEditorElement = codeEditorRef.current;

    if (codeEditorElement) {
        _hideElementsBeforeExport(codeEditorElement)

        const exportedPNG = await _convertHtmlToPNG(codeEditorElement);

        _downloadPNG(exportedPNG)
    }
};
