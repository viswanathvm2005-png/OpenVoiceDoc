import DocumentEditor from "../editor/DocumentEditor";

export default function Editor() {
    return (
        <div className="bg-white rounded-xl shadow-xl w-[800px] min-h-[1000px] p-12">
            <DocumentEditor />
        </div>
    );
}