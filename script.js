// News sources configuration
const NEWS_SOURCES = [
    // {
    //     name: 'Hacker News',
    //     url: 'https://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=50',
    //     type: 'api', // 'api' or 'rss'
    //     parser: (data) => data.hits.map(item => ({
    //         title: item.title,
    //         description: item.url || '',
    //         link: item.url || `https://news.ycombinator.com/item?id=${item.objectID}`,
    //         source: 'Hacker News',
    //         date: new Date(item.created_at),
    //         category: categorizeContent(item.title)
    //     })).filter(item => item.link && item.link.startsWith('http'))
    // },
    {
        name: 'TLDR Dev',
        url: 'http://localhost:3000/api/rss?url=https://tldr.tech/api/rss/dev/&limit=50',
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'TLDR Dev',
            date: new Date(item.pubDate),
            category: categorizeContent(item.title + ' ' + item.description)
        }))
    },
    
    {
        name: 'Microsoft .NET Blog',
        url: `${API_BASE_URL}/api/rss?url=https://devblogs.microsoft.com/dotnet/feed/&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Microsoft .NET Blog',
            date: new Date(item.pubDate),
            category: 'dotnet'
        }))
    },
    
    {
        name: 'VS Code Blog',
        url: `${API_BASE_URL}/api/rss?url=https://code.visualstudio.com/feed.xml&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'VS Code Blog',
            date: new Date(item.pubDate),
            category: 'dev'
        }))
    },
    
    {
        name: 'Engineers Codex',
        url: `${API_BASE_URL}/api/rss?url=https://www.engineerscodex.com/rss.xml&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Engineers Codex',
            date: new Date(item.pubDate),
            category: categorizeContent(item.title + ' ' + item.description)
        }))
    },
    
    // AI/ML Sources
    {
        name: 'The Batch (DeepLearning.AI)',
        url: `${API_BASE_URL}/api/rss?url=https://www.deeplearning.ai/the-batch/feed/&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'The Batch',
            date: new Date(item.pubDate),
            category: 'ai'
        }))
    },
    
    {
        name: 'OpenAI Blog',
        url: `${API_BASE_URL}/api/rss?url=https://openai.com/blog/rss/&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'OpenAI Blog',
            date: new Date(item.pubDate),
            category: 'ai'
        }))
    },
    
    {
        name: 'Hugging Face Blog',
        url: `${API_BASE_URL}/api/rss?url=https://huggingface.co/blog/feed.xml&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Hugging Face',
            date: new Date(item.pubDate),
            category: 'ai'
        }))
    },
    
    {
        name: 'AI News',
        url: `${API_BASE_URL}/api/rss?url=https://www.artificialintelligence-news.com/feed/&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'AI News',
            date: new Date(item.pubDate),
            category: 'ai'
        }))
    },
    
    // Development Sources
    {
        name: 'Dev.to',
        url: `${API_BASE_URL}/api/rss?url=https://dev.to/feed&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Dev.to',
            date: new Date(item.pubDate),
            category: categorizeContent(item.title + ' ' + item.description)
        }))
    },
    
    {
        name: 'GitHub Blog',
        url: `${API_BASE_URL}/api/rss?url=https://github.blog/feed/&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'GitHub Blog',
            date: new Date(item.pubDate),
            category: 'dev'
        }))
    },
    
    {
        name: 'Stack Overflow Blog',
        url: `${API_BASE_URL}/api/rss?url=https://stackoverflow.blog/feed/&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Stack Overflow',
            date: new Date(item.pubDate),
            category: 'dev'
        }))
    },
    
    {
        name: 'Martin Fowler',
        url: `${API_BASE_URL}/api/rss?url=https://martinfowler.com/feed.atom&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Martin Fowler',
            date: new Date(item.pubDate),
            category: 'dev'
        }))
    },
    
    {
        name: 'CSS-Tricks',
        url: `${API_BASE_URL}/api/rss?url=https://css-tricks.com/feed/&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'CSS-Tricks',
            date: new Date(item.pubDate),
            category: 'dev'
        }))
    },
    
    // .NET Specific Sources
    {
        name: '.NET Foundation',
        url: `${API_BASE_URL}/api/rss?url=https://dotnetfoundation.org/blog/rss.xml&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: '.NET Foundation',
            date: new Date(item.pubDate),
            category: 'dotnet'
        }))
    },
    
    {
        name: 'Scott Hanselman',
        url: `${API_BASE_URL}/api/rss?url=https://www.hanselman.com/blog/feed/rss&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Scott Hanselman',
            date: new Date(item.pubDate),
            category: 'dotnet'
        }))
    },
    
    {
        name: 'Andrew Lock',
        url: `${API_BASE_URL}/api/rss?url=https://andrewlock.net/rss.xml&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Andrew Lock',
            date: new Date(item.pubDate),
            category: 'dotnet'
        }))
    },
    
    // Tech News Sources
    {
        name: 'Ars Technica',
        url: `${API_BASE_URL}/api/rss?url=https://feeds.arstechnica.com/arstechnica/index&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Ars Technica',
            date: new Date(item.pubDate),
            category: categorizeContent(item.title + ' ' + item.description)
        }))
    },
    
    {
        name: 'The Verge',
        url: `${API_BASE_URL}/api/rss?url=https://www.theverge.com/rss/index.xml&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'The Verge',
            date: new Date(item.pubDate),
            category: categorizeContent(item.title + ' ' + item.description)
        }))
    },
    
    {
        name: 'TechCrunch',
        url: `${API_BASE_URL}/api/rss?url=https://techcrunch.com/feed/&limit=50`,
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'TechCrunch',
            date: new Date(item.pubDate),
            category: categorizeContent(item.title + ' ' + item.description)
        }))
    },
    {
        name: 'TLDR AI',
        url: 'https://api.rss2json.com/v1/api.json?rss_url=https://tldr.tech/api/rss/ai/',
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'TLDR AI',
            date: new Date(item.pubDate),
            category: categorizeContent(item.title + ' ' + item.description)
        }))
    },
    // SKELETON: Add Dev.to API
    {
        name: 'Dev.to',
        url: 'https://dev.to/api/articles?per_page=10&tag=dotnet',
        type: 'api',
        parser: (data) => data.map(item => ({
            title: item.title,
            description: item.description,
            link: item.url,
            source: 'Dev.to',
            date: new Date(item.published_at),
            category: categorizeContent(item.title + ' ' + item.tags)
        }))
    },
    
    // SKELETON: Add Reddit API
    {
        name: 'Reddit - r/dotnet',
        url: 'https://www.reddit.com/r/dotnet/hot.json?limit=10',
        type: 'api',
        parser: (data) => data.data.children.map(item => ({
            title: item.data.title,
            description: item.data.selftext.substring(0, 200),
            link: item.data.url,
            source: 'Reddit r/dotnet',
            date: new Date(item.data.created_utc * 1000),
            category: 'dotnet'
        }))
    },
    
    // SKELETON: Add GitHub Trending (via API)
    {
        name: 'GitHub Trending',
        url: 'https://api.github.com/search/repositories?q=language:csharp&sort=stars&order=desc&per_page=10',
        type: 'api',
        parser: (data) => data.items.map(item => ({
            title: item.full_name,
            description: item.description,
            link: item.html_url,
            source: 'GitHub',
            date: new Date(item.updated_at),
            category: 'dotnet'
        }))
    },
    {
        name: 'Microsoft .NET Blog',
        url: 'https://api.rss2json.com/v1/api.json?rss_url=https://devblogs.microsoft.com/dotnet/feed/',
        type: 'rss',
        parser: (data) => data.items.map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
            link: item.link,
            source: 'Microsoft .NET Blog',
            date: new Date(item.pubDate),
            category: 'dotnet'
        }))
    }
    // SKELETON: RSS Feed via proxy (for scraping sites without APIs)
    // Note: Direct RSS parsing requires a CORS proxy or backend
    // {
    //     name: 'Microsoft .NET Blog',
    //     url: 'https://api.rss2json.com/v1/api.json?rss_url=https://devblogs.microsoft.com/dotnet/feed/&count=50',
    //     type: 'rss',
    //     parser: (data) => data.items.map(item => ({
    //         title: item.title,
    //         description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
    //         link: item.link,
    //         source: 'Microsoft .NET Blog',
    //         date: new Date(item.pubDate),
    //         category: 'dotnet'
    //     }))
    // }
];

// Categorize content based on keywords
function categorizeContent(text) {
    const lower = text.toLowerCase();
    if (lower.includes('.net') || lower.includes('dotnet') || lower.includes('c#') || lower.includes('csharp') || lower.includes('blazor') || lower.includes('asp.net')) {
        return 'dotnet';
    }
    if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('ml') || lower.includes('gpt') || lower.includes('llm') || lower.includes('neural')) {
        return 'ai';
    }
    return 'dev';
}

// Fetch news from all sources
async function fetchNews() {
    const allNews = [];
    const header = document.querySelector('header');
    header.classList.add('loading');
    
    for (const source of NEWS_SOURCES) {
        try {
            const response = await fetch(source.url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            const parsedNews = source.parser(data);
            allNews.push(...parsedNews);
            console.log(`✓ Fetched ${parsedNews.length} items from ${source.name}`);
        } catch (error) {
            console.error(`✗ Error fetching from ${source.name}:`, error.message);
        }
    }
    
    header.classList.remove('loading');
    
    // Sort by date
    return allNews.sort((a, b) => b.date - a.date);
}

// Render news cards
function renderNews(newsItems, categoryFilter = 'all', sourceFilter = 'all', daysBack = 7, searchQuery = '', sortBy = 'date-desc') {
    const container = document.getElementById('news-container');
    
    let filtered = newsItems;
    
    // Apply date filter
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysBack);
    filtered = filtered.filter(item => item.date >= cutoffDate);
    
    // Apply category filter
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(item => item.category === categoryFilter);
    }
    
    // Apply source filter
    if (sourceFilter !== 'all') {
        filtered = filtered.filter(item => item.source === sourceFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery)
        );
    }
    
    // Apply sorting
    switch(sortBy) {
        case 'date-desc':
            filtered.sort((a, b) => b.date - a.date);
            break;
        case 'date-asc':
            filtered.sort((a, b) => a.date - b.date);
            break;
        case 'source':
            filtered.sort((a, b) => {
                const sourceCompare = a.source.localeCompare(b.source);
                return sourceCompare !== 0 ? sourceCompare : b.date - a.date;
            });
            break;
        case 'title':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="loading">No news found for this filter combination</div>';
        return;
    }
    
    container.innerHTML = filtered.map(item => `
        <div class="news-card">
            <span class="category ${item.category}">${item.category.toUpperCase()}</span>
            <h3>${item.title}</h3>
            <p>${item.description ? item.description.substring(0, 150) + '...' : ''}</p>
            <div class="meta">
                <span>${item.source}</span>
                <span>${formatDate(item.date)}</span>
            </div>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    `).join('');
}

// Format date
function formatDate(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
}

// Initialize app
let currentNews = [];
let currentCategoryFilter = 'all';
let currentSourceFilter = 'all';
let currentDateFilter = 7; // days
let currentSearchQuery = '';
let currentSort = 'date-desc';

// Theme toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
    
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggle(newTheme);
    });
}

function updateThemeToggle(theme) {
    const toggle = document.getElementById('theme-toggle');
    const span = toggle.querySelector('span:first-child');
    const icon = toggle.querySelector('.theme-toggle-icon');
    
    if (theme === 'dark') {
        span.textContent = 'Dark Mode';
        icon.textContent = '🌙';
    } else {
        span.textContent = 'Light Mode';
        icon.textContent = '☀️';
    }
}

async function init() {
    initTheme();
    
    currentNews = await fetchNews();
    
    // Populate source filter dropdown
    const sources = ['all', ...new Set(currentNews.map(item => item.source))];
    const sourceSelect = document.getElementById('source-filter');
    sourceSelect.innerHTML = sources.map(source => 
        `<option value="${source}">${source === 'all' ? 'All Sources' : source}</option>`
    ).join('');
    
    renderNews(currentNews);
    
    // Setup category filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategoryFilter = btn.dataset.category;
            renderNews(currentNews, currentCategoryFilter, currentSourceFilter, currentDateFilter, currentSearchQuery, currentSort);
        });
    });
    
    // Setup source filter dropdown
    sourceSelect.addEventListener('change', (e) => {
        currentSourceFilter = e.target.value;
        renderNews(currentNews, currentCategoryFilter, currentSourceFilter, currentDateFilter, currentSearchQuery, currentSort);
    });
    
    // Setup date filter dropdown
    document.getElementById('date-filter').addEventListener('change', (e) => {
        currentDateFilter = parseInt(e.target.value);
        renderNews(currentNews, currentCategoryFilter, currentSourceFilter, currentDateFilter, currentSearchQuery, currentSort);
    });
    
    // Setup search input
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase();
        renderNews(currentNews, currentCategoryFilter, currentSourceFilter, currentDateFilter, currentSearchQuery, currentSort);
    });
    
    // Setup sort dropdown
    document.getElementById('sort-filter').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderNews(currentNews, currentCategoryFilter, currentSourceFilter, currentDateFilter, currentSearchQuery, currentSort);
    });
}

init();
