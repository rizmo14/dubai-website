/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sbcservicesuae.com",
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
        disallow: ["/api/", "/admin/"],
      },
    ],
  },
  additionalPaths: async (config) => {
    const paths = [
      "/services/deep-cleaning-dubai",
      "/services/move-in-move-out-cleaning-dubai",
      "/services/office-cleaning-dubai",
      "/services/sofa-carpet-cleaning-dubai",
      "/services/villa-cleaning-dubai",
      "/services/post-construction-cleaning-dubai",
      "/locations/cleaning-services-marina-dubai",
      "/locations/cleaning-services-jlt-dubai",
      "/locations/cleaning-services-business-bay-dubai",
      "/locations/cleaning-services-downtown-dubai",
      "/locations/cleaning-services-jumeirah-dubai",
    ];
    return paths.map((path) => ({
      loc: path,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
