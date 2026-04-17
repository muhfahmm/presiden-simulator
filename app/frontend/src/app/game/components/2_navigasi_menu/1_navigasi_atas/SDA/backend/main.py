from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import json

from routes import node_bridge
from logic import flow_logic
from logic.flow_manager import FlowManager

app = FastAPI(title="SDA Resource Map Simulation API")
flow_engine = FlowManager()

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
    return {"message": "SDA Map Backend is running"}

@app.post("/api/v1/node/flow")
async def process_flow(payload: dict):
    """
    Process global resource flow.
    """
    countries_data = payload.get("countriesData", {})
    commodities = payload.get("commodities", {})
    
    results = flow_engine.process_flow(countries_data, commodities)
    return {
        "status": "success",
        "data": results
    }

@app.websocket("/ws/map")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            message = json.loads(data)
            
            # Process using resource flow logic
            # result = flow_logic.calculate_flow(message)
            
            response = {"status": "success", "data": "resource_update_from_cpp_engine"}
            await websocket.send_text(json.dumps(response))
    except WebSocketDisconnect:
        print("Frontend disconnected from SDA backend")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8002)
