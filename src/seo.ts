// ---------------------------------------------------------------------------
// SEO for Sigma House Sri Lanka (main site).
// Shared by the browser (src/components/Seo.tsx) and the build
// (vite.config.ts writes a pre-filled HTML file per route plus sitemap.xml
// and robots.txt), so crawlers and link previews see the right tags without
// running JavaScript.
//
// Keyword split with the Nature Kitchen site: this site targets the stay,
// homestay and village experiences. Cooking-class searches belong to
// the separate Nature Kitchen site.
// Keep this file free of browser-only and Vite-only APIs.
// ---------------------------------------------------------------------------

// Production domain. VITE_SITE_URL overrides it at build time (e.g. for a
// preview deployment).
export const DEFAULT_SITE_URL = "https://sigmahousesl.com";

export const siteName = "Sigma House Sri Lanka";

const defaultImage = {
  path: "/banner/banner1.jpeg",
  alt: "Guests relaxing with their host in the open-air hut at Sigma House, a village homestay in Sri Lanka",
};

// Client keyword list (Oct 2026), each phrase mapped to the page whose
// content matches it:
//   Homestay, Local Family, Authentic Experience/Foods, Village Life,
//   Kananke, Galle, Down South, Tourism        -> site-wide + Home
//   Tree House                                 -> Accommodation, Experiences
//   Tea Picking, Cinnamon Making, Yoga, Village Walking,
//   Cultural, Sri Lanka Traditions             -> Experiences, Activities
//   Volunteering for Kids                      -> Activities
//   Weligama, Ahangama, Wild Life              -> South coast
//   Cooking Class                              -> Experiences (village cooking);
//                                                 the class itself is the
//                                                 Nature Kitchen site's keyword.
// Google ignores the keywords meta tag, so every phrase is also used in that
// page's title, description and visible heading.
export const baseKeywords = [
  "Sigma House Sri Lanka",
  "homestay Sri Lanka",
  "Sri Lanka village life",
  "stay with a local family Sri Lanka",
  "authentic experience Sri Lanka",
  "authentic Sri Lankan food",
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
  noIndex?: boolean;
};

export const seoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Sigma House Sri Lanka | Authentic Village Homestay near Galle",
    description:
      "Stay with a local family at our tree house homestay in Kananke, near Galle. Authentic Sri Lankan food, village life, tea picking, cinnamon making, yoga and cultural experiences down south.",
    keywords: [
      "Sri Lanka village stay",
      "village homestay Sri Lanka",
      "tree house homestay Sri Lanka",
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
    ],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/experiences",
    title: "Authentic Local Experiences in Sri Lanka | Sigma House",
    description:
      "Village cooking, cinnamon and spice garden, tea factory visit, waterfalls, village and culture walks, yoga in nature, tree house, cycling, paddy fields and temple visits from our homestay.",
    keywords: [
      "local experiences Sri Lanka",
      "tea picking Sri Lanka",
      "Ceylon tea experience",
      "cinnamon making Sri Lanka",
      "village walking tour Sri Lanka",
      "yoga in nature Sri Lanka",
      "Sri Lanka traditions",
      "cultural experience Sri Lanka",
      "temple visit Sri Lanka",
      "village cycling tour Sri Lanka",
      "waterfall visit Sri Lanka",
      "village cooking Sri Lanka",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/activities",
    title: "Volunteering with Village Kids, Yoga & Cinnamon Making | Sigma House",
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
      "Day trips down south from our homestay near Galle: surfing in Weligama and Ahangama, whale watching in Mirissa, wildlife safaris, turtle conservation and rainforest trekking.",
    keywords: [
      "Weligama",
      "Ahangama",
      "surfing Weligama",
      "surfing Ahangama",
      "wildlife Sri Lanka",
      "wildlife safari Sri Lanka",
      "whale watching Mirissa",
      "Galle day trips",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/packages",
    title: "Sri Lanka Village Stay Packages & Itineraries | Sigma House",
    description:
      "Sample 2, 3, 5 and 7-day plans combining a village homestay with cooking, tea, cinnamon, nature and culture, with an optional extension down south to the south coast.",
    keywords: [
      "Sri Lanka village stay packages",
      "Sri Lanka itinerary",
      "Sri Lanka tour package",
      "south coast Sri Lanka itinerary",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/transport",
    title: "Transport & Rentals: Tuk-Tuk, Car, Van & Bike | Sigma House",
    description:
      "Getting around during your homestay in Kananke: tuk-tuk, car or van arrangements and bike or car rental for your local experiences and day trips down south.",
    keywords: [
      "tuk-tuk hire Sri Lanka",
      "car and van hire Sri Lanka",
      "bike rental Sri Lanka",
      "transport Kananke",
    ],
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/journal",
    title: "Sri Lanka Travel Guides & Food Stories | Sigma House Journal",
    description:
      "Guides from Sigma House: what happens in a Sri Lankan cooking class, how Ceylon cinnamon is made, Sri Lankan food for beginners and planning a village stay in Sri Lanka.",
    keywords: [
      "Sri Lanka travel guide",
      "Sri Lankan food for beginners",
      "how Ceylon cinnamon is made",
      "planning a village stay Sri Lanka",
    ],
    priority: 0.5,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    title: "About Sigma House | Local Family Homestay in Kananke, Sri Lanka",
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
    title: "Guest Stories & Reviews | Sigma House Sri Lanka",
    description:
      "Guest stories from Sigma House Sri Lanka and a link to our verified Google reviews from travellers who stayed with our local family.",
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
  {
    path: "/policies",
    title: "Booking, Cancellation & Responsible Tourism Policies | Sigma House",
    description:
      "Booking and payment, cancellation and refunds, weather and safety, dietary needs, privacy and responsible tourism at Sigma House Sri Lanka.",
    keywords: ["responsible tourism Sri Lanka"],
    priority: 0.3,
    changeFrequency: "yearly",
  },
];

// Unknown paths get a non-indexable "not found" entry instead of copying
// the home page's tags and canonical URL.
export const notFoundRoute: SeoRoute = {
  path: "/404",
  title: "Page Not Found | Sigma House Sri Lanka",
  description: seoRoutes[0].description,
  keywords: [],
  priority: 0,
  changeFrequency: "yearly",
  noIndex: true,
};

export function findSeoRoute(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return seoRoutes.find((r) => r.path === path) ?? notFoundRoute;
}

export function absoluteUrl(siteUrl: string, path: string) {
  return `${siteUrl.replace(/\/$/, "")}${path === "/" ? "" : path}`;
}

// Site-wide structured data   only facts shown on the site. Add ratings or
// reviews only once they are real and linked to their source.
export function buildJsonLd(siteUrl: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      description: seoRoutes[0].description,
      url: siteUrl,
      logo: `${siteUrl}/logo/sigma-house-logo.png`,
      image: `${siteUrl}${defaultImage.path}`,
      telephone: "+94763183081",
      email: "hasithadhananjaya2020@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Imaduwa",
        addressRegion: "Southern Province",
        addressCountry: "LK",
      },
      geo: { "@type": "GeoCoordinates", latitude: 6.042044, longitude: 80.402647 },
      hasMap: "https://maps.app.goo.gl/yYRufBrzUXRY61Ea8",
      sameAs: [
        "https://www.instagram.com/sigmahouse_srilanka/",
        "https://www.facebook.com/61562298313608/",
      ],
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
export function renderHeadTags(route: SeoRoute, siteUrl: string) {
  const url = absoluteUrl(siteUrl, route.path);
  const image = `${siteUrl}${defaultImage.path}`;
  const keywords = [...route.keywords, ...baseKeywords].join(", ");
  const jsonLd = JSON.stringify(buildJsonLd(siteUrl)).replace(/</g, "\\u003c");

  return [
    `<title>${escapeAttr(route.title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    `<meta name="keywords" content="${escapeAttr(keywords)}" />`,
    `<meta name="robots" content="${route.noIndex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
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
    .filter((r) => !r.noIndex)
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
