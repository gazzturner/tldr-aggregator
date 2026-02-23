# Dev News Aggregator

A simple news aggregator that pulls the latest updates in .NET, AI, and Development from multiple sources.

## Features

- Aggregates news from Hacker News (easily extensible to more sources)
- Auto-categorizes content into .NET, AI, and Development
- Filter by category
- Clean, responsive design
- Real-time updates

## Usage

### With Backend (Recommended - No RSS limits)

1. Install dependencies:
```bash
npm install
```

2. Start the backend server:
```bash
npm start
```

3. Open `index.html` in your browser

The backend runs on `http://localhost:3000` and proxies RSS feeds without the 10-item limit.

### Without Backend (Limited to 10 items per RSS feed)

Simply open `index.html` in your browser. RSS feeds will be limited by the free tier proxy.

## Adding More Sources

Edit `script.js` and add new sources to the `NEWS_SOURCES` array. Each source needs:
- `name`: Display name
- `url`: API endpoint
- `parser`: Function to transform API response into standard format

## Extending

To add more news sources, you can integrate:
- Reddit API (r/dotnet, r/MachineLearning, r/programming)
- Dev.to API
- GitHub Trending
- RSS feeds via a proxy service


## Can You Scrape Sites?

Yes and no - there are limitations:

### Direct Scraping (Browser-based)
- **CORS blocks most direct scraping** from the browser
- Websites need to allow cross-origin requests (most don't)

### Solutions:

1. **Use APIs** (recommended)
   - Hacker News API
   - Reddit JSON API (add `.json` to any Reddit URL)
   - Dev.to API
   - GitHub API

2. **RSS Feeds via Proxy**
   - Use services like `rss2json.com` or `api.rss2json.com`
   - Converts RSS feeds to JSON (bypasses CORS)
   - Example: Microsoft .NET Blog, The Verge, etc.

3. **Build a Simple Backend**
   - Create a Node.js/Python proxy server
   - Server fetches and parses content
   - Your frontend calls your backend (no CORS issues)

4. **Use Existing Aggregator APIs**
   - NewsAPI.org (requires API key)
   - Feedly API
   - Inoreader API

### Quick Start Examples

Uncomment the skeletons in `script.js` to add:
- Dev.to articles
- Reddit posts from r/dotnet, r/MachineLearning, r/programming
- GitHub trending repositories
- RSS feeds via rss2json proxy
