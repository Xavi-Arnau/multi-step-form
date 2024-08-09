describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should display the title", () => {
    cy.get("h1").contains("Personal info");
  });

  it("Fill the forms", () => {
    //1
    cy.get(":nth-child(1) > .step").should("be.visible");
    cy.get("#name").type("Pepito");
    cy.get("#email").type("test@test.es");
    cy.get("#phone").type("658789563");
    cy.get("button.bg-marineBlue").click();

    //2
    cy.get(":nth-child(2) > .step").should("be.visible");
    cy.get(".p-8 > .flex-col > :nth-child(3)").click();
    cy.get(".slider").click();
    cy.get("button.bg-marineBlue").click();

    //3
    cy.get(":nth-child(3) > .step").should("be.visible");
    cy.get(":nth-child(1) > :nth-child(1) > .w-6").click();
    cy.get(":nth-child(2) > :nth-child(1) > .w-6").click();
    cy.get(":nth-child(3) > :nth-child(1) > .w-6").click();
    cy.get("button.bg-marineBlue").click();

    //change
    cy.get(":nth-child(1) > :nth-child(1) > .text-sm").click();
    cy.get("button.bg-marineBlue").click();
    cy.get("button.bg-marineBlue").click();

    //confirm
    cy.get(":nth-child(4) > .step").should("be.visible");
    cy.get("button.bg-marineBlue").click();
  });
});
