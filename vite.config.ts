
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import tailwindcss from '@tailwindcss/vite';
  import path from 'path';
  import fs from 'fs';
  import type { Plugin } from 'vite';
  import {
    DEFAULT_SITE_URL,
    renderHeadTags,
    renderRobots,
    renderSitemap,
    seoRoutes,
  } from './src/seo';

  // Fills <head> with per-route SEO tags and, on build, writes
  // build/<route>/index.html for every route plus sitemap.xml and robots.txt,
  // so search engines and link previews get the right tags without JavaScript.
  const SEO_START = '<!-- seo:start -->';
  const SEO_END = '<!-- seo:end -->';

  function seoPages(): Plugin {
    let siteUrl = DEFAULT_SITE_URL;
    let outDir = '';
    let isBuild = false;

    const head = (route: (typeof seoRoutes)[number]) =>
      `${SEO_START}
    ${renderHeadTags(route, siteUrl)}
    ${SEO_END}`;

    return {
      name: 'seo-pages',
      configResolved(config) {
        siteUrl = (config.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');
        outDir = path.resolve(config.root, config.build.outDir);
        isBuild = config.command === 'build';
      },
      transformIndexHtml(html) {
        return html.replace(/<!-- seo-head[^>]*-->/, head(seoRoutes[0]));
      },
      closeBundle() {
        if (!isBuild) return;
        const indexHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');
        const start = indexHtml.indexOf(SEO_START);
        const end = indexHtml.indexOf(SEO_END) + SEO_END.length;

        for (const route of seoRoutes.slice(1)) {
          const dir = path.join(outDir, route.path);
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(
            path.join(dir, 'index.html'),
            indexHtml.slice(0, start) + head(route) + indexHtml.slice(end)
          );
        }
        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), renderSitemap(siteUrl));
        fs.writeFileSync(path.join(outDir, 'robots.txt'), renderRobots(siteUrl));
      },
    };
  }

  export default defineConfig({
    plugins: [react(), tailwindcss(), seoPages()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });