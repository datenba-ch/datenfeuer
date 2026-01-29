import type { SiteConfig } from '~/types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://blog.datenba.ch',
  // The name of your site, used in the title and for SEO.
  title: 'daten:feuer',
  // The description of your site, used for SEO and RSS feed.
  description:
    'Das Blog für Neuigkeiten und Updates aus der datenba:ch-Community – dem hyperlokalen Technologie-Hub in Neckargerach und Umgebung.',
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: 'datenba:ch',
  // Keywords for SEO, used in the meta tags.
  tags: ['Astro', 'Terminal', 'Theme', 'MultiTerm', 'datenba:ch'],
  // Path to the image used for generating social media previews.
  // Needs to be a square JPEG file due to limitations of the social card generator.
  // Try https://squoosh.app/ to easily convert images to JPEG.
  socialCardAvatarImage: './src/content/datenfeuer-logo.webp',
  // Font imported from @fontsource or elsewhere, used for the entire site.
  // To change this see src/styles/global.css and import a different font.
  font: 'JetBrains Mono Variable',
  // For pagination, the number of posts to display per page.
  pageSize: 5,
  // The navigation links to display in the header.
  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Archive',
      url: '/posts',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/datenba-ch/',
      external: true,
    },
  ],
  // The theming configuration for the site.
  themes: {
    // The theming mode. One of "single" | "select" | "light-dark-auto".
    mode: 'light-dark-auto',
    // The default theme identifier, used when themeMode is "select" or "light-dark-auto".
    // Make sure this is one of the themes listed in `themes` or "auto" for "light-dark-auto" mode.
    default: 'everforest-dark',
    include: [
      'everforest-dark',
      'everforest-light',
    ],
    // Optional overrides for specific themes to customize colors.
    // Their values can be either a literal color (hex, rgb, hsl) or another theme key.
    // See themeKeys list in src/types.ts for available keys to override and reference.
    overrides: {
      // Improve readability for aurora-x theme
      'everforest-dark': {
        accent: '#A7C080',
        separator: '#A7C080',
        heading1: '#83c092',
        heading2: '#83c092',
        heading3: '#83c092',
        heading4: '#83c092',
        heading5: '#83c092',
        heading6: '#83c092',
        link: '#7fbbb3',
        list: '#7fbbb3',
        background: '#232A2E',
      },
      'everforest-light': {
        accent: '#8DA101',
        separator: '#8DA101',
        heading1: '#93b259',
        heading2: '#93b259',
        heading3: '#93b259',
        heading4: '#93b259',
        heading5: '#93b259',
        heading6: '#93b259',
        link: '#3a94c5',
        list: '#3a94c5',
        background: '#F0F1D2',
        },
    },
  },
  // Social links to display in the footer.
  socialLinks: {
    github: 'https://github.com/datenba-ch/',
    // mastodon: 'https://github.com/stelcodes/multiterm-astro',
    email: 'https://github.com/stelcodes/multiterm-astro',
    matrix: 'https://matrix.to/#/#community:datenba.ch?client=element.io&web-instance[element.io]=element.datenba.ch',
    rss: true, // Set to true to include an RSS feed link in the footer
  },
  // Configuration for Giscus comments.
  // To set up Giscus, follow the instructions at https://giscus.app/
  // You'll need a GitHub repository with discussions enabled and the Giscus app installed.
  // Take the values from the generated script tag at https://giscus.app and fill them in here.
  // If you don't want to use Giscus, set this to undefined.
  giscus: {
    repo: 'stelcodes/multiterm-astro',
    repoId: 'R_kgDOPNnBig',
    category: 'Giscus',
    categoryId: 'DIC_kwDOPNnBis4CteOc',
    reactionsEnabled: true,
  },
}

export default config
1
