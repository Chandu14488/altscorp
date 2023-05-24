class CreateNotice{
    
		NoticeTab= "//div[2]/nav/a[1]";
        NewNoticeButton= "//button[text()='New Notice']";
        SubjectField= "//input[@placeholder='Maintenance']"
        StartTime= "//span[text()='Start Time']/../div[1]/div[1]";
        HourDropdown= "//span[text()='Start Time']/../div[1]/div[2]/div/label[1]/div[1]/button"
        SelectHour= "//label/div/ul/li[1]";
        MinutesDropdown= "//div[2]/div/label[2]/div[1]/button";
        Selectminutes= "//label/div/ul/li[1]";
        MaradianDropdown= "//div[2]/div/label[3]/div[1]/button";
        SelectMaradian= "//label/div/ul/li[1]";
        SelectStartDate= "//tr[4]/td[5]/button";
        CrossIconDatePicker= "//div[1]/div[3]/div[1]/div[2]/div[1]/div[2]/*[name()='svg'][1]";
        EndTime= "//span[text()='End Time']/../div[1]/div[1]";
        HourDropdownET= "//span[text()='End Time']/../div[1]/div[2]/div/label[1]/div[1]/button";
        selectEndDate= "//tr[4]/td[7]/button";
        MessageField= "//textarea[@placeholder='Input your message']";
        SendButton= "//button[text()='Send']"
        SearchnoticeField= "//input[@placeholder='Search subject/message here']";
        CrossIconDatePicker2= "//div[1]/div[3]/div[1]/div[3]/div[1]/div[2]/*[name()='svg'][1]";

	action_CreateNotice(noticetitle){
		cy.log('Action: Create notice')
        cy.xpath(this.NoticeTab)
        .should('be.visible')
        .click()
        cy.xpath(this.NewNoticeButton)
        .should('be.visible')
        .click()
        cy.xpath(this.SubjectField)
        .should('be.visible')
        .type(noticetitle)
        cy.xpath(this.StartTime)
        .should('be.visible')
        .click()
        cy.xpath(this.HourDropdown)
        .should('be.visible')
        .click()
        cy.xpath(this.SelectHour)
        .should('be.visible')
        .click()
        cy.xpath(this.MinutesDropdown)
        .should('be.visible')
        .click()
        cy.xpath(this.Selectminutes)
        .should('be.visible')
        .click()
        cy.xpath(this.MaradianDropdown)
        .should('be.visible')
        .click()
        cy.xpath(this.SelectMaradian)
        .should('be.visible')
        .click()
        cy.xpath(this.SelectStartDate)
        .should('be.visible')
        .click()
        cy.xpath(this.CrossIconDatePicker)
        .should('be.visible')
        .click()
        cy.xpath(this.EndTime)
        .should('be.visible')
        .click()
        cy.xpath(this.HourDropdownET)
        .should('be.visible')
        .click()
        cy.xpath(this.SelectHour)
        .should('be.visible')
        .click()
        cy.xpath(this.MinutesDropdown)
        .should('be.visible')
        .click()
        cy.xpath(this.Selectminutes)
        .should('be.visible')
        .click()
        cy.xpath(this.MaradianDropdown)
        .should('be.visible')
        .click()
        cy.xpath(this.SelectMaradian)
        .should('be.visible')
        .click()
        cy.xpath(this.selectEndDate)
        .should('be.visible')
        .click()
        cy.xpath(this.CrossIconDatePicker2)
        .should('be.visible')
        .click()
        cy.xpath(this.MessageField)
        .should('be.visible')
        .type('This is test message')
        cy.xpath(this.SendButton)
        .should('be.visible')
        .click()
        cy.xpath(this.SearchnoticeField)
        .should('be.visible')
        .type(noticetitle)
			
		return this
	}

	verify_CreateNotice(noticetitle){
        cy.log('Verify : Created Notice')
		cy.contains(noticetitle)
        .should('include.text', noticetitle)
			
        return this
	}
}

export default CreateNotice