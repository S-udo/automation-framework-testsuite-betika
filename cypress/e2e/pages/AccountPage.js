import BasePage from "./BasePage";
const routes = require('../config/routes');
import { ENDPOINT_PREFIX } from "../config/CONSTANTS";

class AccountPage extends BasePage{

    //refer to the elements in tests as AccountPage.elements.h1Heading()

    open() {
        return super.open(ENDPOINT_PREFIX + routes.ACCOUNT_ENDPOINT)
    }

}


export default new AccountPage();

