import cypress from "cypress";

describe("testing user flow on the website", () => {
  it("should search for pokemon and display their correct information & check dark/light mode", async () => {
    cy.visit("https://main--mellow-sorbet-887160.netlify.app/");

    cy.wait(1000).then(() => cy.get('[alt="theme switch button"]').click());

    cy.wait(1000).then(() =>
      cy
        .get('[placeholder="Search for a Pokemon..."]')
        .type("Pikachu")
        .get('button[type="submit"]')
        .click()
    );

    cy.wait(1000).then(() => cy.get('[alt="theme switch button"]').click());

    cy.wait(5000).then(() =>
      cy
        .get('[placeholder="Search for a Pokemon..."]')
        .clear()
        .type("Charizard")
        .get('button[type="submit"]')
        .click()
    );

    cy.wait(5000).then(() =>
      cy
        .get('[placeholder="Search for a Pokemon..."]')
        .clear()
        .type("Zangoose")
        .get('button[type="submit"]')
        .click()
    );
  });
});
