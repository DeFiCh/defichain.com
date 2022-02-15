context('/dfi page on desktop', () => {
  before(() => {
    cy.visit('/dfi')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', '$DFI')
    cy.findByTestId('Header.desc.main').should('have.text', 'Learn about and acquire the $DFI coin. Join the DeFiChain Insiders.')
  })

  it('should have first section information', function () {
    cy.findByTestId('DfiPage.Section.Heading').should('have.text', '$DFI coin')
    cy.findByTestId('DfiPage.Section.Text').should('be.visible')
    cy.findByTestId('DfiPage.Section.Note').should('be.visible')
  })

  it('should utilities section', function () {
    cy.findByTestId('DfiPage.Utilities.Heading').should('have.text', '$DFI coin utility')
    cy.findByTestId('DfiPage.Utilities.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Fees').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Nodes').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Collateral').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Token').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Proposal').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Pools').should('be.visible')
  })

  it('should have distribution section', function () {
    cy.findByTestId('DfiPage.Distribution.Heading').should('have.text', 'Initial Token Distribution')
    cy.findByTestId('DfiPage.Distribution.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Distribution.Chart').should('be.visible')
  })

  it('should exchange section', function () {
    cy.findByTestId('DfiPage.Exchange.Heading').should('have.text', 'Exchanges')
    cy.findByTestId('DfiPage.Exchange.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Text').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Bittrue').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Bittrex').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Kucoin').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Hotbit').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.EasyAu').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.EasyNz').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Hoo').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Transak').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Dfx').should('be.visible')
  })
  it('should exchange section', function () {
    cy.findByTestId('DfiPage.Staking.Heading').should('have.text', 'Staking')
    cy.findByTestId('DfiPage.Staking.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Staking.Text').should('be.visible')
    cy.findByTestId('DfiPage.Staking.Kucoin').should('be.visible')
    cy.findByTestId('DfiPage.Staking.Cakedefi').should('be.visible')
    cy.findByTestId('DfiPage.Staking.Hotbit').should('be.visible')
  })

  it('should have developers section', function () {
    cy.findByTestId('DfiPage.Developers.Heading').should('have.text', 'Developers')
    cy.findByTestId('DfiPage.Developers.Text').should('be.visible')
    cy.findByTestId('DfiPage.Developers.Desc').should('be.visible')
  })
})

context('/dfi page on mobile', () => {
  before(() => {
    cy.visit('/dfi')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', '$DFI')
    cy.findByTestId('Header.desc.main').should('have.text', 'Learn about and acquire the $DFI coin. Join the DeFiChain Insiders.')
  })

  it('should have first section information', function () {
    cy.findByTestId('DfiPage.Section.Heading').should('have.text', '$DFI coin')
    cy.findByTestId('DfiPage.Section.Text').should('be.visible')
    cy.findByTestId('DfiPage.Section.Note').should('be.visible')
  })

  it('should utilities section', function () {
    cy.findByTestId('DfiPage.Utilities.Heading').should('have.text', '$DFI coin utility')
    cy.findByTestId('DfiPage.Utilities.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Fees').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Nodes').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Collateral').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Token').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Proposal').should('be.visible')
    cy.findByTestId('DfiPage.Utilities.Pools').should('be.visible')
  })

  it('should have distribution section', function () {
    cy.findByTestId('DfiPage.Distribution.Heading').should('have.text', 'Initial Token Distribution')
    cy.findByTestId('DfiPage.Distribution.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Distribution.Chart').should('be.visible')
  })

  it('should exchange section', function () {
    cy.findByTestId('DfiPage.Exchange.Heading').should('have.text', 'Exchanges')
    cy.findByTestId('DfiPage.Exchange.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Text').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Bittrue').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Bittrex').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Kucoin').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Hotbit').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.EasyAu').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.EasyNz').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Hoo').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Transak').should('be.visible')
    cy.findByTestId('DfiPage.Exchange.Dfx').should('be.visible')
  })
  it('should exchange section', function () {
    cy.findByTestId('DfiPage.Staking.Heading').should('have.text', 'Staking')
    cy.findByTestId('DfiPage.Staking.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Staking.Text').should('be.visible')
    cy.findByTestId('DfiPage.Staking.Kucoin').should('be.visible')
    cy.findByTestId('DfiPage.Staking.Cakedefi').should('be.visible')
    cy.findByTestId('DfiPage.Staking.Hotbit').should('be.visible')
  })

  it('should have developers section', function () {
    cy.findByTestId('DfiPage.Developers.Heading').should('have.text', 'Developers')
    cy.findByTestId('DfiPage.Developers.Text').should('be.visible')
    cy.findByTestId('DfiPage.Developers.Desc').should('be.visible')
  })
})
