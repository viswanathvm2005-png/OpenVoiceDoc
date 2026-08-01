import { useEffect } from "react";
import useSpeechRecognition from "../../hooks/useSpeechRecognition";
import { useEditorContext } from "../../context/EditorContext";

export default function RecordingToolbar() {
    const {
        transcript,
        isListening,
        startListening,
        stopListening,
    } = useSpeechRecognition();

    const { editor } = useEditorContext();

    useEffect(() => {
        if (!editor || !transcript) return;

        editor.commands.insertContent(transcript + " ");
    }, [transcript, editor]);

    return (
        <div className="bg-white border-b px-6 py-4 flex gap-4">
            <button
                onClick={startListening}
                className="bg-red-600 text-white px-5 py-2 rounded"
            >
                🎤 {isListening ? "Listening..." : "Start Recording"}
            </button>

            <button
                onClick={stopListening}
                className="bg-gray-700 text-white px-5 py-2 rounded"
            >
                ⏹ Stop
            </button>
        </div>
    );
}