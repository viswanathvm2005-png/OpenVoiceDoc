import { createSpeechRecognition } from "../../services/speechService";

export default function RecordingToolbar() {
    let recognition: any = null;

    const startRecording = () => {
        recognition = createSpeechRecognition();

        if (!recognition) {
            alert("Speech Recognition is not supported.");
            return;
        }

        recognition.onresult = (event: any) => {
            let transcript = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }

            console.log("Transcript:", transcript);
        };

        recognition.start();
    };

    const stopRecording = () => {
        recognition?.stop();
    };

    return (
        <div className="bg-white border-b px-6 py-4 flex gap-4">
            <button
                onClick={startRecording}
                className="bg-red-600 text-white px-5 py-2 rounded"
            >
                🎤 Start Recording
            </button>

            <button
                onClick={stopRecording}
                className="bg-gray-700 text-white px-5 py-2 rounded"
            >
                ⏹ Stop
            </button>
        </div>
    );
}