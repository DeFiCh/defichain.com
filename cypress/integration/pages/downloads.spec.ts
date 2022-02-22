context('/downloads page on desktop', () => {
  before(() => {
    cy.visit('/downloads')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', 'Downloads')
    cy.findByTestId('Header.desc.main').should('have.text', 'Download applications for mobile, Mac, Windows and Linux.')
  })

  it('should have page heading', function () {
    cy.findByTestId('DownloadsPage.Heading').should('have.text', 'Choose your own wallet.')
    cy.findByTestId('DownloadsPage.Heading').should('be.visible')
  })

  it('should have page section', function () {
    cy.findByTestId('DownloadsPage.Dfi').should('be.visible')
    cy.findByTestId('DownloadsPage.DesktopWallet').should('be.visible')
    cy.findByTestId('DownloadsPage.Dfx').should('be.visible')
    cy.findByTestId('DownloadsPage.SaiiveDesktop').should('be.visible')
    cy.findByTestId('DownloadsPage.SaiiveMobile').should('be.visible')
    cy.findByTestId('DownloadsPage.DfiNode').should('be.visible')
    cy.findByTestId('DownloadsPage.Cli').should('be.visible')
  })
})

context('/downloads page on mobile', () => {
  before(() => {
    cy.visit('/downloads')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', 'Downloads')
    cy.findByTestId('Header.desc.main').should('have.text', 'Download applications for mobile, Mac, Windows and Linux.')
  })

  it('should have page heading', function () {
    cy.findByTestId('DownloadsPage.Heading').should('have.text', 'Choose your own wallet.')
    cy.findByTestId('DownloadsPage.Heading').should('be.visible')
  })

  it('should have page section', function () {
    cy.findByTestId('DownloadsPage.Dfi').should('be.visible')
    cy.findByTestId('DownloadsPage.DesktopWallet').should('be.visible')
    cy.findByTestId('DownloadsPage.Dfx').should('be.visible')
    cy.findByTestId('DownloadsPage.SaiiveDesktop').should('be.visible')
    cy.findByTestId('DownloadsPage.SaiiveMobile').should('be.visible')
    cy.findByTestId('DownloadsPage.DfiNode').should('be.visible')
    cy.findByTestId('DownloadsPage.Cli').should('be.visible')
  })
})
