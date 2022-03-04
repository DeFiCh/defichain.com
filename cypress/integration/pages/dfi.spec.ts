context('/dfi page on desktop', () => {
  before(() => {
    cy.visit('/dfi')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', '$DFI')
    cy.findByTestId('Header.desc.main').should('have.text', 'Learn about and acquire the $DFI coin.')
  })

  it('should have first section information', function () {
    cy.findByTestId('DfiPage.Section.Heading').should('have.text', '$DFI coin')
    cy.findByTestId('DfiPage.Section.Text').should('be.visible')
    cy.findByTestId('DfiPage.Section.Note').should('be.visible')
  })

  it('should utilities section', function () {
    cy.findByTestId('UtilitySection.Heading').should('have.text', '$DFI coin utility')
    cy.findByTestId('UtilitySection.Heading').should('be.visible')
    cy.findByTestId('UtilitySection.Fees').should('be.visible')
    cy.findByTestId('UtilitySection.Nodes').should('be.visible')
    cy.findByTestId('UtilitySection.Collateral').should('be.visible')
    cy.findByTestId('UtilitySection.Token').should('be.visible')
    cy.findByTestId('UtilitySection.Proposal').should('be.visible')
    cy.findByTestId('UtilitySection.Pools').should('be.visible')
  })

  it('should have Acquiring section', function () {
    cy.findByTestId('DfiPage.Acquiring.Heading').should('have.text', 'Acquiring $DFI coins')
    cy.findByTestId('DfiPage.Acquiring.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Acquiring.Text').should('be.visible')
  })

  it('should exchange section', function () {
    cy.findByTestId('ExchangeSection.Heading').should('have.text', 'Exchanges')
    cy.findByTestId('ExchangeSection.Heading').should('be.visible')
    cy.findByTestId('ExchangeSection.Text').should('be.visible')
    cy.findByTestId('ExchangeSection.Bittrue').should('be.visible')
    cy.findByTestId('ExchangeSection.Bittrex').should('be.visible')
    cy.findByTestId('ExchangeSection.Kucoin').should('be.visible')
    cy.findByTestId('ExchangeSection.Hotbit').should('be.visible')
    cy.findByTestId('ExchangeSection.EasyAu').should('be.visible')
    cy.findByTestId('ExchangeSection.EasyNz').should('be.visible')
    cy.findByTestId('ExchangeSection.Hoo').should('be.visible')
    cy.findByTestId('ExchangeSection.Transak').should('be.visible')
    cy.findByTestId('ExchangeSection.Dfx').should('be.visible')
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
    cy.findByTestId('Header.desc.main').should('have.text', 'Learn about and acquire the $DFI coin.')
  })

  it('should have first section information', function () {
    cy.findByTestId('DfiPage.Section.Heading').should('have.text', '$DFI coin')
    cy.findByTestId('DfiPage.Section.Text').should('be.visible')
    cy.findByTestId('DfiPage.Section.Note').should('be.visible')
  })

  it('should utilities section', function () {
    cy.findByTestId('UtilitySection.Heading').should('have.text', '$DFI coin utility')
    cy.findByTestId('UtilitySection.Heading').should('be.visible')
    cy.findByTestId('UtilitySection.Fees').should('be.visible')
    cy.findByTestId('UtilitySection.Nodes').should('be.visible')
    cy.findByTestId('UtilitySection.Collateral').should('be.visible')
    cy.findByTestId('UtilitySection.Token').should('be.visible')
    cy.findByTestId('UtilitySection.Proposal').should('be.visible')
    cy.findByTestId('UtilitySection.Pools').should('be.visible')
  })

  it('should have distribution section', function () {
    cy.findByTestId('DistributionSection.Heading').should('have.text', 'Initial Token Distribution')
    cy.findByTestId('DistributionSection.Heading').should('be.visible')
    cy.findByTestId('DistributionSection.Chart').should('be.visible')
  })

  it('should have Acquiring section', function () {
    cy.findByTestId('DfiPage.Acquiring.Heading').should('have.text', 'Acquiring $DFI coins')
    cy.findByTestId('DfiPage.Acquiring.Heading').should('be.visible')
    cy.findByTestId('DfiPage.Acquiring.Text').should('be.visible')
  })

  it('should exchange section', function () {
    cy.findByTestId('ExchangeSection.Heading').should('have.text', 'Exchanges')
    cy.findByTestId('ExchangeSection.Heading').should('be.visible')
    cy.findByTestId('ExchangeSection.Text').should('be.visible')
    cy.findByTestId('ExchangeSection.Bittrue').should('be.visible')
    cy.findByTestId('ExchangeSection.Bittrex').should('be.visible')
    cy.findByTestId('ExchangeSection.Kucoin').should('be.visible')
    cy.findByTestId('ExchangeSection.Hotbit').should('be.visible')
    cy.findByTestId('ExchangeSection.EasyAu').should('be.visible')
    cy.findByTestId('ExchangeSection.EasyNz').should('be.visible')
    cy.findByTestId('ExchangeSection.Hoo').should('be.visible')
    cy.findByTestId('ExchangeSection.Transak').should('be.visible')
    cy.findByTestId('ExchangeSection.Dfx').should('be.visible')
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
