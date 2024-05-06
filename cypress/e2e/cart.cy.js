import {ProductSearch} from '../fixtures/shopping.json'
describe('Cart Tests', () => {
  context('Add Items to Cart , Remove Items from Cart and Verify Cart Contents', () => {
        beforeEach(() => {
            cy.clearAllCookies();
            cy.visit('/');
            //cy.loadProductPage();       
        }); 

        it('Add Items to Cart', () => { 
            cy.loadProductPage();  
            cy.addFirstItemtoCart();
            cy.verifyAddtoCartSuccessfulModal();
            cy.clickonContinueShopping();
            cy.addSecondItemtoCart();
            cy.verifyAddtoCartSuccessfulModal();
            cy.verifyViewCart();
            cy.verifyCartItemContents();
            cy.verifyCheckoutButton("true");
        });
        it('Remove Items from Cart', () => { 
            cy.loadProductPage();  
            cy.addFirstItemtoCart();
            cy.clickonContinueShopping();
            cy.addSecondItemtoCart();
            cy.verifyViewCart();
            cy.removeFirstItemFromCart();
            cy.removeSecondItemFromCart();
            cy.verifyEmptyCart();
        });
    });
});