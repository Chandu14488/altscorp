import LoginPage from '../../pages/login_page_obj';

describe('Login',{
    viewportHeight: 900,
    viewportWidth: 1500,
  
}, function(){

    it('Login', function(){

    const login =new LoginPage()
    
    login.visit_url()
    login.action_login(Cypress.env('SAUsername'), Cypress.env('SAPassword'))
    login.verify_LoginPage()
    })  
})