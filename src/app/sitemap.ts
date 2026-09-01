import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["privacy", "terms", "refund"].map(paper => ({
      url: `${site.url}/${paper}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
