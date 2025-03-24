

import { emailProjectData } from "@/lib/emailProjectsData";
import { NextResponse } from "next/server";

const BASE_URL = "https://proemaildeveloper.com";

export async function GET() {
  const staticPages = ["/", "/projects",]; // Add other static pages if needed
  const projectUrls = emailProjectData.map((data) => `/projects/${data.slug}`);

  const urls = [...staticPages, ...projectUrls]
    .map((path) => `
      <url>
        <loc>${BASE_URL}${path}</loc>
      </url>
    `)
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
