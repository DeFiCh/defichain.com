context('/dfi page on desktop', () => {
  before(() => {
    cy.visit('/dfi')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', '$DFI')
    cy.findByTestId('Header.desc.main').should('have.text', 'Learn about and acquire the $DFI coin')
  })

  it('should have DFICoinSection', function () {
    cy.findByTestId('DFICoinSection').within(() => {
      cy.findByTestId('Section.Title').should('be.visible').should('have.text', '$DFI coin')
      cy.findByTestId('DfiPage.Section.Text').should('be.visible')
      cy.findByTestId('DfiPage.Section.Note').should('be.visible')
    })
  })

  it('should UtilitySection', function () {
    cy.findByTestId('UtilitySection').within(() => {
      cy.findByTestId('Section.Title').should('be.visible').should('have.text', '$DFI coin utility')
      cy.findByTestId('UtilitySection.Fees').should('be.visible')
      cy.findByTestId('UtilitySection.Nodes').should('be.visible')
      cy.findByTestId('UtilitySection.Collateral').should('be.visible')
      cy.findByTestId('UtilitySection.Token').should('be.visible')
      cy.findByTestId('UtilitySection.Proposal').should('be.visible')
      cy.findByTestId('UtilitySection.Pools').should('be.visible')
    })
  })

  it('should have DistributionSection', function () {
    cy.findByTestId('DistributionSection').within(() => {
      cy.findByTestId('Section.Title').should('be.visible').should('have.text', 'Initial Token Distribution')
      cy.findByTestId('DistributionSection.Text').should('be.visible')
      cy.findByTestId('DistributionSection.Chart').should('be.visible')
    })
  })

  it('should have Acquiring section', function () {
    cy.findByTestId('ExchangeSection').within(() => {
      cy.findByTestId('Section.Title').should('be.visible').should('have.text', 'Acquiring $DFI coins')
      cy.findByTestId('ExchangeSection.Desc').should('be.visible')

      cy.findByTestId('ExchangeSection.Heading').should('be.visible').should('have.text', 'Exchanges')
      cy.findByTestId('ExchangeSection.Text').should('be.visible')
      cy.findByTestId('ExchangeSection.Bittrue').should('be.visible')
      cy.findByTestId('ExchangeSection.Bittrex').should('be.visible')
      cy.findByTestId('ExchangeSection.Kucoin').should('be.visible')
      cy.findByTestId('ExchangeSection.EasyAu').should('be.visible')
      cy.findByTestId('ExchangeSection.EasyNz').should('be.visible')
      cy.findByTestId('ExchangeSection.Huobi').should('be.visible')
      cy.findByTestId('ExchangeSection.Transak').should('be.visible')
      cy.findByTestId('ExchangeSection.Dfx').should('be.visible')
      cy.findByTestId('ExchangeSection.Bit').should('be.visible')

      cy.findByTestId('DfiPage.Staking.Heading').should('be.visible').should('have.text', 'Staking')
      cy.findByTestId('DfiPage.Staking.Text').should('be.visible')
      cy.findByTestId('DfiPage.Staking.Kucoin').should('be.visible')
      cy.findByTestId('DfiPage.Staking.Cakedefi').should('be.visible')
      cy.findByTestId('DfiPage.Staking.Dfx').should('be.visible')
    })
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
    cy.findByTestId('Header.desc.main').should('have.text', 'Learn about and acquire the $DFI coin')
  })

  it('should have DFICoinSection', function () {
    cy.findByTestId('DFICoinSection').within(() => {
      cy.findByTestId('Section.Title').should('be.visible').should('have.text', '$DFI coin')
      cy.findByTestId('DfiPage.Section.Text').should('be.visible')
      cy.findByTestId('DfiPage.Section.Note').should('be.visible')
    })
  })

  it('should UtilitySection', function () {
    cy.findByTestId('UtilitySection').within(() => {
      cy.findByTestId('Section.Title').should('be.visible').should('have.text', '$DFI coin utility')
      cy.findByTestId('UtilitySection.Fees').should('be.visible')
      cy.findByTestId('UtilitySection.Nodes').should('be.visible')
      cy.findByTestId('UtilitySection.Collateral').should('be.visible')
      cy.findByTestId('UtilitySection.Token').should('be.visible')
      cy.findByTestId('UtilitySection.Proposal').should('be.visible')
      cy.findByTestId('UtilitySection.Pools').should('be.visible')
    })
  })

  it('should have DistributionSection', function () {
    cy.findByTestId('DistributionSection').within(() => {
      cy.findByTestId('Section.Title').should('be.visible').should('have.text', 'Initial Token Distribution')
      cy.findByTestId('DistributionSection.Text').should('be.visible')
      cy.findByTestId('DistributionSection.Chart').should('be.visible')
    })
  })

  it('should have Acquiring section', function () {
    cy.findByTestId('ExchangeSection').within(() => {
      cy.findByTestId('Section.Title').should('be.visible').should('have.text', 'Acquiring $DFI coins')
      cy.findByTestId('ExchangeSection.Desc').should('be.visible')

      cy.findByTestId('ExchangeSection.Heading').should('be.visible').should('have.text', 'Exchanges')
      cy.findByTestId('ExchangeSection.Text').should('be.visible')
      cy.findByTestId('ExchangeSection.Bittrue').should('be.visible')
      cy.findByTestId('ExchangeSection.Bittrex').should('be.visible')
      cy.findByTestId('ExchangeSection.Kucoin').should('be.visible')
      cy.findByTestId('ExchangeSection.EasyAu').should('be.visible')
      cy.findByTestId('ExchangeSection.EasyNz').should('be.visible')
      cy.findByTestId('ExchangeSection.Huobi').should('be.visible')
      cy.findByTestId('ExchangeSection.Transak').should('be.visible')
      cy.findByTestId('ExchangeSection.Dfx').should('be.visible')
      cy.findByTestId('ExchangeSection.Bybit').should('be.visible')
      cy.findByTestId('ExchangeSection.Swyftx').should('be.visible')

      cy.findByTestId('DfiPage.Staking.Heading').should('be.visible').should('have.text', 'Staking')
      cy.findByTestId('DfiPage.Staking.Text').should('be.visible')
      cy.findByTestId('DfiPage.Staking.Kucoin').should('be.visible')
      cy.findByTestId('DfiPage.Staking.Cakedefi').should('be.visible')
    })
  })
})
