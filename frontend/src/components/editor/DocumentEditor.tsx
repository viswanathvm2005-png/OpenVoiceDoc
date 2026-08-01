import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function DocumentEditor() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: `
      <h1>Legal Document</h1>
      <p>Start dictating here...</p>
    `,
    });

    if (!editor) return null;

    return (
        <div className="bg-white shadow-lg rounded-lg w-[800px] min-h-[1000px] mx-auto p-12">
            <EditorContent editor={editor} />
        </div>
    );
}