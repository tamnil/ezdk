const util = require("util");
// const {formatter} = require('../libs')
const {  exec, spawn } = require("child_process");
const csvParsePromise = util.promisify(require("csv-parse"));
// const execPrommised = util.promisify(require("child_process").exec);

const formatTabular = text =>
    csvParsePromise(text.toString("UTF-8").replace(/( {3,})/g, ","), {
        columns: true,
        relax_column_count: true,
        skip_empty_lines: true,
        delimiter: ",",
        skip_lines_with_empty_values: true
    });
// docker ps parser


const psAll = command =>
    new Promise((resolve, reject) =>
        exec("docker ps -a", async (err, stdout, stderr) => {
            let b = await formatTabular(stdout);
            resolve(b);
        })
    );
const ps = command =>
    new Promise((resolve, reject) =>
        exec("docker ps ", async (err, stdout, stderr) => {
            let b = await formatTabular(stdout);
            resolve(b);
        })
    );

const psSizes = command =>
    new Promise((resolve, reject) =>
        exec("docker ps -s", async (err, stdout, stderr) => {
            let b = await formatTabular(stdout);
            resolve(b);
        })
    );

const psAllSizes = command =>
    new Promise((resolve, reject) =>
        exec("docker ps -sa", async (err, stdout, stderr) => {
            let b = await formatTabular(stdout);
            resolve(b);
        })
    );
module.exports = {
    ps,
    psAll,
    psSizes,
    psAllSizes
};
