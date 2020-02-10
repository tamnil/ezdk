const Utils = require("../index");
describe("utils test", () => {
    it("welcome to utils", async () => {
        console.log(await Utils.psAll());
        console.log(await Utils.ps());
        console.log(await Utils.psAllSizes());
        console.log(await Utils.psSizes());

        expect(true).toBe(true);
    });
    it("welcome to utils", () => {
        expect(true).toBe(true);
    });
    it("welcome to utils", () => {
        expect(true).toBe(true);
    });
});
