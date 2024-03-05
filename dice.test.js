const dice = require("./dice");

const results = [1, 2, 3, 4, 5, 6];

test("test to see if the function dice returns a number in the range 1 - 6", () => {
    expect(results).toContain(dice());
});
