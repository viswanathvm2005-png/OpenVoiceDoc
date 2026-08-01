import {
    createContext,
    useContext,
    useMemo,
    useState,
    ReactNode,
} from "react";
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
    children: ReactNode;
}) {
    const [editor, setEditor] = useState<Editor | null>(null);

    const value = useMemo(
        () => ({
            editor,
            setEditor,
        }),
        [editor]
    );

    return (
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    );
}

export function useEditorContext() {
    return useContext(EditorContext);
}