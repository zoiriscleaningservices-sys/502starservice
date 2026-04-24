import { MetadataRoute } from 'next';
import { locations, services } from '../lib/data';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.502starservices.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Core Pages
  routes.push({
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1, // Full priority as requested
  });

  routes.push({
    url: `${BASE_URL}/about-us/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  });

  routes.push({
    url: `${BASE_URL}/contact-us/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  });

  // Location Silo Pages
  for (const loc of locations) {
    routes.push({
      url: `${BASE_URL}/${loc.id}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    });
  }

  // Service Silo Pages
  for (const srv of services) {
    routes.push({
      url: `${BASE_URL}/${srv.id}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    });
  }

  // Cross-Matrix Pages (Location + Service)
  for (const loc of locations) {
    for (const srv of services) {
      routes.push({
        url: `${BASE_URL}/${loc.id}/${srv.id}/`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      });
    }
  }

  return routes;
}
