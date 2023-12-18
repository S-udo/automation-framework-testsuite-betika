export default class HeaderComponent {

    //get searchInput() { return cy.get('#search input[name="search"]'); }
    //get searchBtn() { return cy.get('#search button'); }
    get myAccountDropdown() { return cy.get('[href="/en-ke/profile"] > .nav__item__label'); }
    //get shoppingCart() { return cy.get('#top-links a[title="Shopping Cart"]'); }
    get logoutLink() { return cy.get('.account__section__support > button.button').contains('Sign Out'); }
    //get wishListMenu() { return cy.get('#top-links #wishlist-total'); }


    // searchProduct(product) {
    //     this.searchInput.clear()
    //     this.searchInput.type(product);
    //     this.searchBtn.click();
    // }

    performLogout() {
        this.myAccountDropdown.click({force:true});
        this.logoutLink.click({force:true});
    }

    // openShoppingCart() {
    //     this.shoppingCart.click()
    // }

    // openWishlist() {
    //     this.wishListMenu.click();
    // }

}
