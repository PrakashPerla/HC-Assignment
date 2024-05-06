import {WomenCategories, MenCategories, KidCategories} from '../fixtures/shopping.json'

describe('Product Categories Tests', () => {
    context('Product Categories and its Sub Categories Tests', () => {
        beforeEach(() => {
          cy.clearAllCookies();
          cy.visit('/');     
        }); 
        
        it('Verify Category Menu Open Tests', () => { 
            //const WomenCategoriesList=[WomenCategories.Cat1,WomenCategories.Cat2,Wo]
            cy.verifyCategoryMenu();
            cy.verifyWomenCategoryMenu(WomenCategories.Cat1,WomenCategories.Cat2,WomenCategories.Cat3);
            cy.verifyMenCategoryMenu(MenCategories.Cat1,MenCategories.Cat2);
            cy.verifyKidsCategoryMenu(KidCategories.Cat1,KidCategories.Cat2);
        });
        it('Verify Women Category Sub Menu Open and Category Results Tests', () => { 
            cy.verifyWomenCategorySubMenuClick(WomenCategories.Cat1);
            cy.verifyProductSearchResults("Women",WomenCategories.Cat1);
        });
        it('Verify Men Category Sub Menu Open and Category Results Tests', () => { 
            cy.verifyMenCategorySubMenuClick(MenCategories.Cat2);
            cy.verifyProductSearchResults("Men",MenCategories.Cat2);
        });
        it('Verify Kids Category Sub Menu Open and Category Results Tests', () => { 
            cy.verifyKidCategorySubMenuClick(KidCategories.Cat2);
            cy.verifyProductSearchResults("Kids",KidCategories.Cat2);
        });

    });
  });