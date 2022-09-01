module.exports = {
  siteUrl: process.env.SITE_URL || 'https://defichain.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{
      userAgent: '*',
      allow: '/',
    }]
  }
}
