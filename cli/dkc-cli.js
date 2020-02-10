#!/usr/bin/env node
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
const evaltest = eval;
const onlyArgsIn = argvIn.slice(2);

const onlyArgsOut = onlyArgsIn.join("");


console.log(argvIn);
execPrommised("docker ps").then(res => {
    console.log(res);
});

// let mySpawn = spawn('docker',['ps'])
//
//
// mySpawn.stdout.on( 'data', data => {
//     console.log( `stdout: ${data}` );
// } );
//
// mySpawn.stderr.on( 'data', data => {
//     console.log( `stderr: ${data}` );
// } );
//
// mySpawn.on( 'close', code => {
//     console.log( `child process exited with code ${code}` );
// } );

console.log(onlyArgsIn);
