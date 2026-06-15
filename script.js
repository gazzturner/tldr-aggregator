import API_BASE_URL from './config.js';

// Helper to build a proxied RSS URL
const rss = (feed, limit = 50) =>
    `${API_BASE_URL}/api/rss?url=${feed}&limit=${limit}`;

// =====================================================
// NEWS SOURCES
// Each source: { name, url, format, category, weight }
//   format:   'rss' | 'hn' | 'devto'
//   category: 'core' | 'dotnet' | 'ai' | 'engineering' | 'releases' | 'community'
//   weight:   0-100 editorial quality score used for ranking
// =====================================================
const NEWS_SOURCES = [
    // ===== CORE DEVELOPMENT =====
    { name: 'TLDR Dev',               url: rss('https://tldr.tech/api/rss/dev/'),                 format: 'rss', category: 'core', weight: 80 },
    { name: 'VS Code Blog',           url: rss('https://code.visualstudio.com/feed.xml'),         format: 'rss', category: 'core', weight: 80 },
    { name: 'Engineers Codex',        url: rss('https://www.engineerscodex.com/rss.xml'),         format: 'rss', category: 'core', weight: 78 },
    { name: 'GitHub Blog',            url: rss('https://github.blog/feed/'),                      format: 'rss', category: 'core', weight: 85 },
    { name: 'Martin Fowler',          url: rss('https://martinfowler.com/feed.atom'),             format: 'rss', category: 'core', weight: 95 },
    { name: 'Ars Technica',           url: rss('https://feeds.arstechnica.com/arstechnica/index'),format: 'rss', category: 'core', weight: 70 },
    { name: 'InfoQ',                  url: rss('https://feed.infoq.com/'),                        format: 'rss', category: 'core', weight: 90 },
    { name: 'The Pragmatic Engineer', url: rss('https://blog.pragmaticengineer.com/rss/'),        format: 'rss', category: 'core', weight: 95 },
    { name: 'ByteByteGo',             url: rss('https://blog.bytebytego.com/feed'),               format: 'rss', category: 'core', weight: 90 },
    { name: 'Xe Iaso',                url: rss('https://xeiaso.net/blog.rss'),                    format: 'rss', category: 'core', weight: 82 },
    { name: 'Increment Magazine',     url: rss('https://increment.com/feed.xml'),                 format: 'rss', category: 'core', weight: 78 },

    // ===== .NET =====
    { name: 'Microsoft .NET Blog',    url: rss('https://devblogs.microsoft.com/dotnet/feed/'),    format: 'rss', category: 'dotnet', weight: 100 },
    { name: 'Microsoft DevBlogs',     url: rss('https://devblogs.microsoft.com/feed/'),           format: 'rss', category: 'dotnet', weight: 85 },
    { name: 'Scott Hanselman',        url: rss('https://www.hanselman.com/blog/feed/rss'),        format: 'rss', category: 'dotnet', weight: 90 },
    { name: 'Andrew Lock',            url: rss('https://andrewlock.net/rss.xml'),                 format: 'rss', category: 'dotnet', weight: 95 },
    { name: 'Nick Chapsas',           url: rss('https://nickchapsas.com/rss'),                    format: 'rss', category: 'dotnet', weight: 90 },
    { name: 'Khalid Abuhakmeh',       url: rss('https://khalidabuhakmeh.com/feed.xml'),           format: 'rss', category: 'dotnet', weight: 82 },
    { name: 'Jimmy Bogard',           url: rss('https://jimmybogard.com/rss'),                    format: 'rss', category: 'dotnet', weight: 90 },
    { name: 'Steve Gordon',           url: rss('https://www.stevejgordon.co.uk/feed'),            format: 'rss', category: 'dotnet', weight: 85 },
    { name: 'Maoni Stephens',         url: rss('https://maoni0.medium.com/feed'),                 format: 'rss', category: 'dotnet', weight: 90 },
    { name: 'JetBrains .NET Blog',    url: rss('https://blog.jetbrains.com/dotnet/feed/'),        format: 'rss', category: 'dotnet', weight: 85 },

    // ===== AI =====
    { name: 'Anthropic News',         url: rss('https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_anthropic_news.xml'), format: 'rss', category: 'ai', weight: 100 },
    { name: 'Google AI Blog',         url: rss('https://blog.google/technology/ai/rss/'),         format: 'rss', category: 'ai', weight: 90 },
    { name: 'Hugging Face Blog',      url: rss('https://huggingface.co/blog/feed.xml'),           format: 'rss', category: 'ai', weight: 85 },
    { name: 'Simon Willison',         url: rss('https://simonwillison.net/atom/everything/'),     format: 'rss', category: 'ai', weight: 95 },
    { name: 'Simon Willison Links',   url: rss('https://simonwillison.net/atom/links/'),          format: 'rss', category: 'ai', weight: 88 },
    { name: 'Ahead of AI',            url: rss('https://magazine.sebastianraschka.com/feed'),     format: 'rss', category: 'ai', weight: 90 },
    { name: 'MIT Tech Review AI',     url: rss('https://www.technologyreview.com/topic/artificial-intelligence/feed'), format: 'rss', category: 'ai', weight: 82 },
    { name: 'TLDR AI',                url: rss('https://tldr.tech/api/rss/ai/'),                  format: 'rss', category: 'ai', weight: 80 },

    // ===== ENGINEERING =====
    { name: 'Anthropic Engineering',  url: rss('https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_anthropic_engineering.xml'), format: 'rss', category: 'engineering', weight: 92 },
    { name: 'Cloudflare Blog',        url: rss('https://blog.cloudflare.com/rss/'),               format: 'rss', category: 'engineering', weight: 90 },
    { name: 'GitHub Engineering',     url: rss('https://github.blog/engineering/feed/'),          format: 'rss', category: 'engineering', weight: 88 },

    // ===== RELEASES =====
    { name: '.NET Runtime Releases',  url: rss('https://github.com/dotnet/runtime/releases.atom', 20),          format: 'rss', category: 'releases', weight: 92 },
    { name: 'ASP.NET Core Releases',  url: rss('https://github.com/dotnet/aspnetcore/releases.atom', 20),       format: 'rss', category: 'releases', weight: 92 },

    // ===== COMMUNITY =====
    // Reddit routed through the RSS proxy to avoid browser CORS issues
    { name: 'Reddit r/dotnet',        url: rss('https://www.reddit.com/r/dotnet/hot/.rss', 25),    format: 'rss',   category: 'community', weight: 75 },
    { name: 'Reddit r/LocalLLaMA',    url: rss('https://www.reddit.com/r/LocalLLaMA/hot/.rss', 25),format: 'rss',   category: 'community', weight: 75 },
    { name: 'Dev.to',                 url: 'https://dev.to/api/articles?per_page=15&tag=dotnet',   format: 'devto', category: 'community', weight: 60 },
    { name: 'Hacker News',            url: 'https://hn.algolia.com/api/v1/search?tags=front_page', format: 'hn',    category: 'community', weight: 75 },
];


// Display labels for category badges
const CATEGORY_LABELS = {
    core: 'Core',
    dotnet: '.NET',
    ai: 'AI',
    engineering: 'Eng',
    releases: 'Release',
    community: 'Community'
};

// Strip HTML tags and trim to a readable snippet
function cleanText(str) {
    return (str || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

// Convert a raw feed payload into normalized article objects
function parseItems(data, source) {
    let raw = [];

    switch (source.format) {
        case 'rss':
            raw = (data.items || []).map(i => ({
                title: cleanText(i.title),
                description: cleanText(i.description || i.contentSnippet || i.content),
                link: i.link,
                date: new Date(i.pubDate || i.isoDate)
            }));
            break;

        case 'hn':
            raw = (data.hits || []).map(i => ({
                title: cleanText(i.title),
                description: i.url || '',
                link: i.url || `https://news.ycombinator.com/item?id=${i.objectID}`,
                date: new Date(i.created_at)
            }));
            break;

        case 'devto':
            raw = (data || []).map(i => ({
                title: cleanText(i.title),
                description: cleanText(i.description),
                link: i.url,
                date: new Date(i.published_at)
            }));
            break;
    }

    return raw
        .filter(i => i.title && i.link && !isNaN(i.date))
        .map(i => ({
            ...i,
            source: source.name,
            category: source.category,
            weight: source.weight
        }));
}

// =====================================================
// DEDUPLICATION
// Two-pass approach:
//   Pass 1 — exact URL match (canonical + trailing-slash normalised)
//   Pass 2 — fuzzy title match via Jaccard word overlap
//
// When a duplicate is found, we keep whichever item has the higher
// source weight so the best attribution wins (e.g. original blog
// beats a TLDR summary of the same article).
// =====================================================
function normalizeUrl(url) {
    return (url || '').trim().toLowerCase().replace(/\/$/, '');
}

function normalizeTitle(title) {
    return (title || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

// Jaccard similarity on word sets — order-agnostic, handles
// "OpenAI releases GPT-5" vs "GPT-5 released by OpenAI" well.
function titleSimilarity(a, b) {
    const wordsA = new Set(normalizeTitle(a).split(' ').filter(w => w.length > 2));
    const wordsB = new Set(normalizeTitle(b).split(' ').filter(w => w.length > 2));
    if (wordsA.size === 0 || wordsB.size === 0) return 0;
    const intersection = [...wordsA].filter(w => wordsB.has(w)).length;
    const union = new Set([...wordsA, ...wordsB]).size;
    return intersection / union;
}

// Merge b into a, keeping the highest-weight source attribution.
// If weights are equal, keep whichever was seen first (a).
function mergeItems(a, b) {
    return b.weight > a.weight ? { ...b, _dupeOf: a.source } : { ...a, _dupeOf: b.source };
}

function deduplicateNews(items, similarityThreshold = 0.75) {
    // --- Pass 1: exact URL dedup ---
    const byUrl = new Map();
    for (const item of items) {
        const key = normalizeUrl(item.link);
        if (!key) continue;
        if (byUrl.has(key)) {
            byUrl.set(key, mergeItems(byUrl.get(key), item));
        } else {
            byUrl.set(key, item);
        }
    }
    const urlDeduped = [...byUrl.values()];

    // --- Pass 2: fuzzy title dedup ---
    // O(n²) but fine at typical aggregator scale (~500-800 items).
    const result = [];
    for (const item of urlDeduped) {
        const dupeIndex = result.findIndex(existing =>
            titleSimilarity(item.title, existing.title) >= similarityThreshold);
        if (dupeIndex === -1) {
            result.push(item);
        } else {
            result[dupeIndex] = mergeItems(result[dupeIndex], item);
        }
    }

    const removed = items.length - result.length;
    if (removed > 0) console.log(`🔁 Deduplication removed ${removed} items (${items.length} → ${result.length})`);
    return result;
}

// Recommended ranking: editorial weight blended with recency decay.
// Fresh items get up to +40; the bonus halves roughly every ~33h.
function rankScore(item) {
    const ageHours = Math.max(0, (Date.now() - item.date.getTime()) / 3.6e6);
    const recencyBonus = 40 * Math.exp(-ageHours / 48);
    return (item.weight ?? 50) + recencyBonus;
}

// Fetch news from all sources (in parallel)
async function fetchNews() {
    const header = document.querySelector('header');
    header.classList.add('loading');

    const results = await Promise.all(NEWS_SOURCES.map(async (source) => {
        try {
            const response = await fetch(source.url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            const items = parseItems(data, source);
            console.log(`✓ ${items.length} items from ${source.name}`);
            return items;
        } catch (error) {
            console.error(`✗ Error fetching from ${source.name}:`, error.message);
            return [];
        }
    }));

    header.classList.remove('loading');

    // Collapse duplicates across sources, then rank
    const deduped = deduplicateNews(results.flat());
    return deduped.sort((a, b) => rankScore(b) - rankScore(a));
}

// Render news cards
function renderNews(newsItems, categories = new Set(), sourceFilter = 'all', daysBack = 7, searchQuery = '', sortBy = 'recommended') {
    const container = document.getElementById('news-container');

    let filtered = newsItems;

    // Date filter — floor cutoff to start-of-day so "Last N days" is
    // calendar-based. Otherwise a midnight-timestamped item (common in
    // many feeds) drops out of the window partway through the day.
    const cutoffDate = new Date();
    cutoffDate.setHours(0, 0, 0, 0);
    cutoffDate.setDate(cutoffDate.getDate() - (daysBack - 1));
    filtered = filtered.filter(item => item.date >= cutoffDate);

    // Category filter (multi-select: empty set = show all)
    if (categories.size > 0) {
        filtered = filtered.filter(item => categories.has(item.category));
    }

    // Source filter
    if (sourceFilter !== 'all') {
        filtered = filtered.filter(item => item.source === sourceFilter);
    }

    // Search filter
    if (searchQuery) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery)
        );
    }

    // Sorting
    switch (sortBy) {
        case 'recommended':
            filtered.sort((a, b) => rankScore(b) - rankScore(a));
            break;
        case 'date-desc':
            filtered.sort((a, b) => b.date - a.date);
            break;
        case 'date-asc':
            filtered.sort((a, b) => a.date - b.date);
            break;
        case 'source':
            filtered.sort((a, b) => {
                const cmp = a.source.localeCompare(b.source);
                return cmp !== 0 ? cmp : b.date - a.date;
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
        <a class="news-card" href="${item.link}" target="_blank" rel="noopener noreferrer">
            <span class="category ${item.category}">${CATEGORY_LABELS[item.category] || item.category}</span>
            <h3>${item.title}</h3>
            <p>${item.description ? item.description.substring(0, 120) : ''}</p>
            <span class="meta">
                <span>${item.source}${item._dupeOf ? ` <span class="dupe-badge" title="Also from: ${item._dupeOf}">+1</span>` : ''}</span>
                <span>${formatDate(item.date)}</span>
            </span>
        </a>
    `).join('');
}

// Format date
function formatDate(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return `${Math.floor(diff / 604800)}w ago`;
}

// ===== App state =====
let currentNews = [];
let currentCategories = new Set(); // empty = all
let currentSourceFilter = 'all';
let currentDateFilter = 7; // days
let currentSearchQuery = '';
let currentSort = 'recommended';

function rerender() {
    renderNews(currentNews, currentCategories, currentSourceFilter, currentDateFilter, currentSearchQuery, currentSort);
}

// ===== Theme toggle =====
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

// ===== Mobile filter toggle =====
function initMobileFilters() {
    const toggle = document.getElementById('mobile-filter-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (!toggle || !sidebar) return;

    if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
    }

    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('collapsed');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('collapsed');
        }
    });
}

// ===== Init =====
async function init() {
    initTheme();
    initMobileFilters();

    currentNews = await fetchNews();

    // Populate source filter dropdown (sorted alphabetically)
    const sources = [...new Set(currentNews.map(item => item.source))].sort((a, b) => a.localeCompare(b));
    const sourceSelect = document.getElementById('source-filter');
    sourceSelect.innerHTML = ['all', ...sources].map(source =>
        `<option value="${source}">${source === 'all' ? 'All Sources' : source}</option>`
    ).join('');

    rerender();

    // Category filter buttons (multi-select)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            if (category === 'all') {
                // Clear all selections
                currentCategories.clear();
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                // Toggle this category
                document.querySelector('.filter-btn[data-category="all"]').classList.remove('active');
                
                if (currentCategories.has(category)) {
                    currentCategories.delete(category);
                    btn.classList.remove('active');
                } else {
                    currentCategories.add(category);
                    btn.classList.add('active');
                }
                
                // If nothing selected, revert to "All"
                if (currentCategories.size === 0) {
                    document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
                }
            }
            
            rerender();
        });
    });

    // Source filter dropdown
    sourceSelect.addEventListener('change', (e) => {
        currentSourceFilter = e.target.value;
        rerender();
    });

    // Date filter dropdown
    document.getElementById('date-filter').addEventListener('change', (e) => {
        currentDateFilter = parseInt(e.target.value);
        rerender();
    });

    // Search input
    document.getElementById('search-input').addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase();
        rerender();
    });

    // Sort dropdown
    document.getElementById('sort-filter').addEventListener('change', (e) => {
        currentSort = e.target.value;
        rerender();
    });
}

init();
