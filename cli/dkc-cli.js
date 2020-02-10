#!/usr/bin/env node
/*
 *   Tamnil Saito Junior <tamnil@gmail.com> 2020
*
*
*
*/

const { execSync, exec, spawn } = require("child_process");
const execPrommised = util.promisify(require("child_process").exec);

const {execSync,spawn} = require('child_process');

const argvIn = process.argv
const evaltest = eval
const onlyArgsIn = argvIn.slice(2)

     const execPrommised('docker ps').then((a,b) => {

console.log(a,b)
     }

     )


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



console.log(onlyArgsIn)
