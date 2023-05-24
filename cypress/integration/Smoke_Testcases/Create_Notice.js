import LoginPage from '../../pages/login_page_obj';
import CreateNotice from '../../pages/Create_Notice_obj';


describe('Create Notice',{
    viewportHeight: 900,
    viewportWidth: 1500,
  
}, function(){

    it('CreateNotice', function(){
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const noticetitle = `Notice ${id}`

    const login = new LoginPage()
    const createNewNotice= new CreateNotice()
    
    //Opne the application url
    login.visit_url()

    //Login into the application
    login.action_login(Cypress.env('SAUsername'), Cypress.env('SAPassword'))

    //Verify the login page
    login.verify_LoginPage()

    //Create new notice
    createNewNotice.action_CreateNotice(noticetitle)

    //Verify newly crated notice
    createNewNotice.verify_CreateNotice(noticetitle)
    })  
})