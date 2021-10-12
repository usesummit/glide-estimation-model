import main from "./column";

test("We can get an echo", async () => {
  const response = await main.run({ type: "string", value: "foo" });
  expect(response).toBe("echo foo");
});
