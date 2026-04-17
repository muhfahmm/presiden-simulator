from fastapi import APIRouter
from . import node_bridge

router = APIRouter()
router.include_router(node_bridge.router)
