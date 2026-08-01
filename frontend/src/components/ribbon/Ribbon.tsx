export default function Ribbon() {
    return (
        <div className="bg-gray-100 border-b px-6 py-3">
            <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                    New Document
                </button>

                <button className="px-4 py-2 bg-green-600 text-white rounded">
                    Save
                </button>

                <button className="px-4 py-2 bg-gray-700 text-white rounded">
                    Export DOCX
                </button>
            </div>
        </div>
    );
}