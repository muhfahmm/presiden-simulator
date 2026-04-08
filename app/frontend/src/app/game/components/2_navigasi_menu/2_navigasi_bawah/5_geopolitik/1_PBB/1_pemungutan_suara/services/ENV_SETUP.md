# Environment Variable Setup

## Problem Fixed

Error: `Cannot find name 'process'` - This occurs because `process.env` is not available in browser environment.

## Solution

We've implemented a safe configuration system that works in both server and client environments.

## Setup Instructions

### Option 1: Using .env.local (Recommended)

1. Create `.env.local` file in `app/frontend/` directory:

```bash
# app/frontend/.env.local
NEXT_PUBLIC_AI_SERVICE_URL=http://localhost:8000
```

2. Restart Next.js dev server:

```bash
npm run dev
```

### Option 2: Using Default Configuration

If you don't set the environment variable, the system will use the default URL: `http://localhost:8000`

No additional configuration needed!

### Option 3: Runtime Configuration (Advanced)

For dynamic configuration, you can inject the URL at runtime:

```typescript
// In your app initialization
if (typeof window !== 'undefined') {
  (window as any).__NEXT_PUBLIC_AI_SERVICE_URL__ = 'http://your-custom-url:8000';
}
```

## How It Works

### config.ts
```typescript
export function getAIServiceURL(): string {
  // 1. Try browser environment (window object)
  if (typeof window !== 'undefined') {
    return (window as any).__NEXT_PUBLIC_AI_SERVICE_URL__ || 'http://localhost:8000';
  }
  
  // 2. Try server environment (process.env)
  if (process.env.NEXT_PUBLIC_AI_SERVICE_URL) {
    return process.env.NEXT_PUBLIC_AI_SERVICE_URL;
  }
  
  // 3. Fallback to default
  return 'http://localhost:8000';
}
```

### aiVotingService.ts
```typescript
import { aiServiceConfig } from './config';

class AIVotingService {
  constructor() {
    this.baseURL = aiServiceConfig.baseURL; // Safe access
  }
}
```

## Verification

### Check Current Configuration

```typescript
import { aiServiceConfig } from './services/config';

console.log('AI Service URL:', aiServiceConfig.baseURL);
console.log('Timeout:', aiServiceConfig.timeout);
```

### Test Connection

```typescript
import { aiVotingService } from './services/aiVotingService';

const isAvailable = await aiVotingService.refreshServiceStatus();
console.log('AI Service Available:', isAvailable);
```

## Environment Variables Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| NEXT_PUBLIC_AI_SERVICE_URL | No | http://localhost:8000 | AI service base URL |

## Important Notes

### NEXT_PUBLIC_ Prefix

In Next.js, environment variables with `NEXT_PUBLIC_` prefix are:
- ✅ Available in browser
- ✅ Available in server
- ✅ Embedded at build time

Variables without this prefix are:
- ❌ NOT available in browser
- ✅ Available in server only

### Security

- ✅ Safe to expose AI service URL (it's a local service)
- ❌ Never expose API keys or secrets with NEXT_PUBLIC_ prefix
- ✅ Use server-only env vars for sensitive data

## Troubleshooting

### Error: Cannot find name 'process'

**Cause:** Trying to access `process.env` directly in browser code.

**Solution:** Use our config system:
```typescript
import { aiServiceConfig } from './services/config';
// Use aiServiceConfig.baseURL instead of process.env.NEXT_PUBLIC_AI_SERVICE_URL
```

### AI Service Not Connecting

**Check:**
1. AI service is running: `curl http://localhost:8000/health`
2. Environment variable is set correctly
3. Next.js dev server was restarted after adding .env.local
4. No CORS issues (check browser console)

**Debug:**
```typescript
console.log('Config:', aiServiceConfig);
console.log('Service Available:', aiVotingService.isAvailable());
```

### Environment Variable Not Loading

**Solutions:**
1. Restart Next.js dev server
2. Check .env.local file location (must be in `app/frontend/`)
3. Check variable name has `NEXT_PUBLIC_` prefix
4. Clear Next.js cache: `rm -rf .next`

## Production Deployment

### Vercel / Netlify

Add environment variable in dashboard:
- Key: `NEXT_PUBLIC_AI_SERVICE_URL`
- Value: `https://your-ai-service.com`

### Docker

```dockerfile
ENV NEXT_PUBLIC_AI_SERVICE_URL=http://ai-service:8000
```

### Manual Build

```bash
NEXT_PUBLIC_AI_SERVICE_URL=http://production-url:8000 npm run build
```

## Testing

### Test with Different URLs

```typescript
// Test with local service
aiServiceConfig.baseURL = 'http://localhost:8000';

// Test with production service
aiServiceConfig.baseURL = 'https://api.example.com';

// Test fallback mode
aiServiceConfig.baseURL = 'http://invalid-url';
```

## Related Files

- `config.ts` - Configuration management
- `aiVotingService.ts` - AI service client
- `.env.local.example` - Example environment file
- `README.md` - Services documentation

---

**Status:** ✅ Fixed
**Last Updated:** 2024
