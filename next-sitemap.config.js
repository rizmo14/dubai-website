/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sbccleaningservices.ae",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/og"],
      },
    ],
  },
  additionalPaths: async (config) => {
    const paths = [
      // Service pages — high priority
      { loc: "/services/deep-cleaning-dubai",              priority: 0.9, changefreq: "weekly" },
      { loc: "/services/move-in-move-out-cleaning-dubai",  priority: 0.9, changefreq: "weekly" },
      { loc: "/services/office-cleaning-dubai",            priority: 0.9, changefreq: "weekly" },
      { loc: "/services/sofa-carpet-cleaning-dubai",       priority: 0.9, changefreq: "weekly" },
      { loc: "/services/villa-cleaning-dubai",             priority: 0.9, changefreq: "weekly" },
      { loc: "/services/post-construction-cleaning-dubai", priority: 0.9, changefreq: "weekly" },

      // Location pages — high priority
      { loc: "/locations/cleaning-services-marina-dubai",       priority: 0.8, changefreq: "weekly" },
      { loc: "/locations/cleaning-services-jlt-dubai",          priority: 0.8, changefreq: "weekly" },
      { loc: "/locations/cleaning-services-business-bay-dubai", priority: 0.8, changefreq: "weekly" },
      { loc: "/locations/cleaning-services-downtown-dubai",     priority: 0.8, changefreq: "weekly" },
      { loc: "/locations/cleaning-services-jumeirah-dubai",     priority: 0.8, changefreq: "weekly" },

      // Blog posts — medium priority
      { loc: "/blog/how-much-does-cleaning-cost-in-dubai",      priority: 0.7, changefreq: "monthly" },
      { loc: "/blog/best-cleaning-company-dubai-how-to-choose", priority: 0.7, changefreq: "monthly" },
      { loc: "/blog/deep-cleaning-before-ramadan-dubai",        priority: 0.7, changefreq: "monthly" },
      { loc: "/blog/move-out-cleaning-deposit-dubai",           priority: 0.7, changefreq: "monthly" },
      { loc: "/blog/office-cleaning-dubai-guide",               priority: 0.7, changefreq: "monthly" },
      { loc: "/blog/sofa-cleaning-dubai-how-often",             priority: 0.7, changefreq: "monthly" },

      // Legal pages — low priority
      { loc: "/privacy-policy", priority: 0.3, changefreq: "yearly" },
      { loc: "/terms",          priority: 0.3, changefreq: "yearly" },
    ];

    return paths.map((p) => ({
      ...p,
      lastmod: new Date().toISOString(),
    }));
  },
  // Override priority for main pages
  transform: async (config, path) => {
    // Home page gets highest priority
    if (path === "/") {
      return { loc: path, changefreq: "daily", priority: 1.0, lastmod: new Date().toISOString() };
    }
    // Services and About index pages
    if (path === "/services" || path === "/about") {
      return { loc: path, changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() };
    }
    // Contact and Book pages
    if (path === "/contact" || path === "/book") {
      return { loc: path, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    // Blog index
    if (path === "/blog") {
      return { loc: path, changefreq: "weekly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    // Default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
