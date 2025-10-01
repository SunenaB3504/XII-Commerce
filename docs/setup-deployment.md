# Setup & Deployment Guide

## Overview

This guide covers the installation, development setup, and deployment process for Neil's Commerce Prep.

## Prerequisites

### System Requirements
- **Node.js**: Version 18.0.0 or higher (LTS 18.x or 20.x recommended)
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: Version 2.30.0 or higher
- **Operating System**: 
  - Windows 10/11 (22H2 or later)
  - macOS 10.15 Catalina or later
  - Linux (Ubuntu 20.04+, Fedora 35+, or equivalent)
- **RAM**: Minimum 4GB (8GB recommended for development)
- **Disk Space**: 500MB for project and dependencies

### Recommended Tools
- **VS Code**: Latest version with these extensions:
  - TypeScript and JavaScript Language Features
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint
  - GitLens (for Git integration)
- **GitHub Desktop**: For easier Git operations (optional)
- **Browser**: Chrome/Edge/Firefox with developer tools
  - React Developer Tools extension
  - Accessibility Insights extension (for testing)

## Local Development Setup

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/SunenaB3504/XII-Commerce.git

# Navigate to the project directory
cd XII-Commerce
```

### Step 2: Install Dependencies

```bash
# Install all dependencies
npm install

# Verify installation
npm --version
node --version
```

### Step 3: Environment Configuration

The application uses Vite and doesn't require environment variables for basic functionality. However, if you need to add features that require API keys:

```bash
# Create environment file (if needed)
touch .env.local

# Add environment variables
echo "VITE_API_KEY=your_api_key_here" > .env.local
```

**Note**: Never commit `.env.local` to version control.

### Step 4: Start Development Server

```bash
# Start the development server
npm run dev

# The application will be available at http://localhost:5173
```

### Step 5: Verify Setup

1. Open http://localhost:5173 in your browser
2. Verify the application loads correctly
3. Test navigation between subjects
4. Check that questions and learning content display properly

## Development Workflow

### Code Changes
1. Make changes to source files
2. Save files (auto-reload enabled)
3. Check browser for updates
4. Use browser developer tools for debugging

### Adding New Content
1. Follow the [Content Contribution Guide](./content-contribution.md)
2. Add question papers or learning modules
3. Update data indexes
4. Test the new content

### Component Development
1. Create/modify components in `components/` directory
2. Follow TypeScript and React best practices
3. Test component functionality
4. Update documentation if needed

## Build Process

### Development Build
```bash
# Build for development
npm run build

# Preview the build
npm run preview
```

### Production Build
```bash
# Create optimized production build
npm run build

# The build artifacts will be stored in the `dist/` directory
```

### Build Configuration

The build process is configured in `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/XII-Commerce/' : '/',  // GitHub Pages base path
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined  // Optional: customize code splitting
      }
    }
  }
}))
```

**Important Notes:**
- Base path uses Vite's `mode` parameter for proper production detection
- `index.html` uses relative paths (e.g., `./index.tsx`) for proper asset resolution
- Missing assets (like `vite.svg`) should be removed from `index.html` to avoid 404 errors

**Current Build Performance:**
- Build Time: ~3.8 seconds
- Bundle Size: ~858 KB (207 KB gzipped)
- CSS Bundle: ~59 KB (8.4 KB gzipped)
- Output: Optimized ES modules with CSS extraction
- Sourcemaps: Enabled for production debugging

## Deployment Options

### GitHub Pages (Recommended & Configured)

**Automated Deployment:**
The app automatically deploys to GitHub Pages when you push to the `main` branch. The CI/CD pipeline is configured via GitHub Actions.

**GitHub Actions Workflow:**
Location: `.github/workflows/deploy.yml`

The workflow:
1. Triggers on push to `main` branch
2. Checks out the code
3. Sets up Node.js environment
4. Installs dependencies
5. Builds the application
6. Deploys to GitHub Pages

**Manual Deployment:**
```bash
# Build and deploy manually
npm run deploy

# This runs: npm run build && gh-pages -d dist
```

**Configuration:**
- **Base Path**: `/XII-Commerce/` (uses Vite's mode parameter in vite.config.ts)
- **Deployment Method**: GitHub Actions (automated on push to main)
- **URL**: https://sunenab3504.github.io/XII-Commerce/
- **Build Directory**: `dist/`
- **Status**: ✅ Live and operational

**Package.json Scripts:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy automatically on git push

### Server Deployment

#### Using Express.js
```javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

#### Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build and run with Docker
docker build -t commerce-app .
docker run -p 80:80 commerce-app
```

## Environment-Specific Configuration

### Development
- Hot module replacement enabled
- Source maps for debugging
- Development server with auto-reload

### Production
- Code minification and optimization
- Static asset optimization
- Service worker for caching (if implemented)

### Staging
- Mirror production environment
- Used for testing before production deployment
- Separate database/configuration if needed

## Performance Optimization

### Build Optimization
- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Removes unused code
- **Minification**: Reduces bundle size
- **Compression**: Gzip compression enabled

### Runtime Optimization
- **Lazy Loading**: Implement for large components
- **Image Optimization**: Use WebP format, responsive images
- **Caching**: Implement service worker for static assets
- **Bundle Analysis**: Use `npm install --save-dev rollup-plugin-visualizer`

### Monitoring Performance
```bash
# Analyze bundle size
npx vite-bundle-analyzer dist
```

## Testing

### Running Tests
```bash
# Run test suite (when implemented)
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Manual Testing Checklist
- [ ] Application loads without errors
- [ ] All subjects are accessible
- [ ] Question papers display correctly
- [ ] Learning modules render properly
- [ ] Navigation works on all screen sizes
- [ ] Text-to-speech functions
- [ ] No console errors or warnings

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

#### Port Already in Use
```bash
# Kill process using port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

#### TypeScript Errors
- Check `tsconfig.json` configuration
- Ensure all imports are correct
- Verify type definitions in `types.ts`

#### Styling Issues
- Verify Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Use browser dev tools to inspect elements

### Debug Mode
```bash
# Enable verbose logging
DEBUG=vite:* npm run dev

# Open browser dev tools
# Check Console and Network tabs for errors
```

## Security Considerations

### Build Security
- Dependencies are regularly updated
- Use `npm audit` to check for vulnerabilities
- Implement Content Security Policy headers

### Runtime Security
- Sanitize user inputs (if any)
- Use HTTPS in production
- Implement proper CORS policies

## Backup and Recovery

### Code Backup
- All code is version controlled with Git
- Regular commits to GitHub
- Use branches for experimental features

### Content Backup
- Educational content is stored in code repository
- Regular backups of repository
- Content versioning with Git tags

## Maintenance

### Regular Tasks
- Update Node.js and npm regularly
- Keep dependencies updated: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Clean up old build artifacts

### Monitoring
- Check application performance
- Monitor error logs
- Track user feedback
- Update content based on syllabus changes

## Support

### Getting Help
- Check this documentation first
- Review GitHub Issues for known problems
- Create new issues for bugs or feature requests
- Join community discussions

### Contributing
- Follow the [Development Guide](./development-guide.md)
- Submit pull requests for improvements
- Report security issues privately

**Last Updated:** October 1, 2025</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\setup-deployment.md