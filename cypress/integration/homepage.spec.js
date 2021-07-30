/* eslint-disable no-undef */

describe('Home page', () => {
  it('should render "any region" on /homes', () => {
    cy.visit('http://localhost:3000/homes');
    cy.get('[data-cy=Where]').contains('Any region');
  });

  it('should render Nashvile on /regions/Nashville', () => {
    cy.visit('http://localhost:3000/regions/Nashville');
    cy.get('[data-cy=Where]').contains('Nashville, Tennessee');
  });

  it('should render properly by url and return expected results', () => {
    cy.visit(
      'http://localhost:3000/regions/Nashville?checkIn=2021-07-05&checkOut=2021-07-09&guests=4&order=PRICE_ASC&coupon=TEST'
    );
    cy.get('[data-cy=Where]').contains('Nashville, Tennessee');
    cy.get('[data-cy=DatePicker]').contains('2021-07-05 - 2021-07-09');
    cy.get('[data-cy=Who]').contains('4 guests');
    cy.get('[data-cy=Order]').contains('Price: lowest first');
    cy.get('[data-cy=Input]').should('have.value', 'TEST');

    cy.get('[data-cy=Count]').contains('5');
  });

  it('should scroll page', () => {
    cy.visit('http://localhost:3000/homes');

    cy.get('[data-cy=HomeItem]').should('have.length', 10);
    cy.scrollTo('bottom');
    cy.get('[data-cy=HomeItem]').should('have.length', 20);
  });

  it('should get total price', () => {
    cy.visit(
      'http://localhost:3000/homes?checkIn=2021-07-05&checkOut=2021-07-09'
    );

    cy.get('[data-cy=TotalPrice]', { timeout: 10000 }).contains('$3,814');
    cy.get('[data-cy=TotalPricePerNight]').contains('$954 per night');
  });

  it('should get price range', () => {
    cy.visit('http://localhost:3000/homes');

    cy.get('[data-cy=RangeHigh]').contains('$318 - $556');
    cy.get('[data-cy=RangeLow]').contains('$1,192 - $1,987');
  });

  it('should render empty page', () => {
    cy.visit(
      'http://localhost:3000/homes?checkIn=2021-07-06&checkOut=2021-07-07'
    );

    cy.get('[data-cy=EmptyPage]').contains('See all homes');
  });
});
