# PR-Agent Guide Presentation

A comprehensive presentation about PR-Agent built with [Slidev](https://sli.dev) - a developer-focused presentation tool that allows creating beautiful slides with Markdown and Vue components.

## 🎯 Overview

This repository contains slides and documentation for the PR-Agent Guide, helping developers understand how to effectively use PR-Agent for automated code review and pull request management.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.0.0
- npm or yarn
- Basic knowledge of Markdown and Vue.js (optional)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/icezatoo/pr-agent-slidev.git
cd pr-agent-slidev
```

2. Install dependencies:

```bash
npm install
# or with yarn
yarn install
```

3. Start the presentation:

```bash
npm run dev
# or with yarn
yarn dev
```

The presentation will be available at `http://localhost:3030`

## 📦 Building for Production

Generate static files:

```bash
npm run build
# or with yarn
yarn build
```

The generated files will be in the `dist/` directory.

## 🚢 Deployment

### GitHub Pages

1. Set the correct base in `config.js`:

```js
export default {
  base: '/pr-agent-guide/'
}
```

2. Run the build command:

```bash
npm run build
```

3. Deploy to GitHub Pages:

```bash
npm run deploy
```

## 🙏 Acknowledgments

- [Slidev](https://sli.dev) for the amazing presentation framework
- PR-Agent team for the comprehensive documentation
- All contributors who help improve this guide

## 🔗 Related Resources

- [PR-Agent Documentation](https://github.com/qodo-ai/pr-agent)
- [Slidev Documentation](https://sli.dev)
- [Vue.js Documentation](https://vuejs.org)
