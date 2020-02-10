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

     const regex = {
     dk : /dk$|dk-cli.js$/,
    dkc : /dkc$|dkc-cli.js$/
     }

const commandType = cmd =>
    cmd.match(regex.dkc)
        ? { type: "dkc", cmd: "docker-compose" }
        : { type: "dk", cmd: "docker" };

const onlyArgsIn = argvIn.slice(2),
    onlyArgsOut = onlyArgsIn.join(" "),
    command = commandType(absoluteFileName),
    overrides = Object.keys(dict[command.type]);

const formatConsoleOut = type => data => console.log(data.toString()),
    finishProcess = type => code => process.exit(code);

const spawnCommand = command => {
    const sp = spawn(command, [], { shell: true });

    //set stdio:
    sp.stdout.on("data", formatConsoleOut("stdout"));
    sp.stderr.on("data", formatConsoleOut("stderr"));

    // process inputs
    process.stdin.on("data", data => sp.stdin.write(data));
    // finish proccesses
    ["disconnect", "error", "exit", "data"].map(el => {
        sp.on(el, finishProcess(el));
    });
};


const cli = () => {
    let operation = overrides.find(key => key === mainArg),
        overrideCmd = dict[command.type][mainArg],
        rawCmd = `${command.cmd} ${onlyArgsOut}`;

    spawnCommand(operation ? overrideCmd.out : rawCmd);
};

module.exports = {
    cli
};
