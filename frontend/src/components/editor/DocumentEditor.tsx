import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { useEditorContext } from "@/context/EditorContext";

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

        return () => setEditor(null);
    }, [editor, setEditor]);

    if (!editor) return null;

    return (
        <EditorContent editor={editor} />
    );
}