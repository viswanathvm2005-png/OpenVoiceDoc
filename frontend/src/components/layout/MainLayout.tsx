import Header from "./Header";
import Ribbon from "../ribbon/Ribbon";
import RecordingToolbar from "../recording/RecordingToolbar";
import DocumentEditor from "../editor/DocumentEditor";
import StatusBar from "../status/StatusBar";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />
            <Ribbon />
            <RecordingToolbar />

            <main className="flex-1 p-6">
                <DocumentEditor />
            </main>

            <StatusBar />
        </div>
    );
}