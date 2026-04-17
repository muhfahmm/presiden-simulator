from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import json

from routes import node_bridge
from logic import sim_logic
from logic.drift_manager import DriftManager

app = FastAPI(title="Hubungan Map Simulation API")
drift_engine = DriftManager()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes for Node.js bridge
app.include_router(node_bridge.router, prefix="/api/v1/node", tags=["Node Bridge"])

@app.get("/")
async def root():
    return {"message": "Hubungan Map Backend is running"}

@app.post("/api/v1/node/drift")
async def process_drift(payload: dict):
    """
    Process global diplomatic drift for all countries.
    Expected payload: { "matrix": { ... }, "userCountry": "id" }
    """
    matrix = payload.get("matrix", {})
    user_country = payload.get("userCountry", "indonesia")
    
    updated_matrix = drift_engine.process_matrix(matrix, user_country)
    return {
        "status": "success",
        "matrix": updated_matrix,
        "events": [] # C++ could generate these in a future update
    }

@app.websocket("/ws/map")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            # Receive data from client
            data = await websocket.receive_text()
            message = json.loads(data)
            
            # Process using simulation logic
            # result = sim_logic.process_interaction(message)
            
            # Send update back
            response = {"status": "success", "data": "update_from_cpp_engine"}
            await websocket.send_text(json.dumps(response))
    except WebSocketDisconnect:
        print("Frontend disconnected")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)
