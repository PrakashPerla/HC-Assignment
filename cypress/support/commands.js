// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//import {Cypress.config().baseUrl} from '/cypress.config.js'
import productsearch from './Page-Objects/productsearch.js'
import categories from './Page-Objects/categories.js';
import cart from './Page-Objects/cart.js';

const homepageurl=Cypress.config().baseUrl;
const productpage = new productsearch();
const category = new categories();
const scart = new cart(); 


Cypress.Commands.add("loadProductPage", () => {
    productpage.getClickonProducts().click();
});

Cypress.Commands.add("verifyProductPageCall", () => {
    cy.intercept('GET', 'https://automationexercise.com/products').as('ProductPage');
    productpage.getClickonProducts().click();
    cy.wait('@ProductPage', { timeout: 10000}).its('response.statusCode').should('eq', 200);    
});

Cypress.Commands.add("verifyUserLocation", (webpage) => {
    switch(webpage) {
        case "Product Page" :
            cy.url().should('include','/products');
        break;
        case "Home Page" :
            cy.url().should('include',homepageurl);
        break;
        case "Cart Page" :
            cy.url().should('include','view_cart');
        break;
    }
});

Cypress.Commands.add("enterProductSearchText", (searchtext) => {
    productpage.getSearchProductText().type(searchtext);
});

Cypress.Commands.add("clickProductSearch", () => {
    productpage.getSearchProductIcon().click();
});

Cypress.Commands.add("verifySearchedProducts", () => {
    //const searchproducttext=productpage.getSearchedProducts().invoke('text').toUpperCase;
    //let searchproducttext;
    //productpage.getSearchedProducts().then(($text) => {
        //searchproducttext=$text.text().toUpperCase();
    //})
    productpage.getSearchedProducts().should('be.visible')
    //expect(searchproducttext).equal('SEARCHED PRODUCTS');
    .should('have.text','Searched Products');
});
Cypress.Commands.add("verifyProductSearchResults", (searchcategory,searchtext) => {
    productpage.getProductSearchResults().should('be.visible');
    //.should('have.length',1);
    switch(searchcategory){
        case "Kids" :
            productpage.getProductSearchResults().each((item) => {
            cy.wrap(item).should('contain.text','Top' || 'Shirt');
            });
        break;
    };
    productpage.getProductSearchResults().each((item) => {
        cy.wrap(item).should('contain.text',searchtext);
        //expect(Cypress.$(item).text()).to.contains(searchtext);
    });
});
Cypress.Commands.add("verifyCategoryMenu", () => {
    category.getCategoryMenu().should('be.visible');
    category.getCategoryText().should('be.visible')
    .should('have.text','Category');
});

Cypress.Commands.add("verifyWomenCategoryMenu", (wc1,wc2,wc3) => {
    const WomenCategoriesList=[wc1,wc2,wc3]
    category.getWomenCategoryClick().should('be.visible').click();
    category.getWomenCategoryMenu().should('be.visible');
    category.getWomenCategoryMenu().each( (item,index) => {
        cy.wrap(item).should('contain.text',WomenCategoriesList[index])
    });
    category.getWomenCategoryMenuClickToClose().click();
    //category.getWomenCategoryMenu().should('not.be.visible');
    //category.getWomenCategoryMenuClosed().should('not.be.visible');
});
Cypress.Commands.add("verifyMenCategoryMenu", (mc1,mc2) => {
    const MenCategoriesList=[mc1,mc2]
    category.getMenCategoryClick().should('be.visible').click();
    category.getMenCategoryMenu().should('be.visible');
    category.getMenCategoryMenu().each( (item,index) => {
        cy.wrap(item).should('contain.text',MenCategoriesList[index])
    });
    category.getMenCategoryMenuClickToClose().click();
    //category.getMenCategoryMenuClosed().should('not.be.visible');
});
Cypress.Commands.add("verifyKidsCategoryMenu", (kc1,kc2) => {
    const KidCategoriesList=[kc1,kc2]
    category.getKidCategoryClick().should('be.visible').click();
    category.getKidCategoryMenu().should('be.visible');
    category.getKidCategoryMenu().each( (item,index) => {
        cy.wrap(item).should('contain.text',KidCategoriesList[index])
    });
    category.getKidCategoryMenuClickToClose().click();
    //category.getMenCategoryMenuClosed().should('not.be.visible');
});
Cypress.Commands.add("verifyWomenCategorySubMenuClick", (wc) => {
    category.getWomenCategoryClick().should('be.visible').click();
    category.getWomenCategoryMenu().contains(wc).click();
   
});
Cypress.Commands.add("verifyMenCategorySubMenuClick", (mc) => {
    category.getMenCategoryClick().should('be.visible').click();
    category.getMenCategoryMenu().contains(mc).click();   
});
Cypress.Commands.add("verifyKidCategorySubMenuClick", (kc) => {
    category.getKidCategoryClick().should('be.visible').click();
    category.getKidCategoryMenu().contains(kc).click();   
});


Cypress.Commands.add("addFirstItemtoCart", () => {
    scart.getAddFirstItemtoCartButton().click();
});

Cypress.Commands.add("verifyAddtoCartSuccessfulModal", () => {
    scart.getAddedtoCartModal().should('be.visible');
    scart.getAddedtoCartText().should('be.visible').should('have.text','Added!');
    scart.getContinueShopping().should('be.visible').should('be.enabled');
    scart.getAddedtoCartModalBody().should('contain.text','Your product has been added to cart');
    scart.getAddedtoCartModalBodyViewCart().should('contain.text','View Cart');
});
Cypress.Commands.add("clickonContinueShopping", () => {
    scart.getContinueShopping().click();
    scart.getAddedtoCartModal().should('not.be.visible');
});

Cypress.Commands.add("addSecondItemtoCart", () => {
    scart.getAddSecondItemtoCartButton().click();
});

Cypress.Commands.add("verifyViewCart", () => {
    scart.getAddedtoCartModalBodyViewCart().click();
    cy.verifyUserLocation("Cart Page");
    scart.getCartInfoTable().should('be.visible');
    scart.getCartBredCrumb().should('contain.text','Shopping Cart');
});

Cypress.Commands.add("verifyCheckoutButton", (boolean) => {
    switch(boolean) {
        case "true" :
            scart.getCartCheckoutButton().should('be.visible');
        break;
        case "false" :
            scart.getCartCheckoutButton().should('not.be.visible');
        break;
    }    
});

Cypress.Commands.add("verifyCartItemContents", () => {
    scart.getCartInfoTable().getTable().should(tableData => {
        expect(tableData).not.to.be.empty;        
    })
    cy.get("#cart_info_table")
                .find("tr")
                .then((rows) =>{
                    rows.toArray().forEach((element) => {
                        console.log("table rows"+element);
                        console.log("html text is: "+element.innerHTML);
                        if(rows.index(element)>0){
                            //console.log("asserting "+rows.index(element));
                            //const price=cy.get('.cart_price').eq(rows.index(element)).invoke('text');
                            //console.log(price);
                            cy.get('.cart_price').eq(rows.index(element)-1).should('be.visible');
                            cy.get('.cart_quantity').eq(rows.index(element)-1).should('contain.text',"1");
                            cy.get('.cart_total').eq(rows.index(element)-1).should('be.visible');
                            //cy.get('.cart_price').eq(rows.index(element)).should('contain.text',"500");
                            //cy.get('.cart_price').eq(rows.index(element)).should('match',/^Rs.\d\d\d/);  
                        }
                    });
                })
    //cy.verifyProduct1Cart();
    //cy.verifyProduct2Cart();
    /*Place Holder - working on this but was getting the error so moved to without loop way in order to submit the assignment.
    will get this fixed and update the PR.
cy.get("#cart_info_table")
                .find("tr")
                .then((rows) =>{
                    rows.toArray().forEach((element) => {
                        console.log("table rows"+element);
                        console.log("html text is: "+element.innerHTML);
                        if(rows.index(element)>0){
                            //console.log("asserting "+rows.index(element));
                            //const price=cy.get('.cart_price').eq(rows.index(element)).invoke('text');
                            //console.log(price);
                            //cy.get('.cart_price').eq(rows.index(element)).should('be.visible');
                            //cy.get('.cart_quantity').eq(rows.index(element)).should('contain.text',"1");
                            cy.get('.cart_total').eq(rows.index(element)).should('be.visible');
                            //cy.get('.cart_price').eq(rows.index(element)).should('contain.text',"500");
                            //cy.get('.cart_price').eq(rows.index(element)).should('match',/^Rs.\d\d\d/);  
                        }
                    });
                })
*/
});

Cypress.Commands.add("removeFirstItemFromCart", () => {
    scart.getRemoveCartFirstItem().click();
    scart.getRemoveCartFirstItem().should('not.exist');
    scart.getRemoveCartSecondItem().should('exist').should('be.visible'); 
});
Cypress.Commands.add("removeSecondItemFromCart", () => {
    scart.getRemoveCartSecondItem().click();
    scart.getRemoveCartFirstItem().should('not.exist');
    scart.getRemoveCartSecondItem().should('not.exist');
    scart.getCartInfoTable().getTable().should(tableData => {
        expect(tableData).to.be.empty;
    })
});
Cypress.Commands.add("verifyEmptyCart", () => {
    scart.getEmptyCart().should('be.visible').should('contain.text','Cart is empty!');
});
Cypress.Commands.add("verifyProduct1Cart", () => {
    //scart.getCartProduct1Image().should('exist').and('be.visible');
    //scart.getCartProduct1Description().should('exist').and('be.visible');
    //scart.getCartProduct1Price().should('exist').and('be.visible');
    //scart.getCartProduct1Quantity().should('exist').and('be.visible').and('contain.text','1');
    //scart.getCartProduct1Total().should('exist').and('be.visible');
    //cy.get('#product-1 > .cart_product').should('exist').and('be.visible');
    cy.get('#product-1 > .cart_description').should('exist').and('be.visible');
    cy.get('#product-1 > .cart_price').should('exist').and('be.visible');
    cy.get('#product-1 > .cart_quantity').should('exist').and('be.visible').and('contain.text','1');
    cy.get('#product-1 > .cart_total').should('exist').and('be.visible');
    
});
Cypress.Commands.add("verifyProduct2Cart", () => {
    //scart.getCartProduct2Image().should('exist').and('be.visible');
    //scart.getCartProduct2Description().should('exist').and('be.visible');
    //scart.getCartProduct2Price().should('exist').and('be.visible');
    //scart.getCartProduct2Quantity().should('exist').and('be.visible').and('contain.text','1');
    //scart.getCartProduct2Total().should('exist').and('be.visible');
    cy.get('#product-2 > .cart_description').should('exist').and('be.visible');
    cy.get('#product-2 > .cart_price').should('exist').and('be.visible');
    cy.get('#product-2 > .cart_quantity').should('exist').and('be.visible').and('contain.text','1');
    cy.get('#product-2 > .cart_total').should('exist').and('be.visible');
});





