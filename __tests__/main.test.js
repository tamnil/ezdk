const util = require("util");
const { exec } = require("child_process");

const execPromised = util.promisify(exec);
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
        (err, stdout, stderr) => {}
    );
    // wait some time to mount docker-compose image
    setTimeout(() => {
        done();
    }, 1000);
});
describe("utils test", () => {
    it("welcome to utils", async () => {
        let b = await execPromised("ls");
        console.log(b);
        expect(true).toBe(true);
    });
});
