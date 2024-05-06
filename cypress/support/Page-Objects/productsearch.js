class productsearch {

    getSearchProductText() {
        return cy.get('#search_product');
    }
    getSearchProductIcon() {
        return cy.get('#submit_search');
    }
    getClickonProducts() {
        return cy.get('.shop-menu > .nav > :nth-child(2) > a');
    }
    getSearchedProducts() {
        return cy.get('.title');
    }
    getProductSearchResults() {
        return cy.get('.features_items');
        //return cy.get('.col-sm-4');
    }
}
export default productsearch