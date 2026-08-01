import Header from "./Header";
import Ribbon from "../ribbon/Ribbon";
import Toolbar from "../toolbar/Toolbar";
import RecordingToolbar from "../recording/RecordingToolbar";
import Sidebar from "../sidebar/Sidebar";
import Editor from "../document/Editor";
import AIPanel from "../ai/AIPanel";
import Footer from "../statusBar/Footer";

export default function MainLayout() {
    return (
        <div className="h-screen flex flex-col bg-gray-100">

            <Header />

            <Ribbon />

            <Toolbar />

            {/* ADD THIS */}
            <RecordingToolbar />

            <div className="flex flex-1 overflow-hidden">

                <Sidebar />

                <main className="flex-1 p-8 bg-gray-200 overflow-auto flex justify-center">
                    <Editor />
                </main>

                <AIPanel />

            </div>

            <Footer />

        </div>
    );
}