export default function Sidebar() {
    return (
        <aside className="w-60 bg-white border-r p-4">
            <h2 className="font-bold mb-4">
                Documents
            </h2>

            <ul className="space-y-2">
                <li className="p-2 rounded bg-blue-100">
                    Legal_Draft.docx
                </li>

                <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                    Contract.docx
                </li>

                <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                    Affidavit.docx
                </li>
            </ul>
        </aside>
    );
}