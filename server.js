const express = require('express');
const Parser = require('rss-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const parser = new Parser();

// Enable CORS for all origins
app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Ignore favicon requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// RSS feed proxy endpoint
app.get('/api/rss', async (req, res) => {
    const feedUrl = req.query.url;
    const limit = parseInt(req.query.limit) || 50;
    
    if (!feedUrl) {
        return res.status(400).json({ error: 'Missing url parameter' });
    }
    
    try {
        const feed = await parser.parseURL(feedUrl);
        const items = feed.items.slice(0, limit).map(item => ({
            title: item.title,
            description: item.contentSnippet || item.content || '',
            link: item.link,
            pubDate: item.pubDate || item.isoDate,
            author: item.creator || item.author
        }));
        
        res.json({
            title: feed.title,
            description: feed.description,
            items: items
        });
    } catch (error) {
        console.error('Error fetching RSS:', error);
        res.status(500).json({ error: 'Failed to fetch RSS feed' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`RSS proxy server running on http://localhost:${PORT}`);
});
