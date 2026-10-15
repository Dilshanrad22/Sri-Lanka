import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_SITE_URL, absoluteUrl, findSeoRoute } from "../seo";

const siteUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");

function setTag(selector: string, attr: "content" | "href", value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Keeps <head> in sync on client-side navigation. The first page load
// already has the right tags from the pre-rendered HTML (see vite.config.ts).
export const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = findSeoRoute(pathname);
    const url = absoluteUrl(siteUrl, route.path);

    document.title = route.title;
    setTag('meta[name="description"]', "content", route.description);
    setTag('link[rel="canonical"]', "href", url);
    setTag('meta[property="og:url"]', "content", url);
    setTag('meta[property="og:title"]', "content", route.title);
    setTag('meta[property="og:description"]', "content", route.description);
    setTag('meta[name="twitter:title"]', "content", route.title);
    setTag('meta[name="twitter:description"]', "content", route.description);
  }, [pathname]);

  return null;
};
