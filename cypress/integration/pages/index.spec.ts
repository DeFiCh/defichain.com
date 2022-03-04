context('/ on macbook-16', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have title is DeFiChain.com', () => {
    cy.findByTestId('Header.title').should('have.text', 'Native Decentralized Finance for Bitcoin')
    cy.findByTestId('Header.desc.main').should('have.text', 'A blockchain dedicated to fast, intelligent and transparent decentralized financial services, accessible by everyone.')
  })

  it('should have Homepage slider cards', function () {
    cy.findByTestId('CardSection').should('be.visible')
  })

  it('should have comparison section', function () {
    cy.findByTestId('ComparisonSection').within(() => {
      cy.findByTestId('title').should('be.visible').should('have.text', 'The Post-Fintech Revolution')
      cy.findByTestId('desc').should('be.visible').should('have.text', 'From trust-based to trust-less, decentralized finance overcomes what Fintech could not solve in traditional finance.')
    })
    cy.findByTestId('ComparisionTable').should('be.visible')
    cy.findByTestId('ComparisionTable').should('contain.text', 'Traditional Finance')
    cy.findByTestId('ComparisionTable').should('contain.text', 'FinTech')
    cy.findByTestId('ComparisionTable').should('contain.text', 'DeFi')
  })

  it('should have Benefits section', function () {
    cy.findByTestId('BenefitSection.Benefits').within(() => {
      cy.findByTestId('Benefits.title').should('be.visible').should('have.text', 'Benefits of DeFiChain.')
      cy.findByTestId('Variety').should('be.visible')
      cy.findByTestId('Throughput').should('be.visible')
      cy.findByTestId('Benefits.Security').should('be.visible')
      cy.findByTestId('Development').should('be.visible')
      cy.findByTestId('Immutability').should('be.visible')
      cy.findByTestId('Governance').should('be.visible')
    })
    cy.findByTestId('BenefitSection.Design').within(() => {
      cy.findByTestId('Design.title').should('be.visible').should('have.text', 'Designed and engineered for decentralized finance dApps.')
      cy.findByTestId('WrappedToken').should('be.visible')
      cy.findByTestId('Lending').should('be.visible')
      cy.findByTestId('Design.Security').should('be.visible')
      cy.findByTestId('Exchanges').should('be.visible')
      cy.findByTestId('Transfer').should('be.visible')
      cy.findByTestId('Assets').should('be.visible')
      cy.findByTestId('Dividends').should('be.visible')
      cy.findByTestId('Debt').should('be.visible')
    })

  })

  it('should have distribution section', function () {
    cy.findByTestId('DistributionSection').within(() => {
      cy.findByTestId('title').should('be.visible').should('have.text', 'Built-on-bitcoin')
      cy.findByTestId('Nodes.Title').should('be.visible').should('have.text', 'Decentralized and distributed')
      cy.findByTestId('desc').should('be.visible').should('have.text', 'DeFiChain marries the best of Proof-of-Stake, with the security and immutability of Bitcoin.')
      cy.findByTestId('Nodes.Desc').should('be.visible').should('have.text', 'DeFiChain nodes are distributed globally across datacenters in the US, Canada, Europe, India, Singapore and Australia.')
      cy.findByTestId('image').should('be.visible')
      cy.findByTestId('Nodes.Image').should('be.visible')
    })
  })

  it('should have roadmap section', function () {
    cy.findByTestId('RoadmapSection').should('be.visible').within(() => {
      cy.findByTestId('RoadmapSection.Title').should('be.visible').should('have.text', 'Roadmap')
      cy.findByTestId('RoadmapSection.2019').should('be.visible')
      cy.findByTestId('RoadmapSection.2022').should('be.visible')
      cy.findByTestId('RoadmapSection.2021').should('be.visible')
      cy.findByTestId('RoadmapSection.Future').should('be.visible')
    })
  })
})


context('/ on iphone-x', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })
  it('should have title is DeFiChain.com', () => {
    cy.findByTestId('Header.title').should('have.text', 'Native Decentralized Finance for Bitcoin')
    cy.findByTestId('Header.desc.main').should('have.text', 'A blockchain dedicated to fast, intelligent and transparent decentralized financial services, accessible by everyone.')
  })

  it('should have Homepage slider cards', function () {
    cy.findByTestId('CardSection').should('be.visible')
  })

  it('should have comparison section', function () {
    cy.findByTestId('ComparisonSection').within(() => {
      cy.findByTestId('title').should('be.visible').should('have.text', 'The Post-Fintech Revolution')
      cy.findByTestId('desc').should('be.visible').should('have.text', 'From trust-based to trust-less, decentralized finance overcomes what Fintech could not solve in traditional finance.')
    })
    cy.findByTestId('ComparisionTable').should('be.visible')
    cy.findByTestId('ComparisionTable').should('contain.text', 'Traditional Finance')
    cy.findByTestId('ComparisionTable').should('contain.text', 'FinTech')
    cy.findByTestId('ComparisionTable').should('contain.text', 'DeFi')
  })

  it('should have Benefits section', function () {
    cy.findByTestId('BenefitSection.Benefits').within(() => {
      cy.findByTestId('Benefits.title').should('be.visible').should('have.text', 'Benefits of DeFiChain.')
      cy.findByTestId('Variety').should('be.visible')
      cy.findByTestId('Throughput').should('be.visible')
      cy.findByTestId('Benefits.Security').should('be.visible')
      cy.findByTestId('Development').should('be.visible')
      cy.findByTestId('Immutability').should('be.visible')
      cy.findByTestId('Governance').should('be.visible')
    })
    cy.findByTestId('BenefitSection.Design').within(() => {
      cy.findByTestId('Design.title').should('be.visible').should('have.text', 'Designed and engineered for decentralized finance dApps.')
      cy.findByTestId('WrappedToken').should('be.visible')
      cy.findByTestId('Lending').should('be.visible')
      cy.findByTestId('Design.Security').should('be.visible')
      cy.findByTestId('Exchanges').should('be.visible')
      cy.findByTestId('Transfer').should('be.visible')
      cy.findByTestId('Assets').should('be.visible')
      cy.findByTestId('Dividends').should('be.visible')
      cy.findByTestId('Debt').should('be.visible')
    })

  })

  it('should have distribution section', function () {
    cy.findByTestId('DistributionSection').within(() => {
      cy.findByTestId('title').should('be.visible').should('have.text', 'Built-on-bitcoin')
      cy.findByTestId('Nodes.Title').should('be.visible').should('have.text', 'Decentralized and distributed')
      cy.findByTestId('desc').should('be.visible').should('have.text', 'DeFiChain marries the best of Proof-of-Stake, with the security and immutability of Bitcoin.')
      cy.findByTestId('Nodes.Desc').should('be.visible').should('have.text', 'DeFiChain nodes are distributed globally across datacenters in the US, Canada, Europe, India, Singapore and Australia.')
      cy.findByTestId('image').should('be.visible')
      cy.findByTestId('Nodes.Image').should('be.visible')
    })
  })

  it('should have roadmap section', function () {
    cy.findByTestId('RoadmapSection').should('be.visible').within(() => {
      cy.findByTestId('RoadmapSection.Title').should('be.visible').should('have.text', 'Roadmap')
      cy.findByTestId('RoadmapSection.2019').should('be.visible')
      cy.findByTestId('RoadmapSection.2022').should('be.visible')
      cy.findByTestId('RoadmapSection.2021').should('be.visible')
      cy.findByTestId('RoadmapSection.Future').should('be.visible')
    })
  })
})
