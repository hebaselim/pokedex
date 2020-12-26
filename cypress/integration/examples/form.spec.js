describe("The home page loads", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
 
  it("displays list of item on home page", () => {
    cy.get("li").should("have.length", 1118);
  });
});
