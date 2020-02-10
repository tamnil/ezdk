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

    // spawn beg
    const mySpawn = command => {
        const sp = spawn(command, [], { shell: true });

        sp.stdout.on("data", data => {
            console.log(data.toString());
        });
        sp.stderr.on("data", data => {
            console.log(data.toString());
        });
        process.stdin.on("data", data => {
            console.log(data.toString());

            sp.stdin.write(data);
        });
        sp.on("disconnect", function(code) {
            console.log("child process exited with code disconnect" + code);
            process.exit(code);
        });
        sp.on("error", function(code) {
            console.log("erro: " + code, "ls", ls.stdout.toString());
            process.exit(code);
        });

        // doesn't fire
        sp.on("exit", function(code) {
            console.log("child process exited with code exit " + code);
            process.exit(code);
        });

        // doesn't fire
        sp.on("data", function(code) {
            console.log("data direct" + code);
            process.exit(code);
        });
    // spawn end
    };
    let operation = overrides.find(key => key === mainArg);
    if (operation) {
        console.log("override");
        let retCommand = dict[command.type][mainArg];
        mySpawn(retCommand.out);
    // .then(res => {
    //     console.log("res", res);
    //     if (res.stderr) {
    //         console.log(res.stderr.toString());
    //     } else {
    //         console.log(res.stdout.toString());
    //     }
    // })
    // .catch(err => {
    //     console.log("error", err.stderr);
    // });
    } else {
        console.log("native");
        mySpawn(`${command.cmd} ${onlyArgsOut}`)
     // console.log('fasdf')
        // mySpawn('docker image ')
            // .then(res => {
            //     if (res.stderr) {
            //         console.log(res.stderr.toString());
            //     } else {
            //         console.log(res.stdout.toString());
            //     }
            // })
            // .catch(err => {
            //     console.log(err.stderr.toString());
            // });
    }
};

module.exports = {
    cli
};
