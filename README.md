# Free AI Agents Comparison

A comprehensive comparison website for free AI agents and their capabilities. This site helps developers and AI enthusiasts discover and compare different free AI agent services available online.

**Live Site:** https://alool266.github.io/free-ai-agents-comparison/

**Made by Dr. Ali Hasan**

## Features

- **Grid & Table Views** - Switch between card grid and detailed table layouts
- **Search & Filter** - Find agents by name, provider, or features
- **Category Filtering** - Filter by Cloud API, Local/Offline, or Open Source
- **Sorting** - Sort by name, rate limit, context length, or rating
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Live Data** - Up-to-date information on free AI agents

## AI Agents Included

The website currently features 12+ free AI agents:

- OpenAI GPT-4o mini
- Google Gemini
- Claude 3 Haiku (Anthropic)
- Mistral AI
- Groq
- Cohere
- Hugging Face Inference
- Ollama
- LM Studio
- Together AI
- Perplexity AI
- DeepSeek

Each agent listing includes:
- Name and provider
- Free tier limits
- Rate limits and context length
- Key features and capabilities
- Links to API documentation and website
- Community ratings

## Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process or dependencies required - it's a static site!

## Deployment to GitHub Pages

### Option 1: Using GitHub Desktop (Easiest)

1. Open GitHub Desktop and sign in
2. Click "Add Repository" → "Create a New Repository on GitHub"
3. Repository name: `free-ai-agents-comparison` (or your preferred name)
4. Set local path to the `free-ai-agents-comparison` folder
5. Check "Push to GitHub" and create repository
6. Go to repository Settings → Pages
7. Under "Build and deployment", select "Deploy from a branch"
8. Branch: `main`, folder: `/ (root)`
9. Click Save
10. Your site will be live at: `https://yourusername.github.io/free-ai-agents-comparison/`

### Option 2: Using Git Command Line

```bash
# Navigate to project directory
cd free-ai-agents-comparison

# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Create repository on GitHub (via website), then link and push:
git remote add origin https://github.com/yourusername/free-ai-agents-comparison.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings as described above.

## Custom Domain (Optional)

1. In GitHub repository → Settings → Pages
2. Under "Custom domain", enter your domain
3. Add DNS records as instructed by GitHub:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME: `yourusername.github.io`
4. Check "Enforce HTTPS" after verification

## Updating the Data

To add or modify AI agents:

1. Edit `js/app.js`
2. Find the `aiAgents` array
3. Add new agent objects following the existing format:

```javascript
{
    id: unique_number,
    name: "Agent Name",
    provider: "Provider",
    category: "cloud|local|opensource",
    rateLimit: "Rate limit info",
    contextLength: "Context size",
    rating: 4.5,
    reviews: 1000,
    features: ["Feature1", "Feature2"],
    freeTier: "Free tier description",
    apiDocs: "https://docs.example.com",
    website: "https://example.com",
    icon: "🎯"
}
```

4. Commit and push changes - GitHub Pages will automatically update

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## Contributing

Feel free to submit issues or pull requests to add more AI agents, fix bugs, or improve the design.

## License

MIT License - feel free to use this project for any purpose.

## Disclaimer

This is an independent comparison site and is not affiliated with any of the AI providers mentioned. All information is collected from public sources. Free tier limits and features may change - always check the official documentation for the most up-to-date information.

---

**Made by Dr. Ali Hasan**

**Last Updated:** May 2025
