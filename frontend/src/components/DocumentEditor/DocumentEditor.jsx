import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function DocumentEditor() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "<p>Start dictating here...</p>",
    });

    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                minHeight: "500px",
                padding: "20px",
                marginTop: "20px",
            }}
        >
            <EditorContent editor={editor} />
        </div>
    );
}

export default DocumentEditor;