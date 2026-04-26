// PriceUpdateRouter.ts
// Routes real-time price updates from the Commodity Brain to the Frontend UI.

export interface PriceData {
    commodityId: string;
    newPrice: number;
    changePercentage: number;
    trend: "up" | "down" | "stable";
}

class PriceUpdateRouter {
    private static instance: PriceUpdateRouter;
    private listeners: ((data: PriceData) => void)[] = [];

    private constructor() {}

    public static getInstance(): PriceUpdateRouter {
        if (!PriceUpdateRouter.instance) {
            PriceUpdateRouter.instance = new PriceUpdateRouter();
        }
        return PriceUpdateRouter.instance;
    }

    public onPriceUpdate(callback: (data: PriceData) => void) {
        this.listeners.push(callback);
    }

    public broadcast(data: PriceData) {
        this.listeners.forEach(listener => listener(data));
    }
}

export const priceUpdateRouter = PriceUpdateRouter.getInstance();
