describe("Form inputs", () => {
    it("can navigate to the site", () => {
      cy.visit("http://localhost:3000")
      cy.url().should("include", "localhost")
    })
  
    it("button should nav to next page", () => {
      cy.get(".orderNow")
        .click()
    })
  
    it("can type a username", () => {
      cy.get('input[name="name"]')
        .type("newUserName")
        .should("have.value", "newUserName")
    })
  
    it("can type an email", () => {
      cy.get('input[name="email"]')
        .type("email@emails.com")
        .should("have.value", "email@emails.com")
    })

    it("can type a phone #", () => {
        cy.get('input[name="phone"]')
          .type("1234567899")
          .should("have.value", "1234567899")
      })

    it("can submit user", () => {
      cy.get(".userSubmit")
        .click()
    })

    it("button should nav to next page", () => {
      cy.get(".pizzaButton")
        .click()
    })
})
  
  //   it("can select a role", () => {
  //     cy.get('select[name="role"]')
  //       .select("Full-Stack Developer")
  //       .should("have.value", "Full-Stack Developer")
  //   })

  //   it("can check tos", () => {
  //       cy.get('input[name="tos"]')
  //         .check()
  //     })
  
  //   it("submit button not disabled any more", () => {
  //     cy.get("button.submit")
  //       .should("not.be.disabled")
  //   })
  // })
  
  // describe("Form validation", () => {
  //   it("validates name correctly", () => {
  //     cy.visit("http://localhost:3000")
  //     cy.contains("Your name must be at least two characters long").should("not.exist")
  //     cy.get('input[name="name"]').type("a")
  //     cy.contains("Your name must be at least two characters long")
  //     cy.get('input[name="name"]').type("b")
  //     cy.contains("Your name must be at least two characters long").should("not.exist")
  //   })
  // })