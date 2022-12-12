/// <reference types="cypress" />

import { method } from "cypress/types/bluebird";

let baseUrl: String = "https://reqres.in";

describe("api tests", () => {
  it("create - success", () => {
    cy.fixture("create.json").then((body) => {
        cy.api({
            url: `${baseUrl}/api/users`,
            body: body,
            method: 'Post'
        }).then((response) => {
          expect(response.status).to.eq(201);
        });
      });
  });
});
