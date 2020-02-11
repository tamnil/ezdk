const ps = require("../index.js");
const { exec } = require("child_process");
afterAll(async done => {
    let b = await exec(
        "cd docker-mock && docker-compose down",
        async (err, stdout, stderr) => {
            // console.log(err);
        }
    );

    // wait some time to mount docker-compose image
    setTimeout(() => {
        done();
    }, 500);
});
beforeAll(async done => {
    // console.log(a)
    let b = await exec(
        "cd docker-mock && docker-compose up -d",
        async (err, stdout, stderr) => {}
    );
    // wait some time to mount docker-compose image
    setTimeout(() => {
        done();
    }, 1000);

    // done();
});
describe("utils test", () => {
    it("welcome to utils", async () => {
        const res = await ps.psAll();

        console.log(res[0]);
        expect(true).toBe(true);
    });
});
