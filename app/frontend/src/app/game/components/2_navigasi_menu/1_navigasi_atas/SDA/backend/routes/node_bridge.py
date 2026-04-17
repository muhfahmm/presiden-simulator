from fastapi import APIRouter

router = APIRouter()

@router.get("/inventory")
async def get_resource_inventory():
    """Endpoint for Node.js main server to fetch global resource levels"""
    return {"status": "ok", "inventory": {"emas": 1000, "uranium": 50}}

@router.post("/recalculate-prices")
async def recalculate_prices(data: dict):
    """Endpoint for Node.js to trigger global resource price recalculation"""
    return {"message": "Price recalculation triggered", "base": data.get("index")}
