import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEditorContext } from "../../context/EditorContext";

export default function DocumentEditor() {
    const { setEditor } = useEditorContext();

    const editor = useEditor({
        extensions: [StarterKit],
        content: `
            <h1>Legal Document</h1>
            <p>Start dictating here...</p>
        `,
    });

    useEffect(() => {
        if (editor) {
            setEditor(editor);
        }

        return () => {
            setEditor(null);
        };
    }, [editor, setEditor]);

    if (!editor) return null;

    return (
        <div className="bg-white shadow-lg rounded-lg w-[800px] min-h-[1000px] mx-auto p-12">
            <EditorContent editor={editor} />
        </div>
    );
}