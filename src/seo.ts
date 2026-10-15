// ---------------------------------------------------------------------------
// SEO for Sigma House Sri Lanka (main site).
// Shared by the browser (src/components/Seo.tsx) and the build
// (vite.config.ts writes a pre-filled HTML file per route plus sitemap.xml
// and robots.txt), so crawlers and link previews see the right tags without
// running JavaScript.
//
// Keyword split with the Nature Kitchen site: this site targets the stay,
// homestay and village experiences. Cooking-class searches belong to
// the Nature Kitchen site, which this site links to as a sub-brand.
// Keep this file free of browser-only and Vite-only APIs.
// ---------------------------------------------------------------------------

// Current live URL. Set VITE_SITE_URL at build time once there is a custom
// domain. Set VITE_NATURE_KITCHEN_URL to the Nature Kitchen site's URL to
// link it from the footer and structured data; without it the link is left out.
export const DEFAULT_SITE_URL = "https://sri-lanka-one.vercel.app";

export const siteName = "Sigma House Sri Lanka";

const defaultImage = {
  path: "/images/Accomodation/room1.jpeg",
  alt: "Sigma House tree house homestay surrounded by nature in Sri Lanka",
};

// Client keyword list (Oct 2026) is mapped to the page whose content
// matches it. Google ignores the keywords meta tag, so each phrase also
// appears in that page's title or description.
export const baseKeywords = [
  "Sigma House Sri Lanka",
  "homestay Sri Lanka",
  "Sri Lanka village life",
  "stay with a local family Sri Lanka",
  "authentic experience Sri Lanka",
  "local experience Sri Lanka",
  "Kananke",
  "Galle",
  "down south Sri Lanka",
  "Sri Lanka tourism",
];

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export const seoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Sigma House Sri Lanka | Authentic Village Stays & Local Experiences",
    description:
      "Stay with a local family at our tree house homestay in Kananke, near Galle. Authentic Sri Lankan food, village life, tea picking, cinnamon making and cultural experiences down south.",
    keywords: [
      "Sri Lanka village stay",
      "tree house homestay Sri Lanka",
      "authentic Sri Lankan food",
      "cultural experience Sri Lanka",
      "community-based tourism Sri Lanka",
    ],
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/accommodation",
    title: "Tree House Homestay near Galle, Sri Lanka | Sigma House",
    description:
      "Sleep in our tree house homestay in Kananke, hosted by a local family. Home-cooked authentic Sri Lankan food, village life and easy trips to Galle, Weligama and Ahangama.",
    keywords: [
      "tree house Sri Lanka",
      "tree house accommodation Sri Lanka",
      "homestay near Galle",
      "homestay Kananke",
      "Sri Lanka homestay with local food",
      "authentic Sri Lankan food",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/experiences",
    title: "Tea Picking, Village Walks & Cultural Experiences | Sigma House",
    description:
      "Authentic local experiences from our village homestay: tea picking, waterfall visits, village walking tours, traditional food, Sri Lankan New Year games and other Sri Lanka traditions.",
    keywords: [
      "tea picking Sri Lanka",
      "Ceylon tea experience",
      "village walking tour Sri Lanka",
      "Sri Lanka traditions",
      "cultural experience Sri Lanka",
      "waterfall visit Sri Lanka",
      "family activities Sri Lanka",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/activities",
    title: "Volunteer with Village Kids, Yoga & Cinnamon Making | Sigma House",
    description:
      "Volunteer with village kids, join yoga and meditation, go village walking and try cinnamon making and tea picking. Hands-on activities with a local family in Sri Lanka.",
    keywords: [
      "volunteering for kids Sri Lanka",
      "volunteer with children Sri Lanka",
      "volunteering Sri Lanka",
      "yoga Sri Lanka",
      "yoga and meditation Sri Lanka",
      "cinnamon making Sri Lanka",
      "tea picking Sri Lanka",
      "village walking Sri Lanka",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/south-coast",
    title: "Down South Sri Lanka: Weligama, Ahangama & Wildlife | Sigma House",
    description:
      "Explore down south from our homestay near Galle: surfing in Weligama and Ahangama, whale watching in Mirissa, wildlife safaris, turtle conservation and rainforest trekking.",
    keywords: [
      "Weligama",
      "Ahangama",
      "surfing Weligama",
      "surfing Ahangama",
      "wildlife Sri Lanka",
      "wildlife safari Sri Lanka",
      "whale watching Mirissa",
      "down south Sri Lanka",
      "Galle day trips",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    title: "About Sigma House | Local Family Homestay in Sri Lanka",
    description:
      "Meet Hasitha and the local family behind Sigma House, a village homestay in Kananke where travellers share authentic food, Sri Lanka traditions and everyday village life.",
    keywords: ["local family homestay Sri Lanka", "family-run homestay Sri Lanka"],
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/gallery",
    title: "Photos of Our Tree House Homestay & Village Life | Sigma House",
    description:
      "Photos from Sigma House Sri Lanka: the tree house homestay, cinnamon making and tea picking, authentic Sri Lankan cooking and volunteering with village kids.",
    keywords: ["Sigma House photos", "Sri Lanka homestay photos"],
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/reviews",
    title: "Guest Reviews | Sigma House Sri Lanka",
    description:
      "Read what guests say about staying with a local family at Sigma House Sri Lanka: the hosting, the authentic food, the village life and the nature down south.",
    keywords: ["Sigma House reviews"],
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/booking",
    title: "Book Your Homestay in Sri Lanka | Sigma House Sri Lanka",
    description:
      "Request your stay at Sigma House, a tree house homestay near Galle. Choose your dates, guests and meals and send your request on WhatsApp. We'll confirm availability and price.",
    keywords: ["book homestay Sri Lanka", "Sri Lanka village stay booking"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    title: "Contact Sigma House Sri Lanka | Kananke, Imaduwa, near Galle",
    description:
      "Contact Sigma House in Kananke, Imaduwa by WhatsApp, phone or email to plan your homestay, local experiences and transport down south.",
    keywords: ["Sigma House contact", "Imaduwa Sri Lanka", "Kananke Sri Lanka"],
    priority: 0.7,
    changeFrequency: "yearly",
  },
];

export function findSeoRoute(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return seoRoutes.find((r) => r.path === path) ?? seoRoutes[0];
}

export function absoluteUrl(siteUrl: string, path: string) {
  return `${siteUrl.replace(/\/$/, "")}${path === "/" ? "" : path}`;
}

// Site-wide structured data   only facts shown on the site. Add ratings or
// reviews only once they are real and linked to their source.
export function buildJsonLd(siteUrl: string, natureKitchenUrl?: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      description: seoRoutes[0].description,
      url: siteUrl,
      logo: `${siteUrl}/logo/logo.jpeg`,
      image: `${siteUrl}${defaultImage.path}`,
      telephone: "+94763183081",
      email: "hasithadhananjaya2020@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Imaduwa",
        addressRegion: "Southern Province",
        addressCountry: "LK",
      },
      sameAs: [
        "https://www.instagram.com/sigmahouse_srilanka/",
        "https://www.facebook.com/61562298313608/",
      ],
      ...(natureKitchenUrl && {
        subOrganization: {
          "@type": "LocalBusiness",
          name: "Sigma House Nature Kitchen",
          description: "Hands-on Sri Lankan village cooking experience by Sigma House.",
          url: natureKitchenUrl,
        },
      }),
      knowsLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ];
}

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// <head> tags for one route, injected into index.html at build time.
export function renderHeadTags(route: SeoRoute, siteUrl: string, natureKitchenUrl?: string) {
  const url = absoluteUrl(siteUrl, route.path);
  const image = `${siteUrl}${defaultImage.path}`;
  const keywords = [...route.keywords, ...baseKeywords].join(", ");
  const jsonLd = JSON.stringify(buildJsonLd(siteUrl, natureKitchenUrl)).replace(/</g, "\\u003c");

  return [
    `<title>${escapeAttr(route.title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    `<meta name="keywords" content="${escapeAttr(keywords)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:site_name" content="${siteName}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${escapeAttr(defaultImage.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join("\n    ");
}

export function renderSitemap(siteUrl: string) {
  const lastmod = new Date().toISOString();
  const urls = seoRoutes
    .map(
      (r) =>
        `  <url>\n    <loc>${absoluteUrl(siteUrl, r.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changeFrequency}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function renderRobots(siteUrl: string) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
}
