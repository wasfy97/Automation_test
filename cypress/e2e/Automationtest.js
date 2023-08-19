/// <reference types="Cypress" />
let randomNumber = Cypress._.random(0, 100);
let Email=`hadiwasfy${randomNumber}@gmail.com` 
let LoginName=`Wasfi${randomNumber}`
Cypress.env('email', Email);
Cypress.env('password', '15897@W');
Cypress.env('Loginname', LoginName);

describe('Automation Test Store Website Sign up & Sign in  ', () => {
    it('Create a new user', () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");
    cy.get('#accountFrm > fieldset > .btn').click();
    cy.get('#AccountFrm_firstname').type("Wasfi");
    cy.get('#AccountFrm_lastname').type("Hadi");
    cy.get('#AccountFrm_email').type(Cypress.env('email'));
    cy.get('#AccountFrm_telephone').type("00962790857292");
    cy.get('#AccountFrm_fax').type("00962790857292");
    cy.get('#AccountFrm_company').type("ANW Company");
    cy.get('#AccountFrm_address_1').type("Jordan");
    cy.get('#AccountFrm_city').type("Irbid");
    cy.get('#AccountFrm_postcode').type("21110");
    cy.get('#AccountFrm_country_id').select("Jordan");
    cy.get('#AccountFrm_zone_id').select("Irbid");
    cy.get('#AccountFrm_loginname').type(Cypress.env('Loginname'));
    cy.get('#AccountFrm_password').type(Cypress.env('password'));
    cy.get('#AccountFrm_confirm').type(Cypress.env('password'));
    cy.get('#AccountFrm_newsletter0').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('.col-md-2 > .btn').click();
});
it('Log in With Created Data', () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");
    cy.get('#loginFrm_loginname').type(Cypress.env('Loginname'));
    cy.get('#loginFrm_password').type(Cypress.env('password'));
    cy.get('#loginFrm > fieldset > .btn').click();
    
});

});