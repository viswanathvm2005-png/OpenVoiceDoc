import { useEffect, useRef, useState } from "react";
import { createSpeechRecognition } from "../services/speechService";

export default function useSpeechRecognition() {
    const recognitionRef = useRef<any>(null);

    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");

    useEffect(() => {
        recognitionRef.current = createSpeechRecognition();

        if (!recognitionRef.current) return;

        recognitionRef.current.onresult = (event: any) => {
            let text = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                text += event.results[i][0].transcript;
            }

            setTranscript((prev) => prev + " " + text);
        };

        recognitionRef.current.onstart = () => setIsListening(true);

        recognitionRef.current.onend = () => setIsListening(false);
    }, []);

    const startListening = () => {
        recognitionRef.current?.start();
    };

    const stopListening = () => {
        recognitionRef.current?.stop();
    };

    return {
        transcript,
        isListening,
        startListening,
        stopListening,
    };
}