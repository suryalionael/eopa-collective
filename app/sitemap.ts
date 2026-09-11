import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "about",
  "membership",
  "get-involved",
  "team",
  "contact",
  "events",
  "how-to-join",
  "partners",
  "performance-art",
  "privacy",
  "terms",
  "cookies",
  "refunds",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}/${route}${route ? "/" : ""}`,
  }));
}
