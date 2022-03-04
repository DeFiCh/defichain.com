context('/downloads page on desktop', () => {
  before(() => {
    cy.visit('/downloads')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', 'Downloads')
    cy.findByTestId('Header.desc.main').should('have.text', 'Download applications for mobile, macOS, Windows and Linux.')
  })

  it('should have page heading', function () {
    cy.findByTestId('DownloadsPage.Heading').should('have.text', 'Choose your own wallet.')
    cy.findByTestId('DownloadsPage.Heading').should('be.visible')
  })

  it('should have Light Wallets', function () {
    cy.findByTestId('LightWallets.Dfc').should('be.visible')
    cy.findByTestId('LightWallets.Dfx').should('be.visible')
    cy.findByTestId('LightWallets.Saiive').should('be.visible')
  })

  it('should have Fullnode wallets', function () {
    cy.findByTestId('FullNodeWallets.Dfc').should('be.visible')
    cy.findByTestId('FullNodeWallets.Rpi').should('be.visible')
    cy.findByTestId('FullNodeWallets.Cli').should('be.visible')
    cy.findByTestId('FullNodeWallets.Saiive').should('be.visible')
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
    cy.findByTestId('Header.desc.main').should('have.text', 'Download applications for mobile, macOS, Windows and Linux.')
  })

  it('should have page heading', function () {
    cy.findByTestId('DownloadsPage.Heading').should('have.text', 'Choose your own wallet.')
    cy.findByTestId('DownloadsPage.Heading').should('be.visible')
  })

  it('should have Light Wallets', function () {
    cy.findByTestId('LightWallets.Dfc').should('be.visible')
    cy.findByTestId('LightWallets.Dfx').should('be.visible')
    cy.findByTestId('LightWallets.Saiive').should('be.visible')
  })

  it('should have Fullnode wallets', function () {
    cy.findByTestId('FullNodeWallets.Dfc').should('be.visible')
    cy.findByTestId('FullNodeWallets.Rpi').should('be.visible')
    cy.findByTestId('FullNodeWallets.Cli').should('be.visible')
    cy.findByTestId('FullNodeWallets.Saiive').should('be.visible')
  })
})
