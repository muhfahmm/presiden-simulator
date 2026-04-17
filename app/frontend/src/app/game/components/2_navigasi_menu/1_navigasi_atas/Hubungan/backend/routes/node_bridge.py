from fastapi import APIRouter

router = APIRouter()

@router.get("/status")
async def get_node_status():
    """Endpoint for Node.js main server to check backend status"""
    return {"status": "connected", "engine": "cpp_active"}

@router.post("/trigger-event")
async def trigger_diplomatic_event(event_data: dict):
    """Endpoint for Node.js to trigger a global diplomatic event"""
    # Logic to process event
    return {"message": "Event triggered successfully", "event": event_data.get("type")}
