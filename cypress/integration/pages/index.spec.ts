context('/ on macbook-16', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have title is DeFiChain.com', () => {
    cy.findByTestId('Header.title').should('have.text', 'DeFiChain.com')
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
    cy.findByTestId('Header.title').should('have.text', 'DeFiChain.com')
  })
})
