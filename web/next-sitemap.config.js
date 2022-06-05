/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.eliastgutierrez.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      'https://www.eliastgutierrez.com/sitemap.xml',
      'https://www.eliastgutierrez.com/server-sitemap.xml',
    ],
  },
};
