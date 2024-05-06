class categories {

    getCategoryMenu() {
        return cy.get('#accordian');
    }
    getCategoryText() {
        return cy.get('.left-sidebar > :nth-child(1)');
    }
    getWomenCategoryClick() {
        //return cy.get(':nth-child(1) > .panel-heading > .panel-title');
        //return cy.get('#women');
        //return cy.get("div[id='accordian'] div:nth-child(1) div:nth-child(1) h4:nth-child(1)");
        return cy.get(':nth-child(1) > .panel-heading > .panel-title > a');
        //return cy.get(':nth-child(1) > .panel-heading >');
        //return cy.get("//a[normalize-space()='Women']");
    }
    getWomenCategoryMenu()
    {
        return cy.get("div[id='Women'] li");
    }
    getWomenCategoryMenuClickToClose(){
        return cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge');
    }
    getWomenCategoryMenuClosed()
    {
        return cy.get("div[id='Women'] div[class='panel-body']");
    }
    getMenCategoryClick() {
        return cy.get(':nth-child(2) > .panel-heading > .panel-title > a');
        //return cy.get(':nth-child(2) > .panel-heading >');
        //return cy.get("//a[normalize-space()='Women']");
    }
    getMenCategoryMenu()
    {
        return cy.get("div[id='Men'] li");
    }
    getMenCategoryMenuClickToClose(){
        return cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge');
    }
    getMenCategoryMenuClosed()
    {
        return cy.get("div[id='Men'] div[class='panel-body']");
    }
    getKidCategoryClick() {
        return cy.get(':nth-child(3) > .panel-heading > .panel-title > a');
        //return cy.get(':nth-child(2) > .panel-heading >');
        //return cy.get("//a[normalize-space()='Women']");
    }
    getKidCategoryMenu()
    {
        return cy.get("div[id='Kids'] li");
    }
    getKidCategoryMenuClickToClose(){
        return cy.get(':nth-child(3) > .panel-heading > .panel-title > a > .badge > .fa');
        
    }
    getKidCategoryMenuClosed()
    {
        return cy.get("div[id='Kids'] div[class='panel-body']");
    }
}
export default categories