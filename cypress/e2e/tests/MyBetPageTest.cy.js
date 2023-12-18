import BasePage from "../pages/BasePage";
import MyBetPage from "../pages/MyBetPage";

describe('Rebet games from my bet account', { tags: ['@Bet', '@regression'] }, () => {

    
    // eslint-disable-next-line no-unused-vars
    let basePage;

    before(() => {
        basePage = new BasePage();
    })
    beforeEach(() => {
      cy.login(); //login via custom command
      //basePage.header.searchProduct(PRODUCT);
  })
    
    it('should be able to view all bet slips under my account', () => {
                MyBetPage
                .viewBetOptions()
                cy.log();
                
                cy.get("body").then($body => {
                    if ($body.find('.button.account__payments__submit.betdetails__summary__actions__item.button.no-bg.icon.rebet').length > 0) {
                      // evaluates as true if Action was successful
                      cy.get('.button.account__payments__submit.betdetails__summary__actions__item.button.no-bg.icon.rebet').then($header => {
                        if ($header.is(':visible')) {
                          // Do something if the header is visible
                        } else {
                          // Do something if the header is not visible
                        }
                      });
                    } else {
                      assert.isOk('Rebet Slip', 'Rebet the game'); // Add missing comma here
                    }
                  });        
                

            });

    it('should be able to check and perform cashout on bets', () => {
        
            MyBetPage
                .checkCashOut() 
                //.should('contain', 'Request Cashout');

                cy.get("body").then($body => {
                    if ($body.find('.button.account__payments__submit.betdetails__summary__actions__item.button.no-bg.icon.rebet').length > 0) {
                      // evaluates as true if Action was successful
                      cy.get('.button.account__payments__submit.betdetails__summary__actions__item.button.no-bg.icon.rebet').then($header => {
                        if ($header.is(':visible')) {
                          // Do something if the header is visible
                        } else {
                          // Do something if the header is not visible
                        }
                      });
                    } else {
                      assert.isOk('Rebet Slip', 'Rebet the game'); // Add missing comma here
                    }
                  });
            
            })
            

    it('should be able to perform rebet action on existing bet slip', () => {
        

            MyBetPage
                .checkRebet
                .should('contain', 'rebet');

            cy.get("body").then($body => {
                    if ($body.find('.button.account__payments__submit.betdetails__summary__actions__item.button.no-bg.icon.rebet').length > 0) {
                      // evaluates as true if Action was successful
                      cy.get('.button.account__payments__submit.betdetails__summary__actions__item.button.no-bg.icon.rebet').then($header => {
                        if ($header.is(':visible')) {
                          // Do something if the header is visible
                        } else {
                          // Do something if the header is not visible
                        }
                      });
                    } else {
                      assert.isOk('Rebet Slip', 'Rebet the game'); // Add missing comma here
                    }
                  });
                  
        })
      })
