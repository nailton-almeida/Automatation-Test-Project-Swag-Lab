import BasePage from "./basePage"

class LoginPage extends BasePage {

    getUsernameElement() { return '[data-test="username"]'; }

    getPasswordElement() { return '[data-test="password"]'; }

    getLoginButtonElement() { return '[data-test="login-button"]' }

    getLoginErrorMessageElement() { return '[data-test="error"]' }

    enterUsername(username) {
        this.typeInElement(this.getUsernameElement(), username)
    }

    enterPassword(password) {
        this.typeInElement(this.getPasswordElement(), password)
    }

    clickSubmitLoginButton() {
        this.clickElement(this.getLoginButtonElement())
    }

    loginErrorMessage() {
        this.checkElementVisible(this.getLoginErrorMessageElement())
    }

}

export default new LoginPage()