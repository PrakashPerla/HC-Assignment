import {ProductSearch} from '../fixtures/shopping.json'
describe('Product Search Tests', () => {
  context('Product Search Landing Page and Search Product Tests', () => {
      before(() => {
        cy.clearAllCookies();
        cy.visit('/');
        //cy.loadProductPage();       
      }); 

      it('Verify Search Product', () => { 
        cy.loadProductPage();  
        cy.verifyProductPageCall();
        cy.verifyUserLocation("Product Page");
        cy.enterProductSearchText(ProductSearch.SearchText);
        cy.clickProductSearch();
        cy.verifySearchedProducts();
        cy.verifyProductSearchResults("Product",ProductSearch.SearchText);
      });
  });
});