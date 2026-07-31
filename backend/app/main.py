from fastapi import FastAPI

app = FastAPI(
    title="OpenVoiceDoc",
    description="AI Dictation Assistant for Legal Professionals",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "project": "OpenVoiceDoc",
        "status": "Running",
        "version": "1.0.0"
    }