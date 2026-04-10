/**
 * Configuration for AI Voting Service
 * Safely handles environment variables in both server and client
 */

/**
 * Get AI service base URL
 */
export function getAIServiceURL(): string {
  // Default URL
  const defaultURL = 'http://localhost:8000';
  
  // Try to get from environment variable
  // In Next.js, NEXT_PUBLIC_ prefix makes it available in browser
  if (typeof window !== 'undefined') {
    // Client-side: Check window object for injected env vars
    const envURL = (window as any).__NEXT_PUBLIC_AI_SERVICE_URL__;
    if (envURL) return envURL;
    
    // Fallback: try to read from meta tag (if injected by server)
    const metaTag = document.querySelector('meta[name="ai-service-url"]');
    if (metaTag) {
      const content = metaTag.getAttribute('content');
      if (content) return content;
    }
  } else {
    // Server-side: Use process.env
    if (process.env.NEXT_PUBLIC_AI_SERVICE_URL) {
      return process.env.NEXT_PUBLIC_AI_SERVICE_URL;
    }
  }
  
  return defaultURL;
}

export interface AIServiceConfig {
  baseURL: string;
  timeout: number;
  retryAttempts: number;
  endpoints: {
    health: string;
    singleVote: string;
    batchVote: string;
    generateProposal: string;
    generateBatchProposals: string;
  };
}

/**
 * Configuration object
 */
export const aiServiceConfig: AIServiceConfig = {
  baseURL: getAIServiceURL(),
  timeout: 2000, // 2 seconds
  retryAttempts: 1,
  endpoints: {
    health: '/health',
    singleVote: '/vote/single',
    batchVote: '/vote/batch',
    generateProposal: '/proposal/generate',
    generateBatchProposals: '/proposal/generate-batch',
  }
};
