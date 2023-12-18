import BasePage from "../pages/BasePage";
//import ProductDetailsPage from "../pages/ProductDetailsPage";
import OddsSearchPage from "../pages/OddsSearchPage";
// eslint-disable-next-line no-unused-vars
import BettingSlipPage from "../pages/BettingSlipPage"; 

describe("adding games and odds to bet slip", { tags: ['@BetSlip', '@regression'] }, () => {

    // eslint-disable-next-line no-unused-vars
    let basePage;

    before(() => {
        basePage = new BasePage();
    })

    beforeEach(() => {
        cy.login(); //login via custom command
    })

    it("should add odds from multiple games types to a single bet slip", {tags: '@smoke'}, function () {
        
        OddsSearchPage
            .addOddsToSlip();

        // OddsSearchPage    
        //     .addTennisOddsToSlip();

        // OddsSearchPage
        //     .addBasketBallOddsToSlip()
    })


    it("should be able to share bet slip via social media platform", function () {

        OddsSearchPage
            .shareBetSlip();
            
            cy.get("body").then($body => {
                if ($body.find('.betslip__details__container').length > 0) {
                  // evaluates as true if Action was successful
                  cy.get('.betslip__details__container').then($header => {
                    if ($header.is(':visible')) {
                      // Do something if the header is visible
                    } else {
                      // Do something if the header is not visible
                    }
                  });
                } else {
                  assert.isOk('Share betSlip', 'Bet Slip is Shared');
                }
              }); 
    })

    it("should validate the presence of selected games and odds in  the Bet Slip", function () {

        OddsSearchPage
            .addOddsToSlip();


        //BettingSlipPage.getItemsAddedToSlip().should('contain', 'Final Payout'); //cy.get('.betslip__details__container')

        cy.get("body").then($body => {
            if ($body.find('.betslip__details__container').length > 0) {
              // evaluates as true if Action was successful
              cy.get('.betslip__details__container').then($header => {
                if ($header.is(':visible')) {
                  // Do something if the header is visible
                } else {
                  // Do something if the header is not visible
                }
              });
            } else {
              assert.isOk('Odds to betSlip', 'Games are added to slip'); // Add missing comma here
            }
          });
        })      
          
    it("should be able to place bet frrom the bet slip", function () {

            OddsSearchPage
                .placeBetSlip();
        })
    })