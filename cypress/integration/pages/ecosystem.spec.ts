context('/ecosystem page on desktop', () => {
  before(() => {
    cy.visit('/ecosystem')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', 'Ecosystem')
    cy.findByTestId('Header.desc.main').should('have.text', 'Be part of the DeFiChain Ecosystem')
  })

  it('should have contribute section', function () {
    cy.findByTestId('EcosystemSection.Contribute').should('have.text', 'Contribute to DeFiChain')
    cy.findByTestId('EcosystemSection.Developer').should('be.visible')
    cy.findByTestId('EcosystemSection.Partners').should('be.visible')
  })

  it('should have partners section', function () {
    cy.findByTestId('EcosystemSection.Partners').should('have.text', 'Partners')
    cy.findByTestId('EcosystemSection.CakeDeFi').should('be.visible')
    cy.findByTestId('EcosystemSection.Staking').should('be.visible')
    cy.findByTestId('EcosystemSection.Blockfolio').should('be.visible')
    cy.findByTestId('EcosystemSection.Blockspot').should('be.visible')
    cy.findByTestId('EcosystemSection.Messari').should('be.visible')
  })
})

context('/ecosystem page on mobile', () => {
  before(() => {
    cy.visit('/ecosystem')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', 'Ecosystem')
    cy.findByTestId('Header.desc.main').should('have.text', 'Be part of the DeFiChain Ecosystem')
  })

  it('should have contribute section', function () {
    cy.findByTestId('EcosystemSection.Contribute').should('have.text', 'Contribute to DeFiChain')
    cy.findByTestId('EcosystemSection.Developer').should('be.visible')
    cy.findByTestId('EcosystemSection.Partners').should('be.visible')
  })

  it('should have partners section', function () {
    cy.findByTestId('EcosystemSection.Partners').should('have.text', 'Partners')
    cy.findByTestId('EcosystemSection.CakeDeFi').should('be.visible')
    cy.findByTestId('EcosystemSection.Staking').should('be.visible')
    cy.findByTestId('EcosystemSection.Blockfolio').should('be.visible')
    cy.findByTestId('EcosystemSection.Blockspot').should('be.visible')
    cy.findByTestId('EcosystemSection.Messari').should('be.visible')
  })
})
