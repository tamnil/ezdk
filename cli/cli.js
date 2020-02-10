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

const argvIn = process.argv,
    absoluteFileName = argvIn[1],
    mainArg = argvIn[2];

const regexDk = /dk$|dk-cli.js$/,
    regexDkc = /dkc$|dkc-cli.js$/;

const onlyArgsIn = argvIn.slice(2),
    onlyArgsOut = onlyArgsIn.join(" ");

const commandType = command => {
    const retVal = false;
    if (command.match(regexDk)) {
        return { type: "dk", cmd: "docker" };
    } else if (command.match(regexDkc)) {
        return { type: "dkc", cmd: "docker-compose" };
    }
    return { type: "dk", cmd: "docker" };
};

const cli = () => {
    let command = commandType(absoluteFileName);
    let overrides = Object.keys(dict[command.type]);
    const formatConsoleOut = data => console.log(data.toString());

    // spawn beg
    const mySpawn = command => {
        const sp = spawn(command, [], { shell: true });

        sp.stdout.on("data", formatConsoleOut);
        sp.stderr.on("data", formatConsoleOut);
        process.stdin.on("data", data => {
            sp.stdin.write(data);
        });
        sp.on("disconnect", function(code) {
            process.exit(code);
        });
        sp.on("error", function(code) {
            process.exit(code);
        });

        sp.on("exit", function(code) {
            process.exit(code);
        });

        sp.on("data", function(code) {
            process.exit(code);
        });
    // spawn end
    };
    let operation = overrides.find(key => key === mainArg);
    if (operation) {
        console.log("override");
        let retCommand = dict[command.type][mainArg];
        mySpawn(retCommand.out);
    } else {
        console.log("native");
        mySpawn(`${command.cmd} ${onlyArgsOut}`);
    }
};

module.exports = {
    cli
};
