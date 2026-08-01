import { createContext, useContext, useState } from "react";
import type { Editor } from "@tiptap/react";

type EditorContextType = {
    editor: Editor | null;
    setEditor: (editor: Editor | null) => void;
};

const EditorContext = createContext<EditorContextType>({
    editor: null,
    setEditor: () => {},
});

export function EditorProvider({
                                   children,
                               }: {
    children: React.ReactNode;
}) {
    const [editor, setEditor] = useState<Editor | null>(null);

    return (
        <EditorContext.Provider value={{ editor, setEditor }}>
            {children}
        </EditorContext.Provider>
    );
}

export function useEditorContext() {
    return useContext(EditorContext);
}