function App() {
  return (
      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h1>🎙️ OpenVoiceDoc</h1>

        <h3>AI Dictation Assistant for Legal Professionals</h3>

        <hr />

        <button>🎤 Start Recording</button>

        <button style={{ marginLeft: "10px" }}>
          ⏹ Stop Recording
        </button>

        <br />
        <br />

        <textarea
            rows={20}
            cols={100}
            placeholder="Your live transcript will appear here..."
        />

        <br />
        <br />

        <button>📄 Export DOCX</button>
      </div>
  );
}

export default App;