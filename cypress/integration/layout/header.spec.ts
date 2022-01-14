context('<Header/> on desktop', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport('macbook-13')
  })

  it('should have Defichain Logo', function () {
    cy.findByTestId('Header.SiteLogo').should('be.visible')
  })

  it('should have header nav items', function () {
    cy.findByTestId('Desktop.HeaderLink.DFI').should('be.visible')
    cy.findByTestId('Desktop.HeaderLink.DFI').should('have.attr', 'href', '/dfi')
    cy.findByTestId('Desktop.HeaderLink.DEX').should('be.visible')
    cy.findByTestId('Desktop.HeaderLink.DEX').should('have.attr', 'href', '/dex')
    cy.findByTestId('Desktop.HeaderLink.Developers').should('be.visible')
    cy.findByTestId('Desktop.HeaderLink.Developers').should('have.attr', 'href', '/developers')
    cy.findByTestId('Desktop.HeaderLink.Ecosystem').should('be.visible')
    cy.findByTestId('Desktop.HeaderLink.Ecosystem').should('have.attr', 'href', '/ecosystem')
    cy.findByTestId('Desktop.HeaderLink.Learn').should('be.visible')
    cy.findByTestId('Desktop.HeaderLink.Learn').should('have.attr', 'href', '/learn')
    cy.findByTestId('Desktop.HeaderLink.Downloads').should('be.visible')
    cy.findByTestId('Desktop.HeaderLink.Downloads').should('have.attr', 'href', '/downloads')
    cy.get('[data-testid="Desktop.HeaderLink.DeFiScan"]').should('be.visible')
    cy.get('[data-testid="Desktop.HeaderLink.DeFiScan"]').should('have.attr', 'href', 'https://defiscan.live/')
    cy.findByTestId('SiteLangDropdown').should('be.visible')
  })
})

context('<Header/> on mobile', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })

  it('should have Defichain Logo', function () {
    cy.findByTestId('Header.SiteLogo').should('be.visible')
  })

  it('should Hamburger menu icon ', function () {
    cy.findByTestId('Header.OpenMenu').should('be.visible')
  })

  it('should Hamburger close  icon ', function () {
    cy.findByTestId('Header.OpenMenu').click().then(() => {
      cy.findByTestId('Header.CloseMenu').should('be.visible').click()
    })
  })

  it('should have header nav items', function () {
    cy.findByTestId('Header.OpenMenu').click().then(() => {
      cy.findByTestId('Mobile.HeaderLink.DFI').should('be.visible')
      cy.findByTestId('Mobile.HeaderLink.DFI').should('have.attr', 'href', '/dfi')
      cy.findByTestId('Mobile.HeaderLink.DEX').should('be.visible')
      cy.findByTestId('Mobile.HeaderLink.DEX').should('have.attr', 'href', '/dex')
      cy.findByTestId('Mobile.HeaderLink.Developers').should('be.visible')
      cy.findByTestId('Mobile.HeaderLink.Developers').should('have.attr', 'href', '/developers')
      cy.findByTestId('Mobile.HeaderLink.Ecosystem').should('be.visible')
      cy.findByTestId('Mobile.HeaderLink.Ecosystem').should('have.attr', 'href', '/ecosystem')
      cy.findByTestId('Mobile.HeaderLink.Learn').should('be.visible')
      cy.findByTestId('Mobile.HeaderLink.Learn').should('have.attr', 'href', '/learn')
      cy.get('[data-testid="Mobile.HeaderLink.Github"]').should('be.visible')
      cy.get('[data-testid="Mobile.HeaderLink.Github"]').should('have.attr', 'href', 'https://github.com/defich/ain')
      cy.get('[data-testid="Mobile.HeaderLink.DeFiScan"]').should('be.visible')
      cy.get('[data-testid="Mobile.HeaderLink.DeFiScan"]').should('have.attr', 'href', 'https://defiscan.live/')
    })
  })
})
