class cart {

    getAddFirstItemtoCartButton() {
        //return cy.get('[id^=data-][id$=');
        //cy.get('[id^=local-][id$=-remote]')
        return cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn');
    }
    getAddSecondItemtoCartButton() {
        //return cy.get('[id^=data-][id$=');
        //cy.get('[id^=local-][id$=-remote]')
        return cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn');
    }
    getAddedtoCartModal() {
        return cy.get('.modal-content');
    }
    getContinueShopping() {
        return cy.get('.modal-footer > .btn');
    }
    getAddedtoCartText() {
        return cy.get('.modal-title');
    }
    getAddedtoCartModalBody() {
        return cy.get('.modal-body');
    }
    getAddedtoCartModalBodyViewCart() {
        //return cy.get('.modal-body > :nth-child(2)');
        return cy.get('u');
    }
    getCartInfoTable()
    {
        return cy.get('#cart_info_table');
    }
    getCartCheckoutButton(){
        return cy.get('a.btn.btn-default.check_out');
    }
    getCartBredCrumb(){
        return cy.get('.breadcrumb');
    }
    getRemoveCartFirstItem(){
        return cy.get('#product-1 > .cart_delete >');
    }
    getRemoveCartSecondItem(){
        return cy.get('#product-2 > .cart_delete >');
    }
    getEmptyCart(){
        return cy.get('#empty_cart');
    }
    getCartProduct1Image(){
        cy.get('#product-1 > .cart_product');
    }
    getCartProduct1Description(){
        cy.get('#product-1 > .cart_description');
    }
    getCartProduct1Price(){
        cy.get('#product-1 > .cart_price');
    }
    getCartProduct1Quantity(){
        cy.get('#product-1 > .cart_quantity');
    }
    getCartProduct1Total(){
        cy.get('#product-1 > .cart_total');
    }
    getCartProduct2Image(){
        cy.get('#product-2 > .cart_product');
    }
    getCartProduct2Description(){
        cy.get('#product-2 > .cart_description');
    }
    getCartProduct2Price(){
        cy.get('#product-2 > .cart_price');
    }
    getCartProduct2Quantity(){
        cy.get('#product-2 > .cart_quantity');
    }
    getCartProduct2Total(){
        cy.get('#product-2 > .cart_total');
    }

}
export default cart