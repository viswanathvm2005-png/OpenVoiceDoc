export default function DocumentEditor() {
    return (
        <div className="bg-white rounded-lg shadow p-6 min-h-[600px]">
            <h2 className="text-xl font-semibold mb-4">
                📄 Legal Document
            </h2>

            <textarea
                className="w-full h-[500px] border rounded p-4 outline-none resize-none"
                placeholder="Start dictating here..."
            />
        </div>
    );
}