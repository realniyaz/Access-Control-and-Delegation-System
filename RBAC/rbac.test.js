const { checkPermission } = require("./accessControlMiddleware");

describe("RBAC Tests", () => {
  it("Admin should have DELETE permission", () => {
    expect(checkPermission("Admin", "DELETE")).toBe(true);
  });

  it("User should not have DELETE permission", () => {
    expect(checkPermission("User", "DELETE")).toBe(false);
  });
});
