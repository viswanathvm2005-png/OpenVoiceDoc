export const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

export function createSpeechRecognition() {
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.lang = "en-US";

    return recognition;
}