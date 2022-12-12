describe("api tests", () => {
  let baseUrl = "https://reqres.in";

  it("get - success", () => {
    let page = 2;
    cy.api(`${baseUrl}/api/users?page=${page}`).then((response) => {
      expect(response.body.page).to.eq(page);
    });
  });

  it("get - failure", () => {
    let page = 2;
    cy.api(`${baseUrl}/api/users?page=${page}`).then((response) => {
      expect(response.body.page).to.eq(page + 1);
    });
  });
  
});
