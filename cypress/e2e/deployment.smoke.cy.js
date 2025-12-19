describe("Deployment Smoke Test", () => {
  it("Application should start successfully", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Dashboard").should("exist");
  });
});
