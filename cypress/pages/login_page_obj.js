class LoginPage {
		
		UsernameField = "//input[@placeholder='Enter username']";
		PasswordField = "//input[@placeholder='Enter password']";
		loginButton= "//button[text()='Login']";
		verifySALogin= "//h1[text()='Matters & Orders']";
	
	visit_url()
	{
	    cy.visit(Cypress.env('baseUrl'))
	}

	action_login(SAUsername, SAPassword) {
		cy.log('ACTION: Login as an SA')
			cy.xpath(this.UsernameField)
			.should('be.visible')
			.click()
			.type(SAUsername)
            .should('be.visible')
			cy.xpath(this.PasswordField)
			.should('be.visible')
			.click()
			.type(SAPassword)
            cy.xpath(this.loginButton)
			.click()

		return this
	}

	verify_LoginPage() {
		cy.log('Verify : Login as SA')
		cy.xpath(this.verifySALogin)
		.should('include.text', 'Matters & Orders')

		return this
	}
}

export default LoginPage