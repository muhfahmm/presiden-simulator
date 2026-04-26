// NewsRouter.ts
// Router service for delivering real-time news from the engine to the frontend.

export interface NewsItem {
    id: string;
    title: string;
    content: string;
    impact: "positive" | "negative" | "neutral";
    timestamp: number;
}

class NewsRouter {
    private static instance: NewsRouter;
    private subscribers: ((news: NewsItem) => void)[] = [];

    private constructor() {}

    public static getInstance(): NewsRouter {
        if (!NewsRouter.instance) {
            NewsRouter.instance = new NewsRouter();
        }
        return NewsRouter.instance;
    }

    public subscribe(callback: (news: NewsItem) => void) {
        this.subscribers.push(callback);
    }

    public routeNews(news: NewsItem) {
        console.log(`Routing news: ${news.title}`);
        this.subscribers.forEach(sub => sub(news));
    }
}

export const newsRouter = NewsRouter.getInstance();
