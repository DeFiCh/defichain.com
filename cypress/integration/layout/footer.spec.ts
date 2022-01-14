context('<Footer/> on desktop', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport('macbook-13')
  })


  it('should have Defichain Logo', function () {
    cy.findByTestId('Footer.Logo').should('be.visible')
  })

  it('should Footer Heading', function () {
    cy.findByTestId('Footer.Heading').should('have.text', 'Native Decentralized Finance for Bitcoin.')
  })

  it('should have Footer sitemap links', function () {
    cy.findByTestId('FooterSectionSitemap.DFI').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.DFI').should('have.attr', 'href', '/dfi')
    cy.findByTestId('FooterSectionSitemap.DEX').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.DEX').should('have.attr', 'href', '/dex')
    cy.findByTestId('FooterSectionSitemap.Developers').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Developers').should('have.attr', 'href', '/developers')
    cy.findByTestId('FooterSectionSitemap.Ecosystem').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Ecosystem').should('have.attr', 'href', '/ecosystem')
    cy.findByTestId('FooterSectionSitemap.Foundation').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Foundation').should('have.attr', 'href', '/foundation')
    cy.findByTestId('FooterSectionSitemap.Downloads').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Downloads').should('have.attr', 'href', '/downloads')
    cy.findByTestId('FooterSectionSitemap.Media').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Media').should('have.attr', 'href', '/media')
    cy.findByTestId('FooterSectionSitemap.Learn').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Learn').should('have.attr', 'href', '/learn')
    cy.findByTestId('FooterSectionSitemap.Security').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Security').should('have.attr', 'href', '/security')
    cy.findByTestId('FooterSectionSitemap.BugBounty').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.BugBounty').should('have.attr', 'href', '/bug-bounty')
    cy.findByTestId('FooterSectionSitemap.WhitePaper').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.WhitePaper').should('have.attr', 'href', '/white-paper')
  })

  it('should have Footer Social links', function () {
    cy.findByTestId('FooterExternalLink.Twitter').should('be.visible')
    cy.findByTestId('FooterExternalLink.Twitter').should('have.attr', 'href', 'https://twitter.com/defichain')
    cy.findByTestId('FooterExternalLink.Youtube').should('be.visible')
    cy.findByTestId('FooterExternalLink.Youtube').should('have.attr', 'href', 'https://www.youtube.com/DeFiChain')
    cy.findByTestId('FooterExternalLink.Reddit').should('be.visible')
    cy.findByTestId('FooterExternalLink.Reddit').should('have.attr', 'href', 'https://www.reddit.com/r/defiblockchain/')
    cy.findByTestId('FooterExternalLink.Linkedin').should('be.visible')
    cy.findByTestId('FooterExternalLink.Linkedin').should('have.attr', 'href', 'https://www.linkedin.com/company/defichain')
    cy.findByTestId('FooterExternalLink.Discord').should('be.visible')
    cy.findByTestId('FooterExternalLink.Discord').should('have.attr', 'href', 'https://discord.com/invite/py55egyaGy')
    cy.findByTestId('FooterExternalLink.Github').should('be.visible')
    cy.findByTestId('FooterExternalLink.Github').should('have.attr', 'href', 'https://github.com/DeFiCh/ain')
    cy.findByTestId('FooterExternalLink.Facebook').should('be.visible')
    cy.findByTestId('FooterExternalLink.Facebook').should('have.attr', 'href', 'https://www.facebook.com/defichain.official')
    cy.findByTestId('FooterExternalLink.MerchUS').should('be.visible')
    cy.findByTestId('FooterExternalLink.MerchUS').should('have.attr', 'href', 'https://defichain.myspreadshop.com/')
    cy.findByTestId('FooterExternalLink.MerchUK').should('be.visible')
    cy.findByTestId('FooterExternalLink.MerchUK').should('have.attr', 'href', 'https://defichain.myspreadshop.co.uk/')
    cy.findByTestId('FooterExternalLink.TelegramEN').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramEN').should('have.attr', 'href', 'https://t.me/defiblockchain')
    cy.findByTestId('FooterExternalLink.TelegramES').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramES').should('have.attr', 'href', 'https://t.me/defiblockchain_ES')
    cy.findByTestId('FooterExternalLink.TelegramDE').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramDE').should('have.attr', 'href', 'https://t.me/defiblockchain_DE')
    cy.findByTestId('FooterExternalLink.TelegramIT').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramIT').should('have.attr', 'href', 'https://t.me/defiblockchain_IT')
    cy.findByTestId('FooterExternalLink.TelegramFR').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramFR').should('have.attr', 'href', 'https://t.me/defiblockchain_FR')
    cy.findByTestId('FooterExternalLink.TelegramZH').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramZH').should('have.attr', 'href', 'https://t.me/defiblockchain_ZH')
  })

  it('should tiny footer links', function () {
    cy.findByTestId('Footer.Privacy').should('be.visible')
    cy.findByTestId('Footer.Privacy').should('have.attr', 'href', '/privacy-policy')
  })
})



context('<Footer/> on mobile', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })


  it('should have Defichain Logo', function () {
    cy.findByTestId('Footer.Logo').should('be.visible')
  })

  it('should Footer Heading', function () {
    cy.findByTestId('Footer.Heading').should('have.text', 'Native Decentralized Finance for Bitcoin.')
  })

  it('should have Footer sitemap links', function () {
    cy.findByTestId('FooterSectionSitemap.DFI').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.DFI').should('have.attr', 'href', '/dfi')
    cy.findByTestId('FooterSectionSitemap.DEX').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.DEX').should('have.attr', 'href', '/dex')
    cy.findByTestId('FooterSectionSitemap.Developers').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Developers').should('have.attr', 'href', '/developers')
    cy.findByTestId('FooterSectionSitemap.Ecosystem').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Ecosystem').should('have.attr', 'href', '/ecosystem')
    cy.findByTestId('FooterSectionSitemap.Foundation').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Foundation').should('have.attr', 'href', '/foundation')
    cy.findByTestId('FooterSectionSitemap.Downloads').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Downloads').should('have.attr', 'href', '/downloads')
    cy.findByTestId('FooterSectionSitemap.Media').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Media').should('have.attr', 'href', '/media')
    cy.findByTestId('FooterSectionSitemap.Learn').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Learn').should('have.attr', 'href', '/learn')
    cy.findByTestId('FooterSectionSitemap.Security').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.Security').should('have.attr', 'href', '/security')
    cy.findByTestId('FooterSectionSitemap.BugBounty').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.BugBounty').should('have.attr', 'href', '/bug-bounty')
    cy.findByTestId('FooterSectionSitemap.WhitePaper').should('be.visible')
    cy.findByTestId('FooterSectionSitemap.WhitePaper').should('have.attr', 'href', '/white-paper')
  })

  it('should have Footer Social links', function () {
    cy.findByTestId('FooterExternalLink.Twitter').should('be.visible')
    cy.findByTestId('FooterExternalLink.Twitter').should('have.attr', 'href', 'https://twitter.com/defichain')
    cy.findByTestId('FooterExternalLink.Youtube').should('be.visible')
    cy.findByTestId('FooterExternalLink.Youtube').should('have.attr', 'href', 'https://www.youtube.com/DeFiChain')
    cy.findByTestId('FooterExternalLink.Reddit').should('be.visible')
    cy.findByTestId('FooterExternalLink.Reddit').should('have.attr', 'href', 'https://www.reddit.com/r/defiblockchain/')
    cy.findByTestId('FooterExternalLink.Linkedin').should('be.visible')
    cy.findByTestId('FooterExternalLink.Linkedin').should('have.attr', 'href', 'https://www.linkedin.com/company/defichain')
    cy.findByTestId('FooterExternalLink.Discord').should('be.visible')
    cy.findByTestId('FooterExternalLink.Discord').should('have.attr', 'href', 'https://discord.com/invite/py55egyaGy')
    cy.findByTestId('FooterExternalLink.Github').should('be.visible')
    cy.findByTestId('FooterExternalLink.Github').should('have.attr', 'href', 'https://github.com/DeFiCh/ain')
    cy.findByTestId('FooterExternalLink.Facebook').should('be.visible')
    cy.findByTestId('FooterExternalLink.Facebook').should('have.attr', 'href', 'https://www.facebook.com/defichain.official')
    cy.findByTestId('FooterExternalLink.MerchUS').should('be.visible')
    cy.findByTestId('FooterExternalLink.MerchUS').should('have.attr', 'href', 'https://defichain.myspreadshop.com/')
    cy.findByTestId('FooterExternalLink.MerchUK').should('be.visible')
    cy.findByTestId('FooterExternalLink.MerchUK').should('have.attr', 'href', 'https://defichain.myspreadshop.co.uk/')
    cy.findByTestId('FooterExternalLink.TelegramEN').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramEN').should('have.attr', 'href', 'https://t.me/defiblockchain')
    cy.findByTestId('FooterExternalLink.TelegramES').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramES').should('have.attr', 'href', 'https://t.me/defiblockchain_ES')
    cy.findByTestId('FooterExternalLink.TelegramDE').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramDE').should('have.attr', 'href', 'https://t.me/defiblockchain_DE')
    cy.findByTestId('FooterExternalLink.TelegramIT').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramIT').should('have.attr', 'href', 'https://t.me/defiblockchain_IT')
    cy.findByTestId('FooterExternalLink.TelegramFR').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramFR').should('have.attr', 'href', 'https://t.me/defiblockchain_FR')
    cy.findByTestId('FooterExternalLink.TelegramZH').should('be.visible')
    cy.findByTestId('FooterExternalLink.TelegramZH').should('have.attr', 'href', 'https://t.me/defiblockchain_ZH')
  })

  it('should tiny footer links', function () {
    cy.findByTestId('Footer.Privacy').should('be.visible')
    cy.findByTestId('Footer.Privacy').should('have.attr', 'href', '/privacy-policy')
  })
})
