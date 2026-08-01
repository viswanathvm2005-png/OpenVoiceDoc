export default function AIPanel() {
    return (
        <aside className="w-80 bg-white border-l p-4">
            <h2 className="font-bold mb-4">
                AI Assistant
            </h2>

            <div className="space-y-3">

                <button className="w-full bg-blue-600 text-white py-2 rounded">
                    Correct Grammar
                </button>

                <button className="w-full bg-green-600 text-white py-2 rounded">
                    Summarize
                </button>

                <button className="w-full bg-purple-600 text-white py-2 rounded">
                    Translate
                </button>

            </div>
        </aside>
    );
}