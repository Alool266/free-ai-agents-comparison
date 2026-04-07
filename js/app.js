// AI Agents Data
const aiAgents = [
    {
        id: 1,
        name: "OpenAI GPT-4o mini",
        provider: "OpenAI",
        category: "cloud",
        rateLimit: "500K tokens/day",
        contextLength: "128K tokens",
        rating: 4.8,
        reviews: 12500,
        features: ["Text Generation", "Code", "Vision", "Function Calling", "JSON Mode"],
        freeTier: "500K tokens/day free",
        apiDocs: "https://platform.openai.com/docs",
        website: "https://openai.com",
        icon: "🧠"
    },
    {
        id: 2,
        name: "Google Gemini",
        provider: "Google",
        category: "cloud",
        rateLimit: "60 RPM (free)",
        contextLength: "32K tokens",
        rating: 4.6,
        reviews: 8900,
        features: ["Text Generation", "Vision", "Code", "Multilingual", "Grounding"],
        freeTier: "60 requests/min free",
        apiDocs: "https://ai.google.dev/docs",
        website: "https://ai.google.dev",
        icon: "💎"
    },
    {
        id: 3,
        name: "Claude 3 Haiku",
        provider: "Anthropic",
        category: "cloud",
        rateLimit: "$5 free credit",
        contextLength: "200K tokens",
        rating: 4.7,
        reviews: 6200,
        features: ["Text Generation", "Vision", "Long Context", "Code", "Analysis"],
        freeTier: "$5 initial credit",
        apiDocs: "https://docs.anthropic.com",
        website: "https://anthropic.com",
        icon: "🤖"
    },
    {
        id: 4,
        name: "Mistral AI",
        provider: "Mistral",
        category: "cloud",
        rateLimit: "€2 free credit",
        contextLength: "32K tokens",
        rating: 4.5,
        reviews: 4100,
        features: ["Text Generation", "Code", "Multilingual", "Function Calling"],
        freeTier: "€2 initial credit",
        apiDocs: "https://docs.mistral.ai",
        website: "https://mistral.ai",
        icon: "🌪️"
    },
    {
        id: 5,
        name: "Groq",
        provider: "Groq",
        category: "cloud",
        rateLimit: "30 RPM (free)",
        contextLength: "8K tokens",
        rating: 4.4,
        reviews: 3200,
        features: ["Ultra-Fast Inference", "Llama", "Mixtral", "Gemma"],
        freeTier: "30 requests/min free",
        apiDocs: "https://console.groq.com/docs",
        website: "https://groq.com",
        icon: "⚡"
    },
    {
        id: 6,
        name: "Cohere",
        provider: "Cohere",
        category: "cloud",
        rateLimit: "100 RPM (free)",
        contextLength: "4K tokens",
        rating: 4.3,
        reviews: 2800,
        features: ["Embeddings", "Classification", "Rerank", "Generation"],
        freeTier: "100 requests/min free",
        apiDocs: "https://docs.cohere.com",
        website: "https://cohere.com",
        icon: "🔗"
    },
    {
        id: 7,
        name: "Hugging Face Inference",
        provider: "Hugging Face",
        category: "opensource",
        rateLimit: "30K tokens/day",
        contextLength: "Varies by model",
        rating: 4.5,
        reviews: 15000,
        features: ["100K+ Models", "Open Source", "Community", "API", "Datasets"],
        freeTier: "30K tokens/day free",
        apiDocs: "https://huggingface.co/docs",
        website: "https://huggingface.co",
        icon: "🤗"
    },
    {
        id: 8,
        name: "Ollama",
        provider: "Ollama",
        category: "local",
        rateLimit: "Unlimited (local)",
        contextLength: "Varies by model",
        rating: 4.6,
        reviews: 9500,
        features: ["Local Execution", "Offline", "Privacy", "Multiple Models", "Open Source"],
        freeTier: "100% Free (Local)",
        apiDocs: "https://ollama.com/docs",
        website: "https://ollama.com",
        icon: "🦙"
    },
    {
        id: 9,
        name: "LM Studio",
        provider: "LM Studio",
        category: "local",
        rateLimit: "Unlimited (local)",
        contextLength: "Varies by model",
        rating: 4.4,
        reviews: 5600,
        features: ["Local Execution", "GUI", "Offline", "GGUF Models", "OpenAI Compatible"],
        freeTier: "100% Free (Local)",
        apiDocs: "https://lmstudio.ai/docs",
        website: "https://lmstudio.ai",
        icon: "🎨"
    },
    {
        id: 10,
        name: "Together AI",
        provider: "Together AI",
        category: "cloud",
        rateLimit: "$25 free credit",
        contextLength: "32K tokens",
        rating: 4.3,
        reviews: 2100,
        features: ["Open Source Models", "Fast Inference", "Fine-tuning", "API"],
        freeTier: "$25 initial credit",
        apiDocs: "https://docs.together.ai",
        website: "https://together.ai",
        icon: "🚀"
    },
    {
        id: 11,
        name: "Perplexity AI",
        provider: "Perplexity",
        category: "cloud",
        rateLimit: "Limited free queries",
        contextLength: "32K tokens",
        rating: 4.5,
        reviews: 7800,
        features: ["Search Integration", "Citations", "Real-time", "Code"],
        freeTier: "Limited free queries",
        apiDocs: "https://docs.perplexity.ai",
        website: "https://perplexity.ai",
        icon: "🔍"
    },
    {
        id: 12,
        name: "DeepSeek",
        provider: "DeepSeek",
        category: "cloud",
        rateLimit: "Free tier available",
        contextLength: "128K tokens",
        rating: 4.4,
        reviews: 3400,
        features: ["Code Generation", "Math", "Reasoning", "Long Context"],
        freeTier: "Free tier available",
        apiDocs: "https://platform.deepseek.com/docs",
        website: "https://deepseek.com",
        icon: "🔮"
    }
];

// State
let currentView = 'grid';
let filteredAgents = [...aiAgents];
let currentSort = { field: 'name', direction: 'asc' };

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortBy = document.getElementById('sortBy');
const agentsGrid = document.getElementById('agentsGrid');
const agentsTable = document.getElementById('agentsTable');
const agentsTableBody = document.getElementById('agentsTableBody');
const agentCount = document.getElementById('agentCount');
const lastUpdated = document.getElementById('lastUpdated');
const viewButtons = document.querySelectorAll('.view-btn');

// Initialize
function init() {
    renderAgents();
    setupEventListeners();
    updateLastUpdated();
}

// Render agents in grid view
function renderGrid() {
    agentsGrid.innerHTML = filteredAgents.map(agent => `
        <div class="agent-card category-${agent.category}">
            <div class="agent-header">
                <div class="agent-logo">${agent.icon}</div>
                <div class="agent-info">
                    <h3 class="agent-name">${agent.name}</h3>
                    <p class="agent-provider">${agent.provider}</p>
                    <span class="agent-category ${agent.category}">${agent.category}</span>
                </div>
            </div>
            <div class="agent-stats">
                <div class="stat-item">
                    <div class="stat-label">Rate Limit</div>
                    <div class="stat-value">${agent.rateLimit}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Context Length</div>
                    <div class="stat-value">${agent.contextLength}</div>
                </div>
            </div>
            <div class="agent-features">
                <h4>Features</h4>
                <div class="features-list">
                    ${agent.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
                </div>
            </div>
            <div class="agent-actions">
                <a href="${agent.apiDocs}" target="_blank" class="btn btn-primary">API Docs</a>
                <a href="${agent.website}" target="_blank" class="btn btn-secondary">Website</a>
            </div>
            <div class="agent-rating">
                <span class="stars">${getStars(agent.rating)}</span>
                <span>${agent.rating}</span>
                <span class="rating-count">(${formatNumber(agent.reviews)} reviews)</span>
            </div>
        </div>
    `).join('');
}

// Render agents in table view
function renderTable() {
    agentsTableBody.innerHTML = filteredAgents.map(agent => `
        <tr>
            <td><strong>${agent.icon} ${agent.name}</strong></td>
            <td>${agent.provider}</td>
            <td><span class="category-badge ${agent.category}">${agent.category}</span></td>
            <td>${agent.rateLimit}</td>
            <td>${agent.contextLength}</td>
            <td>${getStars(agent.rating)} ${agent.rating}</td>
            <td class="features-cell">
                ${agent.features.slice(0, 3).map(f => `<span class="feature-tag">${f}</span>`).join('')}
                ${agent.features.length > 3 ? `+${agent.features.length - 3}` : ''}
            </td>
            <td class="actions-cell">
                <a href="${agent.apiDocs}" target="_blank" class="btn btn-primary">Docs</a>
            </td>
        </tr>
    `).join('');
}

// Render agents based on current view
function renderAgents() {
    if (currentView === 'grid') {
        agentsGrid.style.display = 'grid';
        agentsTable.style.display = 'none';
        renderGrid();
    } else {
        agentsGrid.style.display = 'none';
        agentsTable.style.display = 'block';
        renderTable();
    }
    agentCount.textContent = `${filteredAgents.length} agent${filteredAgents.length !== 1 ? 's' : ''}`;
}

// Get star rating HTML
function getStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '½';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars += '☆';
    }
    return stars;
}

// Format number with commas
function formatNumber(num) {
    return num.toLocaleString();
}

// Filter and sort agents
function filterAndSort() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const sortField = sortBy.value;

    // Filter
    filteredAgents = aiAgents.filter(agent => {
        const matchesSearch = agent.name.toLowerCase().includes(searchTerm) ||
            agent.provider.toLowerCase().includes(searchTerm) ||
            agent.features.some(f => f.toLowerCase().includes(searchTerm));
        const matchesCategory = category === 'all' || agent.category === category;
        return matchesSearch && matchesCategory;
    });

    // Sort
    filteredAgents.sort((a, b) => {
        let aVal = a[sortField];
        let bVal = b[sortField];

        // Handle numeric extraction from strings
        if (typeof aVal === 'string') {
            const aNum = parseFloat(aVal.replace(/[^0-9.-]/g, ''));
            const bNum = parseFloat(bVal.replace(/[^0-9.-]/g, ''));
            if (!isNaN(aNum) && !isNaN(bNum)) {
                aVal = aNum;
                bVal = bNum;
            }
        }

        if (aVal < bVal) return currentSort.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return currentSort.direction === 'asc' ? 1 : -1;
        return 0;
    });

    renderAgents();
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', filterAndSort);
    categoryFilter.addEventListener('change', filterAndSort);
    sortBy.addEventListener('change', filterAndSort);

    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            renderAgents();
        });
    });

    // Table header sorting
    document.querySelectorAll('.agents-table th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const field = th.dataset.sort;
            if (currentSort.field === field) {
                currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
            } else {
                currentSort.field = field;
                currentSort.direction = 'asc';
            }
            filterAndSort();
        });
    });
}

// Update last updated date
function updateLastUpdated() {
    const now = new Date();
    lastUpdated.textContent = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
