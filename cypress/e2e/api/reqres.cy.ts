/// <reference types="cypress" />


describe("api tests", () => {
  let baseUrl: String = "https://reqres.in";
  let page: Number = 2;

  it("get - success", () => {
    cy.api(`${baseUrl}/api/users?page=${page}`).then((response) => {
      expect(response.body.page).to.eq(page);
    });
  });

  it("get - failure", () => {
    cy.api(`${baseUrl}/api/users?page=${page}`).then((response) => {
      expect(response.body.page).to.eq(3);
    });
  });
  
});
