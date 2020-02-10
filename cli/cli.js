// #!/usr/bin/env node
/*
 *   Tamnil Saito Junior <tamnil@gmail.com> 2020
 *
 *
 *
 */
const util = require("util");
const { execSync, exec, spawn } = require("child_process");
const execPrommised = util.promisify(require("child_process").exec);
const dict = require("../dict");

const argvIn = process.argv;
const absoluteFileName = argvIn[1];
const mainArg = argvIn[2];

const regexDk = /dk$|dk-cli.js$/,
    regexDkc = /dkc$|dkc-cli.js$/;

// const programName = argvIn[1].
//
const commandType = command => {
    const retVal = false;
    if (command.match(regexDk)) {
        return { type: "dk", cmd: "docker" };
    } else if (command.match(regexDkc)) {
        return { type: "dkc", cmd: "docker-compose" };
    }
    return { type: "dk", cmd: "docker" };
};

const onlyArgsIn = argvIn.slice(2),
    onlyArgsOut = onlyArgsIn.join(" ");

const cli = () => {
    let command = commandType(absoluteFileName);
    let overrides = Object.keys(dict[command.type]);

    let operation = overrides.find(key => key === mainArg);
    if (operation) {
        let retCommand = dict[command][mainArg];
        execPrommised(retCommand.out)
            .then(res => {
                if (res.stderr) {
                    console.log(res.stderr);
                } else {
                    console.log(res.stdout);
                }
            })
            .catch(err => {
                console.log("error", err);
            });
    } else {
        execPrommised(`${command.cmd} ${onlyArgsOut}`)
            .then(res => {
                if (res.stderr) {
                    console.log(res.stderr, "res");
                } else {
                    console.log(res.stdout);
                }
            })
            .catch(err => {
                console.log(err.stderr, "err");
            });
    }
};

module.exports = {
    cli
};