/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://create-blog-with-nextjs.vercel.app', // <-- change this to your final site
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  outDir: 'public', // <-- This avoids the /out folder entirely
};
