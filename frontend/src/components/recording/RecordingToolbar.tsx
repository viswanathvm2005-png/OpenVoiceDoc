export default function RecordingToolbar() {
    return (
        <div className="bg-white border-b px-6 py-4 flex gap-4">
            <button className="bg-red-600 text-white px-5 py-2 rounded">
                🎤 Start Recording
            </button>

            <button className="bg-gray-700 text-white px-5 py-2 rounded">
                ⏹ Stop
            </button>
        </div>
    );
}