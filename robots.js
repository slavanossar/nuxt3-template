export default [
  { UserAgent: '*' },
  { Disallow: '/admin' },
  { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` },
]
