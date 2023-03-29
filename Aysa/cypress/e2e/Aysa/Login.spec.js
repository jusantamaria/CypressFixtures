describe("Login with Microsoft account", () =>{
    beforeEach('Navigate to Aysa website', () => {
        cy.visit('https://aysa-risk-client-test.azurewebsites.net/login')
        cy.visit('https://aysa-risk-client-test.azurewebsites.net/login')
        //Click on Microsoft button
        cy.get('.ant-btn').click() 
    })

    it('Navigate to new origin and login with correct credentials', () =>{
        cy.origin('login.microsoftonline.com', ()=>{
            cy.visit('login.microsoftonline.com/65ec4aba-da82-4fa0-8e17-9680ae012c28/oauth2/v2.0/authorize?client_id=89a4813d-0706-4165-8d5a-eaf99bcd5268&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Faysa-risk-client-test.azurewebsites.net%2Flogin%2F&client-request-id=34cc2b67-3aa4-488b-8c46-d8ef3566af0b&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.28.1&client_info=1&code_challenge=eI7lUCNFzOfwDr_JY5JlHGWJQ2HU5OOXJi-oLeEKZ9Y&code_challenge_method=S256&nonce=5b6031ba-3ad9-4dbc-b0c5-bd9fa74772e3&state=eyJpZCI6IjM2MzY5Y2Q2LTQ2OGEtNDc0Yy04ZDFkLTIzOTQ4YjU0NDE2MiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&sso_reload=true')
                cy.get('#i0116').click().type('ejemplo@gmail.com')
                cy.get('#idSIButton9').click()
                //cy.wait(2000)
                cy.get('#i0118').type('ContraseñaRandom')
        })
    })
})