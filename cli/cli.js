// #!/usr/bin/env node
/*
 *   Tamnil Saito Junior <tamnil@gmail.com> 2020
 *
 *
 *
 */
const util = require("util"),
    { execSync, exec, spawn } = require("child_process"),
    execPrommised = util.promisify(require("child_process").exec),
    dict = require("../dict");

const argvIn = process.argv,
    absoluteFileName = argvIn[1],
    mainArg = argvIn[2];

const regexDk = /dk$|dk-cli.js$/,
    regexDkc = /dkc$|dkc-cli.js$/;

const onlyArgsIn = argvIn.slice(2),
    onlyArgsOut = onlyArgsIn.join(" ");

const commandType = command => {
    if (command.match(regexDk)) {
        return { type: "dk", cmd: "docker" };
    } else if (command.match(regexDkc)) {
        return { type: "dkc", cmd: "docker-compose" };
    }
    return { type: "dk", cmd: "docker" };
};

const formatConsoleOut = type => data => console.log(data.toString()),
    finishProcess = type => code => process.exit(code);

const mySpawn = command => {
    const sp = spawn(command, [], { shell: true });

    sp.stdout.on("data", formatConsoleOut("stdout"));
    sp.stderr.on("data", formatConsoleOut("stderr"));
    process.stdin.on("data", data => sp.stdin.write(data));
    sp.on("disconnect", finishProcess("diconnect"));
    sp.on("error", finishProcess("error"));
    sp.on("exit", finishProcess("exit"));
    sp.on("data", finishProcess("data"));

    // spawn end
};
const cli = () => {
    let command = commandType(absoluteFileName);
    let overrides = Object.keys(dict[command.type]);

    // spawn beg
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
