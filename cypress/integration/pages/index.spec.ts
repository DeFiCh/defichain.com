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
    cy.findByTestId('SolutionSection').within(() => {
      cy.findByTestId('title').should('be.visible').should('have.text', 'The Post-Fintech Revolution')
      cy.findByTestId('desc').should('be.visible').should('have.text', 'From trust-based to trust-less, decentralized finance overcomes what Fintech could not solve in traditional finance.')
    })
    cy.findByTestId('ComparisonGraph').should('be.visible')
  })

  it('should have Benefits section', function () {
    cy.findByTestId('BenefitSection').within(() => {
      cy.findByTestId('Benefits.title').should('be.visible').should('have.text', 'Benefits of DeFiChain.')
      cy.findByTestId('Variety').should('be.visible')
      cy.findByTestId('Throughput').should('be.visible')
      cy.findByTestId('Security').should('be.visible')
      cy.findByTestId('Development').should('be.visible')
      cy.findByTestId('Immutability').should('be.visible')
      cy.findByTestId('Governance').should('be.visible')
    })
  })

  it('should have FunctionsSection', function () {
    cy.findByTestId('FunctionsSection').within(() => {
      cy.findByTestId('Design.title').should('be.visible').should('have.text', 'Designed and engineered for decentralized finance dApps.')
      cy.findByTestId('Lending').should('be.visible')
      cy.findByTestId('WrappedToken').should('be.visible')
      cy.findByTestId('Oracles').should('be.visible')
      cy.findByTestId('Exchanges').should('be.visible')
      cy.findByTestId('Transferable').should('be.visible')
      cy.findByTestId('Debt').should('be.visible')
      cy.findByTestId('Tokenization').should('be.visible')
      cy.findByTestId('Dividends').should('be.visible')
    })
  })

  it('should have BuiltOnBitcoinSection', function () {
    cy.findByTestId('BuiltOnBitcoinSection').within(() => {
      cy.findByTestId('title').should('be.visible').should('have.text', 'Built-on-bitcoin')
      cy.findByTestId('desc').should('be.visible').should('have.text', 'DeFiChain marries the best of Proof-of-Stake, with the security and immutability of Bitcoin.')
      cy.findByTestId('button').should('be.visible')
      cy.findByTestId('image').should('be.visible')
    })
  })

  it('should have distribution section', function () {
    cy.findByTestId('DistributionSection').within(() => {
      cy.findByTestId('Nodes.Title').should('be.visible').should('have.text', 'Decentralized and distributed')
      cy.findByTestId('Nodes.Desc').should('be.visible').should('have.text', 'The DeFiChain community runs more than 10,000 masternodes which are distributed globally.')
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

  it('should have SolutionSection', function () {
    cy.findByTestId('SolutionSection').within(() => {
      cy.findByTestId('title').should('be.visible').should('have.text', 'The Post-Fintech Revolution')
      cy.findByTestId('desc').should('be.visible').should('have.text', 'From trust-based to trust-less, decentralized finance overcomes what Fintech could not solve in traditional finance.')
    })
    cy.findByTestId('ComparisonGraph').should('be.visible')
  })

  it('should have Benefits section', function () {
    cy.findByTestId('BenefitSection').within(() => {
      cy.findByTestId('Benefits.title').should('be.visible').should('have.text', 'Benefits of DeFiChain.')
      cy.findByTestId('Variety').should('be.visible')
      cy.findByTestId('Throughput').should('be.visible')
      cy.findByTestId('Security').should('be.visible')
      cy.findByTestId('Development').should('be.visible')
      cy.findByTestId('Immutability').should('be.visible')
      cy.findByTestId('Governance').should('be.visible')
    })
  })

  it('should have FunctionsSection', function () {
    cy.findByTestId('FunctionsSection').within(() => {
      cy.findByTestId('Design.title').should('be.visible').should('have.text', 'Designed and engineered for decentralized finance dApps.')
      cy.findByTestId('Lending').should('be.visible')
      cy.findByTestId('WrappedToken').should('be.visible')
      cy.findByTestId('Oracles').should('be.visible')
      cy.findByTestId('Exchanges').should('be.visible')
      cy.findByTestId('Transferable').should('be.visible')
      cy.findByTestId('Debt').should('be.visible')
      cy.findByTestId('Tokenization').should('be.visible')
      cy.findByTestId('Dividends').should('be.visible')
    })
  })

  it('should have BuiltOnBitcoinSection', function () {
    cy.findByTestId('BuiltOnBitcoinSection').within(() => {
      cy.findByTestId('title').should('be.visible').should('have.text', 'Built-on-bitcoin')
      cy.findByTestId('desc').should('be.visible').should('have.text', 'DeFiChain marries the best of Proof-of-Stake, with the security and immutability of Bitcoin.')
      cy.findByTestId('button').should('be.visible')
      cy.findByTestId('image').should('be.visible')
    })
  })

  it('should have distribution section', function () {
    cy.findByTestId('DistributionSection').within(() => {
      cy.findByTestId('Nodes.Title').should('be.visible').should('have.text', 'Decentralized and distributed')
      cy.findByTestId('Nodes.Desc').should('be.visible').should('have.text', 'DeFiChain nodes are distributed globally across datacenters in the US, Canada, Europe, India, Singapore and Australia.')
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
