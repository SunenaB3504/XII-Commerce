# Production Deployment Guide

## Build & Deploy

### Local Build
```bash
npm run build
```

This generates a production-ready `dist/` folder with optimized assets.

### Deploy to GitHub Pages
```bash
npm run deploy
```

**Prerequisites:**
1. GitHub repository with `gh-pages` branch enabled
2. Update `homepage` in `package.json` to your GitHub Pages URL

### Current Deploy URL
https://SunenaB3504.github.io/XII-Commerce/

## Pre-deployment Checklist

- ✅ All type checks pass (TypeScript strict mode)
- ✅ No console errors or warnings
- ✅ Build completes successfully with no errors
- ✅ Bundle size optimized (vendor, components, data chunks)
- ✅ Security vulnerabilities resolved
- ✅ Meta tags and SEO optimized
- ✅ Responsive design verified

## Performance Metrics

**Bundle Size Targets:**
- Vendor: ~11 KB (React, React-DOM)
- Main App: ~676 KB (gzipped)
- CSS: ~11 KB (gzipped)

**Optimization Techniques:**
- Code splitting by route and chunk
- Minification with Terser
- CSS purging with Tailwind
- Asset compression

## Monitoring & Maintenance

### Check Live Status
Visit: https://SunenaB3504.github.io/XII-Commerce/

### Run Locally for Testing
```bash
npm run dev
```
Server runs at `http://127.0.0.1:5173/`

## Troubleshooting

**Server won't start:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next dist
npm install
npm run dev
```

**Build fails:**
```bash
npm run build --verbose
```

**Deploy fails:**
- Verify `homepage` field in package.json
- Check GitHub repository settings for Pages deployment
- Ensure `gh-pages` branch exists

